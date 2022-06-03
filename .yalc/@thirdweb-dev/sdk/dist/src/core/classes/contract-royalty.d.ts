import { IRoyalty, IThirdwebContract, ThirdwebContract } from "contracts";
import { CommonRoyaltySchema } from "../../schema/contracts/common";
import { ContractMetadata, IGenericSchemaType } from "./contract-metadata";
import { ContractWrapper } from "./contract-wrapper";
import { z } from "zod";
import { TransactionResult } from "../types";
import { BigNumberish } from "ethers";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * Handle contract royalties
 * @remarks Configure royalties for an entire contract or a particular token.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
 * await contract.roles.setTokenRoyaltyInfo(tokenId, {
 *   seller_fee_basis_points: 100, // 1% royalty fee
 *   fee_recipient: "0x...", // the fee recipient
 * });
 * ```
 * @public
 */
export declare class ContractRoyalty<TContract extends IRoyalty & (IThirdwebContract | ThirdwebContract), TSchema extends IGenericSchemaType> implements DetectableFeature {
    featureName: "Royalty";
    private contractWrapper;
    private metadata;
    constructor(contractWrapper: ContractWrapper<TContract>, metadata: ContractMetadata<TContract, TSchema>);
    /**
     * Gets the royalty recipient and BPS (basis points) of the contract
     * @returns - The royalty recipient and BPS
     */
    getDefaultRoyaltyInfo(): Promise<{
        seller_fee_basis_points: number;
        fee_recipient: string;
    }>;
    /**
     * Gets the royalty recipient and BPS (basis points) of a particular token
     * @returns - The royalty recipient and BPS
     */
    getTokenRoyaltyInfo(tokenId: BigNumberish): Promise<{
        seller_fee_basis_points: number;
        fee_recipient: string;
    }>;
    /**
     * Set the royalty recipient and fee for a contract
     * @param royaltyData - the royalty recipient and fee
     */
    setDefaultRoyaltyInfo(royaltyData: z.input<typeof CommonRoyaltySchema>): Promise<TransactionResult<z.output<typeof CommonRoyaltySchema>>>;
    /**
     * Set the royalty recipient and fee for a particular token
     * @param tokenId - the token id
     * @param royaltyData - the royalty recipient and fee
     */
    setTokenRoyaltyInfo(tokenId: BigNumberish, royaltyData: z.input<typeof CommonRoyaltySchema>): Promise<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<{
            seller_fee_basis_points: number;
            fee_recipient: string;
        }>;
    }>;
}
