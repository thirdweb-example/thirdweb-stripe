import { NetworkOrSignerOrProvider, ValidContractClass } from "../types";
import { z } from "zod";
import { ContractRegistry } from "./registry";
import { SDKOptions } from "../../schema/sdk-options";
import { IStorage } from "../interfaces";
import { RPCConnectionHandler } from "./rpc-connection-handler";
import { MarketplaceContractDeployMetadata, MultiwrapContractDeployMetadata, NFTContractDeployMetadata, SplitContractDeployMetadata, TokenContractDeployMetadata, VoteContractDeployMetadata } from "../../types/deploy/deploy-metadata";
/**
 * Handles deploying new contracts
 * @public
 */
export declare class ContractDeployer extends RPCConnectionHandler {
    /**
     * @internal
     * should never be accessed directly, use {@link ContractDeployer.getFactory} instead
     */
    private _factory;
    /**
     * @internal
     * should never be accessed directly, use {@link ContractDeployer.getRegistry} instead
     */
    private _registry;
    private storage;
    constructor(network: NetworkOrSignerOrProvider, options: SDKOptions, storage: IStorage);
    /**
     * Deploys an NFT Collection contract
     *
     * @remarks Deploys an NFT Collection contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployNFTCollection({
     *   name: "My Collection",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployNFTCollection(metadata: NFTContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new NFTDrop contract
     *
     * @remarks Deploys an NFT Drop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployNFTDrop({
     *   name: "My Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployNFTDrop(metadata: NFTContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new SignatureDrop contract
     *
     * @remarks Deploys a SignatureDrop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deploySignatureDrop({
     *   name: "My Signature Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     * @internal
     */
    deploySignatureDrop(metadata: NFTContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new Multiwrap contract
     *
     * @remarks Deploys a Multiwrap contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployMultiwrap({
     *   name: "My Multiwrap",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     * @beta
     */
    deployMultiwrap(metadata: MultiwrapContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new Edition contract
     *
     * @remarks Deploys an Edition contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployEdition({
     *   name: "My Edition",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployEdition(metadata: NFTContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new EditionDrop contract
     *
     * @remarks Deploys an Edition Drop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployEditionDrop({
     *   name: "My Edition Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployEditionDrop(metadata: NFTContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new Token contract
     *
     * @remarks Deploys a Token contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployToken({
     *   name: "My Token",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployToken(metadata: TokenContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new Token Drop contract
     *
     * @remarks Deploys a Token Drop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployTokenDrop({
     *   name: "My Token Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployTokenDrop(metadata: TokenContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new Marketplace contract
     *
     * @remarks Deploys a Marketplace contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployMarketplace({
     *   name: "My Marketplace",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployMarketplace(metadata: MarketplaceContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new Pack contract
     *
     * @remarks Deploys a Pack contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployPack({
     *   name: "My Pack",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployPack(metadata: NFTContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new Split contract
     *
     * @remarks Deploys a Split contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deploySplit({
     *   name: "My Split",
     *   primary_sale_recipient: "your-address",
     *   recipients: [
     *    {
     *      address: "your-address",
     *      sharesBps: 80 * 100, // 80%
     *    },
     *    {
     *      address: "another-address",
     *      sharesBps: 20 * 100, // 20%
     *    },
     *   ],
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deploySplit(metadata: SplitContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new Vote contract
     *
     * @remarks Deploys an Vote contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployVote({
     *   name: "My Vote",
     *   primary_sale_recipient: "your-address",
     *   voting_token_address: "your-token-contract-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployVote(metadata: VoteContractDeployMetadata): Promise<string>;
    /**
     * Deploys a new contract
     *
     * @internal
     * @param contractType - the type of contract to deploy
     * @param contractMetadata - the metadata to deploy the contract with
     * @returns a promise of the address of the newly deployed contract
     */
    deployBuiltInContract<TContract extends ValidContractClass>(contractType: TContract["contractType"], contractMetadata: z.input<TContract["schema"]["deploy"]>): Promise<string>;
    /**
     * @internal
     */
    getRegistry(): Promise<ContractRegistry>;
    private getFactory;
    updateSignerOrProvider(network: NetworkOrSignerOrProvider): void;
    private updateContractSignerOrProvider;
}
