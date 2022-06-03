import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ThirdwebContract, ThirdwebContractInterface } from "../ThirdwebContract";
declare type ThirdwebContractConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ThirdwebContract__factory extends ContractFactory {
    constructor(...args: ThirdwebContractConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ThirdwebContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ThirdwebContract;
    connect(signer: Signer): ThirdwebContract__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061022a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806310ce19a41461004657806313af40351461005b5780638da5cb5b1461006e575b600080fd5b6100596100543660046101ed565b61009d565b005b6100596100693660046101ed565b610125565b600054610081906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b600154156100f25760405162461bcd60e51b815260206004820152601960248201527f4f776e657220616c726561647920696e697469616c697a65640000000000000060448201526064015b60405180910390fd5b600180556000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b0316331461017f5760405162461bcd60e51b815260206004820152600e60248201527f4e6f7420617574686f72697a656400000000000000000000000000000000000060448201526064016100e9565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff1983168117909355604080519190921680825260208201939093527f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76910160405180910390a15050565b6000602082840312156101ff57600080fd5b81356001600160a01b038116811461021657600080fd5b939250505056fea164736f6c634300080c000a";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
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
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ThirdwebContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ThirdwebContract;
}
export {};
