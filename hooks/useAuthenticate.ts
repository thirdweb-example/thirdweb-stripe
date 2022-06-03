import { useAddress, useSDK } from "@thirdweb-dev/react";
import { AuthenticatedPayload, AuthorizedPayload } from "@thirdweb-dev/sdk/dist/src/schema";

export default function useAuthenticate() {
  const address = useAddress();
  const sdk = useSDK();

  async function authenticate(): Promise<AuthenticatedPayload> {
    const res = await fetch("/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject: address }),
    })
    const data = await res.json() as AuthorizedPayload;
    const authenticatedPayload = await sdk?.auth.sign(data);
    window.localStorage.setItem("thirdweb:authentication", JSON.stringify(authenticatedPayload));

    return authenticatedPayload as AuthenticatedPayload;
  }

  async function verify(): Promise<boolean> {
    const payload = JSON.parse(
      window.localStorage.getItem("thirdweb:authentication") as string
    );
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload }),
    })
    const data = await res.json();
    return data as boolean;
  }

  return {
    authenticate,
    verify,
  }
}