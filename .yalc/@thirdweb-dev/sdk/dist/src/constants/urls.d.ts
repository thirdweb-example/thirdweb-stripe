import { ethers } from "ethers";
import { SignerOrProvider } from "../core/types";
/**
 * @internal
 */
export declare const DEFAULT_IPFS_GATEWAY = "https://gateway.ipfscdn.io/ipfs/";
/**
 * @internal
 */
export declare const PUBLIC_GATEWAYS: string[];
/**
 * @internal
 */
export declare const TW_IPFS_SERVER_URL = "https://upload.nftlabs.co";
/**
 * @internal
 */
export declare const PINATA_IPFS_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";
/**
 * @internal
 */
export declare type ChainOrRpc = "mumbai" | "polygon" | "matic" | "rinkeby" | "goerli" | "mainnet" | "ethereum" | "fantom" | "avalanche" | (string & {});
/**
 * @internal
 * @param network - the chain name or rpc url
 * @returns the rpc url for that chain
 */
export declare function getProviderForNetwork(network: ChainOrRpc | SignerOrProvider): string | ethers.Signer | ethers.providers.Provider;
/**
 *
 * @param network - the chain name or rpc url
 * @param chainId - the optional chain id
 * @returns the provider
 */
export declare function getReadOnlyProvider(network: string, chainId?: number): ethers.providers.BaseProvider;
