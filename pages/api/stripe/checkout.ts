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


  // Check for stripe customers already associated with authenticated wallet address
  const customers = await stripe.customers.search({
    query: `metadata["walletAddress"]:"${userAddress}"`
  })

  let customer;
  if (customers.data.length > 0) {
    // If there is already a customer for this wallet, use it
    customer = customers.data[0];
  } else {
    // Otherwise create a new customer associated with this wallet
    customer = await stripe.customers.create({
      metadata: {
        walletAddress: userAddress,
      },
    })
  }

  // Finally, create a new checkout session for the customer to send to the client-side
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
