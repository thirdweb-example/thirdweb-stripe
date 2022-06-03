import { z } from "zod";
export declare const SplitsContractInput: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    recipients: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, string, string>;
        sharesBps: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        address: string;
        sharesBps: number;
    }, {
        address: string;
        sharesBps: number;
    }>, "many">>, {
        address: string;
        sharesBps: number;
    }[], {
        address: string;
        sharesBps: number;
    }[] | undefined>;
}>, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
    recipients: {
        address: string;
        sharesBps: number;
    }[];
}, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    recipients?: {
        address: string;
        sharesBps: number;
    }[] | undefined;
    name: string;
}>;
export declare const SplitsContractOutput: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    image: z.ZodOptional<z.ZodString>;
}>, {
    recipients: z.ZodArray<z.ZodObject<z.extendShape<{
        address: z.ZodEffects<z.ZodString, string, string>;
        sharesBps: z.ZodNumber;
    }, {
        address: z.ZodEffects<z.ZodString, string, string>;
        sharesBps: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        address: string;
        sharesBps: number;
    }, {
        address: string;
        sharesBps: number;
    }>, "many">;
}>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    name: string;
    recipients: {
        address: string;
        sharesBps: number;
    }[];
}, {
    [x: string]: import("../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    name: string;
    recipients: {
        address: string;
        sharesBps: number;
    }[];
}>;
export declare const SplitsContractDeploy: z.ZodObject<z.extendShape<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    recipients: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, string, string>;
        sharesBps: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        address: string;
        sharesBps: number;
    }, {
        address: string;
        sharesBps: number;
    }>, "many">>, {
        address: string;
        sharesBps: number;
    }[], {
        address: string;
        sharesBps: number;
    }[] | undefined>;
}>, z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    recipients: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        address: z.ZodEffects<z.ZodString, string, string>;
        sharesBps: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        address: string;
        sharesBps: number;
    }, {
        address: string;
        sharesBps: number;
    }>, "many">>, {
        address: string;
        sharesBps: number;
    }[], {
        address: string;
        sharesBps: number;
    }[] | undefined>;
}>>, {
    trusted_forwarders: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
}>, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
    trusted_forwarders: string[];
    recipients: {
        address: string;
        sharesBps: number;
    }[];
}, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    trusted_forwarders?: string[] | undefined;
    recipients?: {
        address: string;
        sharesBps: number;
    }[] | undefined;
    name: string;
}>;
export declare const SplitsContractSchema: {
    deploy: z.ZodObject<z.extendShape<z.extendShape<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        recipients: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            address: z.ZodEffects<z.ZodString, string, string>;
            sharesBps: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            address: string;
            sharesBps: number;
        }, {
            address: string;
            sharesBps: number;
        }>, "many">>, {
            address: string;
            sharesBps: number;
        }[], {
            address: string;
            sharesBps: number;
        }[] | undefined>;
    }>, z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        recipients: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            address: z.ZodEffects<z.ZodString, string, string>;
            sharesBps: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            address: string;
            sharesBps: number;
        }, {
            address: string;
            sharesBps: number;
        }>, "many">>, {
            address: string;
            sharesBps: number;
        }[], {
            address: string;
            sharesBps: number;
        }[] | undefined>;
    }>>, {
        trusted_forwarders: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    }>, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        name: string;
        trusted_forwarders: string[];
        recipients: {
            address: string;
            sharesBps: number;
        }[];
    }, {
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        trusted_forwarders?: string[] | undefined;
        recipients?: {
            address: string;
            sharesBps: number;
        }[] | undefined;
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
        recipients: z.ZodArray<z.ZodObject<z.extendShape<{
            address: z.ZodEffects<z.ZodString, string, string>;
            sharesBps: z.ZodNumber;
        }, {
            address: z.ZodEffects<z.ZodString, string, string>;
            sharesBps: z.ZodNumber;
        }>, "strip", z.ZodTypeAny, {
            address: string;
            sharesBps: number;
        }, {
            address: string;
            sharesBps: number;
        }>, "many">;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        name: string;
        recipients: {
            address: string;
            sharesBps: number;
        }[];
    }, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        name: string;
        recipients: {
            address: string;
            sharesBps: number;
        }[];
    }>;
    input: z.ZodObject<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        recipients: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            address: z.ZodEffects<z.ZodString, string, string>;
            sharesBps: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            address: string;
            sharesBps: number;
        }, {
            address: string;
            sharesBps: number;
        }>, "many">>, {
            address: string;
            sharesBps: number;
        }[], {
            address: string;
            sharesBps: number;
        }[] | undefined>;
    }>, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        name: string;
        recipients: {
            address: string;
            sharesBps: number;
        }[];
    }, {
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        recipients?: {
            address: string;
            sharesBps: number;
        }[] | undefined;
        name: string;
    }>;
};
