import { BaseContract, ethers } from "ethers";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { IStorage } from "../core";
import { AbiFunction, AbiSchema, PreDeployMetadataFetched, PublishedMetadata } from "../schema/contracts/custom";
import { z } from "zod";
import { Feature, FeatureName, FeatureWithEnabled } from "../constants/contract-features";
/**
 * @internal
 */
export declare function extractConstructorParams(predeployMetadataUri: string, storage: IStorage): Promise<{
    [x: string]: any;
    stateMutability?: string | undefined;
    components?: {
        type: string;
        name: string;
    }[] | undefined;
    type: string;
    name: string;
}[]>;
/**
 * @internal
 * @param predeployUri
 * @param storage
 */
export declare function extractFunctions(predeployMetadataUri: string, storage: IStorage): Promise<AbiFunction[]>;
/**
 *
 * @param abi
 * @returns
 * @internal
 */
export declare function extractConstructorParamsFromAbi(abi: z.input<typeof AbiSchema>): {
    [x: string]: any;
    stateMutability?: string | undefined;
    components?: {
        type: string;
        name: string;
    }[] | undefined;
    type: string;
    name: string;
}[];
/**
 * @internal
 * @param abi
 */
export declare function extractFunctionsFromAbi(abi: z.input<typeof AbiSchema>): AbiFunction[];
/**
 * @internal
 * @param address
 * @param provider
 */
export declare function resolveContractUriFromAddress(address: string, provider: ethers.providers.Provider): Promise<string | undefined>;
/**
 * @internal
 * @param address
 * @param provider
 * @param storage
 */
export declare function fetchContractMetadataFromAddress(address: string, provider: ethers.providers.Provider, storage: IStorage): Promise<PublishedMetadata>;
/**
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
export declare function fetchPreDeployMetadata(publishMetadataUri: string, storage: IStorage): Promise<PreDeployMetadataFetched>;
/**
 * @internal
 * @param bytecode
 * @param storage
 */
export declare function fetchContractMetadataFromBytecode(bytecode: string, storage: IStorage): Promise<PublishedMetadata>;
/**
 * Processes ALL supported features and sets whether the passed in abi supports each individual feature
 * @internal
 * @param abi
 * @param features
 * @returns the nested struct of all features and whether they're detected in the abi
 */
export declare function detectFeatures(abi: z.input<typeof AbiSchema>, features?: Record<string, Feature>): Record<string, FeatureWithEnabled>;
/**
 * Checks whether the given ABI supports a given feature
 * @internal
 * @param abi
 * @param featureName
 */
export declare function isFeatureEnabled(abi: z.input<typeof AbiSchema>, featureName: FeatureName): boolean;
/**
 * Type guard for contractWrappers depending on passed feature name
 * @internal
 * @param contractWrapper
 * @param featureName
 */
export declare function detectContractFeature<T extends BaseContract>(contractWrapper: ContractWrapper<BaseContract>, featureName: FeatureName): contractWrapper is ContractWrapper<T>;
/**
 * @internal
 * @param contractWrapper
 * @param functionName
 */
export declare function hasFunction<TContract extends BaseContract>(functionName: string, contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<TContract>;
