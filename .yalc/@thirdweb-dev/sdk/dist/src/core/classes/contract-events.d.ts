import { ContractWrapper } from "./contract-wrapper";
import { BaseContract, providers } from "ethers";
import { ListenerFn } from "eventemitter3";
/**
 * Listen to Contract events in real time
 * @public
 */
export declare class ContractEvents<TContract extends BaseContract> {
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Subscribe to transactions in this contract.
     * @remarks Will emit an "event" object containing the transaction status ('submitted' and 'completed') and hash
     * @example
     * ```javascript
     * contract.events.addTransactionListener((event) => {
     *   console.log(event);
     * }
     * ```
     * @param listener - the receiver that will be called on every transaction
     * @public
     */
    addTransactionListener(listener: ListenerFn): void;
    /**
     * Remove a transaction listener
     * @param listener - the receiver to remove
     * @public
     */
    removeTransactionListener(listener: ListenerFn): void;
    /**
     * Subscribe to contract events
     * @remarks You can add a listener for any contract event to run a function when
     * the event is emitted. For example, if you wanted to listen for a "TokensMinted" event,
     * you could do the following:
     * @example
     * ```javascript
     * contract.events.addEventListener("TokensMinted", (event) => {
     *   console.log(event);
     * });
     * ```
     * @public
     * @param eventName - the event name as defined in the contract
     * @param listener - the receiver that will be called on every new event
     */
    addEventListener(eventName: keyof TContract["filters"] | (string & {}), listener: (event: Record<string, any>) => void): void;
    /**
     * @public
     * @param eventName - the event name as defined in the contract
     * @param listener - the listener to unregister
     */
    removeEventListener(eventName: keyof TContract["filters"] | (string & {}), listener: providers.Listener): void;
    /**
     * Remove all listeners on this contract
     */
    removeAllListeners(): void;
}
