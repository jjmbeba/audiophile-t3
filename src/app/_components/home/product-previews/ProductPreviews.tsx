"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";

const ProductPreviews = () => {
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
    <section className="mt-[7.5rem] flex flex-col gap-[1.5rem] lg:gap-[3rem]">
      <ZX9SpeakerPreview screen={screen} />
      <ZX7SpeakerPreview screen={screen} />
      <YX1EarphonesPreview screen={screen} />
    </section>
  );
};

export default ProductPreviews;
const ZX9SpeakerPreview = ({ screen }: { screen: string }) => {
  return (
    <div className="flex flex-col items-center rounded-[0.5rem] bg-primary pb-[3.4375rem] lg:pb-0 lg:flex-row lg:justify-center lg:gap-[9.4375rem]">
      <Image
        src={`/home/${screen}/image-speaker-zx9.png`}
        width={172.25}
        height={207}
        alt="zx9-speaker"
        className="mt-[3.9375rem] lg:h-[30.8125rem] lg:w-[25.639375rem]"
      />
      <div className="flex flex-col items-center lg:items-start">
        <p className="mt-[2.9375rem] px-[2.7175rem]  text-center text-[2.25rem] font-bold uppercase leading-[2.5rem] tracking-[0.080625rem] text-white md:max-w-[16.3125rem] lg:px-0 lg:text-left lg:text-[3.5rem] lg:leading-[3.625rem] lg:tracking-[0.125rem]">
          ZX9 SPEAKER
        </p>
        <p className=" mt-[2.3125rem] px-[1.7175rem] text-center text-[#f5ded2] md:max-w-[21.8125rem] lg:px-0 lg:text-left">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button
          asChild
          className="mt-[1.9375rem] bg-black px-[2rem] py-[1.1875rem] hover:bg-[#4c4c4c]"
        >
          <Link href={"/speakers/zx9-speaker"}>SEE PRODUCT</Link>
        </Button>
      </div>
    </div>
  );
};

const ZX7SpeakerPreview = ({ screen }: { screen: string }) => {
  return (
    <div className="relative rounded-[0.5rem] px-[1.625rem] py-[6.3125rem] lg:pt-[6.9375rem]">
      <Image
        src={`/home/${screen}/image-speaker-zx7.jpg`}
        fill
        alt="zx7-speaker"
        className="-z-10 rounded-[0.5rem]"
      />
      <h4>ZX7 SPEAKER</h4>
      <Button
        variant={"outline"}
        className="mt-[2.5rem] border-black bg-transparent hover:bg-[#4c4c4c]"
      >
        <Link href={"/speakers/zx7-speaker"}>SEE PRODUCT</Link>
      </Button>
    </div>
  );
};

const YX1EarphonesPreview = ({ screen }: { screen: string }) => {
  return (
    <div className="items-center gap-[0.6875rem] md:flex lg:gap-[1.875rem]">
      <div className="relative h-[12.5rem] w-full md:h-[20rem] md:w-1/2 lg:h-[20rem]">
        <Image
          src={`/home/${screen}/image-earphones-yx1.jpg`}
          fill
          alt="yx1-earphones"
          className="rounded-[0.5rem]"
        />
      </div>
      <div className="mt-[1.5rem] rounded-[0.5rem] bg-[#f1f1f1] px-[1.625rem] pb-[2.5rem] pt-[3.1875rem] md:mt-0 md:h-[20rem] md:w-1/2 md:pt-[6.9375rem]">
        <h4>YX1 EARPHONES</h4>
        <Button
          variant={"outline"}
          className="mt-[2.5rem] border-black bg-transparent hover:bg-[#4c4c4c]"
        >
          <Link href={"/earphones/yx1-earphones"}>SEE PRODUCT</Link>
        </Button>
      </div>
    </div>
  );
};
