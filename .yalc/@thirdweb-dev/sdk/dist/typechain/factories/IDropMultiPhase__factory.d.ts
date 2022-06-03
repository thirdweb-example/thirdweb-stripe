import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDropMultiPhase, IDropMultiPhaseInterface } from "../IDropMultiPhase";
export declare class IDropMultiPhase__factory {
    static readonly abi: {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IDropMultiPhaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDropMultiPhase;
}
