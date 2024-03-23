"use client";

import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";

type Props = React.HTMLAttributes<HTMLDivElement>;

const NavLinks = ({ className, ...props }: Props) => {
  const links = [
    {
      text: "HOME",
      link: "/",
    },
    {
      text: "HEADPHONES",
      link: "/headphones",
    },
    {
      text: "SPEAKERS",
      link: "/speakers",
    },
    {
      text: "EARPHONES",
      link: "/earphones",
    },
  ];

  return (
    <div className={cn("items-center gap-[2.125rem]", className)} {...props}>
      {links.map((link) => (
        <NavLink key={link.link} {...link} />
      ))}
    </div>
  );
};

type NavLink = {
  text: string;
  link: string;
};

const NavLink = ({ text, link }: NavLink) => {
  const pathname = usePathname();

  return (
    <Link
      className={`relative after:absolute after:bottom-0 after:left-0 after:h-[0.125rem] after:w-full after:origin-center after:scale-0 after:bg-primary after:duration-150 after:content-[''] hover:text-primary ${pathname == link ? "after:scale-100" : ""} `}
      href={link}
    >
      {text}
    </Link>
  );
};

export default NavLinks;
