import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILazyMint, ILazyMintInterface } from "../ILazyMint";
export declare class ILazyMint__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ILazyMintInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILazyMint;
}
