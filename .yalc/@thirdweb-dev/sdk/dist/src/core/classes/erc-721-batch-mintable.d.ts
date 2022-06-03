import { ContractWrapper } from "./contract-wrapper";
import { IMintableERC721, IMulticall } from "contracts";
import { NFTMetadataOrUri, NFTMetadataOwner } from "../../schema";
import { TransactionResultWithId } from "../types";
import { IStorage } from "../interfaces";
import { Erc721 } from "./erc-721";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * Mint Many ERC721 NFTs at once
 * @remarks NFT batch minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.batch.to(walletAddress, [nftMetadata1, nftMetadata2, ...]);
 * ```
 * @public
 */
export declare class Erc721BatchMintable implements DetectableFeature {
    featureName: "ERC721BatchMintable";
    private contractWrapper;
    private storage;
    private erc721;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<IMintableERC721 & IMulticall>, storage: IStorage);
    /**
     * Mint Many unique NFTs
     *
     * @remarks Mint many unique NFTs at once to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const walletAddress = "{{wallet_address}}";
     *
     * // Custom metadata of the NFTs you want to mint.
     * const metadatas = [{
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT #2",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/other/image.png"),
     * }];
     *
     * const tx = await contract.mint.batch.to(walletAddress, metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    to(to: string, metadatas: NFTMetadataOrUri[]): Promise<TransactionResultWithId<NFTMetadataOwner>[]>;
}
