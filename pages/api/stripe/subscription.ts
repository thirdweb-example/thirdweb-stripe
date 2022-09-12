import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { getUser } from "../../../auth.config";

const subscription = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).json({
      error: "Invalid method. Only POST supported.",
    });
  }

  const { STRIPE_SECRET_KEY, NEXT_PUBLIC_AUTH_DOMAIN: domain } = process.env;
  if (!STRIPE_SECRET_KEY) {
    return res.status(500).json({
      error: "Stripe secret key not set",
    });
  }

  const user = await getUser(req);

  if (!user?.address) {
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

  // Find associated stripe customer with user wallet
  const customers = await stripe.customers.search({
    query: `metadata["walletAddress"]:"${user?.address}"`,
  });

  if (customers.data.length === 0) {
    // If there is no customer, then we know there is no subscription
    return res.status(200).json(`User ${user?.address} has no subscription.`);
  }

  // If there is a customer, then we can check if they have a subscription
  const customer = customers.data[0];
  const subscriptions = await stripe.subscriptions.list({
    customer: customer.id,
  });

  if (subscriptions?.data.length === 0) {
    // If there is no subscription, return
    return res.status(200).json(`User ${user?.address} has no subscription.`);
  }

  // If there is a subscription, return the subscription ID
  return res
    .status(200)
    .json(
      `User ${user?.address} has subscription with ID ${subscriptions?.data[0].id}`
    );
};

export default subscription;
