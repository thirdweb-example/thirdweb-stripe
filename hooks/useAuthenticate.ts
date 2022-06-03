import { useAddress } from "@thirdweb-dev/react";
import { AuthorizedPayload } from "@thirdweb-dev/sdk/dist/src/schema";

export default function useAuthenticate() {
  const address = useAddress();

  async function authenticate(): Promise<AuthorizedPayload> {
    const res = await fetch("/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject: address }),
    })
    const data = await res.json() as AuthorizedPayload;
    window.localStorage.setItem("thirdweb:authentication", JSON.stringify(data));

    return data;
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