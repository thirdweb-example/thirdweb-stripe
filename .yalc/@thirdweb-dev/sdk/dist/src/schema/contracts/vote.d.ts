import { z } from "zod";
export declare const VoteSettingsInputSchema: z.ZodObject<{
    voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_token_address: z.ZodEffects<z.ZodString, string, string>;
    voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
    proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
}, "strip", z.ZodTypeAny, {
    voting_delay_in_blocks: number;
    voting_period_in_blocks: number;
    voting_token_address: string;
    voting_quorum_fraction: number;
    proposal_token_threshold: string;
}, {
    voting_delay_in_blocks?: number | undefined;
    voting_period_in_blocks?: number | undefined;
    voting_quorum_fraction?: number | undefined;
    proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
    voting_token_address: string;
}>;
export declare const VoteSettingsOuputSchema: z.ZodObject<z.extendShape<{
    voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_token_address: z.ZodEffects<z.ZodString, string, string>;
    voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
    proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
}, {
    proposal_token_threshold: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}>, "strip", z.ZodTypeAny, {
    voting_delay_in_blocks: number;
    voting_period_in_blocks: number;
    voting_token_address: string;
    voting_quorum_fraction: number;
    proposal_token_threshold: import("ethers").BigNumber;
}, {
    voting_delay_in_blocks?: number | undefined;
    voting_period_in_blocks?: number | undefined;
    voting_quorum_fraction?: number | undefined;
    voting_token_address: string;
    proposal_token_threshold: string | number | bigint | import("ethers").BigNumber;
}>;
export declare const VoteContractInput: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_token_address: z.ZodEffects<z.ZodString, string, string>;
    voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
    proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
}>, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
    voting_delay_in_blocks: number;
    voting_period_in_blocks: number;
    voting_token_address: string;
    voting_quorum_fraction: number;
    proposal_token_threshold: string;
}, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    voting_delay_in_blocks?: number | undefined;
    voting_period_in_blocks?: number | undefined;
    voting_quorum_fraction?: number | undefined;
    proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
    name: string;
    voting_token_address: string;
}>;
export declare const VoteContractOutput: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    image: z.ZodOptional<z.ZodString>;
}>, z.extendShape<{
    voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_token_address: z.ZodEffects<z.ZodString, string, string>;
    voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
    proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
}, {
    proposal_token_threshold: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}>>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
    [x: string]: import("../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    name: string;
    voting_delay_in_blocks: number;
    voting_period_in_blocks: number;
    voting_token_address: string;
    voting_quorum_fraction: number;
    proposal_token_threshold: import("ethers").BigNumber;
}, {
    [x: string]: import("../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    voting_delay_in_blocks?: number | undefined;
    voting_period_in_blocks?: number | undefined;
    voting_quorum_fraction?: number | undefined;
    name: string;
    voting_token_address: string;
    proposal_token_threshold: string | number | bigint | import("ethers").BigNumber;
}>;
export declare const VoteContractDeploy: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, {
    voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
    voting_token_address: z.ZodEffects<z.ZodString, string, string>;
    voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
    proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
}>, {
    trusted_forwarders: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
}>, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    name: string;
    trusted_forwarders: string[];
    voting_delay_in_blocks: number;
    voting_period_in_blocks: number;
    voting_token_address: string;
    voting_quorum_fraction: number;
    proposal_token_threshold: string;
}, {
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    trusted_forwarders?: string[] | undefined;
    voting_delay_in_blocks?: number | undefined;
    voting_period_in_blocks?: number | undefined;
    voting_quorum_fraction?: number | undefined;
    proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
    name: string;
    voting_token_address: string;
}>;
export declare const VoteContractSchema: {
    deploy: z.ZodObject<z.extendShape<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_token_address: z.ZodEffects<z.ZodString, string, string>;
        voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
        proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }>, {
        trusted_forwarders: z.ZodDefault<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    }>, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        name: string;
        trusted_forwarders: string[];
        voting_delay_in_blocks: number;
        voting_period_in_blocks: number;
        voting_token_address: string;
        voting_quorum_fraction: number;
        proposal_token_threshold: string;
    }, {
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        trusted_forwarders?: string[] | undefined;
        voting_delay_in_blocks?: number | undefined;
        voting_period_in_blocks?: number | undefined;
        voting_quorum_fraction?: number | undefined;
        proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
        name: string;
        voting_token_address: string;
    }>;
    output: z.ZodObject<z.extendShape<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        image: z.ZodOptional<z.ZodString>;
    }>, z.extendShape<{
        voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_token_address: z.ZodEffects<z.ZodString, string, string>;
        voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
        proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }, {
        proposal_token_threshold: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    }>>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        name: string;
        voting_delay_in_blocks: number;
        voting_period_in_blocks: number;
        voting_token_address: string;
        voting_quorum_fraction: number;
        proposal_token_threshold: import("ethers").BigNumber;
    }, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        voting_delay_in_blocks?: number | undefined;
        voting_period_in_blocks?: number | undefined;
        voting_quorum_fraction?: number | undefined;
        name: string;
        voting_token_address: string;
        proposal_token_threshold: string | number | bigint | import("ethers").BigNumber;
    }>;
    input: z.ZodObject<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
    }, {
        voting_delay_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_period_in_blocks: z.ZodDefault<z.ZodNumber>;
        voting_token_address: z.ZodEffects<z.ZodString, string, string>;
        voting_quorum_fraction: z.ZodDefault<z.ZodNumber>;
        proposal_token_threshold: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }>, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        name: string;
        voting_delay_in_blocks: number;
        voting_period_in_blocks: number;
        voting_token_address: string;
        voting_quorum_fraction: number;
        proposal_token_threshold: string;
    }, {
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        voting_delay_in_blocks?: number | undefined;
        voting_period_in_blocks?: number | undefined;
        voting_quorum_fraction?: number | undefined;
        proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
        name: string;
        voting_token_address: string;
    }>;
};
export declare const ProposalOutputSchema: z.ZodObject<{
    proposalId: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    proposer: z.ZodString;
    targets: z.ZodArray<z.ZodString, "many">;
    values: z.ZodArray<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, "many">;
    signatures: z.ZodArray<z.ZodString, "many">;
    calldatas: z.ZodArray<z.ZodString, "many">;
    startBlock: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    endBlock: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    values: import("ethers").BigNumber[];
    description: string;
    proposalId: import("ethers").BigNumber;
    proposer: string;
    targets: string[];
    signatures: string[];
    calldatas: string[];
    startBlock: import("ethers").BigNumber;
    endBlock: import("ethers").BigNumber;
}, {
    values: (string | number | bigint | import("ethers").BigNumber)[];
    description: string;
    proposalId: string | number | bigint | import("ethers").BigNumber;
    proposer: string;
    targets: string[];
    signatures: string[];
    calldatas: string[];
    startBlock: string | number | bigint | import("ethers").BigNumber;
    endBlock: string | number | bigint | import("ethers").BigNumber;
}>;
