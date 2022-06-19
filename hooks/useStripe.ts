import { loadStripe } from "@stripe/stripe-js";

export default function useStripe() {
  async function checkout() {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
    });
    const session = await res.json();
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    if (!publishableKey) {
      throw new Error("Stripe publishable key not set");
    }

    const stripe = await loadStripe(publishableKey as string, {
      apiVersion: "2020-08-27",
    })
    await stripe?.redirectToCheckout({
      sessionId: session.id,
    })
  }

  async function subscription() {
    const res = await fetch("/api/stripe/subscription", {
      method: "POST",
    });
    const subscriptionMessage = await res.json();
    return subscriptionMessage;
  }

  return {
    checkout,
    subscription
  }
}