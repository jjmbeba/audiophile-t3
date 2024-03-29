import { Metadata } from "next";
import ProductList from "~/app/_components/products/ProductList";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: "Headphones",
};

const page = async () => {
  const headphones = await api.product.getHeadphones();

  return (
    <ProductList productData={headphones} bannerTitle="HEADPHONES"/>
  );
};
export default page;
