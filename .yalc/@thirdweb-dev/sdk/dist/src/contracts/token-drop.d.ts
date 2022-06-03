import { DropERC20 } from "contracts";
import { IStorage, NetworkOrSignerOrProvider, TransactionResult } from "../core";
import { SDKOptions } from "../schema/sdk-options";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { BytesLike } from "ethers";
import { GasCostEstimator, ContractEncoder, ContractInterceptor, ContractPlatformFee, ContractPrimarySale, ContractMetadata, ContractRoles, DropClaimConditions, Erc20 } from "../core/classes";
import { Amount, CurrencyValue } from "../types";
import { ContractAnalytics } from "../core/classes/contract-analytics";
/**
 * Create a Drop contract for a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("rinkeby");
 * const contract = sdk.getTokenDrop("{{contract_address}}");
 * ```
 *
 */
export declare class TokenDrop extends Erc20<DropERC20> {
    static contractType: "token-drop";
    static contractRoles: readonly ["admin", "transfer"];
    static contractAbi: any;
    /**
     * @internal
     */
    static schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            primary_sale_recipient: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            merkle: Record<string, string>;
            primary_sale_recipient: string;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
            primary_sale_recipient: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../core").Json, import("zod").ZodTypeDef, import("../core").Json>>, {
            [x: string]: import("../core").Json;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            merkle: Record<string, string>;
        }, {
            [x: string]: import("../core").Json;
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            merkle: Record<string, string>;
        }, {
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            name: string;
        }>;
    };
    metadata: ContractMetadata<DropERC20, typeof TokenDrop.schema>;
    roles: ContractRoles<DropERC20, typeof TokenDrop.contractRoles[number]>;
    encoder: ContractEncoder<DropERC20>;
    estimator: GasCostEstimator<DropERC20>;
    sales: ContractPrimarySale<DropERC20>;
    platformFees: ContractPlatformFee<DropERC20>;
    /**
     * @internal
     */
    analytics: ContractAnalytics<DropERC20>;
    /**
     * Configure claim conditions
     * @remarks Define who can claim Tokens, when and how many.
     * @example
     * ```javascript
     * const presaleStartTime = new Date();
     * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const claimConditions = [
     *   {
     *     startTime: presaleStartTime, // start the presale now
     *     maxQuantity: 3117.42, // limit how many tokens are released in this presale
     *     price: 0.001, // presale price per token
     *     snapshot: ['0x...', '0x...'], // limit claiming to only certain addresses
     *   },
     *   {
     *     startTime: publicSaleStartTime, // 24h after presale, start public sale
     *     price: 0.008, // public sale price per token
     *   }
     * ]);
     * await contract.claimConditions.set(claimConditions);
     * ```
     */
    claimConditions: DropClaimConditions<DropERC20>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<DropERC20>;
    constructor(network: NetworkOrSignerOrProvider, address: string, storage: IStorage, options?: SDKOptions, contractWrapper?: ContractWrapper<DropERC20>);
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get your wallet voting power for the current checkpoints
     *
     * @returns the amount of voting power in tokens
     */
    getVoteBalance(): Promise<CurrencyValue>;
    getVoteBalanceOf(account: string): Promise<CurrencyValue>;
    /**
     * Get your voting delegatee address
     *
     * @returns the address of your vote delegatee
     */
    getDelegation(): Promise<string>;
    /**
     * Get a specific address voting delegatee address
     *
     * @returns the address of your vote delegatee
     */
    getDelegationOf(account: string): Promise<string>;
    /**
     * Get whether users can transfer tokens from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Claim a certain amount of tokens
     * @remarks See {@link TokenDrop.claimTo}
     * @param amount - the amount of tokens to mint
     * @param proofs - Optional claim proofs
     */
    claim(amount: Amount, proofs?: BytesLike[]): Promise<TransactionResult>;
    /**
     * Claim a certain amount of tokens to a specific Wallet
     *
     * @remarks Let the specified wallet claim Tokens.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 42.69; // how many tokens you want to claim
     *
     * const tx = await contract.claimTo(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param amount - Quantity of the tokens you want to claim
     * @param proofs - Optional Array of proofs
     *
     * @returns - The transaction receipt
     */
    claimTo(destinationAddress: string, amount: Amount, proofs?: BytesLike[]): Promise<TransactionResult>;
    /**
     * Lets you delegate your voting power to the delegateeAddress
     *
     * @param delegateeAddress - delegatee wallet address
     * @alpha
     */
    delegateTo(delegateeAddress: string): Promise<TransactionResult>;
    /**
     * Burn Tokens
     *
     * @remarks Burn tokens held by the connected wallet
     *
     * @example
     * ```javascript
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.burn(amount);
     * ```
     */
    burn(amount: Amount): Promise<TransactionResult>;
    /**
     * Burn Tokens
     *
     * @remarks Burn tokens held by the specified wallet
     *
     * @example
     * ```javascript
     * // Address of the wallet sending the tokens
     * const holderAddress = "{{wallet_address}}";
     *
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.burnFrom(holderAddress, amount);
     * ```
     */
    burnFrom(holder: string, amount: Amount): Promise<TransactionResult>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * Returns proofs and the overrides required for the transaction.
     *
     * @returns - `overrides` and `proofs` as an object.
     */
    private prepareClaim;
}
