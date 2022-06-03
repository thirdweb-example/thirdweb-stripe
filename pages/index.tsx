import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import type { NextPage } from 'next';
import useAuthenticate from '../hooks/useAuthenticate';

const Home: NextPage = () => {
  const address = useAddress();
  const { authenticate, verify } = useAuthenticate();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <div>
      {address ? (
        <>
          <button onClick={authenticate}>Sign-in with ethereum</button>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Address: {address}</p>
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}
    </div>
  );
};

export default Home;
