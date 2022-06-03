import { ContractWrapper } from "./contract-wrapper";
import { IMintableERC20 } from "contracts";
import { TransactionResult } from "../types";
import { Erc20 } from "./erc-20";
import { Amount } from "../../types";
import { Erc20BatchMintable } from "./erc-20-batch-mintable";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * Mint ERC20 Tokens
 * @remarks Token minting functionality that handles unit parsing for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */
export declare class Erc20Mintable implements DetectableFeature {
    featureName: "ERC20Mintable";
    private contractWrapper;
    private erc20;
    /**
     * Batch mint Tokens to many addresses
     */
    batch: Erc20BatchMintable | undefined;
    constructor(erc20: Erc20, contractWrapper: ContractWrapper<IMintableERC20>);
    /**
     * Mint Tokens
     *
     * @remarks Mint tokens to a specified address.
     *
     * @example
     * ```javascript
     * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
     * const amount = "1.5"; // The amount of this token you want to mint
     * await contract.token.mint.to(toAddress, amount);
     * ```
     */
    to(to: string, amount: Amount): Promise<TransactionResult>;
    private detectErc20BatchMintable;
}
