import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AspectRatio } from "~/components/ui/aspect-ratio";

type Category = {
  title: string;
  link: string;
  imageUrl: string;
};

const Categories = () => {
  const categories: Category[] = [
    {
      title: "HEADPHONES",
      link: "/headphones",
      imageUrl: `/shared/desktop/image-category-thumbnail-headphones.png`,
    },
    {
      title: "SPEAKERS",
      link: "/speakers",
      imageUrl: `/shared/desktop/image-category-thumbnail-speakers.png`,
    },
    {
      title: "EARPHONES",
      link: "/earphones",
      imageUrl: `/shared/desktop/image-category-thumbnail-earphones.png`,
    },
  ];

  return (
    <section className="mt-[5.75rem] flex flex-col gap-[4.25rem] md:w-full md:flex-row md:justify-between md:gap-[0.625rem] md:*:w-1/3">
      {categories.map((category) => (
        <CategoryCard key={category.title} {...category} />
      ))}
    </section>
  );
};

export default Categories;

const CategoryCard = ({ title, link, imageUrl }: Category) => {
  return (
    <div className="relative flex flex-col items-center rounded-[0.5rem] bg-[#f1f1f1] pb-[1.625rem] lg:pb-[2.125rem]">
      <Image
        src={imageUrl}
        className="absolute -top-[3.25rem] z-0 bg-transparent lg:h-[10rem] lg:w-[10.684375rem]"
        width={147}
        height={133}
        alt={title}
      />
      <p className="z-10 mt-[5.8125rem] text-center text-[0.9375rem] font-bold leading-[1.5625rem] lg:mt-[7.625rem] lg:text-[1.125rem] lg:tracking-[0.08125rem]">
        {title}
      </p>
      <Link href={link}>
        <div className="sub-title mt-[1.5625rem] flex items-center gap-[0.8125rem] text-center text-[#797979] hover:text-primary">
          SHOP <ChevronRight className="h-4 w-4 text-primary" />
        </div>
      </Link>
    </div>
  );
};
