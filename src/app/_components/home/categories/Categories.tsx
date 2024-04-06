import { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "~/lib/utils";
import CategoryCard from "./CategoryCard";

export type Category = {
  title: string;
  link: string;
  imageUrl: string;
};

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Categories = ({ className, ...props }: Props) => {
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
    <section {...props} className={cn("mt-[5.75rem] flex flex-col gap-[4.25rem] md:w-full md:flex-row md:justify-between md:gap-[0.625rem] md:*:w-1/3", className)}>
      {categories.map((category) => (
        <CategoryCard key={category.title} {...category} />
      ))}
    </section>
  );
};

export default Categories;
