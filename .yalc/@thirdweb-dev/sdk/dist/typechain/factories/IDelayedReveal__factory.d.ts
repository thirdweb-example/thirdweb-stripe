import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDelayedReveal, IDelayedRevealInterface } from "../IDelayedReveal";
export declare class IDelayedReveal__factory {
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
    static createInterface(): IDelayedRevealInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDelayedReveal;
}
