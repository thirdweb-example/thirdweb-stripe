import { z } from "zod";
/**
 * @internal
 */
export declare const CommonTokenInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
}, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: any;
    external_url?: any;
}, {
    [x: string]: import("../../..").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: any;
    external_url?: any;
}>;
/**
 * @internal
 */
export declare const CommonTokenOutput: z.ZodObject<z.extendShape<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
}, {
    id: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    uri: z.ZodString;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    external_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: string | null | undefined;
    external_url?: string | null | undefined;
    id: import("ethers").BigNumber;
    uri: string;
}, {
    [x: string]: import("../../..").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: string | null | undefined;
    external_url?: string | null | undefined;
    id: string | number | bigint | import("ethers").BigNumber;
    uri: string;
}>;
/**
 * @internal
 */
export declare const CommonNFTInput: z.ZodObject<z.extendShape<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
}, {
    animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    background_color: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
    properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, "many">, z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>]>>;
    attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, "many">, z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>]>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: any;
    external_url?: any;
    animation_url?: any;
    background_color?: string | undefined;
    properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
}, {
    [x: string]: import("../../..").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: any;
    external_url?: any;
    animation_url?: any;
    background_color?: string | undefined;
    properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
}>;
/**
 * @internal
 */
export declare const NFTInputOrUriSchema: z.ZodUnion<[z.ZodObject<z.extendShape<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
}, {
    animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    background_color: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
    properties: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, "many">, z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>]>>;
    attributes: z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, "many">, z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>]>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: any;
    external_url?: any;
    animation_url?: any;
    background_color?: string | undefined;
    properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
}, {
    [x: string]: import("../../..").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: any;
    external_url?: any;
    animation_url?: any;
    background_color?: string | undefined;
    properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
}>, z.ZodString]>;
/**
 * @internal
 */
export declare const CommonNFTOutput: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
}, {
    id: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    uri: z.ZodString;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    external_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, {
    animation_url: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: string | null | undefined;
    external_url?: string | null | undefined;
    animation_url?: string | null | undefined;
    id: import("ethers").BigNumber;
    uri: string;
}, {
    [x: string]: import("../../..").Json;
    name?: string | undefined;
    description?: string | null | undefined;
    image?: string | null | undefined;
    external_url?: string | null | undefined;
    animation_url?: string | null | undefined;
    id: string | number | bigint | import("ethers").BigNumber;
    uri: string;
}>;
/**
 * @public
 */
export declare type NFTMetadataInput = z.input<typeof CommonNFTInput>;
/**
 * @public
 */
export declare type NFTMetadataOrUri = z.input<typeof NFTInputOrUriSchema>;
/**
 * @public
 */
export declare type NFTMetadata = z.output<typeof CommonNFTOutput>;
/**
 * @public
 */
export declare type NFTMetadataOwner = {
    metadata: NFTMetadata;
    owner: string;
};
