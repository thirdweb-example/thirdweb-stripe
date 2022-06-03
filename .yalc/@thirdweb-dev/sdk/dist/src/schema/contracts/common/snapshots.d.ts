import { z } from "zod";
/**
 * @internal
 */
export declare const MerkleSchema: z.ZodObject<{
    merkle: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    merkle: Record<string, string>;
}, {
    merkle?: Record<string, string> | undefined;
}>;
/**
 * @internal
 */
export declare const SnapshotAddressInput: z.ZodObject<{
    address: z.ZodEffects<z.ZodString, string, string>;
    maxClaimable: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
}, "strip", z.ZodTypeAny, {
    address: string;
    maxClaimable: string;
}, {
    maxClaimable?: string | number | undefined;
    address: string;
}>;
/**
 * @internal
 */
export declare const SnapshotInputSchema: z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
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
}>, "many">]>;
/**
 * @internal
 */
export declare const SnapshotSchema: z.ZodObject<{
    /**
     * The merkle root
     */
    merkleRoot: z.ZodString;
    claims: z.ZodArray<z.ZodObject<z.extendShape<{
        address: z.ZodEffects<z.ZodString, string, string>;
        maxClaimable: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    }, {
        proof: z.ZodArray<z.ZodString, "many">;
    }>, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: string;
        proof: string[];
    }, {
        maxClaimable?: string | number | undefined;
        address: string;
        proof: string[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    merkleRoot: string;
    claims: {
        address: string;
        maxClaimable: string;
        proof: string[];
    }[];
}, {
    merkleRoot: string;
    claims: {
        maxClaimable?: string | number | undefined;
        address: string;
        proof: string[];
    }[];
}>;
/**
 * @internal
 */
export declare const SnapshotInfoSchema: z.ZodObject<{
    merkleRoot: z.ZodString;
    snapshotUri: z.ZodString;
    snapshot: z.ZodObject<{
        /**
         * The merkle root
         */
        merkleRoot: z.ZodString;
        claims: z.ZodArray<z.ZodObject<z.extendShape<{
            address: z.ZodEffects<z.ZodString, string, string>;
            maxClaimable: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
        }, {
            proof: z.ZodArray<z.ZodString, "many">;
        }>, "strip", z.ZodTypeAny, {
            address: string;
            maxClaimable: string;
            proof: string[];
        }, {
            maxClaimable?: string | number | undefined;
            address: string;
            proof: string[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        merkleRoot: string;
        claims: {
            address: string;
            maxClaimable: string;
            proof: string[];
        }[];
    }, {
        merkleRoot: string;
        claims: {
            maxClaimable?: string | number | undefined;
            address: string;
            proof: string[];
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    merkleRoot: string;
    snapshotUri: string;
    snapshot: {
        merkleRoot: string;
        claims: {
            address: string;
            maxClaimable: string;
            proof: string[];
        }[];
    };
}, {
    merkleRoot: string;
    snapshotUri: string;
    snapshot: {
        merkleRoot: string;
        claims: {
            maxClaimable?: string | number | undefined;
            address: string;
            proof: string[];
        }[];
    };
}>;
