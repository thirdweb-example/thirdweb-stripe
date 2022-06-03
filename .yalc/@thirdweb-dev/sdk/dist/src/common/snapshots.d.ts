import { IStorage } from "../core/interfaces/IStorage";
import { SnapshotInfo, SnapshotInput } from "../types/claim-conditions/claim-conditions";
import { BigNumberish } from "ethers";
/**
 * Create a snapshot (merkle tree) from a list of addresses and uploads it to IPFS
 * @param snapshotInput - the list of addresses to hash
 * @param storage - the storage to upload to
 * @returns the generated snapshot and URI
 * @internal
 */
export declare function createSnapshot(snapshotInput: SnapshotInput, tokenDecimals: number, storage: IStorage): Promise<SnapshotInfo>;
/**
 * Hash an address and the corresponding claimable amount
 * @internal
 * @param address - the address
 * @param maxClaimableAmount - the amount
 */
export declare function hashLeafNode(address: string, maxClaimableAmount: BigNumberish): string;
