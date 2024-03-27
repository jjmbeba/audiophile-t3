import { Metadata } from "next";
import React from "react";
import { z } from "zod";
import GoBackButton from "~/app/_components/common/GoBackButton";
import Categories from "~/app/_components/home/categories/Categories";
import CTA from "~/app/_components/home/cta/CTA";
import ProductCard from "~/app/_components/products/ProductCard";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: "Earphones",
};

const page = async () => {
  const earphones = await api.product.getEarphones();

  return (
    <>
      <Banner />
      <main className="mt-16 *:mx-[1.625rem] md:mt-[3.5rem] lg:*:mx-[10.3125rem]">
        <GoBackButton />
        <div className="flex flex-col items-center gap-[7.5rem]">
          {earphones.map((earphone) => {
            const images = z
              .object({
                tablet: z.string(),
                desktop: z.string(),
                mobile: z.string(),
              })
              .parse(earphone.images);

            return (
              <ProductCard key={earphone.id} {...earphone} images={images} />
            );
          })}
        </div>
        <Categories className="mt-[10.75rem]" />
        <CTA />
      </main>
    </>
  );
};

const Banner = () => {
  return (
    <h4 className="w-full bg-black py-[2.625rem] text-center text-white md:py-[7.0625rem]">
      EARPHONES
    </h4>
  );
};

export default page;
