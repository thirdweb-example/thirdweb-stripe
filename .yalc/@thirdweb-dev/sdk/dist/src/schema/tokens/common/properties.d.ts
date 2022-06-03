import { z } from "zod";
/**
 * @internal
 */
export declare const OptionalPropertiesInput: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, "many">, z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>]>>;
