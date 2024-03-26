import { eq } from "drizzle-orm";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { products } from "~/server/db/schema";

export const productRouter = createTRPCRouter({
  getEarphones: publicProcedure
    .query(({ ctx }) => {
      return ctx.db.query.products.findMany({
        where:eq(products.category, 'earphones')
      })
    }),
});
