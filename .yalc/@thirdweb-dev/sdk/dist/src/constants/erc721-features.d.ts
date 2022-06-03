export declare const FEATURE_NFT_BATCH_MINTABLE: {
    readonly name: "ERC721BatchMintable";
    readonly namespace: "nft.mint.batch";
    readonly docLinks: {
        readonly sdk: "sdk.erc721batchmintable";
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
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
export declare const FEATURE_NFT_MINTABLE: {
    readonly name: "ERC721Mintable";
    readonly namespace: "nft.mint";
    readonly docLinks: {
        readonly sdk: "sdk.erc721mintable";
        readonly contracts: "IMintableERC721";
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
        readonly ERC721BatchMintable: {
            readonly name: "ERC721BatchMintable";
            readonly namespace: "nft.mint.batch";
            readonly docLinks: {
                readonly sdk: "sdk.erc721batchmintable";
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
                outputs: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
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
export declare const FEATURE_NFT_ENUMERABLE: {
    readonly name: "ERC721Enumerable";
    readonly namespace: "nft.query.owned";
    readonly docLinks: {
        readonly sdk: "sdk.erc721enumerable";
        readonly contracts: "IERC721Enumerable";
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
export declare const FEATURE_NFT_SUPPLY: {
    readonly name: "ERC721Supply";
    readonly namespace: "nft.query";
    readonly docLinks: {
        readonly sdk: "sdk.erc721supply";
        readonly contracts: "IERC721Supply";
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
    readonly features: {
        readonly ERC721Enumerable: {
            readonly name: "ERC721Enumerable";
            readonly namespace: "nft.query.owned";
            readonly docLinks: {
                readonly sdk: "sdk.erc721enumerable";
                readonly contracts: "IERC721Enumerable";
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
export declare const FEATURE_NFT: {
    readonly name: "ERC721";
    readonly namespace: "nft";
    readonly docLinks: {
        readonly sdk: "sdk.erc721";
        readonly contracts: "IERC721";
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
        readonly ERC721Supply: {
            readonly name: "ERC721Supply";
            readonly namespace: "nft.query";
            readonly docLinks: {
                readonly sdk: "sdk.erc721supply";
                readonly contracts: "IERC721Supply";
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
            readonly features: {
                readonly ERC721Enumerable: {
                    readonly name: "ERC721Enumerable";
                    readonly namespace: "nft.query.owned";
                    readonly docLinks: {
                        readonly sdk: "sdk.erc721enumerable";
                        readonly contracts: "IERC721Enumerable";
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
        readonly ERC721Mintable: {
            readonly name: "ERC721Mintable";
            readonly namespace: "nft.mint";
            readonly docLinks: {
                readonly sdk: "sdk.erc721mintable";
                readonly contracts: "IMintableERC721";
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
                readonly ERC721BatchMintable: {
                    readonly name: "ERC721BatchMintable";
                    readonly namespace: "nft.mint.batch";
                    readonly docLinks: {
                        readonly sdk: "sdk.erc721batchmintable";
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
                        outputs: {
                            internalType: string;
                            name: string;
                            type: string;
                        }[];
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
