import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const checkout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).json({ 
      error: "Invalid method. Only POST supported." 
    });
  }

  const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
  if (!STRIPE_SECRET_KEY) {
    console.error("Missing STRIPE_SECRET_KEY environment variable");
    return res.status(500).json({ 
      error: "Stripe secret key not set" 
    })
  }

  // Get access token off cookies
  const token = req.cookies.access_token;
  console.log(">>> TOKEN")
  console.log(token)
  if (!token) {
    return res.status(401).json({
      error: "Must be logged in to create a checkout session"
    })
  }

  const sdk = ThirdwebSDK.fromPrivateKey(process.env.ADMIN_PRIVATE_KEY as string, "mainnet");

  // Authenticate token with the SDK
  const domain = "thirdweb.com"
  const address = await sdk.auth.authenticate(domain, token);

  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27",
  });

  const sessionId = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
    mode: "subscription",
  })

  return res.status(200).json(sessionId);
};

export default checkout;
