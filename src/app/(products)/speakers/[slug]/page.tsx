import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { z } from "zod";
import Banner from "~/app/_components/common/Banner";
import GoBackButton from "~/app/_components/common/GoBackButton";
import Categories from "~/app/_components/home/categories/Categories";
import CTA from "~/app/_components/home/cta/CTA";
import ProductDetail from "~/app/_components/products/ProductDetail";
import { api } from "~/trpc/server";

type Props = {
  params: { slug: string };
  bannerTitle: string;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const product = await api.product.getProduct(slug);

  return {
    title: product?.name,
  };
}
const page = async ({ params }: Props) => {
  const product = await api.product.getProduct(params.slug);

  if (!product)return;

  const images = z
    .object({
      tablet: z.string(),
      desktop: z.string(),
      mobile: z.string(),
    })
    .parse(product.images);

  return <ProductDetail bannerTitle="SPEAKERS" {...product} images={images} />;
};
export default page;
