import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IClaimCondition {
    type ClaimConditionStruct = {
        startTimestamp: BigNumberish;
        maxClaimableSupply: BigNumberish;
        supplyClaimed: BigNumberish;
        quantityLimitPerTransaction: BigNumberish;
        waitTimeInSecondsBetweenClaims: BigNumberish;
        merkleRoot: BytesLike;
        pricePerToken: BigNumberish;
        currency: string;
    };
    type ClaimConditionStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string
    ] & {
        startTimestamp: BigNumber;
        maxClaimableSupply: BigNumber;
        supplyClaimed: BigNumber;
        quantityLimitPerTransaction: BigNumber;
        waitTimeInSecondsBetweenClaims: BigNumber;
        merkleRoot: string;
        pricePerToken: BigNumber;
        currency: string;
    };
}
export declare namespace IDrop {
    type AllowlistProofStruct = {
        proof: BytesLike[];
        maxQuantityInAllowlist: BigNumberish;
    };
    type AllowlistProofStructOutput = [string[], BigNumber] & {
        proof: string[];
        maxQuantityInAllowlist: BigNumber;
    };
}
export interface IDropInterface extends utils.Interface {
    functions: {
        "claim(address,uint256,address,uint256,(bytes32[],uint256),bytes)": FunctionFragment;
        "setClaimConditions((uint256,uint256,uint256,uint256,uint256,bytes32,uint256,address)[],bool,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim" | "setClaimConditions"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        IDrop.AllowlistProofStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [IClaimCondition.ClaimConditionStruct[], boolean, BytesLike]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    events: {
        "ClaimConditionsUpdated(tuple[])": EventFragment;
        "TokensClaimed(uint256,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimConditionsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
}
export interface ClaimConditionsUpdatedEventObject {
    claimConditions: IClaimCondition.ClaimConditionStructOutput[];
}
export declare type ClaimConditionsUpdatedEvent = TypedEvent<[
    IClaimCondition.ClaimConditionStructOutput[]
], ClaimConditionsUpdatedEventObject>;
export declare type ClaimConditionsUpdatedEventFilter = TypedEventFilter<ClaimConditionsUpdatedEvent>;
export interface TokensClaimedEventObject {
    claimConditionIndex: BigNumber;
    claimer: string;
    receiver: string;
    startTokenId: BigNumber;
    quantityClaimed: BigNumber;
}
export declare type TokensClaimedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
], TokensClaimedEventObject>;
export declare type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;
export interface IDrop extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDropInterface;
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
        claim(receiver: string, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, allowlistProof: IDrop.AllowlistProofStruct, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setClaimConditions(phases: IClaimCondition.ClaimConditionStruct[], resetClaimEligibility: boolean, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    claim(receiver: string, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, allowlistProof: IDrop.AllowlistProofStruct, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setClaimConditions(phases: IClaimCondition.ClaimConditionStruct[], resetClaimEligibility: boolean, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(receiver: string, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, allowlistProof: IDrop.AllowlistProofStruct, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setClaimConditions(phases: IClaimCondition.ClaimConditionStruct[], resetClaimEligibility: boolean, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimConditionsUpdated(tuple[])"(claimConditions?: null): ClaimConditionsUpdatedEventFilter;
        ClaimConditionsUpdated(claimConditions?: null): ClaimConditionsUpdatedEventFilter;
        "TokensClaimed(uint256,address,address,uint256,uint256)"(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, startTokenId?: null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, startTokenId?: null, quantityClaimed?: null): TokensClaimedEventFilter;
    };
    estimateGas: {
        claim(receiver: string, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, allowlistProof: IDrop.AllowlistProofStruct, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setClaimConditions(phases: IClaimCondition.ClaimConditionStruct[], resetClaimEligibility: boolean, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(receiver: string, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, allowlistProof: IDrop.AllowlistProofStruct, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setClaimConditions(phases: IClaimCondition.ClaimConditionStruct[], resetClaimEligibility: boolean, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
