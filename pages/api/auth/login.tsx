import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { LoginPayload } from "@thirdweb-dev/sdk/dist/src/schema";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).json({ 
      error: "Invalid method. Only POST supported." 
    });
  }

  const PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY;
  if (!PRIVATE_KEY) {
    console.error("Missing ADMIN_PRIVATE_KEY environment variable");
    return res.status(500).send("Missing ADMIN_PRIVATE_KEY environment variable")
  }

  const sdk = ThirdwebSDK.fromPrivateKey(process.env.ADMIN_PRIVATE_KEY as string, "mainnet");
  
  // Get signed login payload from the frontend
  const payload = req.body.payload as LoginPayload;
  if (!payload) {
    return res.status(400).json({ 
      error: "Must provide a login payload to generate a token" 
    })
  }  

  const domain = process.env.NEXT_PUBLIC_AUTH_DOMAIN
  if (!domain) {
    console.log("Missing NEXT_PUBLIC_AUTH_DOMAIN environment variable");
    return res.status(500).send("Missing NEXT_PUBLIC_AUTH_DOMAIN environment variable")
  }

  // Generate an access token with the SDK using the signed payload
  const token = await sdk.auth.generate(domain, payload);

  // Securely set httpOnly cookie on request to prevent XSS on frontend
  // And set path to / to enable access_token usage on all endpoints
  res.setHeader("Set-Cookie", serialize("access_token", token, {
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  }));

  return res.status(200).json("Successfully logged in.");
};

export default login;
