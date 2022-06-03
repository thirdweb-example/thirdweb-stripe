import { PayloadToSign721, SignedPayload721 } from "../../schema/contracts/common/signature";
import { TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { TokenERC721 } from "contracts";
import { IStorage } from "../interfaces";
import { ContractRoles } from "./contract-roles";
import { NFTCollection } from "../../contracts";
/**
 * Enables generating dynamic ERC721 NFTs with rules and an associated signature, which can then be minted by anyone securely
 * @public
 */
export declare class Erc721SignatureMinting {
    private contractWrapper;
    private storage;
    private roles;
    constructor(contractWrapper: ContractWrapper<TokenERC721>, roles: ContractRoles<TokenERC721, typeof NFTCollection.contractRoles[number]>, storage: IStorage);
    /**
     * Mint a dynamically generated NFT
     *
     * @remarks Mint a dynamic NFT with a previously generated signature.
     *
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `generate()` documentation
     * const signedPayload = contract.signature.generate(payload);
     *
     * // now anyone can mint the NFT
     * const tx = contract.signature.mint(signedPayload);
     * const receipt = tx.receipt; // the mint transaction receipt
     * const mintedId = tx.id; // the id of the NFT minted
     * ```
     * @param signedPayload - the previously generated payload and signature with {@link Erc721SignatureMinting.generate}
     */
    mint(signedPayload: SignedPayload721): Promise<TransactionResultWithId>;
    /**
     * Mint any number of dynamically generated NFT at once
     * @remarks Mint multiple dynamic NFTs in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
     * @param signedPayloads - the array of signed payloads to mint
     */
    mintBatch(signedPayloads: SignedPayload721[]): Promise<TransactionResultWithId[]>;
    /**
     * Verify that a payload is correctly signed
     * @param signedPayload - the payload to verify
     */
    verify(signedPayload: SignedPayload721): Promise<boolean>;
    /**
     * Generate a signature that can be used to mint a dynamic NFT
     *
     * @remarks Takes in an NFT and some information about how it can be minted, uploads the metadata and signs it with your private key. The generated signature can then be used to mint an NFT using the exact payload and signature generated.
     *
     * @example
     * ```javascript
     * const nftMetadata = {
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const startTime = new Date();
     * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const payload = {
     *   metadata: nftMetadata, // The NFT to mint
     *   to: {{wallet_address}}, // Who will receive the NFT (or AddressZero for anyone)
     *   price: 0.5, // the price to pay for minting
     *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
     *   mintStartTime: startTime, // can mint anytime from now
     *   mintEndTime: endTime, // to 24h from now,
     *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
     *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
     *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
     * };
     *
     * const signedPayload = contract.signature.generate(payload);
     * // now anyone can use these to mint the NFT using `contract.signature.mint(signedPayload)`
     * ```
     * @param mintRequest - the payload to sign
     * @returns the signed payload and the corresponding signature
     */
    generate(mintRequest: PayloadToSign721): Promise<SignedPayload721>;
    /**
     * Genrate a batch of signatures that can be used to mint many dynamic NFTs.
     *
     * @remarks See {@link Erc721SignatureMinting.generate}
     *
     * @param payloadsToSign - the payloads to sign
     * @returns an array of payloads and signatures
     */
    generateBatch(payloadsToSign: PayloadToSign721[]): Promise<SignedPayload721[]>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * Maps a payload to the format expected by the contract
     *
     * @internal
     *
     * @param mintRequest - The payload to map.
     * @returns - The mapped payload.
     */
    private mapPayloadToContractStruct;
}
