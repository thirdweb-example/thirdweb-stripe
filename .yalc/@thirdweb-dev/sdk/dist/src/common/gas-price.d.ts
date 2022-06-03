import { ChainId } from "../constants/chains";
import { BigNumber } from "ethers";
/**
 *
 * @returns the gas price
 * @internal
 */
export declare function getPolygonGasPriorityFee(chainId: ChainId.Polygon | ChainId.Mumbai): Promise<BigNumber>;
