import { useSDK } from "@thirdweb-dev/react";

export default function useAuthenticate() {
  const domain = process.env.NEXT_PUBLIC_AUTH_DOMAIN
  if (!domain) {
    throw new Error("Missing NEXT_PUBLIC_AUTH_DOMAIN environment variable");
  }

  const sdk = useSDK();

  async function login() {
    const payload = await sdk?.auth.login(domain as string);
    await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload }),
    })
  }

  async function authenticate() {
    const res = await fetch("/api/auth/authenticate", {
      method: "POST"
    })
    return res
  }

  async function logout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    })
  }

  return { 
    login,
    authenticate,
    logout
  }
}