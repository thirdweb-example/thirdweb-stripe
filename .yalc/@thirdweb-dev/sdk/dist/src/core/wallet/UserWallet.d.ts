import { NetworkOrSignerOrProvider, TransactionResult } from "../types";
import { SDKOptions } from "../../schema";
import { Amount, CurrencyValue } from "../../types";
import { providers } from "ethers";
/**
 * Connect and Interact with a user wallet
 * @example
 * ```javascript
 * const balance = await sdk.wallet.balance();
 * ```
 * @public
 */
export declare class UserWallet {
    private connection;
    private options;
    constructor(network: NetworkOrSignerOrProvider, options: SDKOptions);
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    /**
     * Transfer native or ERC20 tokens from this wallet to another wallet
     * @example
     * ```javascript
     *  // transfer 0.8 ETH
     * await sdk.wallet.transfer("0x...", 0.8);
     *  // transfer 0.8 tokens of `tokenContractAddress`
     * await sdk.wallet.transfer("0x...", 0.8, tokenContractAddress);
     * ```
     * @param to - the account to send funds to
     * @param amount - the amount in tokens
     * @param currencyAddress - Optional - ERC20 contract address of the token to transfer
     */
    transfer(to: string, amount: Amount, currencyAddress?: string): Promise<TransactionResult>;
    /**
     * Fetch the native or ERC20 token balance of this wallet
     * @example
     * ```javascript
     * // native currency balance
     * const balance = await sdk.wallet.balance();
     * // ERC20 token balance
     * const erc20balance = await sdk.wallet.balance(tokenContractAddress);
     *
     * ```
     */
    balance(currencyAddress?: string): Promise<CurrencyValue>;
    /**
     * Get the currently connected address
     * @example
     * ```javascript
     * const address = await sdk.wallet.getAddress();
     * ```
     */
    getAddress(): Promise<string>;
    /**
     * Sign any message with the connected wallet private key
     * @param message - the message to sign
     */
    sign(message: string): Promise<string>;
    /**
     * Send a raw transaction to the blockchain from the connected wallet
     * @param transactionRequest
     */
    sendRawTransaction(transactionRequest: providers.TransactionRequest): Promise<TransactionResult>;
    /** ***********************
     * PRIVATE FUNCTIONS
     * ***********************/
    private connectedWallet;
    private createErc20;
}
