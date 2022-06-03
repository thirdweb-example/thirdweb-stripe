import { z } from "zod";
import { AirdropInputSchema } from "../../schema/contracts/common/airdrop";
/**
 * Input model to pass a list of addresses + amount to transfer to each one
 * @public
 */
export declare type AirdropInput = z.input<typeof AirdropInputSchema>;
