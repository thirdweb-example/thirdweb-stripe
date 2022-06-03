import { Erc1155 } from "../core/classes/erc-1155";
import { TokenERC1155 } from "contracts";
import { ContractMetadata } from "../core/classes/contract-metadata";
import { ContractRoles } from "../core/classes/contract-roles";
import { ContractRoyalty } from "../core/classes/contract-royalty";
import { ContractPrimarySale } from "../core/classes/contract-sales";
import { IStorage, NetworkOrSignerOrProvider, TransactionResult, TransactionResultWithId } from "../core";
import { SDKOptions } from "../schema/sdk-options";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { EditionMetadata, EditionMetadataOrUri, EditionMetadataOwner } from "../schema/tokens/edition";
import { ContractEncoder, ContractEvents, ContractInterceptor, ContractPlatformFee } from "../core/classes";
import { BigNumber, BigNumberish } from "ethers";
import { Erc1155SignatureMinting } from "../core/classes/erc-1155-signature-minting";
import { GasCostEstimator } from "../core/classes/gas-cost-estimator";
import { QueryAllParams } from "../types";
import { ContractAnalytics } from "../core/classes/contract-analytics";
/**
 * Create a collection of NFTs that lets you mint multiple copies of each NFT.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("rinkeby");
 * const contract = sdk.getEdition("{{contract_address}}");
 * ```
 *
 * @public
 */
export declare class Edition extends Erc1155<TokenERC1155> {
    static contractType: "edition";
    static contractRoles: readonly ["admin", "minter", "transfer"];
    static contractAbi: any;
    private _query;
    private _mint;
    private _batchMint;
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
            seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
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
            seller_fee_basis_points: number;
            fee_recipient: string;
            primary_sale_recipient: string;
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
    metadata: ContractMetadata<TokenERC1155, typeof Edition.schema>;
    roles: ContractRoles<TokenERC1155, typeof Edition.contractRoles[number]>;
    sales: ContractPrimarySale<TokenERC1155>;
    platformFees: ContractPlatformFee<TokenERC1155>;
    encoder: ContractEncoder<TokenERC1155>;
    estimator: GasCostEstimator<TokenERC1155>;
    events: ContractEvents<TokenERC1155>;
    /**
     * @internal
     */
    analytics: ContractAnalytics<TokenERC1155>;
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
    royalties: ContractRoyalty<TokenERC1155, typeof Edition.schema>;
    /**
     * Signature Minting
     * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
     * const signedPayload = contract.signature.generate(payload);
     *
     * // now anyone can mint the NFT
     * const tx = contract.signature.mint(signedPayload);
     * const receipt = tx.receipt; // the mint transaction receipt
     * const mintedId = tx.id; // the id of the NFT minted
     * ```
     */
    signature: Erc1155SignatureMinting;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<TokenERC1155>;
    constructor(network: NetworkOrSignerOrProvider, address: string, storage: IStorage, options?: SDKOptions, contractWrapper?: ContractWrapper<TokenERC1155>);
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
     * Mint NFT for the connected wallet
     *
     * @remarks See {@link Edition.mintTo}
     */
    mintToSelf(metadataWithSupply: EditionMetadataOrUri): Promise<TransactionResultWithId<EditionMetadata>>;
    /**
     * Mint an NFT with a limited supply
     *
     * @remarks Mint an NFT with a limited supply to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const toAddress = "{{wallet_address}}"
     *
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }
     *
     * const metadataWithSupply = {
     *   metadata,
     *   supply: 1000, // The number of this NFT you want to mint
     * }
     *
     * const tx = await contract.mintTo(toAddress, metadataWithSupply);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     */
    mintTo(to: string, metadataWithSupply: EditionMetadataOrUri): Promise<TransactionResultWithId<EditionMetadata>>;
    /**
     * Increase the supply of an existing NFT and mint it to the connected wallet
     *
     * @param tokenId - the token id of the NFT to increase supply of
     * @param additionalSupply - the additional amount to mint
     */
    mintAdditionalSupply(tokenId: BigNumberish, additionalSupply: BigNumberish): Promise<TransactionResultWithId<EditionMetadata>>;
    /**
     * Increase the supply of an existing NFT and mint it to a given wallet address
     *
     * @param to - the address to mint to
     * @param tokenId - the token id of the NFT to increase supply of
     * @param additionalSupply - the additional amount to mint
     */
    mintAdditionalSupplyTo(to: string, tokenId: BigNumberish, additionalSupply: BigNumberish): Promise<TransactionResultWithId<EditionMetadata>>;
    /**
     * Mint Many NFTs for the connected wallet
     *
     * @remarks See {@link Edition.mintBatchTo}
     */
    mintBatch(metadatas: EditionMetadataOrUri[]): Promise<TransactionResultWithId<EditionMetadata>[]>;
    /**
     * Mint Many NFTs with limited supplies
     *
     * @remarks Mint many different NFTs with limited supplies to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const toAddress = "{{wallet_address}}"
     *
     * // Custom metadata and supplies of your NFTs
     * const metadataWithSupply = [{
     *   supply: 50, // The number of this NFT you want to mint
     *   metadata: {
     *     name: "Cool NFT #1",
     *     description: "This is a cool NFT",
     *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     *   },
     * }, {
     *   supply: 100,
     *   metadata: {
     *     name: "Cool NFT #2",
     *     description: "This is a cool NFT",
     *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     *   },
     * }];
     *
     * const tx = await contract.mintBatchTo(toAddress, metadataWithSupply);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    mintBatchTo(to: string, metadataWithSupply: EditionMetadataOrUri[]): Promise<TransactionResultWithId<EditionMetadata>[]>;
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
}
