import { ContractWrapper } from "./contract-wrapper";
import { DropERC1155, TokenERC1155 } from "contracts";
import { BigNumber, BigNumberish, BytesLike } from "ethers";
import { NFTMetadata } from "../../schema/tokens/common";
import { IStorage } from "../interfaces";
import { NetworkOrSignerOrProvider, TransactionResult } from "../types";
import { UpdateableNetwork } from "../interfaces/contract";
import { SDKOptions } from "../../schema/sdk-options";
import { EditionMetadata } from "../../schema/tokens/edition";
import { AirdropInput } from "../../types/airdrop/airdrop";
import { BaseERC1155 } from "../../types/eips";
import { Erc1155Enumerable } from "./erc-1155-enumerable";
import { Erc1155Mintable } from "./erc-1155-mintable";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * Standard ERC1155 NFT functions
 * @remarks Basic functionality for a ERC1155 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.transfer(walletAddress, tokenId, quantity);
 * ```
 * @public
 */
export declare class Erc1155<T extends DropERC1155 | TokenERC1155 | BaseERC1155 = BaseERC1155> implements UpdateableNetwork, DetectableFeature {
    featureName: "ERC1155";
    protected contractWrapper: ContractWrapper<T>;
    protected storage: IStorage;
    protected options: SDKOptions;
    query: Erc1155Enumerable | undefined;
    mint: Erc1155Mintable | undefined;
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
     * const nft = await contract.get("0");
     * ```
     * @param tokenId - the tokenId of the NFT to retrieve
     * @returns The NFT metadata
     */
    get(tokenId: BigNumberish): Promise<EditionMetadata>;
    /**
     * Returns the total supply of a specific token
     * @param tokenId - The token ID to get the total supply of
     * @returns the total supply
     */
    totalSupply(tokenId: BigNumberish): Promise<BigNumber>;
    /**
     * Get NFT Balance
     *
     * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
     *
     * @example
     * ```javascript
     * // Address of the wallet to check NFT balance
     * const walletAddress = "{{wallet_address}}";
     * const tokenId = 0; // Id of the NFT to check
     * const balance = await contract.balanceOf(walletAddress, tokenId);
     * ```
     */
    balanceOf(address: string, tokenId: BigNumberish): Promise<BigNumber>;
    /**
     * Get NFT Balance for the currently connected wallet
     */
    balance(tokenId: BigNumberish): Promise<BigNumber>;
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
     * // Address of the wallet you want to send the NFT to
     * const toAddress = "{{wallet_address}}";
     * const tokenId = "0"; // The token ID of the NFT you want to send
     * const amount = 3; // How many copies of the NFTs to transfer
     * await contract.transfer(toAddress, tokenId, amount);
     * ```
     */
    transfer(to: string, tokenId: BigNumberish, amount: BigNumberish, data?: BytesLike): Promise<TransactionResult>;
    /**
     * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
     * @param operator - the operator's address
     * @param approved - whether to approve or remove
     *
     * @internal
     */
    setApprovalForAll(operator: string, approved: boolean): Promise<TransactionResult>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Airdrop multiple NFTs
     *
     * @remarks Airdrop one or multiple NFTs to the provided wallet addresses.
     *
     * @example
     * ```javascript
     * // Array of objects of addresses and quantities to airdrop NFTs to
     * const addresses = [
     *  {
     *    address: "0x...",
     *    quantity: 2,
     *  },
     *  {
     *   address: "0x...",
     *    quantity: 3,
     *  },
     * ];
     * const tokenId = "0";
     * await contract.airdrop(addresses, tokenId);
     *
     * // You can also pass an array of addresses, it will airdrop 1 NFT per address
     * const addresses = [
     *  "0x...", "0x...", "0x...",
     * ]
     * const tokenId = "0";
     * await contract.airdrop(addresses, tokenId);
     * ```
     */
    airdrop(tokenId: BigNumberish, addresses: AirdropInput, data?: BytesLike): Promise<TransactionResult>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * @internal
     * @param tokenId - the token Id to fetch
     */
    getTokenMetadata(tokenId: BigNumberish): Promise<NFTMetadata>;
    private detectErc1155Enumerable;
    private detectErc1155Mintable;
}
