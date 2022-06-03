import { UploadProgressEvent } from "../../types/events";
import { IStorage } from "../interfaces/IStorage";
import { UploadResult } from "../interfaces/IStorageUpload";
import { FileOrBuffer, JsonObject } from "../types";
/**
 * Fetch and upload files to IPFS or any other storage.
 * @public
 */
export declare class RemoteStorage {
    private storage;
    constructor(storage: IStorage);
    /**
     * Fetch data from any IPFS hash without worrying about gateways, data types, etc.
     * Simply pass in an IPFS url and we'll handle fetching for you and try every public gateway
     * to get the fastest response.
     *
     * @example
     * ```javascript
     * // Your IPFS hash here
     * const hash = "ipfs://..."
     * const data = await sdk.storage.fetch(hash);
     * ```
     * @param hash - The IPFS hash of the file or data to fetch
     * @returns The data stored at the specified IPFS hash
     */
    fetch(hash: string): Promise<Record<string, any>>;
    /**
     * Upload any data to an IPFS directory. We'll handle all the details for you, including
     * pinning your files and making sure that you get the fastest upload speeds.
     *
     * @example
     * ```javascript
     * // File upload
     * const files = [
     *   fs.readFileSync("file1.png"),
     *   fs.readFileSync("file2.png"),
     * ]
     * const result = await sdk.storage.upload(files);
     * // uri for each uploaded file will look like something like: ipfs://<hash>/0
     *
     * // JSON metadata upload
     * const jsonMetadata = {
     *   name: "Name",
     *   description: "Description",
     * }
     * const result = await sdk.storage.upload(jsonMetadata);
     *
     * // Upload progress (browser only)
     * const result = await sdk.storage.upload(files, {
     *   onProgress: (event: UploadProgressEvent) => {
     *     console.log(`Downloaded ${event.progress} / ${event.total}`);
     *   },
     * });
     * ```
     *
     * @param data - An array of file data or an array of JSON metadata to upload to IPFS
     * @param options - Optional. Upload progress callback.
     * @returns The IPFS hash of the directory that holds all the uploaded data
     */
    upload(data: FileOrBuffer[] | JsonObject[] | FileOrBuffer | JsonObject, options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<UploadResult>;
    private uploadBatch;
    private uploadMetadataBatch;
}
