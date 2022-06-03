import { BigNumber } from "ethers";
import { z } from "zod";
import { Json } from "../core/types";
export declare const MAX_BPS = 10000;
export declare const FileBufferOrStringSchema: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
export declare type FileBufferOrString = z.output<typeof FileBufferOrStringSchema>;
export declare const BytesLikeSchema: z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>;
export declare const BigNumberSchema: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
export declare const BigNumberishSchema: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>;
export declare const BasisPointsSchema: z.ZodNumber;
export declare const PercentSchema: z.ZodNumber;
export declare const JsonLiteral: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodNull]>;
export declare const JsonSchema: z.ZodSchema<Json>;
export declare const JsonObjectSchema: z.ZodRecord<z.ZodString, z.ZodType<Json, z.ZodTypeDef, Json>>;
export declare const HexColor: z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>;
export declare const AddressSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const PriceSchema: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
export declare const RawDateSchema: z.ZodEffects<z.ZodDate, BigNumber, Date>;
/**
 * Default to now
 */
export declare const StartDateSchema: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
/**
 * Default to 10 years from now
 */
export declare const EndDateSchema: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
