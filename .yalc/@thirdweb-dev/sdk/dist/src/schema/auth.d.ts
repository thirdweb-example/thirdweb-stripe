import { z } from "zod";
/**
 * @internal
 */
export declare const AuthenticationPayloadInputSchema: z.ZodObject<{
    /**
     * The application to authenticate to
     */
    application: z.ZodString;
    /**
     * The address of the wallet requesting to authenticate
     */
    subject: z.ZodEffects<z.ZodString, string, string>;
    /**
     * The audience of endpoints intended to receive the authentication payload
     */
    audience: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    /**
     * The date before which the authentication payload is invalid
     */
    invalidBefore: z.ZodOptional<z.ZodDate>;
    /**
     * The date after which the authentication payload is invalid
     */
    expiresAt: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    audience?: string[] | undefined;
    invalidBefore?: Date | undefined;
    expiresAt?: Date | undefined;
    application: string;
    subject: string;
}, {
    audience?: string[] | undefined;
    invalidBefore?: Date | undefined;
    expiresAt?: Date | undefined;
    application: string;
    subject: string;
}>;
/**
 * @internal
 */
export declare const AuthenticationPayloadOutputSchema: z.ZodObject<{
    /**
     * The address of the wallet issuing the payload
     */
    iss: z.ZodString;
    /**
     * The address of the wallet requesting to authenticate
     */
    sub: z.ZodString;
    /**
     * The audience of endpoints intended to receive the authentication payload
     */
    aud: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    /**
     * The date before which the authentication payload is invalid
     */
    exp: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, number, Date>>;
    /**
     * The date after which the authentication payload is invalid
     */
    nbf: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, number, Date>>;
    /**
     * The date on which the payload was issued
     */
    iat: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, number, Date>>;
    /**
     * The unique identifier of the payload
     */
    jti: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    iss: string;
    sub: string;
    aud: string[];
    exp: number;
    nbf: number;
    iat: number;
    jti: string;
}, {
    aud?: string[] | undefined;
    exp?: Date | undefined;
    nbf?: Date | undefined;
    iat?: Date | undefined;
    jti?: string | undefined;
    iss: string;
    sub: string;
}>;
/**
 * @internal
 */
export declare const AuthenticationPayloadSchema: z.ZodObject<{
    iss: z.ZodString;
    sub: z.ZodString;
    aud: z.ZodArray<z.ZodString, "many">;
    exp: z.ZodNumber;
    nbf: z.ZodNumber;
    iat: z.ZodNumber;
    jti: z.ZodString;
}, "strip", z.ZodTypeAny, {
    iss: string;
    sub: string;
    aud: string[];
    exp: number;
    nbf: number;
    iat: number;
    jti: string;
}, {
    iss: string;
    sub: string;
    aud: string[];
    exp: number;
    nbf: number;
    iat: number;
    jti: string;
}>;
/**
 * @internal
 */
export declare const AuthorizedPayloadSchema: z.ZodObject<{
    payload: z.ZodObject<{
        iss: z.ZodString;
        sub: z.ZodString;
        aud: z.ZodArray<z.ZodString, "many">;
        exp: z.ZodNumber;
        nbf: z.ZodNumber;
        iat: z.ZodNumber;
        jti: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        iss: string;
        sub: string;
        aud: string[];
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
    }, {
        iss: string;
        sub: string;
        aud: string[];
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
    }>;
    authorizedPayload: z.ZodString;
}, "strip", z.ZodTypeAny, {
    payload: {
        iss: string;
        sub: string;
        aud: string[];
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
    };
    authorizedPayload: string;
}, {
    payload: {
        iss: string;
        sub: string;
        aud: string[];
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
    };
    authorizedPayload: string;
}>;
export declare const AuthenticatedPayloadSchema: z.ZodObject<z.extendShape<{
    payload: z.ZodObject<{
        iss: z.ZodString;
        sub: z.ZodString;
        aud: z.ZodArray<z.ZodString, "many">;
        exp: z.ZodNumber;
        nbf: z.ZodNumber;
        iat: z.ZodNumber;
        jti: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        iss: string;
        sub: string;
        aud: string[];
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
    }, {
        iss: string;
        sub: string;
        aud: string[];
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
    }>;
    authorizedPayload: z.ZodString;
}, {
    authenticatedPayload: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    payload: {
        iss: string;
        sub: string;
        aud: string[];
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
    };
    authorizedPayload: string;
    authenticatedPayload: string;
}, {
    payload: {
        iss: string;
        sub: string;
        aud: string[];
        exp: number;
        nbf: number;
        iat: number;
        jti: string;
    };
    authorizedPayload: string;
    authenticatedPayload: string;
}>;
/**
 * Input model to create a new signed authentication payload
 * @public
 */
export declare type AuthenticationPayloadInput = z.input<typeof AuthenticationPayloadInputSchema>;
/**
 * @public
 */
export declare type FilledAuthenticationPayloadInput = z.output<typeof AuthenticationPayloadInputSchema>;
/**
 * @public
 */
export declare type AuthenticationPayloadOutput = z.output<typeof AuthenticationPayloadOutputSchema>;
/**
 * @public
 */
export declare type AuthenticationPayload = z.output<typeof AuthenticationPayloadSchema>;
/**
 * Authentication payload with signature used to authenticate a wallet
 * @public
 */
export declare type AuthorizedPayload = z.output<typeof AuthorizedPayloadSchema>;
/**
 * @public
 */
export declare type AuthenticatedPayload = z.output<typeof AuthenticatedPayloadSchema>;
