import { z } from "zod";
/**
 * @internal
 */
export declare const AirdropAddressInput: z.ZodObject<{
    address: z.ZodEffects<z.ZodString, string, string>;
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
}, "strip", z.ZodTypeAny, {
    address: string;
    quantity: string;
}, {
    quantity?: string | number | undefined;
    address: string;
}>;
/**
 * @internal
 */
export declare const AirdropInputSchema: z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
    address: string;
    quantity: string;
}[], string[]>, z.ZodArray<z.ZodObject<{
    address: z.ZodEffects<z.ZodString, string, string>;
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
}, "strip", z.ZodTypeAny, {
    address: string;
    quantity: string;
}, {
    quantity?: string | number | undefined;
    address: string;
}>, "many">]>;
