import { NetworkOrSignerOrProvider, TransactionResult } from "../types";
import { SDKOptions } from "../../schema/sdk-options";
import { IStorage } from "../interfaces";
import { RPCConnectionHandler } from "./rpc-connection-handler";
import { BytesLike, ContractInterface } from "ethers";
import { AbiFunction, ContractParam, PublishedContract } from "../../schema/contracts/custom";
/**
 * Handles publishing contracts (EXPERIMENTAL)
 * @internal
 */
export declare class ContractPublisher extends RPCConnectionHandler {
    private storage;
    private publisher;
    constructor(network: NetworkOrSignerOrProvider, options: SDKOptions, storage: IStorage);
    updateSignerOrProvider(network: NetworkOrSignerOrProvider): void;
    /**
     * @internal
     * @param metadataUri
     */
    extractConstructorParams(metadataUri: string): Promise<ContractParam[]>;
    /**
     * @internal
     * @param predeployMetadataUri
     */
    extractFunctions(predeployMetadataUri: string): Promise<AbiFunction[]>;
    fetchFullContractMetadataFromPredeployUri(predeployUri: string): Promise<import("../../schema/contracts/custom").PreDeployMetadataFetched>;
    /**
     * @internal
     * @param address
     */
    fetchContractMetadataFromAddress(address: string): Promise<import("../../schema/contracts/custom").PublishedMetadata>;
    /**
     * @interface
     * @param publisherAddress
     */
    getAll(publisherAddress: string): Promise<PublishedContract[]>;
    /**
     * @internal
     * @param publisherAddress
     * @param contractId
     */
    getAllVersions(publisherAddress: string, contractId: string): Promise<PublishedContract[]>;
    getLatest(publisherAddress: string, contractId: string): Promise<PublishedContract>;
    publish(metadataUri: string): Promise<TransactionResult<PublishedContract>>;
    publishBatch(predeployUris: string[]): Promise<TransactionResult<PublishedContract>[]>;
    /**
     * @internal
     * @param publisherAddress
     * @param contractId
     * @param constructorParamValues
     * @param contractMetadata
     */
    deployPublishedContract(publisherAddress: string, contractId: string, constructorParamValues: any[]): Promise<string>;
    /**
     * @internal
     * @param publishMetadataUri
     * @param constructorParamValues
     */
    deployContract(publishMetadataUri: string, constructorParamValues: any[]): Promise<string>;
    private convertParamValues;
    /**
     * @internal
     * @param abi
     * @param bytecode
     * @param constructorParams
     */
    deployContractWithAbi(abi: ContractInterface, bytecode: BytesLike | {
        object: string;
    }, constructorParams: Array<any>): Promise<string>;
    private toPublishedContract;
}
