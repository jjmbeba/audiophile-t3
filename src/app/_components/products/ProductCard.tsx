import { Link } from "next-view-transitions";
import { Button } from "~/components/ui/button";
import { RouterOutputs } from "~/trpc/react";
import ProductImage from "./ProductImage";

export type Props = RouterOutputs["product"]["getEarphones"][number];

export interface Product extends Props {
  images: {
    tablet: string;
    desktop: string;
    mobile: string;
  };
  relatedImages: {
    first: string;
    second: string;
    third: string;
  };
}

const ProductCard = ({
  images,
  isNewProduct,
  name,
  description,
  slug,
  category,
}: Product) => {
  return (
    <div className="flex flex-col items-center *:text-center md:*:text-left lg:flex-row lg:gap-[8rem] lg:even:flex-row-reverse">
      <ProductImage images={images} name={name!} />
      <div className="flex flex-col items-center lg:items-start">
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
          <Link href={`${category}/${slug}`}>SEE PRODUCT</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
