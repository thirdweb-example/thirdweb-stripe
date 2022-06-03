import { TWFactory } from "contracts";
import { z } from "zod";
import { SDKOptions } from "../../schema/sdk-options";
import { IStorage } from "../interfaces/IStorage";
import { NetworkOrSignerOrProvider, ValidContractClass } from "../types";
import { ContractWrapper } from "./contract-wrapper";
/**
 * @internal
 */
export declare class ContractFactory extends ContractWrapper<TWFactory> {
    private storage;
    constructor(factoryAddr: string, network: NetworkOrSignerOrProvider, storage: IStorage, options?: SDKOptions);
    deploy<TContract extends ValidContractClass>(contractType: TContract["contractType"], contractMetadata: z.input<TContract["schema"]["deploy"]>): Promise<string>;
    private getDeployArguments;
    private getDefaultTrustedForwarders;
}
