export declare const MarketplaceContractInput: import("zod").ZodObject<{
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
    external_link: import("zod").ZodOptional<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny, {
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
export declare const MarketplaceContractOutput: import("zod").ZodObject<import("zod").extendShape<{
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
    external_link: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    image: import("zod").ZodOptional<import("zod").ZodString>;
}>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../..").Json, import("zod").ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    name: string;
}, {
    [x: string]: import("../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    name: string;
}>;
export declare const MarketplaceContractDeploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
    external_link: import("zod").ZodOptional<import("zod").ZodString>;
}, {
    platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
    platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
}>, {
    trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
}>, "strip", import("zod").ZodTypeAny, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
    platform_fee_basis_points: number;
    platform_fee_recipient: string;
    trusted_forwarders: string[];
}, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    platform_fee_basis_points?: number | undefined;
    platform_fee_recipient?: string | undefined;
    trusted_forwarders?: string[] | undefined;
    name: string;
}>;
export declare const MarketplaceContractSchema: {
    deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
        name: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodString>;
        image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
        external_link: import("zod").ZodOptional<import("zod").ZodString>;
    }, {
        platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
        platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
    }>, {
        trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>;
    }>, "strip", import("zod").ZodTypeAny, {
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        name: string;
        platform_fee_basis_points: number;
        platform_fee_recipient: string;
        trusted_forwarders: string[];
    }, {
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        platform_fee_basis_points?: number | undefined;
        platform_fee_recipient?: string | undefined;
        trusted_forwarders?: string[] | undefined;
        name: string;
    }>;
    output: import("zod").ZodObject<import("zod").extendShape<{
        name: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodString>;
        image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
        external_link: import("zod").ZodOptional<import("zod").ZodString>;
    }, {
        image: import("zod").ZodOptional<import("zod").ZodString>;
    }>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../..").Json, import("zod").ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        name: string;
    }, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        name: string;
    }>;
    input: import("zod").ZodObject<{
        name: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodString>;
        image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
        external_link: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
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
};
