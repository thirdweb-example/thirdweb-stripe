import { ChainId, SUPPORTED_CHAIN_ID } from "./chains";
/**
 * @internal
 */
export declare const OZ_DEFENDER_FORWARDER_ADDRESS = "0xc82BbE41f2cF04e3a8efA18F7032BDD7f6d98a81";
/**
 * @internal
 */
export declare const CONTRACT_ADDRESSES: Record<SUPPORTED_CHAIN_ID, {
    biconomyForwarder: string;
    twFactory: string;
    twRegistry: string;
    twBYOCRegistry: string;
    contractDeployer: string;
    contractMetadataRegistry: string;
    sigMint: string;
}>;
/**
 * @internal
 */
export declare function getContractAddressByChainId(chainId: SUPPORTED_CHAIN_ID | ChainId.Hardhat, contractName: keyof typeof CONTRACT_ADDRESSES[SUPPORTED_CHAIN_ID]): string;
/**
 * @internal
 */
export declare function getContractPublisherAddress(): string;
