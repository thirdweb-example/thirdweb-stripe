import { NFTCollection } from "./nft-collection";
import { EditionDrop } from "./edition-drop";
import { Edition } from "./edition";
import { Token } from "./token";
import { Vote } from "./vote";
import { Split } from "./split";
import { Marketplace } from "./marketplace";
import { Pack } from "./pack";
import { NFTDrop } from "./nft-drop";
import { TokenDrop } from "./token-drop";
import { SmartContract } from "./smart-contract";
import { SignatureDrop } from "./signature-drop";
import { Multiwrap } from "./multiwrap";
/**
 * @internal
 */
export declare const KNOWN_CONTRACTS_MAP: {
    readonly "nft-drop": typeof NFTDrop;
    readonly "signature-drop": typeof SignatureDrop;
    readonly "nft-collection": typeof NFTCollection;
    readonly "edition-drop": typeof EditionDrop;
    readonly edition: typeof Edition;
    readonly "token-drop": typeof TokenDrop;
    readonly token: typeof Token;
    readonly vote: typeof Vote;
    readonly split: typeof Split;
    readonly marketplace: typeof Marketplace;
    readonly pack: typeof Pack;
    readonly multiwrap: typeof Multiwrap;
};
/**
 * @internal
 */
export declare const CONTRACTS_MAP: {
    readonly custom: typeof SmartContract;
    readonly "nft-drop": typeof NFTDrop;
    readonly "signature-drop": typeof SignatureDrop;
    readonly "nft-collection": typeof NFTCollection;
    readonly "edition-drop": typeof EditionDrop;
    readonly edition: typeof Edition;
    readonly "token-drop": typeof TokenDrop;
    readonly token: typeof Token;
    readonly vote: typeof Vote;
    readonly split: typeof Split;
    readonly marketplace: typeof Marketplace;
    readonly pack: typeof Pack;
    readonly multiwrap: typeof Multiwrap;
};
/**
 * @internal
 */
export declare const REMOTE_CONTRACT_NAME: {
    readonly "nft-drop": "DropERC721";
    readonly "signature-drop": "SignatureDrop";
    readonly "nft-collection": "TokenERC721";
    readonly "edition-drop": "DropERC1155";
    readonly edition: "TokenERC1155";
    readonly "token-drop": "DropERC20";
    readonly token: "TokenERC20";
    readonly vote: "VoteERC20";
    readonly split: "Split";
    readonly marketplace: "Marketplace";
    readonly pack: "Pack";
    readonly custom: "Custom";
    readonly multiwrap: "Multiwrap";
};
/**
 * @internal
 */
export declare const REMOTE_CONTRACT_TO_CONTRACT_TYPE: {
    readonly DropERC721: "nft-drop";
    readonly SignatureDrop: "signature-drop";
    readonly TokenERC721: "nft-collection";
    readonly DropERC1155: "edition-drop";
    readonly TokenERC1155: "edition";
    readonly DropERC20: "token-drop";
    readonly TokenERC20: "token";
    readonly VoteERC20: "vote";
    readonly Split: "split";
    readonly Marketplace: "marketplace";
    readonly Pack: "pack";
    readonly Multiwrap: "multiwrap";
};
