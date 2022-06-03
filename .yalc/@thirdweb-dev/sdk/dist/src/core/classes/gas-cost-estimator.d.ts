import { ContractWrapper } from "./contract-wrapper";
import { BaseContract } from "ethers";
/**
 * Estimates the gas cost of Contract calls
 * @public
 */
export declare class GasCostEstimator<TContract extends BaseContract> {
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Estimates the cost of gas in native token of the current chain
     * @returns the estimated price in native currency (ETH, MATIC, etc) of calling this function
     */
    gasCostOf(fn: keyof TContract["functions"] | (string & {}), args: Parameters<TContract["functions"][typeof fn]> | any[]): Promise<string>;
    /**
     * Returns the current gas price in gwei
     */
    currentGasPriceInGwei(): Promise<string>;
}
