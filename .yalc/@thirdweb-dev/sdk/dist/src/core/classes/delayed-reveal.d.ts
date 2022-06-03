import { BigNumberish } from "ethers";
import { ContractWrapper } from "./contract-wrapper";
import { DropERC721, SignatureDrop } from "contracts";
import { NFTMetadataInput } from "../../schema/tokens/common";
import { IStorage, TransactionResult, TransactionResultWithId } from "../index";
import { BatchToReveal } from "../../types/delayed-reveal";
import { UploadProgressEvent } from "../../types/events";
/**
 * Handles delayed reveal logic
 * @public
 */
export declare class DelayedReveal<T extends SignatureDrop | DropERC721> {
    private contractWrapper;
    private storage;
    constructor(contractWrapper: ContractWrapper<T>, storage: IStorage);
    /**
     * Create a batch of encrypted NFTs that can be revealed at a later time.
     * @example
     * ```javascript
     * // the real NFTs, these will be encrypted until your reveal them!
     * const realNFTs = [{
     *   name: "Common NFT #1",
     *   description: "Common NFT, one of many.",
     *   image: fs.readFileSync("path/to/image.png"),
     * }, {
     *   name: "Super Rare NFT #2",
     *   description: "You got a Super Rare NFT!",
     *   image: fs.readFileSync("path/to/image.png"),
     * }];
     * // A placeholder NFT that people will get immediately in their wallet, until the reveal happens!
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
     * // Whenever you're ready, reveal your NFTs at any time!
     * const batchId = 0; // the batch to reveal
     * await contract.revealer.reveal(batchId, "my secret password");
     * ```
     * @param placeholder - the placeholder NFT to show before the reveal
     * @param metadatas - the final NFTs that will be hidden
     * @param password - the password that will be used to reveal these NFTs
     */
    createDelayedRevealBatch(placeholder: NFTMetadataInput, metadatas: NFTMetadataInput[], password: string, options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<TransactionResultWithId[]>;
    /**
     * Reveal a batch of hidden NFTs
     * @param batchId - the id of the batch to reveal
     * @param password - the password
     */
    reveal(batchId: BigNumberish, password: string): Promise<TransactionResult>;
    /**
     * Gets the list of unrevealed NFT batches.
     */
    getBatchesToReveal(): Promise<BatchToReveal[]>;
    /**
     * Algorithm to hash delay reveal password, so we don't broadcast the input password on-chain.
     *
     * @internal
     */
    private hashDelayRevealPasword;
    private getNftMetadata;
    private isSignatureDrop;
}
