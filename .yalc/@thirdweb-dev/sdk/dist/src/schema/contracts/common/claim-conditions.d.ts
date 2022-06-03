import { z } from "zod";
import { BigNumber } from "ethers";
/**
 * @internal
 */
export declare const QuantitySchema: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
/**
 * @internal
 */
export declare const ClaimConditionInputSchema: z.ZodObject<{
    startTime: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    maxQuantity: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    quantityLimitPerTransaction: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    waitInSeconds: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    merkleRootHash: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>;
    snapshot: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: string;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, string, string>;
        maxClaimable: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: string;
    }, {
        maxClaimable?: string | number | undefined;
        address: string;
    }>, "many">]>>;
}, "strip", z.ZodTypeAny, {
    snapshot?: {
        address: string;
        maxClaimable: string;
    }[] | undefined;
    startTime: BigNumber;
    currencyAddress: string;
    price: string;
    maxQuantity: string;
    quantityLimitPerTransaction: string;
    waitInSeconds: string;
    merkleRootHash: string | number[];
}, {
    snapshot?: string[] | {
        maxClaimable?: string | number | undefined;
        address: string;
    }[] | undefined;
    startTime?: Date | undefined;
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    maxQuantity?: string | number | undefined;
    quantityLimitPerTransaction?: string | number | undefined;
    waitInSeconds?: string | number | bigint | BigNumber | undefined;
    merkleRootHash?: string | number[] | undefined;
}>;
/**
 * @internal
 */
export declare const ClaimConditionInputArray: z.ZodArray<z.ZodObject<{
    startTime: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    maxQuantity: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    quantityLimitPerTransaction: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    waitInSeconds: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    merkleRootHash: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>;
    snapshot: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: string;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, string, string>;
        maxClaimable: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: string;
    }, {
        maxClaimable?: string | number | undefined;
        address: string;
    }>, "many">]>>;
}, "strip", z.ZodTypeAny, {
    snapshot?: {
        address: string;
        maxClaimable: string;
    }[] | undefined;
    startTime: BigNumber;
    currencyAddress: string;
    price: string;
    maxQuantity: string;
    quantityLimitPerTransaction: string;
    waitInSeconds: string;
    merkleRootHash: string | number[];
}, {
    snapshot?: string[] | {
        maxClaimable?: string | number | undefined;
        address: string;
    }[] | undefined;
    startTime?: Date | undefined;
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    maxQuantity?: string | number | undefined;
    quantityLimitPerTransaction?: string | number | undefined;
    waitInSeconds?: string | number | bigint | BigNumber | undefined;
    merkleRootHash?: string | number[] | undefined;
}>, "many">;
/**
 * @internal
 */
export declare const PartialClaimConditionInputSchema: z.ZodObject<{
    startTime: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>>;
    currencyAddress: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    price: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>>;
    maxQuantity: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
    quantityLimitPerTransaction: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
    waitInSeconds: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>>;
    merkleRootHash: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>>;
    snapshot: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: string;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, string, string>;
        maxClaimable: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: string;
    }, {
        maxClaimable?: string | number | undefined;
        address: string;
    }>, "many">]>>>;
}, "strip", z.ZodTypeAny, {
    snapshot?: {
        address: string;
        maxClaimable: string;
    }[] | undefined;
    startTime?: BigNumber | undefined;
    currencyAddress?: string | undefined;
    price?: string | undefined;
    maxQuantity?: string | undefined;
    quantityLimitPerTransaction?: string | undefined;
    waitInSeconds?: string | undefined;
    merkleRootHash?: string | number[] | undefined;
}, {
    snapshot?: string[] | {
        maxClaimable?: string | number | undefined;
        address: string;
    }[] | undefined;
    startTime?: Date | undefined;
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    maxQuantity?: string | number | undefined;
    quantityLimitPerTransaction?: string | number | undefined;
    waitInSeconds?: string | number | bigint | BigNumber | undefined;
    merkleRootHash?: string | number[] | undefined;
}>;
/**
 * @internal
 */
export declare const ClaimConditionOutputSchema: z.ZodObject<z.extendShape<{
    startTime: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    maxQuantity: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    quantityLimitPerTransaction: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    waitInSeconds: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    merkleRootHash: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>;
    snapshot: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: string;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, string, string>;
        maxClaimable: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: string;
    }, {
        maxClaimable?: string | number | undefined;
        address: string;
    }>, "many">]>>;
}, {
    availableSupply: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    currentMintSupply: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    currencyMetadata: z.ZodDefault<z.ZodObject<z.extendShape<{
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodNumber;
    }, {
        value: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
        displayValue: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        value: BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    }, {
        symbol: string;
        value: string | number | bigint | BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    }>>;
    price: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
    waitInSeconds: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
    startTime: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, Date, string | number | bigint | BigNumber>;
}>, "strip", z.ZodTypeAny, {
    snapshot?: {
        address: string;
        maxClaimable: string;
    }[] | undefined;
    startTime: Date;
    currencyAddress: string;
    price: BigNumber;
    maxQuantity: string;
    quantityLimitPerTransaction: string;
    waitInSeconds: BigNumber;
    merkleRootHash: string | number[];
    availableSupply: string;
    currentMintSupply: string;
    currencyMetadata: {
        symbol: string;
        value: BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    };
}, {
    snapshot?: string[] | {
        maxClaimable?: string | number | undefined;
        address: string;
    }[] | undefined;
    currencyAddress?: string | undefined;
    maxQuantity?: string | number | undefined;
    quantityLimitPerTransaction?: string | number | undefined;
    merkleRootHash?: string | number[] | undefined;
    availableSupply?: string | number | undefined;
    currentMintSupply?: string | number | undefined;
    currencyMetadata?: {
        symbol: string;
        value: string | number | bigint | BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    } | undefined;
    startTime: string | number | bigint | BigNumber;
    price: string | number | bigint | BigNumber;
    waitInSeconds: string | number | bigint | BigNumber;
}>;
