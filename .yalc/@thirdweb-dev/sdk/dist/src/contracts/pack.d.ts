import { UpdateableNetwork } from "../core/interfaces/contract";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { ContractInterceptor, IStorage, NetworkOrSignerOrProvider, TransactionResult, TransactionResultWithId } from "../core";
import { ContractMetadata } from "../core/classes/contract-metadata";
import { ContractEncoder } from "../core/classes/contract-encoder";
import { SDKOptions } from "../schema/sdk-options";
import { Pack as PackContract } from "contracts";
import { ContractRoles } from "../core/classes/contract-roles";
import { NFTMetadata } from "../schema/tokens/common";
import { BigNumber, BigNumberish, BytesLike } from "ethers";
import { IPackBatchArgs, IPackCreateArgs, PackMetadata, PackMetadataWithBalance, PackNFTMetadata } from "../types/packs";
import { CurrencyValue } from "../types/currency";
import { ContractRoyalty } from "../core/classes/contract-royalty";
import { GasCostEstimator } from "../core/classes";
import { ContractEvents } from "../core/classes/contract-events";
import { ContractAnalytics } from "../core/classes/contract-analytics";
/**
 * Create lootboxes of NFTs with rarity based open mechanics.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("rinkeby");
 * const contract = sdk.getPack("{{contract_address}}");
 * ```
 *
 * @public
 */
export declare class Pack implements UpdateableNetwork {
    static contractType: "pack";
    static contractRoles: readonly ["admin", "minter", "pauser", "transfer"];
    static contractAbi: any;
    /**
     * @internal
     */
    static schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
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
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
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
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            trusted_forwarders: string[];
        }, {
            symbol?: string | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
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
    private contractWrapper;
    private storage;
    metadata: ContractMetadata<PackContract, typeof Pack.schema>;
    roles: ContractRoles<PackContract, typeof Pack.contractRoles[number]>;
    encoder: ContractEncoder<PackContract>;
    events: ContractEvents<PackContract>;
    estimator: GasCostEstimator<PackContract>;
    /**
     * @internal
     */
    analytics: ContractAnalytics<PackContract>;
    /**
     * Configure royalties
     * @remarks Set your own royalties for the entire contract or per pack
     * @example
     * ```javascript
     * // royalties on the whole contract
     * contract.royalties.setDefaultRoyaltyInfo({
     *   seller_fee_basis_points: 100, // 1%
     *   fee_recipient: "0x..."
     * });
     * // override royalty for a particular pack
     * contract.royalties.setTokenRoyaltyInfo(packId, {
     *   seller_fee_basis_points: 500, // 5%
     *   fee_recipient: "0x..."
     * });
     * ```
     */
    royalties: ContractRoyalty<PackContract, typeof Pack.schema>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<PackContract>;
    constructor(network: NetworkOrSignerOrProvider, address: string, storage: IStorage, options?: SDKOptions, contractWrapper?: ContractWrapper<PackContract>);
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get a pack by id
     * @param packId - the id of the pack to fetch
     * @returns the pack metadata
     */
    get(packId: BigNumberish): Promise<PackMetadata>;
    /**
     * Get Pack Data
     *
     * @remarks Get data associated with every pack in this contract.
     *
     * @example
     * ```javascript
     * const packs = await contract.getAll();
     * console.log(packs);
     * ```
     *
     * @returns The NFT metadata for all NFTs in the contract.
     */
    getAll(): Promise<PackMetadata[]>;
    /**
     * Get Pack Reward Data
     *
     * @remarks Get data associated with the rewards inside a specified pack
     *
     * @example
     * ```javascript
     * // The pack ID of the pack whos rewards you want to get
     * const packId = 0;
     *
     * const nfts = await contract.getNFTs(packId);
     * console.log(nfts);
     * ```
     *
     * @returns The NFT metadata for all NFTs in the contract.
     */
    getNFTs(packId: string): Promise<PackNFTMetadata[]>;
    /**
     * Get Pack Balance
     *
     * @remarks Get a wallets pack balance (number of a specific packs in this contract owned by the wallet).
     *
     * @example
     * ```javascript
     * // Address of the wallet to check pack balance
     * const address = "{{wallet_address}}";
     * // The token ID of the pack you want to check the wallets balance of
     * const tokenId = "0"
     *
     * const balance = await contract.balanceOf(address, tokenId);
     * console.log(balance);
     * ```
     */
    balanceOf(address: string, tokenId: string): Promise<BigNumber>;
    balance(tokenId: string): Promise<BigNumber>;
    isApproved(address: string, operator: string): Promise<boolean>;
    getLinkBalance(): Promise<CurrencyValue>;
    /**
     * `getOwned` is a convenience method for getting all owned tokens
     * for a particular wallet.
     *
     * @param _address - The address to check for token ownership
     * @returns An array of PackMetadataWithBalance objects that are owned by the address
     */
    getOwned(_address?: string): Promise<PackMetadataWithBalance[]>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Open Pack
     *
     * @remarks Open a pack to burn it and obtain the reward asset inside.
     *
     * @example
     * ```javascript
     * // The pack ID of the asset you want to buy
     * const packId = "0";
     * const tx = await contract.open(packId);
     * const receipt = tx.receipt; // the transaction receipt
     * const packId = tx.id; // the id of the pack that was opened
     * const rewards = tx.data(); // the contents of the opened pack
     * ```
     */
    open(packId: string): Promise<TransactionResultWithId<NFTMetadata>[]>;
    /**
     * Create Pack
     *
     * @remarks Create a new pack with its own rewards.
     *
     * @example
     * ```javascript
     * // Data to create the pack
     * const pack = {
     *   // The address of the contract that holds the rewards you want to include
     *   assetContract: "0x...",
     *   // The metadata of the pack
     *   metadata: {
     *     name: "Cool Pack",
     *     description: "This is a cool pack",
     *     // This can be an image url or image file
     *     image: readFileSync("path/to/image.png"),
     *   },
     *   // The NFTs you want to include in the pack
     *   assets: [
     *     {
     *       tokenId: 0, // The token ID of the asset you want to add
     *       amount: 1, // The amount of the asset you want to add
     *     }, {
     *       tokenId: 1,
     *       amount: 1,
     *     }
     *   ],
     * };
     *
     * await contract.create(pack);
     * ```
     *
     * @param args - Args for the pack creation
     * @returns - The newly created pack metadata
     */
    create(args: IPackCreateArgs): Promise<TransactionResultWithId<PackMetadata>>;
    /**
     * Transfer Pack
     *
     * @remarks Transfer a pack from the connected wallet to another wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to send the pack to
     * const toAddress = "0x...";
     *
     * // The token ID of the pack you want to send
     * const tokenId = "0";
     *
     * // The number of packs you want to send
     * const amount = 1;
     *
     * await contract.transfer(toAddress, tokenId, amount);
     * ```
     */
    transfer(to: string, tokenId: string, amount: BigNumber): Promise<TransactionResult>;
    transferFrom(from: string, to: string, args: IPackBatchArgs, data?: BytesLike): Promise<TransactionResult>;
    transferBatchFrom(from: string, to: string, args: IPackBatchArgs[], data?: BytesLike): Promise<TransactionResult>;
    setApproval(operator: string, approved?: boolean): Promise<TransactionResult>;
    depositLink(amount: BigNumberish): Promise<TransactionResult>;
}
