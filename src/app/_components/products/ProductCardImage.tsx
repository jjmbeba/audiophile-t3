"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  images: {
    tablet: string;
    desktop: string;
    mobile: string;
  };
  name: string;
};

const ProductCardImage = ({ images, name }: Props) => {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const screen =
    windowSize.innerWidth >= 1024
      ? "desktop"
      : windowSize.innerWidth >= 768
        ? "tablet"
        : "mobile";

  return (
    <div className="relative h-[22rem] w-[20.4375rem] md:h-[46.35474rem] md:w-[43.0625rem]">
      <Image
        src={images[screen]}
        fill
        alt={name}
        className="rounded-[0.5rem]"
      />
    </div>
  );
};

export default ProductCardImage;
