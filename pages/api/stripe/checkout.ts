import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { getUser } from "../../../auth.config";

const checkout = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).json({
      error: "Invalid method. Only POST supported.",
    });
  }

  const user = await getUser(req);
  const { STRIPE_SECRET_KEY, NEXT_PUBLIC_AUTH_DOMAIN: domain } = process.env;

  if (!STRIPE_SECRET_KEY) {
    return res.status(500).json({
      error: "Stripe secret key not set",
    });
  }

  if (!user) {
    return res.status(401).json({
      error: "Must be logged in to create a checkout session",
    });
  }

  if (!domain) {
    return res
      .status(500)
      .send("Missing NEXT_PUBLIC_AUTH_DOMAIN environment variable");
  }

  const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
  });

  // Check for stripe customers already associated with authenticated wallet address
  const customers = await stripe.customers.search({
    query: `metadata["walletAddress"]:"${user?.address}"`,
  });

  let customer;
  if (customers.data.length > 0) {
    // If there is already a customer for this wallet, use it
    customer = customers.data[0];
  } else {
    // Otherwise create a new customer associated with this wallet
    customer = await stripe.customers.create({
      metadata: {
        walletAddress: user?.address,
      },
    });
  }

  // Finally, create a new checkout session for the customer to send to the client-side
  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    success_url: domain,
    line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
    cancel_url: domain,
    mode: "subscription",
  });

  return res.status(200).json(session);
};

export default checkout;
