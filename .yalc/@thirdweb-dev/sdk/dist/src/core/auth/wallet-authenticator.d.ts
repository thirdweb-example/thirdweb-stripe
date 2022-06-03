import { SDKOptions } from "../../schema";
import { AuthenticatedPayload, AuthenticationPayloadInput, AuthorizedPayload } from "../../schema/auth";
import { RPCConnectionHandler } from "../classes/rpc-connection-handler";
import { NetworkOrSignerOrProvider } from "../types";
/**
 * Wallet Authenticator
 * @remarks Enables sign-in with ethereum based authentication.
 * @example
 * ```javascript
 * // We choose an application name on the server side
 * const application = "my-app-name"
 *
 * // On the server side, we can generate a payload for a wallet requesting to authenticate
 * const payloadWithSignature = await sdk.auth.generate({
 *   application,
 *   subject: "0x...",
 * })
 *
 * // Then on the client side, we can sign this payload with the wallet requesting to authenticate
 * const authenticatedPayload = await sdk.auth.sign(payloadWithSignature)
 *
 * // Finally, on the server side, we can verify if this payload is valid
 * const isValid = await sdk.auth.verify(application, authenticatedPayload)
 * ```
 * @public
 */
export declare class WalletAuthenticator extends RPCConnectionHandler {
    constructor(network: NetworkOrSignerOrProvider, options: SDKOptions);
    generate(payload: AuthenticationPayloadInput): Promise<AuthorizedPayload>;
    sign(authorizedPayload: AuthorizedPayload): Promise<AuthenticatedPayload>;
    verify(application: string, authenticatedPayload: AuthenticatedPayload): Promise<boolean>;
    private requireSigner;
    private generateMessage;
    private recoverAddress;
}
