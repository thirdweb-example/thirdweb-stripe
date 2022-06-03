import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC2771ContextUpgradeable, ERC2771ContextUpgradeableInterface } from "../ERC2771ContextUpgradeable";
export declare class ERC2771ContextUpgradeable__factory {
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
    static createInterface(): ERC2771ContextUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC2771ContextUpgradeable;
}
