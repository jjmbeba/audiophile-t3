"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const CTA = () => {
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
    <div className="mt-[7.5rem] flex flex-col items-center *:text-center md:mt-[6rem]">
      <div className="relative h-[18.75rem] w-full">
        <Image
          src={`/shared/${screen}/image-best-gear.jpg`}
          fill
          alt="best-gear image"
          className="rounded-[0.5rem]"
        />
      </div>
      <h4 className="mt-[3.125rem] uppercase md:mt-[4.4375rem] md:max-w-[35.8125rem] md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.09375rem]">
        Bringing you the <span className="text-primary">best</span> audio gear
      </h4>
      <p className="mt-[2.9375rem] text-[#7d7d7d] md:max-w-[35.8125rem]">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
};

export default CTA;
