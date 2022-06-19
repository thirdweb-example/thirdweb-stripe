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

  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json({
      error: "Must be logged in to create a checkout session"
    })
  }

  // Check that user is authenticated and get their wallet address
  const sdk = ThirdwebSDK.fromPrivateKey(process.env.ADMIN_PRIVATE_KEY as string, "mainnet");
  const userAddress = await sdk.auth.authenticate("thirdweb.com", token);

  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: "2020-08-27",
  });


  console.log(`metadata["walletAddress"]:"${userAddress}"`)
  const customers = await stripe.customers.search({
    query: `metadata["walletAddress"]:"${userAddress}"`
  })

  console.log(customers);

  let customer;
  if (customers.data.length > 0) {
    customer = customers.data[0];
  } else {
    customer = await stripe.customers.create({
      metadata: {
        walletAddress: userAddress,
      },
    })
  }

  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    success_url: "http://localhost:3000",
    line_items: [
      { price: process.env.STRIPE_PRICE_ID, quantity: 1, }
    ],
    cancel_url: "http://localhost:3000",
    mode: "subscription",
  })

  return res.status(200).json(session);
};

export default checkout;
