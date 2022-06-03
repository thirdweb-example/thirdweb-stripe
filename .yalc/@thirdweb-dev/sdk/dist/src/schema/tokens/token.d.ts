import { z } from "zod";
/**
 * @internal
 */
export declare const TokenMintInputSchema: z.ZodObject<{
    toAddress: z.ZodEffects<z.ZodString, string, string>;
    amount: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}, "strip", z.ZodTypeAny, {
    toAddress: string;
    amount: string;
}, {
    toAddress: string;
    amount: string | number;
}>;
/**
 * @public
 */
export declare type TokenMintInput = z.input<typeof TokenMintInputSchema>;
