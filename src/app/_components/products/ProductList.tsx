import React from "react";
import { RouterOutputs } from "~/trpc/react";
import GoBackButton from "../common/GoBackButton";
import { z } from "zod";
import ProductCard from "./ProductCard";
import Categories from "../home/categories/Categories";
import CTA from "../home/cta/CTA";

type ProductData = {
  productData: RouterOutputs["product"]["getEarphones"];
  bannerTitle:string;
};

const ProductList = ({productData, bannerTitle}: ProductData) => {
  return (
    <>
      <Banner title={bannerTitle}/>
      <main className="mt-16 *:px-[1.625rem] md:mt-[3.5rem] lg:*:px-[10.3125rem]">
        <GoBackButton />
        <div className="flex flex-col items-center gap-[7.5rem]">
          {productData.map((product) => {
            const images = z
              .object({
                tablet: z.string(),
                desktop: z.string(),
                mobile: z.string(),
              })
              .parse(product.images);

            return (
              <ProductCard key={product.id} {...product} images={images} />
            );
          })}
        </div>
        <Categories className="mt-[10.75rem]" />
        <CTA />
      </main>
    </>
  );
};

const Banner = ({title}:{title:string}) => {
  return (
    <h4 className="w-full bg-black py-[2.625rem] text-center text-white md:py-[3.625rem]">
      {title}
    </h4>
  );
};

export default ProductList;
