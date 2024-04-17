import Stripe from "stripe";
import { env } from "~/env";

declare const global: Global & { stripe: Stripe };

export let stripe: Stripe;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    stripe = new Stripe(env.STRIPE_SECRET_KEY as string);
}else{
    if(!global.stripe){
        global.stripe = new Stripe(env.STRIPE_SECRET_KEY as string);
    }

    stripe = global.stripe;
  }
}
