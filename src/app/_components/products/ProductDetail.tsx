import { z } from "zod";
import Banner from "../common/Banner";
import GoBackButton from "../common/GoBackButton";
import Categories from "../home/categories/Categories";
import CTA from "../home/cta/CTA";
import { Product } from "./ProductCard";
import ProductImage from "./ProductImage";
import { Button } from "~/components/ui/button";
import ItemCounter from "../common/ItemCounter";

interface Props extends Product {
  bannerTitle: string;
}

const ProductDetail = ({ bannerTitle, ...props }: Props) => {
  return (
    <>
      <Banner title={bannerTitle} />
      <main className="mt-8 *:px-[1.625rem] md:mt-[3.5rem] lg:*:px-[10.3125rem]">
        <GoBackButton />
        <ProductDetailCard {...props} />
        <Categories className="mt-[10.75rem]" />
        <CTA />
      </main>
    </>
  );
};

const ProductDetailCard = ({
  images,
  isNewProduct,
  name,
  description,
  slug,
  price,
  category,
}: Product) => {
  console.log(name);

  return (
    <div>
      <ProductImage images={images} name={name!} />
      <div className="flex flex-col items-start">
        {isNewProduct && (
          <p className="over-line mt-[2rem] text-primary md:mt-[3.5625rem]">
            NEW PRODUCT
          </p>
        )}
        <h4 className="mt-[1rem] max-w-[35.75rem] font-bold uppercase md:mt-[1.75rem] md:max-w-[19.0625rem] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.09375rem]">
          {name}
        </h4>
        <p className="mt-[0.75rem] text-[#7d7d7d] md:mt-[2.875rem] md:max-w-[35.75rem]">
          {description}
        </p>
        <h6 className="mt-[2rem] md:mt-[3.5625rem]">
          ${price.toLocaleString()}
        </h6>
        <ItemCounter />
      </div>
    </div>
  );
};

export default ProductDetail;
