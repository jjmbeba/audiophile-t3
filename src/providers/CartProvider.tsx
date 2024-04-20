"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";
import { env } from "~/env";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      successUrl="http://localhost:3000?status=success"
      cancelUrl="http://localhost:3000/nowosci"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-EN"
      allowedCountries={['KE','TZ','UG']}

    >
      {children}
    </USCProvider>
  );
}
