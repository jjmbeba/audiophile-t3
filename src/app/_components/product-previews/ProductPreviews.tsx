import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

const ProductPreviews = () => {
  return (
    <section className="mt-[7.5rem] flex flex-col gap-[1.5rem]">
      <ZX9SpeakerPreview />
      <ZX7SpeakerPreview />
      <YX1EarphonesPreview />
    </section>
  );
};

export default ProductPreviews;
const ZX9SpeakerPreview = () => {
  return (
    <div className="flex flex-col items-center rounded-[0.5rem] bg-primary pb-[3.4375rem]">
      <Image
        src={"/home/mobile/image-speaker-zx9.png"}
        width={172.25}
        height={207}
        alt="zx9-speaker"
        className="mt-[3.9375rem]"
      />
      <p className="mt-[2.9375rem] px-[2.7175rem]  text-center text-[2.25rem] font-bold leading-[2.5rem] tracking-[0.080625rem] text-white">
        ZX9 SPEAKER
      </p>
      <p className=" mt-[2.3125rem] px-[1.7175rem] text-center text-[#f5ded2]">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <Button
        asChild
        className="mt-[1.9375rem] bg-black px-[2rem] py-[1.1875rem]"
      >
        <Link href={"/speakers/zx9-speaker"}>SEE PRODUCT</Link>
      </Button>
    </div>
  );
};

const ZX7SpeakerPreview = () => {
  return (
    <div className="relative rounded-[0.5rem] px-[1.625rem] py-[6.3125rem]">
      <Image
        src={"/home/mobile/image-speaker-zx7.jpg"}
        fill
        alt="zx7-speaker"
        className="-z-10 rounded-[0.5rem]"
      />
      <h4>ZX7 SPEAKER</h4>
      <Button
        variant={"outline"}
        className="mt-[2.5rem] border-black bg-transparent"
      >
        <Link href={"/speakers/zx7-speaker"}>SEE PRODUCT</Link>
      </Button>
    </div>
  );
};

const YX1EarphonesPreview = () => {
  return (
    <div>
      <div className="relative h-[12.5rem] w-full">
        <Image
          src={"/home/mobile/image-earphones-yx1.jpg"}
          fill
          alt="yx1-earphones"
          className="rounded-[0.5rem]"
        />
      </div>
      <div className="mt-[1.5rem] rounded-[0.5rem] bg-[#f1f1f1] px-[1.625rem] pb-[2.5rem] pt-[3.1875rem]">
        <h4>YX1 EARPHONES</h4>
        <Button
          variant={"outline"}
          className="mt-[2.5rem] border-black bg-transparent"
        >
          <Link href={"/earphones/yx1-earphones"}>SEE PRODUCT</Link>
        </Button>
      </div>
    </div>
  );
};
