import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { LazyMint, LazyMintInterface } from "../LazyMint";
export declare class LazyMint__factory {
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
    static createInterface(): LazyMintInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LazyMint;
}
