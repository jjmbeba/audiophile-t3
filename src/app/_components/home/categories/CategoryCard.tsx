"use client";

import Image from "next/image";
import { Category } from "./Categories";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useSidebarStore } from "~/store/sidebarStore";

const CategoryCard = ({ title, link, imageUrl }: Category) => {
  const [setSidebarState] = useSidebarStore((state) => [state.setSidebarState]);

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
      <Link
        href={link}
        onClick={() => {
          setSidebarState(false);
        }}
      >
        <div className="sub-title mt-[1.5625rem] flex items-center gap-[0.8125rem] text-center text-[#797979] hover:text-primary">
          SHOP <ChevronRight className="h-4 w-4 text-primary" />
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
