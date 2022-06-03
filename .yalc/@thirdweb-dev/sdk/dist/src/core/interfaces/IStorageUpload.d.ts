import { UploadProgressEvent } from "../../types/events";
import { FileOrBuffer } from "../types";
/**
 * @internal
 */
export interface CidWithFileName {
    cid: string;
    fileNames: string[];
}
/**
 * The result of an IPFS upload, including the URI of the upload
 * director and the URIs of the uploaded files.
 * @public
 */
export declare type UploadResult = {
    /**
     * Base URI of the directory that all files are uploaded to.
     */
    baseUri: string;
    /**
     * Individual URI for each file or metadata upload.
     */
    uris: string[];
};
/**
 * @internal
 */
export interface IStorageUpload {
    uploadBatchWithCid(files: (string | FileOrBuffer)[], fileStartNumber?: number, contractAddress?: string, signerAddress?: string, options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<CidWithFileName>;
}
