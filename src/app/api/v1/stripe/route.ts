import { headers } from "next/headers";
import Stripe from "stripe";
import { env } from "~/env";
import { stripe } from "~/lib/stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("Stripe-Signature") as string;

  const webhookSecret = env.STRIPE_SECRET_KEY;

  let event: Stripe.Event;
  try {
    if (!sig || !webhookSecret) {
      throw new Error("Missing Stripe signature or webhook secret");
    }

    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (error) {
    console.log(error);

    return new Response("Invalid stripe webhook request", {
      status: 400,
    });
  }

  const eventType = event.type;

  switch (eventType) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log(`Checkout session completed: ${session.id}`);
      break;
    default:
      console.log(`Unhandled event type ${eventType}`);
  }

  return new Response("OK", {
    status:200
  })
}
