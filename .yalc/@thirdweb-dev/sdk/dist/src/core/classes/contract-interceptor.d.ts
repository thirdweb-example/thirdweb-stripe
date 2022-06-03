import { ContractWrapper } from "./contract-wrapper";
import { BaseContract, CallOverrides } from "ethers";
/**
 * Allows overriding transaction behavior for this contract
 * @internal
 */
export declare class ContractInterceptor<TContract extends BaseContract> {
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * The next transaction executed will add/replace any overrides passed via the passed in hook.
     * @param hook - the hook to add or replace any CallOverrides (gas limit, gas price, nonce, from, value, etc...)
     */
    overrideNextTransaction(hook: () => CallOverrides): void;
}
