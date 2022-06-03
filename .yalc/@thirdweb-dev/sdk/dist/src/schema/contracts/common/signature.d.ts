import { z } from "zod";
import { ethers } from "ethers";
/**
 * @internal
 */
export declare const BaseSignaturePayloadInput: z.ZodObject<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    currencyAddress: string;
    price: string;
    to: string;
    mintStartTime: ethers.BigNumber;
    mintEndTime: ethers.BigNumber;
    uid: string;
    primarySaleRecipient: string;
}, {
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    to?: string | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
    uid?: string | undefined;
    primarySaleRecipient?: string | undefined;
}>;
/**
 * @internal
 */
export declare const Signature20PayloadInput: z.ZodObject<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}>, "strip", z.ZodTypeAny, {
    currencyAddress: string;
    price: string;
    to: string;
    mintStartTime: ethers.BigNumber;
    mintEndTime: ethers.BigNumber;
    uid: string;
    primarySaleRecipient: string;
    quantity: string;
}, {
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    to?: string | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
    uid?: string | undefined;
    primarySaleRecipient?: string | undefined;
    quantity: string | number;
}>;
/**
 * @internal
 */
export declare const Signature20PayloadOutput: z.ZodObject<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}>, {
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
}>, "strip", z.ZodTypeAny, {
    currencyAddress: string;
    price: string;
    to: string;
    mintStartTime: ethers.BigNumber;
    mintEndTime: ethers.BigNumber;
    uid: string;
    primarySaleRecipient: string;
    quantity: string;
}, {
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    to?: string | undefined;
    uid?: string | undefined;
    primarySaleRecipient?: string | undefined;
    mintStartTime: string | number | bigint | ethers.BigNumber;
    mintEndTime: string | number | bigint | ethers.BigNumber;
    quantity: string | number;
}>;
/**
 * @internal
 */
export declare const Signature721PayloadInput: z.ZodObject<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<z.extendShape<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>; /**
         * @internal
         */
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
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    currencyAddress: string;
    price: string;
    to: string;
    mintStartTime: ethers.BigNumber;
    mintEndTime: ethers.BigNumber;
    uid: string;
    primarySaleRecipient: string;
    metadata: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    };
    royaltyRecipient: string;
    royaltyBps: number;
}, {
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    to?: string | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
    uid?: string | undefined;
    primarySaleRecipient?: string | undefined;
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    metadata: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    };
}>;
/**
 * @internal
 */
export declare const Signature721PayloadOutput: z.ZodObject<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<z.extendShape<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>; /**
         * @internal
         */
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
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    uri: z.ZodString;
    royaltyBps: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
}>, "strip", z.ZodTypeAny, {
    currencyAddress: string;
    price: string;
    uri: string;
    to: string;
    mintStartTime: ethers.BigNumber;
    mintEndTime: ethers.BigNumber;
    uid: string;
    primarySaleRecipient: string;
    metadata: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    };
    royaltyRecipient: string;
    royaltyBps: ethers.BigNumber;
}, {
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    to?: string | undefined;
    uid?: string | undefined;
    primarySaleRecipient?: string | undefined;
    royaltyRecipient?: string | undefined;
    uri: string;
    mintStartTime: string | number | bigint | ethers.BigNumber;
    mintEndTime: string | number | bigint | ethers.BigNumber;
    metadata: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    };
    royaltyBps: string | number | bigint | ethers.BigNumber;
}>;
/**
 * @internal
 */
export declare const Signature1155PayloadInput: z.ZodObject<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<z.extendShape<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>; /**
         * @internal
         */
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
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<z.extendShape<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>; /**
         * @internal
         */
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
    }>, z.ZodString]>>;
    tokenId: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>, string, string | number | bigint | ethers.BigNumber>>;
    quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>, string, string | number | bigint | ethers.BigNumber>;
}>, "strip", z.ZodTypeAny, {
    currencyAddress: string;
    price: string;
    to: string;
    mintStartTime: ethers.BigNumber;
    mintEndTime: ethers.BigNumber;
    uid: string;
    primarySaleRecipient: string;
    quantity: string;
    metadata: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    };
    royaltyRecipient: string;
    royaltyBps: number;
    tokenId: string;
}, {
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    to?: string | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
    uid?: string | undefined;
    primarySaleRecipient?: string | undefined;
    metadata?: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    } | undefined;
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    tokenId?: string | number | bigint | ethers.BigNumber | undefined;
    quantity: string | number | bigint | ethers.BigNumber;
}>;
/**
 * @internal
 */
export declare const Signature1155PayloadOutput: z.ZodObject<z.extendShape<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<z.extendShape<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>; /**
         * @internal
         */
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
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    uri: z.ZodString;
    royaltyBps: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
}>, {
    tokenId: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
}>, "strip", z.ZodTypeAny, {
    currencyAddress: string;
    price: string;
    uri: string;
    to: string;
    mintStartTime: ethers.BigNumber;
    mintEndTime: ethers.BigNumber;
    uid: string;
    primarySaleRecipient: string;
    quantity: ethers.BigNumber;
    metadata: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    };
    royaltyRecipient: string;
    royaltyBps: ethers.BigNumber;
    tokenId: ethers.BigNumber;
}, {
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    to?: string | undefined;
    uid?: string | undefined;
    primarySaleRecipient?: string | undefined;
    royaltyRecipient?: string | undefined;
    uri: string;
    mintStartTime: string | number | bigint | ethers.BigNumber;
    mintEndTime: string | number | bigint | ethers.BigNumber;
    quantity: string | number | bigint | ethers.BigNumber;
    metadata: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    };
    royaltyBps: string | number | bigint | ethers.BigNumber;
    tokenId: string | number | bigint | ethers.BigNumber;
}>;
/**
 * @internal
 */
export declare const Signature721WithQuantityInput: z.ZodObject<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<z.extendShape<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>; /**
         * @internal
         */
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
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<z.extendShape<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>; /**
         * @internal
         */
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
    }>, z.ZodString]>>;
    quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>, string, string | number | bigint | ethers.BigNumber>;
}>, "strip", z.ZodTypeAny, {
    currencyAddress: string;
    price: string;
    to: string;
    mintStartTime: ethers.BigNumber;
    mintEndTime: ethers.BigNumber;
    uid: string;
    primarySaleRecipient: string;
    quantity: string;
    metadata: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    };
    royaltyRecipient: string;
    royaltyBps: number;
}, {
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    to?: string | undefined;
    mintStartTime?: Date | undefined;
    mintEndTime?: Date | undefined;
    uid?: string | undefined;
    primarySaleRecipient?: string | undefined;
    metadata?: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    } | undefined;
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    quantity: string | number | bigint | ethers.BigNumber;
}>;
/**
 * @internal
 */
export declare const Signature721WithQuantityOutput: z.ZodObject<z.extendShape<z.extendShape<z.extendShape<{
    to: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    mintStartTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    mintEndTime: z.ZodDefault<z.ZodEffects<z.ZodDate, ethers.BigNumber, Date>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodString>;
}, {
    metadata: z.ZodUnion<[z.ZodObject<z.extendShape<{
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>; /**
         * @internal
         */
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
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}>, {
    uri: z.ZodString;
    royaltyBps: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
}>, {
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<ethers.BigNumber, z.ZodTypeDef, ethers.BigNumber>]>, ethers.BigNumber, string | number | bigint | ethers.BigNumber>;
}>, "strip", z.ZodTypeAny, {
    currencyAddress: string;
    price: string;
    uri: string;
    to: string;
    mintStartTime: ethers.BigNumber;
    mintEndTime: ethers.BigNumber;
    uid: string;
    primarySaleRecipient: string;
    quantity: ethers.BigNumber;
    metadata: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    };
    royaltyRecipient: string;
    royaltyBps: ethers.BigNumber;
}, {
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    to?: string | undefined;
    uid?: string | undefined;
    primarySaleRecipient?: string | undefined;
    royaltyRecipient?: string | undefined;
    uri: string;
    mintStartTime: string | number | bigint | ethers.BigNumber;
    mintEndTime: string | number | bigint | ethers.BigNumber;
    quantity: string | number | bigint | ethers.BigNumber;
    metadata: string | {
        [x: string]: import("../../..").Json;
        name?: string | undefined;
        description?: string | null | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
        attributes?: Record<string, import("../../..").Json> | Record<string, import("../../..").Json>[] | undefined;
    };
    royaltyBps: string | number | bigint | ethers.BigNumber;
}>;
/**
 * @public
 */
export declare type FilledSignaturePayload20 = z.output<typeof Signature20PayloadInput>;
/**
 * @public
 */
export declare type PayloadWithUri20 = z.output<typeof Signature20PayloadOutput>;
/**
 * @public
 */
export declare type PayloadToSign20 = z.input<typeof Signature20PayloadInput>;
/**
 * @public
 */
export declare type SignedPayload20 = {
    payload: PayloadWithUri20;
    signature: string;
};
/**
 * @public
 */
export declare type FilledSignaturePayload721 = z.output<typeof Signature721PayloadInput>;
/**
 * @public
 */
export declare type PayloadWithUri721 = z.output<typeof Signature721PayloadOutput>;
/**
 * @public
 */
export declare type PayloadToSign721 = z.input<typeof Signature721PayloadInput>;
/**
 * @public
 */
export declare type SignedPayload721 = {
    payload: PayloadWithUri721;
    signature: string;
};
/**
 * @public
 */
export declare type FilledSignaturePayload1155 = z.output<typeof Signature1155PayloadInput>;
/**
 * @public
 */
export declare type FilledSignature721WithQuantity = z.output<typeof Signature721WithQuantityInput>;
/**
 * @public
 */
export declare type PayloadWithUri1155 = z.output<typeof Signature1155PayloadOutput>;
/**
 * @public
 */
export declare type PayloadWithUri721withQuantity = z.output<typeof Signature721WithQuantityOutput>;
/**
 * @public
 */
export declare type PayloadToSign1155 = z.input<typeof Signature1155PayloadInput>;
/**
 * @public
 */
export declare type PayloadToSign721withQuantity = z.input<typeof Signature721WithQuantityInput>;
/**
 * @public
 */
export declare type SignedPayload1155 = {
    payload: PayloadWithUri1155;
    signature: string;
};
/**
 * @public
 */
export declare type SignedPayload721WithQuantitySignature = {
    payload: PayloadWithUri721withQuantity;
    signature: string;
};
export declare const MintRequest20: {
    name: string;
    type: string;
}[];
export declare const MintRequest721: {
    name: string;
    type: string;
}[];
export declare const MintRequest1155: {
    name: string;
    type: string;
}[];
export declare const MintRequest721withQuantity: {
    name: string;
    type: string;
}[];
