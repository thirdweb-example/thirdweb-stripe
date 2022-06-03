import { TransactionResult } from "../types";
import { Role } from "../../common/role";
import { ContractWrapper } from "./contract-wrapper";
import { IPermissionsEnumerable } from "contracts";
import { DetectableFeature } from "../interfaces/DetectableFeature";
/**
 * Handle contract permissions
 * @remarks Configure roles and permissions for a contract, to restrict certain actions.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const rolesAndMembers = await contract.roles.getAll();
 * await contract.roles.grantRole("admin", "0x...");
 * ```
 * @public
 */
export declare class ContractRoles<TContract extends IPermissionsEnumerable, TRole extends Role> implements DetectableFeature {
    featureName: "Permissions";
    private contractWrapper;
    /**
     * @internal
     * @remarks This is used for typing inside react hooks which is why it has to be public.
     */
    readonly roles: readonly TRole[];
    constructor(contractWrapper: ContractWrapper<TContract>, roles: readonly TRole[]);
    /** **************************
     * READ FUNCTIONS
     ****************************/
    /**
     * Call this to get get a list of addresses for all supported roles on the contract.
     *
     * @remarks See {@link ContractRoles.get} to get a list of addresses that are members of a specific role.
     * @returns A record of {@link Role}s to lists of addresses that are members of the given role.
     * @throws If the contract does not support roles this will throw an error.
     *
     * @public
     */
    getAll(): Promise<Record<TRole, string[]>>;
    /**
     * Call this to get a list of addresses that are members of a specific role.
     *
     * @remarks See {@link ContractRoles.getAll} to get get a list of addresses for all supported roles on the contract.
     * @param role - The Role to to get a memberlist for.
     * @returns The list of addresses that are members of the specific role.
     * @throws If you are requestiong a role that does not exist on the contract this will throw an error.
     *
     * @example Say you want to get the list of addresses that are members of the minter role.
     * ```javascript
     * const minterAddresses: string[] = await contract.getRoleMemberList("minter");
     * ```
     *
     * @public
     */
    get(role: TRole): Promise<string[]>;
    /**
     * Call this to OVERWRITE the list of addresses that are members of specific roles.
     *
     * Every role in the list will be overwritten with the new list of addresses provided with them.
     * If you want to add or remove addresses for a single address use {@link ContractRoles.grant} and {@link ContractRoles.revoke} respectively instead.
     * @param rolesWithAddresses - A record of {@link Role}s to lists of addresses that should be members of the given role.
     * @throws If you are requestiong a role that does not exist on the contract this will throw an error.
     * @example Say you want to overwrite the list of addresses that are members of the minter role.
     * ```javascript
     * const minterAddresses: string[] = await contract.getRoleMemberList("minter");
     * await contract.setAll({
     *  minter: []
     * });
     * console.log(await contract.getRoleMemberList("minter")); // No matter what members had the role before, the new list will be set to []
     * ```
     * @public
     *
     * */
    setAll(rolesWithAddresses: {
        [key in TRole]?: string[];
    }): Promise<TransactionResult>;
    /**
     * Throws an error if an address is missing the roles specified.
     *
     * @param roles - The roles to check
     * @param address - The address to check
     *
     * @internal
     */
    verify(roles: TRole[], address: string): Promise<void>;
    /** **************************
     * WRITE FUNCTIONS
     ****************************/
    /**
     * Call this to grant a role to a specific address.
     *
     * @remarks
     *
     * Make sure you are sure you want to grant the role to the address.
     *
     * @param role - The {@link Role} to grant to the address
     * @param address - The address to grant the role to
     * @returns The transaction receipt
     * @throws If you are trying to grant does not exist on the contract this will throw an error.
     *
     * @public
     */
    grant(role: TRole, address: string): Promise<TransactionResult>;
    /**
     * Call this to revoke a role from a specific address.
     *
     * @remarks
     *
     * -- Caution --
     *
     * This will let you remove yourself from the role, too.
     * If you remove yourself from the admin role, you will no longer be able to administer the module.
     * There is no way to recover from this.
     *
     * @param role - The {@link Role} to revoke
     * @param address - The address to revoke the role from
     * @returns The transaction receipt
     * @throws If you are trying to revoke does not exist on the module this will throw an error.
     *
     * @public
     */
    revoke(role: TRole, address: string): Promise<TransactionResult>;
    /** **************************
     * PRIVATE FUNCTIONS
     ****************************/
    private getRevokeRoleFunctionName;
}
