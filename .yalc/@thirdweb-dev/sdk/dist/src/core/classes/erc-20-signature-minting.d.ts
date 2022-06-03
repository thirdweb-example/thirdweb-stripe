import { PayloadToSign20, SignedPayload20 } from "../../schema/contracts/common/signature";
import { TransactionResult } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { TokenERC20 } from "contracts";
import { ContractRoles } from "./contract-roles";
import { Token } from "../../contracts";
/**
 * Enables generating ERC20 Tokens with rules and an associated signature, which can then be minted by anyone securely
 * @public
 */
export declare class Erc20SignatureMinting {
    private contractWrapper;
    private roles;
    constructor(contractWrapper: ContractWrapper<TokenERC20>, roles: ContractRoles<TokenERC20, typeof Token.contractRoles[number]>);
    /**
     * Mint tokens from a signature
     *
     * @remarks Mint a certain amount of tokens from a previously generated signature.
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
     * @param signedPayload - the previously generated payload and signature with {@link Erc20SignatureMinting.generate}
     */
    mint(signedPayload: SignedPayload20): Promise<TransactionResult>;
    /**
     * Mint any number of generated tokens signatures at once
     * @remarks Mint multiple token signatures in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
     * @param signedPayloads - the array of signed payloads to mint
     */
    mintBatch(signedPayloads: SignedPayload20[]): Promise<TransactionResult>;
    /**
     * Verify that a payload is correctly signed
     * @param signedPayload - the payload to verify
     */
    verify(signedPayload: SignedPayload20): Promise<boolean>;
    /**
     * Generate a signature that can be used to mint a certain amount of tokens
     *
     * @remarks Takes in a quantity of tokens, some conditions for how it can be minted and signs it with your private key. The generated signature can then be used to mint those tokens using the exact payload and signature generated.
     *
     * @example
     * ```javascript
     * const startTime = new Date();
     * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const payload = {
     *   quantity: 4.2, // The quantity of tokens to be minted
     *   to: {{wallet_address}}, // Who will receive the tokens (or AddressZero for anyone)
     *   price: 0.5, // the price to pay for minting those tokens
     *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
     *   mintStartTime: startTime, // can mint anytime from now
     *   mintEndTime: endTime, // to 24h from now,
     *   primarySaleRecipient: "0x...", // custom sale recipient for this token mint
     * };
     *
     * const signedPayload = contract.signature.generate(payload);
     * // now anyone can use these to mint the NFT using `contract.signature.mint(signedPayload)`
     * ```
     * @param mintRequest - the payload to sign
     * @returns the signed payload and the corresponding signature
     */
    generate(mintRequest: PayloadToSign20): Promise<SignedPayload20>;
    /**
     * Generate a batch of signatures that can be used to mint many token signatures.
     *
     * @remarks See {@link Erc20SignatureMinting.generate}
     *
     * @param payloadsToSign - the payloads to sign
     * @returns an array of payloads and signatures
     */
    generateBatch(payloadsToSign: PayloadToSign20[]): Promise<SignedPayload20[]>;
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
