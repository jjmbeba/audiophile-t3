import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { env } from "~/env";
import { stripe } from "~/lib/stripe";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = headers().get("Stripe-Signature") as string;
  const webhookSecret = env.WEBHOOK_SECRET;

  let event: Stripe.Event;
  try {
    if (!signature) {
      throw new Error("Missing stripe signature");
    }

    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.log(error);
    return new Response("Invalid stripe request", { status: 400 });
  }

  const eventType = event.type;

  switch (eventType) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log(`Checkout session completed: ${session.id}`)
      break;

    default:
      console.log("Unhandled event type");
      return new Response("Unhandled event type");
      break;
  }
}
