import { z } from "zod";
/**
 * @internal
 */
export declare const CommonContractSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const CommonContractOutputSchema: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    image: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    name: string;
}, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const CommonRoyaltySchema: z.ZodObject<{
    /**
     * The amount of royalty collected on all royalties represented as basis points.
     * The default is 0 (no royalties).
     *
     * 1 basis point = 0.01%
     *
     * For example: if this value is 100, then the royalty is 1% of the total sales.
     *
     *  @internalremarks used by OpenSea "seller_fee_basis_points"
     */
    seller_fee_basis_points: z.ZodDefault<z.ZodNumber>;
    /**
     * The address of the royalty recipient. All royalties will be sent
     * to this address.
     * @internalremarks used by OpenSea "fee_recipient"
     */
    fee_recipient: z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    seller_fee_basis_points: number;
    fee_recipient: string;
}, {
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
}>;
/**
 * @internal
 */
export declare const CommonPrimarySaleSchema: z.ZodObject<{
    /**
     * primary sale recipient address
     */
    primary_sale_recipient: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    primary_sale_recipient: string;
}, {
    primary_sale_recipient: string;
}>;
/**
 * @internal
 */
export declare const CommonPlatformFeeSchema: z.ZodObject<{
    /**
     * platform fee basis points
     */
    platform_fee_basis_points: z.ZodDefault<z.ZodNumber>;
    /**
     * platform fee recipient address
     */
    platform_fee_recipient: z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    platform_fee_basis_points: number;
    platform_fee_recipient: string;
}, {
    platform_fee_basis_points?: number | undefined;
    platform_fee_recipient?: string | undefined;
}>;
/**
 * @internal
 */
export declare const CommonTrustedForwarderSchema: z.ZodObject<{
    trusted_forwarders: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
}, "strip", z.ZodTypeAny, {
    trusted_forwarders: string[];
}, {
    trusted_forwarders?: string[] | undefined;
}>;
/**
 * @internal
 */
export declare const CommonSymbolSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol?: string | undefined;
}>;
export * from "./claim-conditions";
export * from "./currency";
export * from "./signature";
export * from "./snapshots";
