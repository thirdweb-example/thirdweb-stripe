import { ContractWrapper } from "./contract-wrapper";
import { IMintableERC721 } from "contracts";
import { NFTMetadataOrUri, NFTMetadataOwner } from "../../schema";
import { TransactionResultWithId } from "../types";
import { IStorage } from "../interfaces";
import { Erc721 } from "./erc-721";
import { Erc721BatchMintable } from "./erc-721-batch-mintable";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * Mint ERC721 NFTs
 * @remarks NFT minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */
export declare class Erc721Mintable implements DetectableFeature {
    featureName: "ERC721Mintable";
    private contractWrapper;
    private storage;
    private erc721;
    batch: Erc721BatchMintable | undefined;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<IMintableERC721>, storage: IStorage);
    /**
     * Mint a unique NFT
     *
     * @remarks Mint a unique NFT to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const walletAddress = "{{wallet_address}}";
     *
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const tx = await contract.nft.mint.to(walletAddress, metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     */
    to(to: string, metadata: NFTMetadataOrUri): Promise<TransactionResultWithId<NFTMetadataOwner>>;
    private detectErc721BatchMintable;
}
