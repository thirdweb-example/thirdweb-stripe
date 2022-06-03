import { z } from "zod";
/**
 * @internal
 */
export declare const BYOCContractMetadataSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}, {
    [x: string]: import("../..").Json;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
}>;
export declare type CustomContractMetadata = z.input<typeof BYOCContractMetadataSchema>;
/**
 * @internal
 */
export declare const CustomContractInput: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    merkle?: Record<string, string> | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    name: string;
}, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    merkle?: Record<string, string> | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const CustomContractOutput: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    image: z.ZodOptional<z.ZodString>;
}>, {
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    merkle?: Record<string, string> | undefined;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    name: string;
}, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    merkle?: Record<string, string> | undefined;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const CustomContractDeploy: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
}>, {
    primary_sale_recipient: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    platform_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    platform_fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
    trusted_forwarders: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    merkle?: Record<string, string> | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    primary_sale_recipient?: string | undefined;
    platform_fee_basis_points?: number | undefined;
    platform_fee_recipient?: string | undefined;
    trusted_forwarders?: string[] | undefined;
    name: string;
}, {
    [x: string]: import("../..").Json;
    symbol?: string | undefined;
    merkle?: Record<string, string> | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    primary_sale_recipient?: string | undefined;
    platform_fee_basis_points?: number | undefined;
    platform_fee_recipient?: string | undefined;
    trusted_forwarders?: string[] | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const CustomContractSchema: {
    deploy: z.ZodObject<z.extendShape<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    }>, {
        primary_sale_recipient: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        platform_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        platform_fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        trusted_forwarders: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        merkle?: Record<string, string> | undefined;
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        primary_sale_recipient?: string | undefined;
        platform_fee_basis_points?: number | undefined;
        platform_fee_recipient?: string | undefined;
        trusted_forwarders?: string[] | undefined;
        name: string;
    }, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        merkle?: Record<string, string> | undefined;
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        primary_sale_recipient?: string | undefined;
        platform_fee_basis_points?: number | undefined;
        platform_fee_recipient?: string | undefined;
        trusted_forwarders?: string[] | undefined;
        name: string;
    }>;
    output: z.ZodObject<z.extendShape<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        image: z.ZodOptional<z.ZodString>;
    }>, {
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        merkle?: Record<string, string> | undefined;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        name: string;
    }, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        merkle?: Record<string, string> | undefined;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        name: string;
    }>;
    input: z.ZodObject<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodString, string, string>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodOptional<z.ZodString>>>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        merkle?: Record<string, string> | undefined;
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        name: string;
    }, {
        [x: string]: import("../..").Json;
        symbol?: string | undefined;
        merkle?: Record<string, string> | undefined;
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        name: string;
    }>;
};
/**
 * @internal
 */
export declare const PreDeployMetadata: z.ZodObject<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    metadataUri: string;
    bytecodeUri: string;
}, {
    name: string;
    metadataUri: string;
    bytecodeUri: string;
}>;
export declare type PreDeployMetadataFetched = {
    name: string;
    abi: z.infer<typeof AbiSchema>;
    bytecode: string;
};
/**
 * @internal
 */
export declare const AbiTypeSchema: z.ZodObject<z.extendShape<{
    type: z.ZodString;
    name: z.ZodString;
}, {
    stateMutability: z.ZodOptional<z.ZodString>;
    components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        name: string;
    }, {
        type: string;
        name: string;
    }>, "many">>;
}>, "strip", z.ZodAny, {
    [x: string]: any;
    stateMutability?: string | undefined;
    components?: {
        type: string;
        name: string;
    }[] | undefined;
    type: string;
    name: string;
}, {
    [x: string]: any;
    stateMutability?: string | undefined;
    components?: {
        type: string;
        name: string;
    }[] | undefined;
    type: string;
    name: string;
}>;
/**
 * @internal
 */
export declare const AbiObjectSchema: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            name: string;
        }, {
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            name: string;
        }, {
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }>, "many">>;
}, "strip", z.ZodAny, {
    [x: string]: any;
    type: string;
    name: string;
    outputs: {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }[];
    inputs: {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }[];
}, {
    [x: string]: any;
    name?: string | undefined;
    outputs?: {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }[] | undefined;
    inputs?: {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }[] | undefined;
    type: string;
}>;
/**
 * @internal
 */
export declare const AbiSchema: z.ZodArray<z.ZodObject<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            name: string;
        }, {
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<z.extendShape<{
        type: z.ZodString;
        name: z.ZodString;
    }, {
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            name: string;
        }, {
            type: string;
            name: string;
        }>, "many">>;
    }>, "strip", z.ZodAny, {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }, {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }>, "many">>;
}, "strip", z.ZodAny, {
    [x: string]: any;
    type: string;
    name: string;
    outputs: {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }[];
    inputs: {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }[];
}, {
    [x: string]: any;
    name?: string | undefined;
    outputs?: {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }[] | undefined;
    inputs?: {
        [x: string]: any;
        stateMutability?: string | undefined;
        components?: {
            type: string;
            name: string;
        }[] | undefined;
        type: string;
        name: string;
    }[] | undefined;
    type: string;
}>, "many">;
/**
 * @internal
 */
export declare const PublishedContractSchema: z.ZodObject<{
    id: z.ZodString;
    timestamp: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    metadataUri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    metadataUri: string;
    timestamp: string;
}, {
    id: string;
    metadataUri: string;
    timestamp: string | number | bigint | import("ethers").BigNumber;
}>;
export declare type ContractParam = z.infer<typeof AbiTypeSchema>;
export declare type PublishedContract = z.infer<typeof PublishedContractSchema>;
export declare type AbiFunction = {
    name: string;
    inputs: z.infer<typeof AbiTypeSchema>[];
    outputs: z.infer<typeof AbiTypeSchema>[];
    signature: string;
    stateMutability: string;
};
export declare type PublishedMetadata = {
    name: string;
    abi: z.infer<typeof AbiSchema>;
};
