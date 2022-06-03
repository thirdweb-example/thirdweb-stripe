import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { AuthenticatedPayload } from "@thirdweb-dev/sdk/dist/src/schema";
import { NextApiRequest, NextApiResponse } from "next";

const verify = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).json({ 
      error: "Invalid method. Only POST supported." 
    });
  }

  const PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    return res.status(500).json({ 
      error: "Admin private key not set" 
    })
  }

  const sdk = ThirdwebSDK.fromPrivateKey(process.env.ADMIN_PRIVATE_KEY as string, "mainnet");

  const { payload } = req.body;
  const authenticatedPayload: AuthenticatedPayload = payload;

  const application = "thirdweb-sign-in-with-ethereum-backend"
  const isValid = await sdk.auth.verify(application, authenticatedPayload);

  console.log(isValid)

  return res.status(200).json(isValid);
};

export default verify;
