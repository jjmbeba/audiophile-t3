import React from "react";
import Logo from "../Logo";
import NavLinks from "../NavLinks";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../socials/Icons";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center bg-black px-6 pb-[2.375rem] pt-[3.625rem] text-white after:absolute after:left-1/2 after:top-0 after:h-[0.25rem] after:w-[6.3125rem] after:-translate-x-[50%] after:bg-primary after:content-['']  md:items-start  md:pb-[3.3125rem] md:pt-[3.8125rem] md:after:left-[2.4375rem] md:after:translate-x-0 lg:px-[10.3125rem] lg:after:left-[10.3125rem]">
      <div className="items-center justify-between lg:flex lg:w-full">
        <Logo />
        <NavLinks className="mt-[3.4375rem] flex flex-col gap-[2rem] md:mt-[2.5rem] md:flex-row lg:mt-0" />
      </div>
      <div className="items-end md:flex lg:w-full lg:items-center lg:justify-between">
        <div className="mt-[3.9375rem] text-center text-[#878787] md:mt-[2.9375rem] md:text-left lg:mt-[2.6875rem] ">
          <p className="lg:max-w-[33.75rem]">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <p className="mt-[3.625rem] md:mt-[5.625rem] lg:mt-[4.375rem]">
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
      icon: FacebookIcon,
    },
    {
      title: "Twitter",
      icon: TwitterIcon,
    },
    {
      title: "Instagram",
      icon: InstagramIcon,
    },
  ];

  return (
    <div className="mt-[3.4375rem] flex items-center justify-center gap-4">
      {socialsIcons.map(({ title, icon: Icon }) => (
        <div key={title} className="relative h-[1.5rem] w-[1.5rem]">
          <Icon className="cursor-pointer hover:text-primary" />
        </div>
      ))}
    </div>
  );
};

export default Footer;
