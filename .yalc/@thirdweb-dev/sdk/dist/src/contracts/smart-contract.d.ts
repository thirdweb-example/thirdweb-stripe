import { ContractMetadata } from "../core/classes/contract-metadata";
import { ContractEvents, ContractInterceptor, ContractPrimarySale, ContractRoles, ContractRoyalty, Erc1155, Erc20, Erc721, GasCostEstimator, IStorage, NetworkOrSignerOrProvider } from "../core";
import { SDKOptions } from "../schema/sdk-options";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { IPermissionsEnumerable, IPlatformFee, IPrimarySale, IRoyalty, ThirdwebContract } from "contracts";
import { UpdateableNetwork } from "../core/interfaces/contract";
import { ContractInterface } from "ethers";
import { ContractPlatformFee } from "../core/classes/contract-platform-fee";
import { ContractPublishedMetadata } from "../core/classes/contract-published-metadata";
import { ContractAnalytics } from "../core/classes/contract-analytics";
/**
 * Custom contract dynamic class with feature detection
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK(provider);
 * const contract = await sdk.getContract("{{contract_address}}");
 *
 * // call any function in your contract
 * await contract.call("myCustomFunction", param1, param2);
 *
 * // if your contract follows the ERC721 standard, contract.nft will be present
 * const allNFTs = await contract.nft.query.all()
 *
 * // if your contract extends IMintableERC721, contract.nft.mint will be present
 * const tx = await contract.nft.mint.to("0x...", {
 *     name: "Cool NFT",
 *     image: readFileSync("some_image.png"),
 *   });
 * ```
 *
 * @beta
 */
export declare class SmartContract<TContract extends ThirdwebContract = ThirdwebContract> implements UpdateableNetwork {
    static contractType: "custom";
    /**
     * @internal
     */
    static schema: {
        deploy: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            merkle: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
            seller_fee_basis_points: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodNumber>>;
            fee_recipient: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>>;
            symbol: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>>;
        }>, {
            primary_sale_recipient: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
            platform_fee_basis_points: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodNumber>>;
            platform_fee_recipient: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>>;
            trusted_forwarders: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodEffects<import("zod").ZodString, string, string>, "many">>>;
        }>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../core").Json, import("zod").ZodTypeDef, import("../core").Json>>, {
            [x: string]: import("../core").Json;
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            primary_sale_recipient?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
        }, {
            [x: string]: import("../core").Json;
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            primary_sale_recipient?: string | undefined;
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
            name: string;
        }>;
        output: import("zod").ZodObject<import("zod").extendShape<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }>, {
            merkle: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
            seller_fee_basis_points: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodNumber>>;
            fee_recipient: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>>;
            symbol: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>>;
        }>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../core").Json, import("zod").ZodTypeDef, import("../core").Json>>, {
            [x: string]: import("../core").Json;
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }, {
            [x: string]: import("../core").Json;
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
        input: import("zod").ZodObject<import("zod").extendShape<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
        }, {
            merkle: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>>;
            seller_fee_basis_points: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodNumber>>;
            fee_recipient: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodString, string, string>>>;
            symbol: import("zod").ZodOptional<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodString>>>;
        }>, "strip", import("zod").ZodLazy<import("zod").ZodType<import("../core").Json, import("zod").ZodTypeDef, import("../core").Json>>, {
            [x: string]: import("../core").Json;
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }, {
            [x: string]: import("../core").Json;
            symbol?: string | undefined;
            merkle?: Record<string, string> | undefined;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            seller_fee_basis_points?: number | undefined;
            fee_recipient?: string | undefined;
            name: string;
        }>;
    };
    private contractWrapper;
    private storage;
    private options;
    events: ContractEvents<TContract>;
    interceptor: ContractInterceptor<TContract>;
    estimator: GasCostEstimator<TContract>;
    publishedMetadata: ContractPublishedMetadata<TContract>;
    /**
     * @internal
     */
    analytics: ContractAnalytics<TContract>;
    metadata: ContractMetadata<ThirdwebContract, any>;
    royalties: ContractRoyalty<IRoyalty & ThirdwebContract, any> | undefined;
    roles: ContractRoles<IPermissionsEnumerable, any> | undefined;
    sales: ContractPrimarySale<IPrimarySale> | undefined;
    platformFees: ContractPlatformFee<IPlatformFee> | undefined;
    /**
     * Auto-detects ERC20 standard functions.
     */
    token: Erc20 | undefined;
    /**
     * Auto-detects ERC721 standard functions.
     */
    nft: Erc721 | undefined;
    /**
     * Auto-detects ERC1155 standard functions.
     */
    edition: Erc1155 | undefined;
    constructor(network: NetworkOrSignerOrProvider, address: string, abi: ContractInterface, storage: IStorage, options?: SDKOptions, contractWrapper?: ContractWrapper<TContract>);
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    getAddress(): string;
    /**
     * Call any function on this contract
     * @example
     * ```javascript
     * // read functions will return the data from the contract
     * const myValue = await contract.call("myReadFunction");
     * console.log(myValue);
     *
     * // write functions will return the transaction receipt
     * const tx = await contract.call("myWriteFunction", [arg1, arg2]);
     * const receipt = tx.receipt;
     * ```
     * @param functionName - the name of the function to call
     * @param args - the arguments of the function
     */
    call(functionName: string, ...args: any[]): Promise<any>;
    /** ********************
     * FEATURE DETECTION
     * ********************/
    private detectRoyalties;
    private detectRoles;
    private detectPrimarySales;
    private detectPlatformFees;
    private detectErc20;
    private detectErc721;
    private detectErc1155;
}
