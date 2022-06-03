import { ContractWrapper } from "./contract-wrapper";
import { DropERC20, TokenERC20 } from "contracts";
import { BigNumber, BigNumberish } from "ethers";
import { IStorage } from "../interfaces";
import { NetworkOrSignerOrProvider, TransactionResult } from "../types";
import { UpdateableNetwork } from "../interfaces/contract";
import { SDKOptions } from "../../schema/sdk-options";
import { Amount, Currency, CurrencyValue } from "../../types/currency";
import { TokenMintInput } from "../../schema/tokens/token";
import { BaseERC20 } from "../../types/eips";
import { Erc20Mintable } from "./erc-20-mintable";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * Standard ERC20 Token functions
 * @remarks Basic functionality for a ERC20 contract that handles all unit transformation for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.transfer(walletAddress, amount);
 * ```
 * @public
 */
export declare class Erc20<T extends TokenERC20 | DropERC20 | BaseERC20 = BaseERC20> implements UpdateableNetwork, DetectableFeature {
    featureName: "ERC20";
    protected contractWrapper: ContractWrapper<T>;
    protected storage: IStorage;
    protected options: SDKOptions;
    /**
     * Mint tokens
     */
    mint: Erc20Mintable | undefined;
    constructor(contractWrapper: ContractWrapper<T>, storage: IStorage, options?: SDKOptions);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    /**
     * @internal
     */
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get the token Metadata (name, symbol, etc...)
     *
     * @example
     * ```javascript
     * const token = await contract.token.get();
     * ```
     * @returns The token metadata
     */
    get(): Promise<Currency>;
    /**
     * Get Token Balance for the currently connected wallet
     *
     * @remarks Get a wallets token balance.
     *
     * @example
     * ```javascript
     * const balance = await contract.token.balance();
     * ```
     *
     * @returns The balance of a specific wallet.
     */
    balance(): Promise<CurrencyValue>;
    /**
     * Get Token Balance
     *
     * @remarks Get a wallets token balance.
     *
     * @example
     * ```javascript
     * // Address of the wallet to check token balance
     * const walletAddress = "{{wallet_address}}";
     * const balance = await contract.token.balanceOf(walletAddress);
     * ```
     *
     * @returns The balance of a specific wallet.
     */
    balanceOf(address: string): Promise<CurrencyValue>;
    /**
     * The total supply for this Token
     * @remarks Get how much supply has been minted
     * @example
     * ```javascript
     * const balance = await contract.token.totalSupply();
     * ```
     */
    totalSupply(): Promise<CurrencyValue>;
    /**
     * Get Token Allowance
     *
     * @remarks Get the allowance of a 'spender' wallet over the connected wallet's funds - the allowance of a different address for a token is the amount of tokens that the `spender` wallet is allowed to spend on behalf of the connected wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to check token allowance
     * const spenderAddress = "0x...";
     * const allowance = await contract.token.allowance(spenderAddress);
     * ```
     *
     * @returns The allowance of one wallet over anothers funds.
     */
    allowance(spender: string): Promise<CurrencyValue>;
    /**
     * Get Token Allowance
     *
     * @remarks Get the allowance of one wallet over another wallet's funds - the allowance of a different address for a token is the amount of tokens that the wallet is allowed to spend on behalf of the specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet who owns the funds
     * const owner = "{{wallet_address}}";
     * // Address of the wallet to check token allowance
     * const spender = "0x...";
     * const allowance = await contract.token.allowanceOf(owner, spender);
     * ```
     *
     * @returns The allowance of one wallet over anothers funds.
     */
    allowanceOf(owner: string, spender: string): Promise<CurrencyValue>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Transfer Tokens
     *
     * @remarks Transfer tokens from the connected wallet to another wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to send the tokens to
     * const toAddress = "0x...";
     * // The amount of tokens you want to send
     * const amount = 0.1;
     * await contract.token.transfer(toAddress, amount);
     * ```
     */
    transfer(to: string, amount: Amount): Promise<TransactionResult>;
    /**
     * Transfer Tokens From Address
     *
     * @remarks Transfer tokens from one wallet to another
     *
     * @example
     * ```javascript
     * // Address of the wallet sending the tokens
     * const fromAddress = "{{wallet_address}}";
     * // Address of the wallet you want to send the tokens to
     * const toAddress = "0x...";
     * // The number of tokens you want to send
     * const amount = 1.2
     * // Note that the connected wallet must have approval to transfer the tokens of the fromAddress
     * await contract.token.transferFrom(fromAddress, toAddress, amount);
     * ```
     */
    transferFrom(from: string, to: string, amount: Amount): Promise<TransactionResult>;
    /**
     * Allows the specified `spender` wallet to transfer the given `amount` of tokens to another wallet
     *
     * @example
     * ```javascript
     * // Address of the wallet to allow transfers from
     * const spenderAddress = "0x...";
     * // The number of tokens to give as allowance
     * const amount = 100
     * await contract.token.setAllowance(spenderAddress, amount);
     * ```
     */
    setAllowance(spender: string, amount: Amount): Promise<TransactionResult>;
    /**
     * Transfer Tokens To Many Wallets
     *
     * @remarks Mint tokens from the connected wallet to many wallets
     *
     * @example
     * ```javascript
     * // Data of the tokens you want to mint
     * const data = [
     *   {
     *     toAddress: "{{wallet_address}}", // Address to mint tokens to
     *     amount: 100, // How many tokens to mint to specified address
     *   },
     *  {
     *    toAddress: "0x...",
     *    amount: 100,
     *  }
     * ]
     *
     * await contract.token.transferBatch(data);
     * ```
     */
    transferBatch(args: TokenMintInput[]): Promise<void>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * @internal
     */
    protected getValue(value: BigNumberish): Promise<CurrencyValue>;
    /**
     * returns the wei amount from a token amount
     * @internal
     * @param amount
     */
    normalizeAmount(amount: Amount): Promise<BigNumber>;
    private detectErc20Mintable;
}
