import { IERC1155, IERC1155Metadata, IERC1155Supply, IERC20, IERC20Metadata, IERC721, IERC721Metadata } from "contracts";
export declare type BaseERC20 = IERC20 & IERC20Metadata;
export declare type BaseERC721 = IERC721 & IERC721Metadata;
export declare type BaseERC1155 = IERC1155 & IERC1155Metadata & IERC1155Supply;
