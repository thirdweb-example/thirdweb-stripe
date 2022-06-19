## Thirdweb Stripe

This project demonstrates an example flow for setting up subscription based payments for web3 apps using thirdweb authentication and stripe.

## Setup Thirdweb

To run the project, first clone this repository, and then run one of the following commands to install the dependencies:

```bash
npm install
# or
yarn install
```

Next, you need to create a `.env.local` file and add the `ADMIN_PRIVATE_KEY` variable to it with the private key of the wallet you want to use as the admin wallet to generate and verify payloads. Your file should use something like the following:

```.env
ADMIN_PRIVATE_KEY=...
```

Finally, you can run the project with one of the following commands:

```bash
npm run dev
# or
yarn dev
```

Now, you can navigate to [http://localhost:3000](http://localhost:3000) to visit the client side page where you can connect a wallet and authenticate.

## Setup Stripe

Now that we've setup our thirdweb app with authentication, we need to setup Stripe to handle payments.

**1. Setup Stripe Account**

The first step to setting up our payments is to create an account with [Stripe](https://stripe.com). From here, you can log in to the Stripe dashboard and find your `Stripe Secret Key` (your publishable and secret keys should be on the main page of the dashboard, and should start with `pk_test_` and `sk_test_` respectively).

You can paste the secret key into the `.env` file as well:

```.env
STRIPE_SECRET_KEY=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
```

**2. Setup Stripe Product**

Next, we need to setup a new product in Stripe with a default subscription price. You can do this by heading to the stripe dashboard and navigating to `Payments > Subscriptions > Create Pricing` and follow through the flow.

Now we can find the ID of our new product pricing by navigating to the `Products` tab and clicking into the newly created product, where there should be a setup price obejct with an `API ID` to copy (the ID should start with `price_`).

We can add this price ID to our `.env` file as well:

```.env
STRIPE_PRICE_ID=...
```

**3. Subscribing**

Now everything we need is setup to use our application. We can run `yarn dev` or `npm run dev` to start the application and then navigate to `localhost:300`. From here, we can connect our wallet, login, and then click the subcribe button to subscribe to our product and go through stripes flow. Once we are redirected back to the original page, we can verify that the subscription was created successfully by clicking the check subcription button, and the subscription should also show up in the Stripe dashboard.

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
