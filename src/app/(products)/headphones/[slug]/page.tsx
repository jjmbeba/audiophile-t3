import type { Metadata, ResolvingMetadata } from "next";
import { z } from "zod";
import ProductDetail from "~/app/_components/products/ProductDetail";
import { api } from "~/trpc/server";

type Props = {
  params: { slug: string };
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

const Page = async ({ params }: Props) => {
  const product = await api.product.getProduct(params.slug);
  if (!product) return null; // or a fallback component

  const images = z
    .object({
      tablet: z.string(),
      desktop: z.string(),
      mobile: z.string(),
    })
    .parse(product.images);

  const relatedImages = z
    .object({
      first: z.string(),
      second: z.string(),
      third: z.string(),
    })
    .parse(product.relatedImages);

  const accessories = z
    .object({
      id: z.number(),
      item: z.string(),
      quantity: z.number(),
      productID: z.number(),
    })
    .array()
    .parse(product.accessories);

  const seeMoreLinks = z
    .object({
      id: z.number(),
      productID: z.number(),
      secondaryProductID: z.number(),
    })
    .array()
    .parse(product.seeMoreLinks);

  return (
    <ProductDetail
      bannerTitle="HEADPHONES"
      {...product}
      accessories={accessories}
      images={images}
      relatedImages={relatedImages}
      seeMoreLinks={seeMoreLinks}
    />
  );
};

export default Page;
