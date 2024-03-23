import React from "react";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center bg-black px-6 pb-[2.375rem] pt-[3.625rem] text-white after:absolute after:left-1/2 after:top-0 after:h-[0.25rem] after:w-[6.3125rem] after:-translate-x-[50%] after:bg-primary after:content-[''] lg:px-[10.3125rem]">
      <div>
        <Logo />
        <NavLinks className="mt-[3.4375rem] flex flex-col gap-[2rem]" />
      </div>
      <div>
        <div className="mt-[3.9375rem] text-center text-[#878787]">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we&apos;re open 7 days a week.
          </p>
          <p className="mt-[3.625rem]">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};

const SocialLinks = () => {
  const socialsIcons = [
    {
      title: "Facebook",
      imageUrl: "/shared/desktop/icon-facebook.svg",
    },
    {
      title: "Twitter",
      imageUrl: "/shared/desktop/icon-twitter.svg",
    },
    {
      title: "Instagram",
      imageUrl: "/shared/desktop/icon-instagram.svg",
    },
  ];

  return (
    <div className="mt-[3.4375rem] flex items-center justify-center gap-4">
      {socialsIcons.map(({ title, imageUrl }) => (
        <div key={title} className="relative h-[1.5rem] w-[1.5rem]">
          <Image src={imageUrl} fill alt={title} />
        </div>
      ))}
    </div>
  );
};

export default Footer;
