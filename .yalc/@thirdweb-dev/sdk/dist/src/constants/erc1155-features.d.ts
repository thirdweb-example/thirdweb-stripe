export declare const FEATURE_EDITION_BATCH_MINTABLE: {
    readonly name: "ERC1155BatchMintable";
    readonly namespace: "edition.mint.batch";
    readonly docLinks: {
        readonly sdk: "sdk.erc1155batchmintable";
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
export declare const FEATURE_EDITION_MINTABLE: {
    readonly name: "ERC1155Mintable";
    readonly namespace: "edition.mint";
    readonly docLinks: {
        readonly sdk: "sdk.erc1155mintable";
        readonly contracts: "IMintableERC1155";
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
        readonly ERC1155BatchMintable: {
            readonly name: "ERC1155BatchMintable";
            readonly namespace: "edition.mint.batch";
            readonly docLinks: {
                readonly sdk: "sdk.erc1155batchmintable";
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
export declare const FEATURE_EDITION_ENUMERABLE: {
    readonly name: "ERC1155Enumerable";
    readonly namespace: "edition.query";
    readonly docLinks: {
        readonly sdk: "sdk.erc1155";
        readonly contracts: "IERC1155";
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
    })[], {
        inputs: never[];
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
export declare const FEATURE_EDITION: {
    readonly name: "ERC1155";
    readonly namespace: "edition";
    readonly docLinks: {
        readonly sdk: "sdk.erc1155enumerable";
        readonly contracts: "IERC1155Enumerable";
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
        readonly ERC1155Enumerable: {
            readonly name: "ERC1155Enumerable";
            readonly namespace: "edition.query";
            readonly docLinks: {
                readonly sdk: "sdk.erc1155";
                readonly contracts: "IERC1155";
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
            })[], {
                inputs: never[];
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
        readonly ERC1155Mintable: {
            readonly name: "ERC1155Mintable";
            readonly namespace: "edition.mint";
            readonly docLinks: {
                readonly sdk: "sdk.erc1155mintable";
                readonly contracts: "IMintableERC1155";
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
                readonly ERC1155BatchMintable: {
                    readonly name: "ERC1155BatchMintable";
                    readonly namespace: "edition.mint.batch";
                    readonly docLinks: {
                        readonly sdk: "sdk.erc1155batchmintable";
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
