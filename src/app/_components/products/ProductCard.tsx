import Link from "next/link";
import { Button } from "~/components/ui/button";
import { RouterOutputs } from "~/trpc/react";
import ProductCardImage from "./ProductCardImage";

export type Props = RouterOutputs["product"]["getEarphones"][number];

export interface Product extends Props {
  images: {
    tablet: string;
    desktop: string;
    mobile: string;
  };
}

const ProductCard = ({
  images,
  isNewProduct,
  name,
  description,
  category,
}: Product) => {
  return (
    <div className="flex flex-col items-center *:text-center">
      <ProductCardImage images={images} name={name!} />
      {isNewProduct && (
        <p className="over-line mt-[2.3125rem] text-primary md:mt-[3.5625rem]">
          NEW PRODUCT
        </p>
      )}
      <h4 className="mt-[2.375rem] max-w-[35.75rem] font-bold uppercase md:mt-[1.75rem] md:max-w-[19.0625rem] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.09375rem]">
        {name}
      </h4>
      <p className="mt-[2.4375rem] text-[#7d7d7d] md:mt-[2.875rem] md:max-w-[35.75rem]">
        {description}
      </p>
      <Button className="mt-[1.9375rem] md:mt-[1.6875rem]">
        <Link href={`${category}/${name}`}>SEE PRODUCT</Link>
      </Button>
    </div>
  );
};

export default ProductCard;
