/// <reference types="node" />
import { BigNumber, BytesLike, CallOverrides, Signer, providers } from "ethers";
import type { CONTRACTS_MAP, KNOWN_CONTRACTS_MAP } from "../contracts/maps";
declare type List<A = any> = ReadonlyArray<A>;
declare type Class<P extends List = any[], R extends object = object> = {
    new (...args: P): R;
};
declare type Instance<C extends Class> = C extends Class<any[], infer R> ? R : any;
declare type TBoolean = 0 | 1;
declare type If<B extends TBoolean, Then, Else = never> = B extends 1 ? Then : Else;
declare type Equals<A1, A2> = (<A>() => A extends A2 ? 1 : 0) extends <A>() => A extends A1 ? 1 : 0 ? 1 : 0;
export declare type ContractType = keyof typeof CONTRACTS_MAP;
export declare type ValidContractClass = ValueOf<typeof KNOWN_CONTRACTS_MAP>;
export declare type ValidContractInstance = Instance<ValidContractClass>;
export declare type ContractForContractType<TContractType extends ContractType> = Instance<typeof CONTRACTS_MAP[TContractType]>;
export declare type NetworkOrSignerOrProvider = providers.Networkish | Signer | providers.Provider;
export declare type ValueOf<T> = T[keyof T];
export declare type SignerOrProvider = Signer | providers.Provider;
export declare type BufferOrStringWithName = {
    data: Buffer | string;
    name?: string;
};
declare type JsonLiteral = boolean | null | number | string;
declare type JsonLiteralOrFileOrBuffer = JsonLiteral | FileOrBuffer;
export declare type Json = JsonLiteralOrFileOrBuffer | JsonObject | Json[];
export declare type JsonObject = {
    [key: string]: Json;
};
export declare type FileOrBuffer = File | Buffer | BufferOrStringWithName;
declare type TransactionResultWithMetadata<T = unknown> = {
    receipt: providers.TransactionReceipt;
    data: () => Promise<T>;
};
export declare type TransactionResultWithId<T = never> = TransactionResult<T> & {
    id: BigNumber;
};
export declare type TransactionResultWithAddress<T = never> = TransactionResult<T> & {
    address: string;
};
export declare type TransactionResult<T = never> = If<Equals<T, never>, Omit<TransactionResultWithMetadata, "data">, TransactionResultWithMetadata<T>>;
/**
 * Forward Request Message that's used for gasless transaction
 * @public
 */
export declare type ForwardRequestMessage = {
    from: string;
    to: string;
    value: string;
    gas: string;
    nonce: string;
    data: BytesLike;
};
/**
 * EIP-2612 token permit message for gasless transaction
 * @public
 */
export declare type PermitRequestMessage = {
    to: string;
    owner: string;
    spender: string;
    value: number | string;
    nonce: number | string;
    deadline: number | string;
    v: number;
    r: string;
    s: string;
};
/**
 * transaction message contains information that's needed to execute a gasless transaction
 */
export interface GaslessTransaction {
    from: string;
    to: string;
    data: string;
    chainId: number;
    gasLimit: BigNumber;
    functionName: string;
    functionArgs: any[];
    callOverrides: CallOverrides;
}
export {};
