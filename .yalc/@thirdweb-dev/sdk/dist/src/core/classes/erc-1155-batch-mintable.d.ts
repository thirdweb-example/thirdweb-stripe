import { ContractWrapper } from "./contract-wrapper";
import { IMintableERC1155, IMulticall } from "contracts";
import { TransactionResultWithId } from "../types";
import { Erc1155 } from "./erc-1155";
import { EditionMetadata, EditionMetadataOrUri } from "../../schema";
import { IStorage } from "../interfaces";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * Mint Many ERC1155 NFTs at once
 * @remarks NFT batch minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.mint.batch.to(walletAddress, [nftMetadataWithSupply1, nftMetadataWithSupply2, ...]);
 * ```
 * @public
 */
export declare class Erc1155BatchMintable implements DetectableFeature {
    featureName: "ERC1155BatchMintable";
    private contractWrapper;
    private erc1155;
    private storage;
    constructor(erc1155: Erc1155, contractWrapper: ContractWrapper<IMintableERC1155 & IMulticall>, storage: IStorage);
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
     * const tx = await contract.edition.mint.batch.to(toAddress, metadataWithSupply);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    to(to: string, metadataWithSupply: EditionMetadataOrUri[]): Promise<TransactionResultWithId<EditionMetadata>[]>;
}
