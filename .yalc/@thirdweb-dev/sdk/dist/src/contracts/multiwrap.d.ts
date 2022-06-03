import { IStorage, NetworkOrSignerOrProvider, TransactionResult, TransactionResultWithId } from "../core";
import { Erc721 } from "../core/classes/erc-721";
import { ContractMetadata } from "../core/classes/contract-metadata";
import { ContractRoles } from "../core/classes/contract-roles";
import { ContractRoyalty } from "../core/classes/contract-royalty";
import { ContractEvents } from "../core/classes/contract-events";
import { ContractEncoder } from "../core/classes/contract-encoder";
import { GasCostEstimator } from "../core/classes/gas-cost-estimator";
import { NFTMetadataOrUri, NFTMetadataOwner, SDKOptions } from "../schema";
import { Multiwrap as MultiwrapContract } from "contracts";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { TokensToWrap, WrappedTokens } from "../types/multiwrap";
import { BigNumberish } from "ethers";
import { QueryAllParams } from "../types";
/**
 * Multiwrap lets you wrap any number of ERC20, ERC721 and ERC1155 tokens you own into a single wrapped token bundle.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("rinkeby");
 * const contract = sdk.getMultiwrap("{{contract_address}}");
 * ```
 *
 * @beta
 */
export declare class Multiwrap extends Erc721<MultiwrapContract> {
    static contractType: "multiwrap";
    static contractRoles: readonly ["transfer", "minter", "unwrap", "asset"];
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
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, {
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../core").Json, import("zod").ZodTypeDef, import("../core").Json>>, {
            [x: string]: import("../core").Json;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            [x: string]: import("../core").Json;
            symbol?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodTypeAny, {
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
    };
    encoder: ContractEncoder<MultiwrapContract>;
    estimator: GasCostEstimator<MultiwrapContract>;
    metadata: ContractMetadata<MultiwrapContract, typeof Multiwrap.schema>;
    events: ContractEvents<MultiwrapContract>;
    roles: ContractRoles<MultiwrapContract, typeof Multiwrap.contractRoles[number]>;
    /**
     * Configure royalties
     * @remarks Set your own royalties for the entire contract or per token
     * @example
     * ```javascript
     * // royalties on the whole contract
     * contract.royalties.setDefaultRoyaltyInfo({
     *   seller_fee_basis_points: 100, // 1%
     *   fee_recipient: "0x..."
     * });
     * // override royalty for a particular token
     * contract.royalties.setTokenRoyaltyInfo(tokenId, {
     *   seller_fee_basis_points: 500, // 5%
     *   fee_recipient: "0x..."
     * });
     * ```
     */
    royalties: ContractRoyalty<MultiwrapContract, typeof Multiwrap.schema>;
    private _query;
    constructor(network: NetworkOrSignerOrProvider, address: string, storage: IStorage, options?: SDKOptions, contractWrapper?: ContractWrapper<MultiwrapContract>);
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get All Wrapped Token Bundles
     *
     * @remarks Get all the data associated with every token bundle in this contract.
     *
     * By default, returns the first 100 NFTs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const wrappedBundles = await contract.getAll();
     * console.log(wrappedBundles);
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     */
    getAll(queryParams?: QueryAllParams): Promise<NFTMetadataOwner[]>;
    /**
     * Get the contents of a wrapped token bundle
     * @example
     * ```javascript
     * const contents = await contract.getWrappedContents(wrappedTokenId);
     * console.log(contents.erc20Tokens);
     * console.log(contents.erc721Tokens);
     * console.log(contents.erc1155Tokens);
     * ```
     * @param wrappedTokenId - the id of the wrapped token bundle
     */
    getWrappedContents(wrappedTokenId: BigNumberish): Promise<WrappedTokens>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Wrap any number of ERC20/ERC721/ERC1155 tokens into a single wrapped token
     * @example
     * ```javascript
     * const tx = await contract.wrap({
     *   erc20Tokens: [{
     *     contractAddress: "0x...",
     *     quantity: "0.8"
     *   }],
     *   erc721Tokens: [{
     *     contractAddress: "0x...",
     *     tokenId: "0"
     *   }],
     *   erc1155Tokens: [{
     *     contractAddress: "0x...",
     *     tokenId: "1",
     *     quantity: "2"
     *   }]
     * }, {
     *     name: "Wrapped bundle",
     *     description: "This is a wrapped bundle of tokens and NFTs",
     *     image: "ipfs://...",
     * });
     * const receipt = tx.receipt(); // the transaction receipt
     * const wrappedTokenId = tx.id; // the id of the wrapped token bundle
     * ```
     * @param contents - the contents to wrap
     * @param wrappedTokenMetadata - metadata to represent the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the wrapped token bundle to
     */
    wrap(contents: TokensToWrap, wrappedTokenMetadata: NFTMetadataOrUri, recipientAddress?: string): Promise<TransactionResultWithId<NFTMetadataOwner>>;
    /**
     * Unwrap a wrapped token bundle, and retrieve its contents
     * @example
     * ```javascript
     * await contract.unwrap(wrappedTokenId);
     * ```
     * @param wrappedTokenId - the id of the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the unwrapped tokens to
     */
    unwrap(wrappedTokenId: BigNumberish, recipientAddress?: string): Promise<TransactionResult>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    private toTokenStructList;
}
