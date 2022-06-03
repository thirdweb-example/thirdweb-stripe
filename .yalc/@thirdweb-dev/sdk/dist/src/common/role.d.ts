import { BytesLike } from "ethers";
/**
 *
 * @internal
 */
declare const roleMap: {
    readonly admin: "";
    readonly transfer: "TRANSFER_ROLE";
    readonly minter: "MINTER_ROLE";
    readonly pauser: "PAUSER_ROLE";
    readonly lister: "LISTER_ROLE";
    readonly asset: "ASSET_ROLE";
    readonly unwrap: "UNWRAP_ROLE";
};
/**
 * @public
 */
export declare type Role = keyof typeof roleMap;
/**
 * @public
 */
export declare const ALL_ROLES: ("transfer" | "unwrap" | "lister" | "admin" | "minter" | "pauser" | "asset")[];
/**
 * @internal
 */
export declare function getRoleHash(role: Role): BytesLike;
export {};
