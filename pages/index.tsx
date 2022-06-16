import type { NextPage } from 'next';

import useAuthenticate from '../hooks/useAuthenticate';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { useState } from "react";


const Home: NextPage = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  const connectWithMetamask = useMetamask();
  const { login, authenticate, logout } = useAuthenticate();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMessage, setAuthMessage] = useState("N/A");

  const signInWithEthereum = async () => {
    setAuthMessage("N/A");
    await connectWithMetamask();
    await login();
    setIsLoggedIn(true);
  }

  const authenticatedRequest = async () => {
    const res = await authenticate();
    if (res.ok) {
      const address = await res.json();
      setAuthMessage(`Succesfully authenticated to backend with address ${address}`);
    } else {
      setAuthMessage(`Failed to authenticate, backend responded with ${res.status} (${res.statusText})`);
    }
  }

  const logoutWallet = async () => {
    await logout();
    setIsLoggedIn(false);
    setAuthMessage("N/A");
  }

  return (
    <div>
      <h2>Wallet Connection - Frontend</h2>
      {address ? (
        <button onClick={disconnect}>Disconnect Wallet</button>
        ) : (
        <button onClick={connectWithMetamask}>Connect Wallet</button>
      )}
      <p>Connected Address: {address || "N/A"}</p>

      <h2>Authentication - Backend</h2>
      
      {address ? (
        <>
          {isLoggedIn ? (
            <button onClick={logoutWallet}>Logout</button>
          ) : (
            <button onClick={signInWithEthereum}>Login with Wallet</button>
          )}
          
          <button onClick={authenticatedRequest}>Authenticate</button>

          <p>Logged In Address: {isLoggedIn ? address : "N/A"}</p>
          <p>Authentication: {authMessage}</p>
        </>
      ) : (
        <>Connect your wallet to access authentication.</>
      )}

    </div>
  );
};

export default Home;
