import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DelayedReveal, DelayedRevealInterface } from "../DelayedReveal";
export declare class DelayedReveal__factory {
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
    static createInterface(): DelayedRevealInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DelayedReveal;
}
