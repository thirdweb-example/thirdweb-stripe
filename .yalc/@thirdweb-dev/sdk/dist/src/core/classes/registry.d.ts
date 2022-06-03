import { TWRegistry } from "contracts";
import { SDKOptions } from "../../schema/sdk-options";
import { NetworkOrSignerOrProvider } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { TransactionResult } from "..";
/**
 * @internal
 */
export declare class ContractRegistry extends ContractWrapper<TWRegistry> {
    constructor(registryAddress: string, network: NetworkOrSignerOrProvider, options?: SDKOptions);
    getContractAddresses(walletAddress: string): Promise<string[]>;
    addContract(contractAddress: string): Promise<TransactionResult>;
    addContracts(contractAddresses: string[]): Promise<TransactionResult>;
    removeContract(contractAddress: string): Promise<TransactionResult>;
    removeContracts(contractAddresses: string[]): Promise<TransactionResult>;
}
