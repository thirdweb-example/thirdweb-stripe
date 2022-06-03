import { IPrimarySale } from "contracts";
import { ContractWrapper } from "./contract-wrapper";
import { TransactionResult } from "../types";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * Handle primary sales recipients
 * @remarks Configure primary sale recipients for an entire contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const salesRecipient = await contract.sales.getRecipient();
 * await contract.roles.setRecipient(recipientWalletAddress);
 * ```
 * @public
 */
export declare class ContractPrimarySale<TContract extends IPrimarySale> implements DetectableFeature {
    featureName: "PrimarySale";
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Get the primary sale recipient.
     * @returns the wallet address.
     */
    getRecipient(): Promise<string>;
    /**
     * Set the primary sale recipient
     * @param recipient - the wallet address
     */
    setRecipient(recipient: string): Promise<TransactionResult>;
}
