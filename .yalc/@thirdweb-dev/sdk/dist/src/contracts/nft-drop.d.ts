import { ContractRoles } from "../core/classes/contract-roles";
import { DropERC721 } from "contracts";
import { BigNumber, BigNumberish, BytesLike } from "ethers";
import { ContractMetadata } from "../core/classes/contract-metadata";
import { ContractRoyalty } from "../core/classes/contract-royalty";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { IStorage } from "../core/interfaces/IStorage";
import { NetworkOrSignerOrProvider, TransactionResult, TransactionResultWithId } from "../core/types";
import { SDKOptions } from "../schema/sdk-options";
import { NFTMetadata, NFTMetadataInput, NFTMetadataOwner } from "../schema/tokens/common";
import { QueryAllParams } from "../types/QueryParams";
import { DropClaimConditions } from "../core/classes/drop-claim-conditions";
import { Erc721 } from "../core/classes/erc-721";
import { ContractPrimarySale } from "../core/classes/contract-sales";
import { ContractEncoder } from "../core/classes/contract-encoder";
import { DelayedReveal } from "../core/classes/delayed-reveal";
import { GasCostEstimator } from "../core/classes";
import { ContractEvents } from "../core/classes/contract-events";
import { ContractPlatformFee } from "../core/classes/contract-platform-fee";
import { ContractInterceptor } from "../core/classes/contract-interceptor";
import { ContractAnalytics } from "../core/classes/contract-analytics";
import { UploadProgressEvent } from "../types/events";
/**
 * Setup a collection of one-of-one NFTs that are minted as users claim them.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("rinkeby");
 * const contract = sdk.getNFTDrop("{{contract_address}}");
 * ```
 *
 * @public
 */
export declare class NFTDrop extends Erc721<DropERC721> {
    static contractType: "nft-drop";
    static contractRoles: readonly ["admin", "minter", "transfer"];
    static contractAbi: any;
    /**
     * @internal
     */
    static schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
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
            seller_fee_basis_points: number;
            fee_recipient: string;
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
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
            primary_sale_recipient: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
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
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        }>, {
            symbol: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>;
        }>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../core/types").Json, import("zod").ZodTypeDef, import("../core/types").Json>>, {
            [x: string]: import("../core/types").Json;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            merkle: Record<string, string>;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            [x: string]: import("../core/types").Json;
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
        }>, {
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
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
    };
    encoder: ContractEncoder<DropERC721>;
    estimator: GasCostEstimator<DropERC721>;
    metadata: ContractMetadata<DropERC721, typeof NFTDrop.schema>;
    sales: ContractPrimarySale<DropERC721>;
    platformFees: ContractPlatformFee<DropERC721>;
    events: ContractEvents<DropERC721>;
    roles: ContractRoles<DropERC721, typeof NFTDrop.contractRoles[number]>;
    /**
     * @internal
     */
    analytics: ContractAnalytics<DropERC721>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<DropERC721>;
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
    royalties: ContractRoyalty<DropERC721, typeof NFTDrop.schema>;
    /**
     * Configure claim conditions
     * @remarks Define who can claim NFTs in the collection, when and how many.
     * @example
     * ```javascript
     * const presaleStartTime = new Date();
     * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const claimConditions = [
     *   {
     *     startTime: presaleStartTime, // start the presale now
     *     maxQuantity: 2, // limit how many mints for this presale
     *     price: 0.01, // presale price
     *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
     *   },
     *   {
     *     startTime: publicSaleStartTime, // 24h after presale, start public sale
     *     price: 0.08, // public sale price
     *   }
     * ]);
     * await contract.claimConditions.set(claimConditions);
     * ```
     */
    claimConditions: DropClaimConditions<DropERC721>;
    /**
     * Delayed reveal
     * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
     * @example
     * ```javascript
     * // the real NFTs, these will be encrypted until you reveal them
     * const realNFTs = [{
     *   name: "Common NFT #1",
     *   description: "Common NFT, one of many.",
     *   image: fs.readFileSync("path/to/image.png"),
     * }, {
     *   name: "Super Rare NFT #2",
     *   description: "You got a Super Rare NFT!",
     *   image: fs.readFileSync("path/to/image.png"),
     * }];
     * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
     * const placeholderNFT = {
     *   name: "Hidden NFT",
     *   description: "Will be revealed next week!"
     * };
     * // Create and encrypt the NFTs
     * await contract.revealer.createDelayedRevealBatch(
     *   placeholderNFT,
     *   realNFTs,
     *   "my secret password",
     * );
     * // Whenever you're ready, reveal your NFTs at any time
     * const batchId = 0; // the batch to reveal
     * await contract.revealer.reveal(batchId, "my secret password");
     * ```
     */
    revealer: DelayedReveal<DropERC721>;
    private _query;
    private _owned;
    constructor(network: NetworkOrSignerOrProvider, address: string, storage: IStorage, options?: SDKOptions, contractWrapper?: ContractWrapper<DropERC721>);
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get All Minted NFTs
     *
     * @remarks Get all the data associated with every NFT in this contract.
     *
     * By default, returns the first 100 NFTs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const nfts = await contract.getAll();
     * console.log(nfts);
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     */
    getAll(queryParams?: QueryAllParams): Promise<NFTMetadataOwner[]>;
    /**
     * Get Owned NFTs
     *
     * @remarks Get all the data associated with the NFTs owned by a specific wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to get the NFTs of
     * const address = "{{wallet_address}}";
     * const nfts = await contract.getOwned(address);
     * console.log(nfts);
     * ```
     * @param walletAddress - the wallet address to query, defaults to the connected wallet
     * @returns The NFT metadata for all NFTs in the contract.
     */
    getOwned(walletAddress?: string): Promise<NFTMetadataOwner[]>;
    /**
     * Get all token ids of NFTs owned by a specific wallet.
     * @param walletAddress - the wallet address to query, defaults to the connected wallet
     */
    getOwnedTokenIds(walletAddress?: string): Promise<BigNumber[]>;
    /**
     * Get the total count NFTs in this drop contract, both claimed and unclaimed
     */
    totalSupply(): Promise<BigNumber>;
    /**
     * Get All Claimed NFTs
     *
     * @remarks Fetch all the NFTs (and their owners) that have been claimed in this Drop.
     *
     * * @example
     * ```javascript
     * const claimedNFTs = await contract.getAllClaimed();
     * const firstOwner = claimedNFTs[0].owner;
     * ```
     *
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata and their ownersfor all NFTs queried.
     */
    getAllClaimed(queryParams?: QueryAllParams): Promise<NFTMetadataOwner[]>;
    /**
     * Get All Unclaimed NFTs
     *
     * @remarks Fetch all the NFTs that have been not been claimed yet in this Drop.
     *
     * * @example
     * ```javascript
     * const unclaimedNFTs = await contract.getAllUnclaimed();
     * const firstUnclaimedNFT = unclaimedNFTs[0].name;
     * ```
     *
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     */
    getAllUnclaimed(queryParams?: QueryAllParams): Promise<NFTMetadata[]>;
    /**
     * Get the claimed supply
     *
     * @remarks Get the number of claimed NFTs in this Drop.
     *
     * * @example
     * ```javascript
     * const claimedNFTCount = await contract.totalClaimedSupply();
     * console.log(`NFTs claimed so far: ${claimedNFTCount}`);
     * ```
     * @returns the unclaimed supply
     */
    totalClaimedSupply(): Promise<BigNumber>;
    /**
     * Get the unclaimed supply
     *
     * @remarks Get the number of unclaimed NFTs in this Drop.
     *
     * * @example
     * ```javascript
     * const unclaimedNFTCount = await contract.totalUnclaimedSupply();
     * console.log(`NFTs left to claim: ${unclaimedNFTCount}`);
     * ```
     * @returns the unclaimed supply
     */
    totalUnclaimedSupply(): Promise<BigNumber>;
    /**
     * Get whether users can transfer NFTs from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create a batch of unique NFTs to be claimed in the future
     *
     * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
     *
     * @example
     * ```javascript
     * // Custom metadata of the NFTs to create
     * const metadatas = [{
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"),
     * }];
     *
     * const results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain
     * const firstTokenId = results[0].id; // token id of the first created NFT
     * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
     * ```
     *
     * @param metadatas - The metadata to include in the batch.
     */
    createBatch(metadatas: NFTMetadataInput[], options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<TransactionResultWithId<NFTMetadata>[]>;
    /**
     * Claim unique NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 1; // how many unique NFTs you want to claim
     *
     * const tx = await contract.claimTo(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * const claimedTokenId = tx.id; // the id of the NFT claimed
     * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param quantity - Quantity of the tokens you want to claim
     * @param proofs - Array of proofs
     *
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    claimTo(destinationAddress: string, quantity: BigNumberish, proofs?: BytesLike[]): Promise<TransactionResultWithId<NFTMetadataOwner>[]>;
    /**
     * Claim NFTs to the connected wallet.
     *
     * @remarks See {@link NFTDrop.claimTo}
     *
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    claim(quantity: BigNumberish, proofs?: BytesLike[]): Promise<TransactionResultWithId<NFTMetadataOwner>[]>;
    /**
     * Burn a single NFT
     *
     * @param tokenId - the token Id to burn
     *
     * @example
     * ```javascript
     * const result = await contract.burn(tokenId);
     * ```
     *
     */
    burn(tokenId: BigNumberish): Promise<TransactionResult>;
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
