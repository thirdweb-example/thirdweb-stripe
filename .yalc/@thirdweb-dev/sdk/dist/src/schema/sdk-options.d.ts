import { z } from "zod";
/**
 * @public
 */
export declare const SDKOptionsSchema: z.ZodDefault<z.ZodObject<{
    readonlySettings: z.ZodOptional<z.ZodObject<{
        rpcUrl: z.ZodString;
        chainId: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        chainId?: number | undefined;
        rpcUrl: string;
    }, {
        chainId?: number | undefined;
        rpcUrl: string;
    }>>;
    gasSettings: z.ZodDefault<z.ZodObject<{
        maxPriceInGwei: z.ZodDefault<z.ZodNumber>;
        speed: z.ZodDefault<z.ZodEnum<["standard", "fast", "fastest"]>>;
    }, "strip", z.ZodTypeAny, {
        maxPriceInGwei: number;
        speed: "standard" | "fast" | "fastest";
    }, {
        maxPriceInGwei?: number | undefined;
        speed?: "standard" | "fast" | "fastest" | undefined;
    }>>;
    gasless: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        openzeppelin: z.ZodObject<{
            relayerUrl: z.ZodString;
            relayerForwarderAddress: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            relayerUrl: string;
            relayerForwarderAddress: string;
        }, {
            relayerForwarderAddress?: string | undefined;
            relayerUrl: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        openzeppelin: {
            relayerUrl: string;
            relayerForwarderAddress: string;
        };
    }, {
        openzeppelin: {
            relayerForwarderAddress?: string | undefined;
            relayerUrl: string;
        };
    }>, z.ZodObject<{
        biconomy: z.ZodObject<{
            apiId: z.ZodString;
            apiKey: z.ZodString;
            deadlineSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            apiId: string;
            apiKey: string;
            deadlineSeconds: number;
        }, {
            deadlineSeconds?: number | undefined;
            apiId: string;
            apiKey: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        biconomy: {
            apiId: string;
            apiKey: string;
            deadlineSeconds: number;
        };
    }, {
        biconomy: {
            deadlineSeconds?: number | undefined;
            apiId: string;
            apiKey: string;
        };
    }>]>>;
}, "strip", z.ZodTypeAny, {
    readonlySettings?: {
        chainId?: number | undefined;
        rpcUrl: string;
    } | undefined;
    gasless?: {
        openzeppelin: {
            relayerUrl: string;
            relayerForwarderAddress: string;
        };
    } | {
        biconomy: {
            apiId: string;
            apiKey: string;
            deadlineSeconds: number;
        };
    } | undefined;
    gasSettings: {
        maxPriceInGwei: number;
        speed: "standard" | "fast" | "fastest";
    };
}, {
    readonlySettings?: {
        chainId?: number | undefined;
        rpcUrl: string;
    } | undefined;
    gasSettings?: {
        maxPriceInGwei?: number | undefined;
        speed?: "standard" | "fast" | "fastest" | undefined;
    } | undefined;
    gasless?: {
        openzeppelin: {
            relayerForwarderAddress?: string | undefined;
            relayerUrl: string;
        };
    } | {
        biconomy: {
            deadlineSeconds?: number | undefined;
            apiId: string;
            apiKey: string;
        };
    } | undefined;
}>>;
/**
 * @public
 * All these configuration options are optional with sane defaults:
 * @example
 * ```javascript
 * {
 *   readonlySettings: {
 *     rpcUrl, // force read calls to go through your own RPC url
 *     chainId, // reduce RPC calls by sepcifying your chain ID
 *   },
 *   gasSettings: {
 *     maxPriceInGwei, // Maximum gas price for transactions (default 300 gwei)
 *     speed, // the tx speed setting: 'standard'|'fast|'fastest' (default: 'fastest')
 *   },
 *   gasless: {
 *     // By specifying a gasless configuration - all transactions will get forwarded to enable gasless transactions
 *     openzeppelin: {
 *       relayerUrl, // your OZ Defender relayer URL
 *       relayerForwarderAddress, // the OZ defender relayer address (defaults to the standard one)
 *     },
 *     biconomy: {
 *       apiId, // your Biconomy API Id
 *       apiKey, // your Biconomy API Key
 *       deadlineSeconds, // your Biconomy timeout preference
 *     },
 *   },
 * }
 * ```
 */
export declare type SDKOptions = z.input<typeof SDKOptionsSchema>;
/**
 * @internal
 */
export declare type SDKOptionsOutput = z.output<typeof SDKOptionsSchema>;
