import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <div className="mt-[7.5rem] text-center">
      <div className="relative h-[18.75rem] w-full">
        <Image
          src={"/shared/mobile/image-best-gear.jpg"}
          fill
          alt="best-gear image"
          className="rounded-[0.5rem]"
        />
      </div>
      <h4 className="mt-[3.125rem] uppercase">
        Bringing you the <span className="text-primary">best</span> audio gear
      </h4>
      <p className="mt-[2.9375rem] text-[#7d7d7d]">
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
