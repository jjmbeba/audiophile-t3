
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const countryRouter = createTRPCRouter({
  getAvailableCountries:publicProcedure.query(({ctx}) => {
    return ctx.db.query.supportedCountries.findMany({
      with:{
        cities:true
      }
    })
  })
});