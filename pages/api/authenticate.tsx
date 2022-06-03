import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";

const authenticate = async (req: NextApiRequest, res: NextApiResponse) => {
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
  
  const { subject } = req.body;
  if (!ethers.utils.isAddress(subject)) {
    return res.status(400).json({ 
      error: "Must provide a valid address as the subject" 
    })
  }  

  const application = "thirdweb-sign-in-with-ethereum-backend"
  const authorizedPayload = await sdk.auth.generate({
    application,
    subject,
  })

  return res.status(200).json(authorizedPayload)
};

export default authenticate;
