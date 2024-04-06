import { type Metadata } from "next";
import ProductList from "~/app/_components/products/ProductList";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: "Speakers",
};

const page = async () => {
  const speakers = await api.product.getSpeakers();

  return <ProductList productData={speakers} bannerTitle="SPEAKERS" />;
};



export default page;
