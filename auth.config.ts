import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";
import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || "",
  wallet: new PrivateKeyWallet(process.env.ADMIN_PRIVATE_KEY || ""),
});

export default ThirdwebAuthHandler();
