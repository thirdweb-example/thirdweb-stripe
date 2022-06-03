import { ContractInterface, Signer } from "ethers";
import { IStorage } from "./interfaces/IStorage";
import { RemoteStorage } from "./classes/remote-storage";
import { Edition, EditionDrop, Marketplace, NFTCollection, NFTDrop, Pack, SignatureDrop, Split, Token, Vote } from "../contracts";
import { SDKOptions } from "../schema/sdk-options";
import { RPCConnectionHandler } from "./classes/rpc-connection-handler";
import type { ContractForContractType, ContractType, NetworkOrSignerOrProvider, SignerOrProvider } from "./types";
import { ContractDeployer } from "./classes/contract-deployer";
import { SmartContract } from "../contracts/smart-contract";
import { TokenDrop } from "../contracts/token-drop";
import { ContractPublisher } from "./classes/contract-publisher";
import { ChainOrRpc } from "../constants";
import { UserWallet } from "./wallet/UserWallet";
import { Multiwrap } from "../contracts/multiwrap";
import { WalletAuthenticator } from "./auth/wallet-authenticator";
/**
 * The main entry point for the thirdweb SDK
 * @public
 */
export declare class ThirdwebSDK extends RPCConnectionHandler {
    /**
     * Get an instance of the thirdweb SDK based on an existing ethers signer
     *
     * @example
     * ```javascript
     * // get a signer from somewhere (createRandom is being used purely for example purposes)
     * const signer = ethers.Wallet.createRandom();
     *
     * // get an instance of the SDK with the signer already setup
     * const sdk = ThirdwebSDK.fromSigner(signer, "mainnet");
     * ```
     *
     * @param signer - a ethers Signer to be used for transactions
     * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
     * @param options - the SDK options to use
     * @returns an instance of the SDK
     *
     * @beta
     */
    static fromSigner(signer: Signer, network?: ChainOrRpc, options?: SDKOptions): ThirdwebSDK;
    /**
     * Get an instance of the thirdweb SDK based on a private key.
     *
     * @remarks
     * This should only be used for backend services or scripts, with the private key stored in a secure way.
     * **NEVER** expose your private key to the public in any way.
     *
     * @example
     * ```javascript
     * const sdk = ThirdwebSDK.fromPrivateKey("SecretPrivateKey", "mainnet");
     * ```
     *
     * @param privateKey - the private key - **DO NOT EXPOSE THIS TO THE PUBLIC**
     * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
     * @param options - the SDK options to use
     * @returns an instance of the SDK
     *
     * @beta
     */
    static fromPrivateKey(privateKey: string, network: ChainOrRpc, options?: SDKOptions): ThirdwebSDK;
    /**
     * @internal
     * the cache of contracts that we have already seen
     */
    private contractCache;
    /**
     * @internal
     * should never be accessed directly, use {@link ThirdwebSDK.getPublisher} instead
     */
    private _publisher;
    /**
     * Internal handler for uploading and downloading files
     */
    private storageHandler;
    /**
     * New contract deployer
     */
    deployer: ContractDeployer;
    /**
     * Interact with the connected wallet
     */
    wallet: UserWallet;
    /**
     * Upload and download files from IPFS or from your own storage service
     */
    storage: RemoteStorage;
    /**
     * Enable authentication with the connected wallet
     */
    auth: WalletAuthenticator;
    constructor(network: ChainOrRpc | SignerOrProvider, options?: SDKOptions, storage?: IStorage);
    /**
     * Get an instance of a Drop contract
     * @param contractAddress - the address of the deployed contract
     * @returns the contract
     */
    getNFTDrop(contractAddress: string): NFTDrop;
    /**
     * Get an instance of a SignatureDrop contract
     * @param contractAddress - the address of the deployed contract
     * @returns the contract
     * @internal
     */
    getSignatureDrop(contractAddress: string): SignatureDrop;
    /**
     * Get an instance of a NFT Collection contract
     * @param address - the address of the deployed contract
     * @returns the contract
     */
    getNFTCollection(address: string): NFTCollection;
    /**
     * Get an instance of a Edition Drop contract
     * @param address - the address of the deployed contract
     * @returns the contract
     */
    getEditionDrop(address: string): EditionDrop;
    /**
     * Get an instance of an Edition contract
     * @param address - the address of the deployed contract
     * @returns the contract
     */
    getEdition(address: string): Edition;
    /**
     * Get an instance of a Token Drop contract
     * @param address - the address of the deployed contract
     * @returns the contract
     */
    getTokenDrop(address: string): TokenDrop;
    /**
     * Get an instance of a Token contract
     * @param address - the address of the deployed contract
     * @returns the contract
     */
    getToken(address: string): Token;
    /**
     * Get an instance of a Vote contract
     * @param address - the address of the deployed contract
     * @returns the contract
     */
    getVote(address: string): Vote;
    /**
     * Get an instance of a Splits contract
     * @param address - the address of the deployed contract
     * @returns the contract
     */
    getSplit(address: string): Split;
    /**
     * Get an instance of a Marketplace contract
     * @param address - the address of the deployed contract
     * @returns the contract
     */
    getMarketplace(address: string): Marketplace;
    /**
     * Get an instance of a Pack contract
     * @param address - the address of the deployed contract
     * @returns the contract
     */
    getPack(address: string): Pack;
    /**
     * Get an instance of a Multiwrap contract
     * @param address - the address of the deployed contract
     * @returns the contract
     * @beta
     */
    getMultiwrap(address: string): Multiwrap;
    /**
     *
     * @internal
     * @param address - the address of the contract to instantiate
     * @param contractType - optional, the type of contract to instantiate
     * @returns a promise that resolves with the contract instance
     */
    getBuiltInContract<TContractType extends ContractType = ContractType>(address: string, contractType: TContractType): ContractForContractType<TContractType>;
    /**
     * @param contractAddress - the address of the contract to attempt to resolve the contract type for
     * @returns the {@link ContractType} for the given contract address
     * @throws if the contract type cannot be determined (is not a valid thirdweb contract)
     */
    resolveContractType(contractAddress: string): Promise<ContractType>;
    /**
     * Return all the contracts deployed by the specified address
     * @param walletAddress - the deployed address
     */
    getContractList(walletAddress: string): Promise<{
        address: string;
        contractType: "custom" | "split" | "token" | "pack" | "edition" | "edition-drop" | "token-drop" | "vote" | "marketplace" | "nft-drop" | "signature-drop" | "multiwrap" | "nft-collection";
        metadata: () => Promise<any>;
    }[]>;
    /**
     * Update the active signer or provider for all contracts
     * @param network - the new signer or provider
     */
    updateSignerOrProvider(network: NetworkOrSignerOrProvider): void;
    private updateContractSignerOrProvider;
    /**
     * Get an instance of a Custom ThirdwebContract
     * @param address - the address of the deployed contract
     * @returns the contract
     * @beta
     */
    getContract(address: string): Promise<SmartContract<import("contracts").ThirdwebContract>>;
    /**
     * Get an instance of a Custom contract from a json ABI
     * @param address - the address of the deployed contract
     * @param abi - the JSON abi
     * @returns the contract
     * @beta
     */
    getContractFromAbi(address: string, abi: ContractInterface): SmartContract<import("contracts").ThirdwebContract>;
    /**
     * @internal
     */
    getPublisher(): ContractPublisher;
}
