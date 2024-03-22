import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="relative pb-[7rem] text-center md:pb-[10.4375rem] lg:max-h-[calc(100dvh-5.61rem)] lg:text-left">
      <HeroImage />
      <div className="flex flex-col items-center md:*:max-w-[24.9875rem] lg:items-start">
        <p className="over-line pt-[7.0625rem] text-[#8c8c8c] md:pt-[8.1875rem]">
          NEW PRODUCT
        </p>
        <p className="mt-[1.75rem] text-[2.25rem] font-bold uppercase leading-[2.5rem] tracking-[0.080625rem] text-white md:mt-[2.375rem] md:text-[3.5rem] md:leading-[3.625rem] md:tracking-[0.125rem]">
          XX99 Mark II Headphones
        </p>
        <p className="mt-[2.3125rem] text-[#c5c5c5] md:mt-[2.4375rem] md:pr-[2rem] lg:text-left">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
      </div>
      <Button className="mt-[2.1875rem] text-[0.8125rem] font-bold md:mt-[2.9375rem]">
        See product
      </Button>
    </section>
  );
};

export default Hero;
