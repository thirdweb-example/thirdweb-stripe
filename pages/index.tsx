import type { NextPage } from "next";

import { loadStripe } from "@stripe/stripe-js";
import {
  ConnectWallet,
  useAddress,
  useDisconnect,
  useLogin,
  useLogout,
  useUser,
} from "@thirdweb-dev/react";
import { useState } from "react";

const Home: NextPage = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();
  const [authMessage, setAuthMessage] = useState("N/A");
  const [subscriptionMessage, setSubscriptionMessage] = useState("N/A");

  const checkout = async () => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
    });
    const session = await res.json();
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) {
      throw new Error("Stripe publishable key not set");
    }

    const stripe = await loadStripe(publishableKey as string, {
      apiVersion: "2020-08-27",
    });
    await stripe?.redirectToCheckout({
      sessionId: session.id,
    });
  };

  const checkSubscription = async () => {
    const res = await fetch("/api/stripe/subscription", {
      method: "POST",
    });
    const message = await res.json();
    setSubscriptionMessage(message);
  };

  const authenticatedRequest = async () => {
    try {
      const response = await fetch("/api/validate", {
        method: "POST",
      });

      const data = await response.json();
      setAuthMessage(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Wallet Connection - Frontend</h2>
      {address ? (
        <button onClick={disconnect}>Disconnect Wallet</button>
      ) : (
        <ConnectWallet />
      )}
      <p>Connected Address: {address || "N/A"}</p>

      <h2>Authentication - Backend</h2>

      {address ? (
        <>
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={() => login()}>Login with Wallet</button>
          )}

          <button onClick={authenticatedRequest}>Authenticate</button>

          <p>Logged In Address: {user ? user.address : "N/A"}</p>
          <p>Authentication: {authMessage}</p>
        </>
      ) : (
        <>Connect your wallet to access authentication.</>
      )}

      <h2>Payments - Stripe</h2>

      <button onClick={checkout}>Subscribe</button>
      <button onClick={checkSubscription}>Check Subscription</button>
      <p>Subscription: {subscriptionMessage}</p>
    </div>
  );
};

export default Home;
