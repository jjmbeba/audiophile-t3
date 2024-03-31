import { eq } from "drizzle-orm";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { products } from "~/server/db/schema";

export const productRouter = createTRPCRouter({
  getEarphones: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.products.findMany({
      where: eq(products.category, "earphones"),
    });
  }),

  getHeadphones: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.products.findMany({
      where: eq(products.category, "headphones"),
    });
  }),

  getSpeakers: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.products.findMany({
      where: eq(products.category, "speakers"),
    });
  }),

  getProduct: publicProcedure
    .input(z.string())
    .query(async ({ input: slug, ctx }) => {
      return ctx.db.query.products.findFirst({
        where: eq(products.slug, slug),
      });
    }),
});
