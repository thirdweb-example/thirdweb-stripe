import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface LazyMintInterface extends utils.Interface {
    functions: {
        "getBaseURICount()": FunctionFragment;
        "getBatchIdAtIndex(uint256)": FunctionFragment;
        "lazyMint(uint256,string,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getBaseURICount" | "getBatchIdAtIndex" | "lazyMint"): FunctionFragment;
    encodeFunctionData(functionFragment: "getBaseURICount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBatchIdAtIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "lazyMint", values: [BigNumberish, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "getBaseURICount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBatchIdAtIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lazyMint", data: BytesLike): Result;
    events: {};
}
export interface LazyMint extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LazyMintInterface;
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
        getBaseURICount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        lazyMint(amount: BigNumberish, baseURIForTokens: string, encryptedBaseURI: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
    getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    lazyMint(amount: BigNumberish, baseURIForTokens: string, encryptedBaseURI: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        lazyMint(amount: BigNumberish, baseURIForTokens: string, encryptedBaseURI: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        lazyMint(amount: BigNumberish, baseURIForTokens: string, encryptedBaseURI: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getBaseURICount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lazyMint(amount: BigNumberish, baseURIForTokens: string, encryptedBaseURI: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
