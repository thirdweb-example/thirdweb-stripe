import { ContractWrapper } from "./contract-wrapper";
import { IMarketplace, Marketplace } from "contracts";
import { IStorage } from "../interfaces";
import { BigNumberish } from "ethers";
import { AuctionListing, NewAuctionListing, Offer } from "../../types/marketplace";
import { TransactionResult, TransactionResultWithId } from "../types";
import { Price } from "../../types/currency";
/**
 * Handles auction listings
 * @public
 */
export declare class MarketplaceAuction {
    private contractWrapper;
    private storage;
    constructor(contractWrapper: ContractWrapper<Marketplace>, storage: IStorage);
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get an Auction listing by id
     *
     * @param listingId - the listing Id
     * @returns the Auction listing object
     */
    getListing(listingId: BigNumberish): Promise<AuctionListing>;
    /**
     * Get Highest Bid
     *
     * @remarks Get the current highest bid of an active auction.
     *
     * @example
     * ```javascript
     * // The listing ID of the auction that closed
     * const listingId = 0;
     *
     * contract.auction.
     *   .getWinningBid(listingId)
     *   .then((offer) => console.log(offer))
     *   .catch((err) => console.error(err));
     * ```
     */
    getWinningBid(listingId: BigNumberish): Promise<Offer | undefined>;
    /**
     * Get Auction Winner
     *
     * @remarks Get the winner of the auction after an auction ends.
     *
     * @example
     * ```javascript
     * // The listing ID of the auction that closed
     * const listingId = 0;
     *
     * contract.auction.
     *   .getWinner(listingId)
     *   .then((auctionWinner) => console.log(auctionWinner))
     *   .catch((err) => console.error(err));
     * ```
     */
    getWinner(listingId: BigNumberish): Promise<string>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create Auction
     *
     * @remarks Create a new auction where people can bid on an asset.
     *
     * @example
     * ```javascript
     * // Data of the auction you want to create
     * const auction = {
     *   // address of the contract the asset you want to list is on
     *   assetContractAddress: "0x...",
     *   // token ID of the asset you want to list
     *   tokenId: "0",
     *  // when should the listing open up for offers
     *   startTimestamp: new Date(),
     *   // how long the listing will be open for
     *   listingDurationInSeconds: 86400,
     *   // how many of the asset you want to list
     *   quantity: 1,
     *   // address of the currency contract that will be used to pay for the listing
     *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
     *   // how much people would have to bid to instantly buy the asset
     *   buyoutPricePerToken: "10",
     *   // the minimum bid that will be accepted for the token
     *   reservePricePerToken: "1.5",
     * }
     *
     * const tx = await contract.auction.createListing(auction);
     * const receipt = tx.receipt; // the transaction receipt
     * const id = tx.id; // the id of the newly created listing
     * ```
     */
    createListing(listing: NewAuctionListing): Promise<TransactionResultWithId>;
    /**
     * Buyout Auction
     *
     * @remarks Buy a specific direct listing from the marketplace.
     *
     * @example
     * ```javascript
     * // The listing ID of the asset you want to buy
     * const listingId = 0;
     *
     * await contract.auction.buyoutListing(listingId);
     * ```
     */
    buyoutListing(listingId: BigNumberish): Promise<TransactionResult>;
    /**
     * Bid On Auction
     *
     * @remarks Make a bid on an auction listing
     *
     * @example
     * ```javascript
     * // The listing ID of the asset you want to bid on
     * const listingId = 0;
     * // The price you are willing to bid for a single token of the listing
     * const pricePerToken = 1;
     *
     * await contract.auction.makeBid(listingId, pricePerToken);
     * ```
     */
    makeBid(listingId: BigNumberish, pricePerToken: Price): Promise<TransactionResult>;
    /**
     * Cancel Auction Listing
     *
     * @remarks Cancel an auction listing on the marketplace
     *
     * @example
     * ```javascript
     * // The listing ID of the auction listing you want to cancel
     * const listingId = "0";
     *
     * await contract.auction.cancelListing(listingId);
     * ```
     */
    cancelListing(listingId: BigNumberish): Promise<TransactionResult>;
    /**
     * Close the Auction
     *
     * @remarks Closes the Auction and executes the sale.
     *
     * @example
     * ```javascript
     * // The listing ID of the auction listing you want to close
     * const listingId = "0";
     * await contract.auction.closeListing(listingId);
     * ```
     *
     * @param listingId - the auction  listing ud to close
     * @param closeFor - optionally pass the auction creator address or winning bid offeror address to close the auction on their behalf
     */
    closeListing(listingId: BigNumberish, closeFor?: string): Promise<TransactionResult>;
    /**
     * Update an Auction listing with new metadata
     * @param listing - the listing id to update
     */
    updateListing(listing: AuctionListing): Promise<TransactionResult>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * Throws error if listing could not be found
     *
     * @param listingId - Listing to check for
     */
    private validateListing;
    /**
     * Helper method maps the auction listing to the auction listing interface.
     *
     * @internal
     * @param listing - The listing to map, as returned from the contract.
     * @returns - The mapped interface.
     */
    mapListing(listing: IMarketplace.ListingStruct): Promise<AuctionListing>;
}
