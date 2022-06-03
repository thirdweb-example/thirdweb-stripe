export declare const FEATURE_TOKEN_BATCH_MINTABLE: {
    readonly name: "ERC20BatchMintable";
    readonly namespace: "token.mint.batch";
    readonly docLinks: {
        readonly sdk: "sdk.erc20batchmintable";
        readonly contracts: "IMulticall";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[]];
    readonly features: {};
};
export declare const FEATURE_TOKEN_MINTABLE: {
    readonly name: "ERC20Mintable";
    readonly namespace: "token.mint";
    readonly docLinks: {
        readonly sdk: "sdk.erc20mintable";
        readonly contracts: "IMintableERC20";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[], ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {
        readonly ERC20BatchMintable: {
            readonly name: "ERC20BatchMintable";
            readonly namespace: "token.mint.batch";
            readonly docLinks: {
                readonly sdk: "sdk.erc20batchmintable";
                readonly contracts: "IMulticall";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
            }[]];
            readonly features: {};
        };
    };
};
export declare const FEATURE_TOKEN: {
    readonly name: "ERC20";
    readonly namespace: "token";
    readonly docLinks: {
        readonly sdk: "sdk.erc20";
        readonly contracts: "IERC20";
    };
    readonly abis: readonly [({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]];
    readonly features: {
        readonly ERC20Mintable: {
            readonly name: "ERC20Mintable";
            readonly namespace: "token.mint";
            readonly docLinks: {
                readonly sdk: "sdk.erc20mintable";
                readonly contracts: "IMintableERC20";
            };
            readonly abis: readonly [({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[], ({
                anonymous: boolean;
                inputs: {
                    indexed: boolean;
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                type: string;
                outputs?: undefined;
                stateMutability?: undefined;
            } | {
                inputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                name: string;
                outputs: never[];
                stateMutability: string;
                type: string;
                anonymous?: undefined;
            })[]];
            readonly features: {
                readonly ERC20BatchMintable: {
                    readonly name: "ERC20BatchMintable";
                    readonly namespace: "token.mint.batch";
                    readonly docLinks: {
                        readonly sdk: "sdk.erc20batchmintable";
                        readonly contracts: "IMulticall";
                    };
                    readonly abis: readonly [({
                        anonymous: boolean;
                        inputs: {
                            indexed: boolean;
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                        outputs?: undefined;
                        stateMutability?: undefined;
                    } | {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                        anonymous?: undefined;
                    })[], ({
                        anonymous: boolean;
                        inputs: {
                            indexed: boolean;
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        type: string;
                        outputs?: undefined;
                        stateMutability?: undefined;
                    } | {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: never[];
                        stateMutability: string;
                        type: string;
                        anonymous?: undefined;
                    })[], {
                        inputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        name: string;
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
                        stateMutability: string;
                        type: string;
                    }[]];
                    readonly features: {};
                };
            };
        };
    };
};
