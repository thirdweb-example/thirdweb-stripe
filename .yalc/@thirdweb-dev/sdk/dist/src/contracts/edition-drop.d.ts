import { Erc1155 } from "../core/classes/erc-1155";
import { DropERC1155 } from "contracts";
import { ContractMetadata } from "../core/classes/contract-metadata";
import { ContractRoles } from "../core/classes/contract-roles";
import { ContractRoyalty } from "../core/classes/contract-royalty";
import { ContractPrimarySale } from "../core/classes/contract-sales";
import { IStorage, NetworkOrSignerOrProvider, TransactionResult, TransactionResultWithId } from "../core";
import { SDKOptions } from "../schema/sdk-options";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { NFTMetadata, NFTMetadataInput } from "../schema/tokens/common";
import { BigNumber, BigNumberish, BytesLike } from "ethers";
import { DropErc1155ClaimConditions } from "../core/classes/drop-erc1155-claim-conditions";
import { ContractEncoder } from "../core/classes/contract-encoder";
import { GasCostEstimator } from "../core/classes/gas-cost-estimator";
import { QueryAllParams } from "../types";
import { DropErc1155History } from "../core/classes/drop-erc1155-history";
import { ContractEvents } from "../core/classes/contract-events";
import { ContractPlatformFee } from "../core/classes/contract-platform-fee";
import { ContractInterceptor } from "../core/classes/contract-interceptor";
import { EditionMetadata, EditionMetadataOwner } from "../schema";
import { ContractAnalytics } from "../core/classes/contract-analytics";
/**
 * Setup a collection of NFTs with a customizable number of each NFT that are minted as users claim them.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("rinkeby");
 * const contract = sdk.getEditionDrop("{{contract_address}}");
 * ```
 *
 * @public
 */
export declare class EditionDrop extends Erc1155<DropERC1155> {
    static contractType: "edition-drop";
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
        }>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../core").Json, import("zod").ZodTypeDef, import("../core").Json>>, {
            [x: string]: import("../core").Json;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            symbol: string;
            name: string;
            merkle: Record<string, string>;
            seller_fee_basis_points: number;
            fee_recipient: string;
        }, {
            [x: string]: import("../core").Json;
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
    private _query;
    sales: ContractPrimarySale<DropERC1155>;
    platformFees: ContractPlatformFee<DropERC1155>;
    encoder: ContractEncoder<DropERC1155>;
    estimator: GasCostEstimator<DropERC1155>;
    events: ContractEvents<DropERC1155>;
    metadata: ContractMetadata<DropERC1155, typeof EditionDrop.schema>;
    /**
     * @internal
     */
    analytics: ContractAnalytics<DropERC1155>;
    roles: ContractRoles<DropERC1155, typeof EditionDrop.contractRoles[number]>;
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
    royalties: ContractRoyalty<DropERC1155, typeof EditionDrop.schema>;
    /**
     * Configure claim conditions for each NFT
     * @remarks Define who can claim each NFT in the edition, when and how many.
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
     *
     * const tokenId = 0; // the id of the NFT to set claim conditions on
     * await contract.claimConditions.set(tokenId, claimConditions);
     * ```
     */
    claimConditions: DropErc1155ClaimConditions;
    history: DropErc1155History;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<DropERC1155>;
    constructor(network: NetworkOrSignerOrProvider, address: string, storage: IStorage, options?: SDKOptions, contractWrapper?: ContractWrapper<DropERC1155>);
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
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     */
    getAll(queryParams?: QueryAllParams): Promise<EditionMetadata[]>;
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
     * ```
     *
     * @returns The NFT metadata for all NFTs in the contract.
     */
    getOwned(walletAddress?: string): Promise<EditionMetadataOwner[]>;
    /**
     * Get the number of NFTs minted
     * @returns the total number of NFTs minted in this contract
     * @public
     */
    getTotalCount(): Promise<BigNumber>;
    /**
     * Get whether users can transfer NFTs from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create a batch of NFTs to be claimed in the future
     *
     * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
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
     */
    createBatch(metadatas: NFTMetadataInput[]): Promise<TransactionResultWithId<NFTMetadata>[]>;
    /**
     * Claim NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const tokenId = 0; // the id of the NFT you want to claim
     * const quantity = 1; // how many NFTs you want to claim
     *
     * const tx = await contract.claimTo(address, tokenId, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * const claimedTokenId = tx.id; // the id of the NFT claimed
     * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     * @param proofs - Array of proofs
     *
     * @returns - Receipt for the transaction
     */
    claimTo(destinationAddress: string, tokenId: BigNumberish, quantity: BigNumberish, proofs?: BytesLike[]): Promise<TransactionResult>;
    /**
     * Claim a token to the connected wallet
     *
     * @remarks See {@link EditionDrop.claimTo}
     *
     * @param tokenId - Id of the token you want to claim
     * @param quantity - Quantity of the tokens you want to claim
     * @param proofs - Array of proofs
     *
     * @returns - Receipt for the transaction
     */
    claim(tokenId: BigNumberish, quantity: BigNumberish, proofs?: BytesLike[]): Promise<TransactionResult>;
    /**
     * Burn a specified amount of a NFT
     *
     * @param tokenId - the token Id to burn
     * @param amount - amount to burn
     *
     * @example
     * ```javascript
     * const result = await contract.burn(tokenId, amount);
     * ```
     */
    burn(tokenId: BigNumberish, amount: BigNumberish): Promise<TransactionResult>;
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
