import { CidWithFileName, IStorageUpload } from "../interfaces/IStorageUpload";
import { FileOrBuffer } from "../types";
import { UploadProgressEvent } from "../../types/events";
/**
 * @internal
 */
export declare class IpfsUploader implements IStorageUpload {
    /**
     * Fetches a one-time-use upload token that can used to upload
     * a file to storage.
     *
     * @returns - The one time use token that can be passed to the Pinata API.
     */
    getUploadToken(contractAddress: string): Promise<string>;
    uploadBatchWithCid(files: (string | FileOrBuffer)[], fileStartNumber?: number, contractAddress?: string, signerAddress?: string, options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<CidWithFileName>;
    private buildFormData;
}
