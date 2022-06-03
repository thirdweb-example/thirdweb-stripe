import { IThirdwebContract, ThirdwebContract } from "contracts";
import { z } from "zod";
import { IStorage } from "../interfaces/IStorage";
import { ContractWrapper } from "./contract-wrapper";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * @internal
 */
export interface IGenericSchemaType {
    deploy: z.AnyZodObject;
    input: z.AnyZodObject;
    output: z.AnyZodObject;
}
/**
 * Handles metadata for a Contract
 * @remarks Read and update metadata for this contract
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const metadata = await contract.metadata.get();
 * await contract.metadata.set({
 *   name: "My Contract",
 *   description: "My contract description"
 * })
 * ```
 * @public
 */
export declare class ContractMetadata<TContract extends IThirdwebContract | ThirdwebContract, TSchema extends IGenericSchemaType> implements DetectableFeature {
    featureName: "ContractMetadata";
    private contractWrapper;
    private schema;
    private storage;
    constructor(contractWrapper: ContractWrapper<TContract>, schema: TSchema, storage: IStorage);
    /**
     * @internal
     */
    parseOutputMetadata(metadata: any): z.output<TSchema["output"]>;
    /**
     * @internal
     */
    parseInputMetadata(metadata: any): z.input<TSchema["input"]>;
    /**
     *
     * @returns the metadata of the given contract
     */
    get(): Promise<z.output<TSchema["output"]>>;
    /**
     *
     * @param metadata - the metadata to set
     * @returns
     */
    set(metadata: z.input<TSchema["input"]>): Promise<((<A>() => A extends never ? 1 : 0) extends <A_1>() => A_1 extends z.output<TSchema["output"]> ? 1 : 0 ? 1 : 0) extends infer T ? T extends ((<A>() => A extends never ? 1 : 0) extends <A_1>() => A_1 extends z.output<TSchema["output"]> ? 1 : 0 ? 1 : 0) ? T extends 1 ? Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data"> : {
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<z.output<TSchema["output"]>>;
    } : never : never>;
    update(metadata: Partial<z.input<TSchema["input"]>>): Promise<((<A>() => A extends never ? 1 : 0) extends <A_1>() => A_1 extends z.output<TSchema["output"]> ? 1 : 0 ? 1 : 0) extends infer T ? T extends ((<A>() => A extends never ? 1 : 0) extends <A_1>() => A_1 extends z.output<TSchema["output"]> ? 1 : 0 ? 1 : 0) ? T extends 1 ? Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data"> : {
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<z.output<TSchema["output"]>>;
    } : never : never>;
    /**
     *
     * @internal
     * @param metadata - the metadata to set
     * @returns
     */
    _parseAndUploadMetadata(metadata: z.input<TSchema["input"]>): Promise<string>;
    private supportsContractMetadata;
}
