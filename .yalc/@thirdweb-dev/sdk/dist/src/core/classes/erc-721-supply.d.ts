import { ContractWrapper } from "./contract-wrapper";
import { IERC721Supply } from "contracts";
import { BigNumber } from "ethers";
import { QueryAllParams } from "../../types";
import { NFTMetadataOwner } from "../../schema";
import { Erc721 } from "./erc-721";
import { BaseERC721 } from "../../types/eips";
import { Erc721Enumerable } from "./erc-721-enumerable";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * List ERC721 NFTs
 * @remarks Easily list all the NFTs in a ERC721 contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const nfts = await contract.nft.query.all();
 * ```
 * @public
 */
export declare class Erc721Supply implements DetectableFeature {
    featureName: "ERC721Supply";
    private contractWrapper;
    private erc721;
    owned: Erc721Enumerable | undefined;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<BaseERC721 & IERC721Supply>);
    /**
     * Get All Minted NFTs
     *
     * @remarks Get all the data associated with every NFT in this contract.
     *
     * By default, returns the first 100 NFTs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const nfts = await contract.nft.query.all();
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     */
    all(queryParams?: QueryAllParams): Promise<NFTMetadataOwner[]>;
    /**
     * Get the number of NFTs of this contract currently owned by end users
     * @returns the total number of NFTs of this contract in circulation (minted & not burned)
     * @public
     */
    totalCirculatingSupply(): Promise<BigNumber>;
    private detectErc721Owned;
}
