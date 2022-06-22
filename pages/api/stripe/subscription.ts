import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const subscription = async (req: NextApiRequest, res: NextApiResponse) => {
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

  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({
      error: "Must be logged in to create a checkout session"
    })
  }

  const domain = process.env.NEXT_PUBLIC_AUTH_DOMAIN
  if (!domain) {
    console.log("Missing NEXT_PUBLIC_AUTH_DOMAIN environment variable");
    return res.status(500).send("Missing NEXT_PUBLIC_AUTH_DOMAIN environment variable")
  }

  // Check that user is authenticated and get their wallet address
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.ADMIN_PRIVATE_KEY as string, "mainnet");
  const userAddress = await sdk.auth.authenticate(domain, token);

  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27",
  });

  // Find associated stripe customer with user wallet
  const customers = await stripe.customers.search({
    query: `metadata["walletAddress"]:"${userAddress}"`
  })

  if (customers.data.length === 0) {
    // If there is no customer, then we know there is no subscription
    return res.status(200).json(`User ${userAddress} has no subscription.`);
  }

  // If there is a customer, then we can check if they have a subscription
  const customer = customers.data[0];
  const subscriptions = await stripe.subscriptions.list({
    customer: customer.id,
  })

  if (subscriptions?.data.length === 0) {
    // If there is no subscription, return
    return res.status(200).json(`User ${userAddress} has no subscription.`);
  }

  // If there is a subscription, return the subscription ID
  return res.status(200).json(`User ${userAddress} has subscription with ID ${subscriptions?.data[0].id}`);

}

export default subscription;