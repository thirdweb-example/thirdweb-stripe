import { ContractWrapper } from "./contract-wrapper";
import { BigNumber, BigNumberish } from "ethers";
import { NFTMetadata, NFTMetadataOwner } from "../../schema/tokens/common";
import { IStorage } from "../interfaces";
import { NetworkOrSignerOrProvider, TransactionResult } from "../types";
import { UpdateableNetwork } from "../interfaces/contract";
import { SDKOptions } from "../../schema/sdk-options";
import { DropERC721, Multiwrap, SignatureDrop, TokenERC721 } from "contracts";
import { Erc721Supply } from "./erc-721-supply";
import { Erc721Mintable } from "./erc-721-mintable";
import { BaseERC721 } from "../../types/eips";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * Standard ERC721 NFT functions
 * @remarks Basic functionality for a ERC721 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.transfer(walletAddress, tokenId);
 * ```
 * @public
 */
export declare class Erc721<T extends Multiwrap | SignatureDrop | DropERC721 | TokenERC721 | BaseERC721 = BaseERC721> implements UpdateableNetwork, DetectableFeature {
    featureName: "ERC721";
    protected contractWrapper: ContractWrapper<T>;
    protected storage: IStorage;
    protected options: SDKOptions;
    query: Erc721Supply | undefined;
    mint: Erc721Mintable | undefined;
    constructor(contractWrapper: ContractWrapper<T>, storage: IStorage, options?: SDKOptions);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get a single NFT Metadata
     *
     * @example
     * ```javascript
     * const tokenId = 0;
     * const nft = await contract.nft.get(tokenId);
     * ```
     * @param tokenId - the tokenId of the NFT to retrieve
     * @returns The NFT metadata
     */
    get(tokenId: BigNumberish): Promise<NFTMetadataOwner>;
    /**
     * Get the current owner of a given NFT within this Contract
     *
     * @param tokenId - the tokenId of the NFT
     * @returns the address of the owner
     */
    ownerOf(tokenId: BigNumberish): Promise<string>;
    /**
     * Get NFT Balance
     *
     * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const balance = await contract.nft.balanceOf(walletAddress);
     * console.log(balance);
     * ```
     */
    balanceOf(address: string): Promise<BigNumber>;
    /**
     * Get NFT Balance for the currently connected wallet
     */
    balance(): Promise<BigNumber>;
    /**
     * Get whether this wallet has approved transfers from the given operator
     * @param address - the wallet address
     * @param operator - the operator address
     */
    isApproved(address: string, operator: string): Promise<boolean>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Transfer a single NFT
     *
     * @remarks Transfer an NFT from the connected wallet to another wallet.
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const tokenId = 0;
     * await contract.nft.transfer(walletAddress, tokenId);
     * ```
     */
    transfer(to: string, tokenId: BigNumberish): Promise<TransactionResult>;
    /**
     * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
     * @param operator - the operator's address
     * @param approved - whether to approve or remove
     *
     * @internal
     */
    setApprovalForAll(operator: string, approved: boolean): Promise<TransactionResult>;
    /**
     * Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
     * @param operator - the operator's address
     * @param tokenId - the tokenId to give approval for
     *
     * @internal
     */
    setApprovalForToken(operator: string, tokenId: BigNumberish): Promise<TransactionResult>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * @internal
     */
    protected getTokenMetadata(tokenId: BigNumberish): Promise<NFTMetadata>;
    private detectErc721Enumerable;
    private detectErc721Mintable;
}
