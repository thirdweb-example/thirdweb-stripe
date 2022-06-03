import { Json } from "../types";
/**
 * Given a map of file hashes to ipfs uris, this function will hash
 * all properties recursively and replace them with the ipfs uris
 * from the map passed in. If a hash is missing from the map, the function
 * will throw an error.
 *
 * @internal
 *
 * @param object - The object to recursively process
 * @param cids - The array of file hashes to ipfs uris in the recurse order
 * @returns - The processed metadata with properties pointing at ipfs in place of `File | Buffer`
 */
export declare function replaceFilePropertiesWithHashes(object: Record<string, any>, cids: string[]): Record<string, any>;
/**
 * Replaces all ipfs:// hashes (or any other scheme) with gateway url
 * @param object
 * @param scheme
 * @param gatewayUrl
 */
export declare function replaceHashWithGatewayUrl(object: Record<string, any>, scheme: string, gatewayUrl: string): Record<string, any>;
/**
 * Resolves the full URL of a file for a given gateway.
 *
 * For example, if the hash of a file is `ipfs://bafkreib3u2u6ir2fsl5nkuwixfsb3l4xehri3psjv5yga4inuzsjunk2sy`, then the URL will be:
 * "https://cloudflare-ipfs.com/ipfs/bafkreibnwjhx5s3r2rggdoy3hw7lr7wmgy4bas35oky3ed6eijklk2oyvq"
 * if the gateway is `cloudflare-ipfs.com`.
 *
 * @param ipfsHash
 * @param scheme
 * @param gatewayUrl
 */
export declare function resolveGatewayUrl<T extends Json>(ipfsHash: T, scheme: string, gatewayUrl: string): T;
