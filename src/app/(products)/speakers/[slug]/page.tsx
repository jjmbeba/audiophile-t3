import { Metadata, ResolvingMetadata } from "next";
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

  console.log(product);

  const images = z
    .object({
      tablet: z.string(),
      desktop: z.string(),
      mobile: z.string(),
    })
    .parse(product.images);

  const accessories = z
    .object({
      id: z.number(),
      item: z.string(),
      quantity: z.number(),
      productID: z.number(),
    }).array()
    .parse(product.accessories);

  return <ProductDetail bannerTitle="SPEAKERS" {...product} accessories={accessories} images={images} />;
};

export default Page;
