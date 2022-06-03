import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';
import { AuthorizedPayload } from '@thirdweb-dev/sdk/dist/src/schema';
import type { NextPage } from 'next';
import { useState } from 'react';
import useAuthenticate from '../hooks/useAuthenticate';

const Home: NextPage = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const { authenticate, verify } = useAuthenticate();

  const [payload, setPayload] = useState<AuthorizedPayload|undefined>(undefined);
  const [isValid, setIsValid] = useState<boolean|undefined>(undefined);

  const signInWithEthereum = async () => {
    const payload = await authenticate();
    setPayload(payload)
  }

  const verifyAuthentication = async () => {
    const isValid = await verify();
    setIsValid(isValid);
  }

  return (
    <div>
      {address ? (
        <>
          <button onClick={signInWithEthereum}>Sign-in with ethereum</button>
          <button onClick={verifyAuthentication}>Verify authentication</button>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
          <p>Address: {address}</p>
          {payload && (
            <>
              <strong>Payload:</strong>
              <p>This is the signed payload used for authentication</p>
              <pre>
                {JSON.stringify(payload, null, 4)}
              </pre>
            </>
          )}
          {isValid !== undefined && (
            <>
              <strong>Valid Authentication:</strong>
              <p>This indicates whether the server accepted this payload for authentication</p>
              <p>{isValid.toString()}</p>
            </>
          )}
        </>
      ) : (
        <button onClick={connectWithMetamask}>Connect with Metamask</button>
      )}
    </div>
  );
};

export default Home;
