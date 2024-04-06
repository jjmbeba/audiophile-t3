import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { RouterOutputs } from "~/trpc/react";
import { api } from "~/trpc/server";
import Banner from "../common/Banner";
import GoBackButton from "../common/GoBackButton";
import ItemCounter from "../common/ItemCounter";
import Categories from "../home/categories/Categories";
import CTA from "../home/cta/CTA";
import { Product } from "./ProductCard";
import ProductImage from "./ProductImage";

type ProductAccessory = {
  id: number;
  item: string;
  quantity: number;
  productID: number;
};

type ProductRecommendation = {
  id: number;
  productID: number;
  secondaryProductID: number;
};

interface Props extends Product {
  bannerTitle: string;
  accessories: ProductAccessory[];
  seeMoreLinks: ProductRecommendation[];
}

type RecommendationOutput = {
  id: number;
  name: string | null;
  category: string;
  slug: string;
  images: unknown;
};

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
  id,
  images,
  isNewProduct,
  name,
  description,
  price,
  features,
  accessories,
  relatedImages,
  seeMoreLinks,
}: Product & {
  accessories: ProductAccessory[];
  seeMoreLinks: ProductRecommendation[];
}) => {
  return (
    <div>
      <div className="items-center gap-[4.375rem] md:flex">
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
          <p className="mt-[0.75rem] max-w-[26.75rem] text-[#7d7d7d] md:mt-[2.875rem] md:max-w-[35.75rem]">
            {description}
          </p>
          <h6 className="mt-[2rem] md:mt-[3.5625rem]">
            ${price.toLocaleString()}
          </h6>
          <ItemCounter
            id={id}
            name={name!}
            price={price}
            image={images.mobile}
          />
        </div>
      </div>
      <ProductFeatures features={features} />
      <ProductAccessories accessories={accessories} />
      <ExtraProductImages relatedImages={relatedImages} />
      <ProductRecommendations recommendations={seeMoreLinks} />
    </div>
  );
};

const ProductFeatures = ({ features }: { features: string }) => {
  return (
    <div className="mt-[6rem]">
      <h5>FEATURES</h5>
      <p className="mt-[2.6875rem] text-[#7d7d7d]">{features}</p>
    </div>
  );
};

const ProductAccessories = ({
  accessories,
}: {
  accessories: ProductAccessory[];
}) => {
  return (
    <div className="mt-[6rem] items-start gap-[10.6875rem] md:flex">
      <h5>IN THE BOX</h5>
      <div className="mt-[2.6875rem] text-[#7d7d7d] md:mt-0">
        {accessories.map(({ id, item, quantity }) => (
          <div
            key={id}
            className="flex items-center justify-start gap-[1.5625rem]"
          >
            <p className="font-bold text-primary">{quantity}x</p>
            <p className="text-[#7d7d7d]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExtraProductImages = ({
  relatedImages,
}: {
  relatedImages: {
    first: string;
    second: string;
    third: string;
  };
}) => {
  return (
    <div className="mt-[5.6875rem] flex flex-col gap-[1.25rem] *:rounded-[0.5rem] md:flex-row">
      <div className="flex flex-col gap-[1.25rem] *:relative *:h-[10.875rem] *:w-full md:*:h-[10.875rem] md:*:w-[17.3125rem]">
        <div className="">
          <Image
            src={relatedImages.first}
            className="rounded-[0.5rem]"
            fill
            alt="image-gallery-2"
          />
        </div>
        <div className="">
          <Image
            src={relatedImages.second}
            className="rounded-[0.5rem]"
            fill
            alt="image-gallery-2"
          />
        </div>
      </div>
      <div className="relative h-[23rem] w-full">
        <Image
          src={relatedImages.third}
          className="rounded-[0.5rem]"
          fill
          alt="image-gallery-3"
        />
      </div>
    </div>
  );
};

const ProductRecommendations = async ({
  recommendations,
}: {
  recommendations: ProductRecommendation[];
}) => {
  const productRecommendations =
    await api.product.getProductRecommendations(recommendations);

  return (
    <div className="mt-[8.125rem]">
      <h5 className="text-center">you may also like</h5>
      <div
        className="mt-[3.0625rem] flex flex-col gap-[3.5rem] md:flex-row
md:gap-[0.6875rem]"
      >
        {productRecommendations.map((recommendation) => {
          if (!recommendation) return;

          return (
            <RecommendationCard key={recommendation.id} {...recommendation} />
          );
        })}
      </div>
    </div>
  );
};

const RecommendationCard = ({ name, slug, category }: RecommendationOutput) => {
  return (
    <div className="flex flex-col items-center *:text-center">
      <div className="relative h-[7.5rem] w-[20.4375rem] rounded-[0.5rem] bg-gray-600 md:h-[19.875rem] md:w-[13.9375rem]" />
      <h5 className="mt-[2.5rem]">{name}</h5>
      <Button asChild className="mt-[2rem]">
        <Link href={`${category}/${slug}`}>SEE PRODUCT</Link>
      </Button>
    </div>
  );
};

export default ProductDetail;
