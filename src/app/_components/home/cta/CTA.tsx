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
    <section className="mt-[7.5rem] flex flex-col items-center pb-[7.75rem] *:text-center md:mt-[6rem] md:pb-[6.1875rem] lg:mt-[12.5rem] lg:flex-row-reverse lg:gap-[2.875rem] lg:pb-[12.5rem]">
      <div className="relative h-[18.75rem] w-full lg:h-[34.75rem] lg:w-[40.75rem]">
        <Image
          src={`/shared/${screen}/image-best-gear.jpg`}
          fill
          alt="best-gear image"
          className="rounded-[0.5rem]"
        />
      </div>
      <div className="mt-[3.125rem] md:mt-[4.4375rem] md:max-w-[35.8125rem] lg:max-w-[27.8125rem] lg:text-left">
        <h4 className="uppercase md:text-[2.5rem] md:leading-[2.75rem] md:tracking-[0.09375rem]">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h4>
        <p className="mt-[2.9375rem] text-[#7d7d7d]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default CTA;
