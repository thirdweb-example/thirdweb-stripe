import type { NextPage } from "next";

import {
  ConnectWallet,
  useAddress,
  useDisconnect,
  useLogin,
  useLogout,
  useMetamask,
  useUser,
} from "@thirdweb-dev/react";
import { useState } from "react";
import useStripe from "../hooks/useStripe";

const Home: NextPage = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  const { checkout, subscription } = useStripe();
  const login = useLogin();
  const logout = useLogout();
  const { user } = useUser();
  const [subscriptionMessage, setSubscriptionMessage] = useState("N/A");
  const [authMessage, setAuthMessage] = useState("N/A");

  const checkSubscription = async () => {
    const message = await subscription();
    console.log(message);
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
      console.log(error);
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
