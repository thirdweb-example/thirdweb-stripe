import { Signer, ContractFactory, BytesLike, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockContract, MockContractInterface } from "../MockContract";
declare type MockContractConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockContract__factory extends ContractFactory {
    constructor(...args: MockContractConstructorParams);
    deploy(_name: BytesLike, _version: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MockContract>;
    getDeployTransaction(_name: BytesLike, _version: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MockContract;
    connect(signer: Signer): MockContract__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516100ff3803806100ff83398101604081905261002f9161004d565b6000919091556001805460ff191660ff909216919091179055610083565b6000806040838503121561006057600080fd5b82519150602083015160ff8116811461007857600080fd5b809150509250929050565b606e806100916000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063a0a8e460146037578063cb2ef6f7146051575b600080fd5b60015460405160ff90911681526020015b60405180910390f35b600054604051908152602001604856fea164736f6c634300080c000a";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): MockContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockContract;
}
export {};
