export default function useStripe() {
  async function checkout() {
    const res = await fetch("/api/stripe/checkout");
    const sessionId = res.json();
    console.log(sessionId);
  }

  return {
    checkout
  }
}