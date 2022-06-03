import { BaseContract, Event } from "ethers";
import { ContractWrapper } from "./contract-wrapper";
export declare class ContractAnalytics<TContract extends BaseContract> {
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    query(eventName: keyof TContract["filters"] | string): Promise<Event[]>;
}
