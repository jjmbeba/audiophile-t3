import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pb-[7rem] text-center">
      <Image
        src={"/home/mobile/image-header.jpg"}
        priority
        className="absolute -z-10"
        fill
        alt="hero-image"
      />
      <p className="over-line pt-[7.0625rem] text-[#8c8c8c]">NEW PRODUCT</p>
      <p className="mt-[1.75rem] text-[2.25rem] font-bold uppercase leading-[2.5rem] tracking-[0.080625rem] text-white">
        XX99 Mark II Headphones
      </p>
      <p className="mt-[2.3125rem] text-[#c5c5c5]">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Button className="mt-[2.1875rem]">See more</Button>
    </section>
  );
};

export default Hero;
