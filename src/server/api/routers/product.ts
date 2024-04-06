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
        with: {
          accessories: true,
          seeMoreLinks: true,
        },
      });
    }),

  getProductRecommendations: publicProcedure
    .input(
      z
        .object({
          id: z.number(),
          productID: z.number(),
          secondaryProductID: z.number(),
        })
        .array()
    )
    .query(({
      input, ctx
    }) => {
      return Promise.all(
        input.map(async (rec) => {
          return ctx.db.query.products.findFirst({
            where: eq(products.id, rec.secondaryProductID),
            columns: {
              id: true,
              images: true,
              name: true,
              slug: true,
              category:true
            },
          });
        }),
      );
    }),
});
