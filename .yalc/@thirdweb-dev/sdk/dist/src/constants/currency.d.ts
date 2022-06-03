import { ChainId, SUPPORTED_CHAIN_ID } from "./chains";
import { NativeToken } from "../types/currency";
/**
 * @public
 */
export declare const NATIVE_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
/**
 * @public
 */
export declare const NATIVE_TOKENS: Record<SUPPORTED_CHAIN_ID | ChainId.Hardhat, NativeToken>;
/**
 * Returns the native token for a given chain
 * @param chainId - the chain id
 * @public
 */
export declare function getNativeTokenByChainId(chainId: ChainId): NativeToken;
