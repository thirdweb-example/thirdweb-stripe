import { UpdateableNetwork } from "../core/interfaces/contract";
import { Split as SplitContract } from "contracts";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { ContractInterceptor, IStorage, NetworkOrSignerOrProvider, TransactionResult } from "../core";
import { ContractMetadata } from "../core/classes/contract-metadata";
import { ContractEncoder } from "../core/classes/contract-encoder";
import { SDKOptions } from "../schema/sdk-options";
import { CurrencyValue } from "../types/currency";
import { BigNumber } from "ethers";
import { SplitRecipient } from "../types/SplitRecipient";
import { GasCostEstimator } from "../core/classes";
import { ContractEvents } from "../core/classes/contract-events";
import { ContractAnalytics } from "../core/classes/contract-analytics";
/**
 * Create custom royalty splits to distribute funds.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("rinkeby");
 * const contract = sdk.getSplit("{{contract_address}}");
 * ```
 *
 * @public
 */
export declare class Split implements UpdateableNetwork {
    static contractType: "split";
    static contractAbi: any;
    /**
     * @internal
     */
    static schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">>, {
                address: string;
                sharesBps: number;
            }[], {
                address: string;
                sharesBps: number;
            }[] | undefined>;
        }>, import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">>, {
                address: string;
                sharesBps: number;
            }[], {
                address: string;
                sharesBps: number;
            }[] | undefined>;
        }>>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
            trusted_forwarders: string[];
            recipients: {
                address: string;
                sharesBps: number;
            }[];
        }, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            recipients?: {
                address: string;
                sharesBps: number;
            }[] | undefined;
            name: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            recipients: import("zod").ZodArray<import("zod").ZodObject<import("zod").extendShape<{
                address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                sharesBps: import("zod").ZodNumber;
            }, {
                address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                sharesBps: import("zod").ZodNumber;
            }>, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">;
        }>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../core").Json, import("zod").ZodTypeDef, import("../core").Json>>, {
            [x: string]: import("../core").Json;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            name: string;
            recipients: {
                address: string;
                sharesBps: number;
            }[];
        }, {
            [x: string]: import("../core").Json;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            name: string;
            recipients: {
                address: string;
                sharesBps: number;
            }[];
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodEffects<import("zod").ZodString, string, string>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">>, {
                address: string;
                sharesBps: number;
            }[], {
                address: string;
                sharesBps: number;
            }[] | undefined>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
            recipients: {
                address: string;
                sharesBps: number;
            }[];
        }, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            recipients?: {
                address: string;
                sharesBps: number;
            }[] | undefined;
            name: string;
        }>;
    };
    private contractWrapper;
    private storage;
    metadata: ContractMetadata<SplitContract, typeof Split.schema>;
    encoder: ContractEncoder<SplitContract>;
    estimator: GasCostEstimator<SplitContract>;
    events: ContractEvents<SplitContract>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<SplitContract>;
    /**
     * @internal
     */
    analytics: ContractAnalytics<SplitContract>;
    constructor(network: NetworkOrSignerOrProvider, address: string, storage: IStorage, options?: SDKOptions, contractWrapper?: ContractWrapper<SplitContract>);
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get Recipients of this splits contract
     *
     * @remarks Get the data about the shares of every split recipient on the contract
     *
     * @example
     * ```javascript
     * const recipients = await contract.getAllRecipients();
     * console.log(recipients);
     * ```
     */
    getAllRecipients(): Promise<SplitRecipient[]>;
    /**
     * Returns all the recipients and their balances in the native currency.
     *
     * @returns A map of recipient addresses to their balances in the native currency.
     */
    balanceOfAllRecipients(): Promise<{
        [key: string]: BigNumber;
    }>;
    /**
     * Returns all the recipients and their balances in a non-native currency.
     *
     * @param tokenAddress - The address of the currency to check the balances in.
     * @returns A map of recipient addresses to their balances in the specified currency.
     */
    balanceOfTokenAllRecipients(tokenAddress: string): Promise<{
        [key: string]: {
            symbol: string;
            value: BigNumber;
            name: string;
            decimals: number;
            displayValue: string;
        };
    }>;
    /**
     * Get Funds owed to a particular wallet
     *
     * @remarks Get the amount of funds in the native currency held by the contract that is owed to a specific recipient.
     *
     * @example
     * ```javascript
     * // The address to check the funds of
     * const address = "{{wallet_address}}";
     * const funds = await contract.balanceOf(address);
     * console.log(funds);
     * ```
     */
    balanceOf(address: string): Promise<BigNumber>;
    /**
     * Get non-native Token Funds owed to a particular wallet
     *
     * @remarks Get the amount of funds in the non-native tokens held by the contract that is owed to a specific recipient.
     *
     * @example
     * ```javascript
     * // The address to check the funds of
     * const address = "{{wallet_address}}";
     * // The address of the currency to check the contracts funds of
     * const tokenAddress = "0x..."
     * const funds = await contract.balanceOfToken(address, tokenAddress);
     * console.log(funds);
     * ```
     */
    balanceOfToken(walletAddress: string, tokenAddress: string): Promise<CurrencyValue>;
    /**
     * Get the % of funds owed to a given address
     * @param address - the address to check percentage of
     */
    getRecipientSplitPercentage(address: string): Promise<SplitRecipient>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Withdraw Funds
     * @remarks Triggers a transfer to account of the amount of native currency they are owed.
     *
     * @example
     * ```javascript
     * // the wallet address that wants to withdraw their funds
     * const walletAddress = "{{wallet_address}}"
     * await contract.withdraw(walletAddress);
     * ```
     *
     * @param walletAddress - The address to distributes the amount to
     */
    withdraw(walletAddress: string): Promise<TransactionResult>;
    /**
     * Triggers a transfer to account of the amount of a given currency they are owed.
     *
     * @param walletAddress - The address to distributes the amount to
     * @param tokenAddress - The address of the currency contract to distribute funds
     */
    withdrawToken(walletAddress: string, tokenAddress: string): Promise<TransactionResult>;
    /**
     * Distribute Funds
     *
     * @remarks Distribute funds held by the contract in the native currency to all recipients.
     *
     * @example
     * ```javascript
     * await contract.distribute();
     * ```
     */
    distribute(): Promise<TransactionResult>;
    /**
     * Distribute Funds
     *
     * @remarks Distribute funds held by the contract in the native currency to all recipients.
     *
     * @example
     * ```javascript
     * // The address of the currency to distribute funds
     * const tokenAddress = "0x..."
     * await contract.distributeToken(tokenAddress);
     * ```
     *
     * @param tokenAddress - The address of the currency contract to distribute funds
     */
    distributeToken(tokenAddress: string): Promise<TransactionResult>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    private _pendingPayment;
}
