import { type Metadata } from "next";
import ProductList from "~/app/_components/products/ProductList";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: "Earphones",
};

const page = async () => {
  const earphones = await api.product.getEarphones();

  return <ProductList productData={earphones} bannerTitle="EARPHONES" />;
};

export default page;
