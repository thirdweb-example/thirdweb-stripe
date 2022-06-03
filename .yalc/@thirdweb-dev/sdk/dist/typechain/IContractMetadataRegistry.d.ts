import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IContractMetadataRegistryInterface extends utils.Interface {
    functions: {
        "registerMetadata(address,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "registerMetadata"): FunctionFragment;
    encodeFunctionData(functionFragment: "registerMetadata", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "registerMetadata", data: BytesLike): Result;
    events: {
        "MetadataRegistered(address,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "MetadataRegistered"): EventFragment;
}
export interface MetadataRegisteredEventObject {
    contractAddress: string;
    metadataUri: string;
}
export declare type MetadataRegisteredEvent = TypedEvent<[
    string,
    string
], MetadataRegisteredEventObject>;
export declare type MetadataRegisteredEventFilter = TypedEventFilter<MetadataRegisteredEvent>;
export interface IContractMetadataRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IContractMetadataRegistryInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        registerMetadata(contractAddress: string, metadataUri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    registerMetadata(contractAddress: string, metadataUri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        registerMetadata(contractAddress: string, metadataUri: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "MetadataRegistered(address,string)"(contractAddress?: string | null, metadataUri?: null): MetadataRegisteredEventFilter;
        MetadataRegistered(contractAddress?: string | null, metadataUri?: null): MetadataRegisteredEventFilter;
    };
    estimateGas: {
        registerMetadata(contractAddress: string, metadataUri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        registerMetadata(contractAddress: string, metadataUri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
