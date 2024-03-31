"use client";

import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import { usePathname, useRouter } from "next/navigation";

type Props = React.HTMLAttributes<HTMLDivElement>;

const NavLinks = ({ className, ...props }: Props) => {
  const links = [
    {
      text: "HOME",
      link: "/",
      exact: true,
    },
    {
      text: "HEADPHONES",
      link: "/headphones",
      exact: false,
    },
    {
      text: "SPEAKERS",
      link: "/speakers",
      exact: false,
    },
    {
      text: "EARPHONES",
      link: "/earphones",
      exact: false,
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
  exact:boolean;
};

const NavLink = ({ text, link, exact }: NavLink) => {
  const pathname = usePathname();
  // console.log(pathname, link, pathname.startsWith(link));
  const isActive = exact ? pathname === link : pathname.startsWith(link);

  return (
    <Link
      className={`relative after:absolute after:bottom-0 after:left-0 after:h-[0.125rem] after:w-full after:origin-center after:scale-0 after:bg-primary after:duration-150 after:content-[''] hover:text-primary ${isActive ? "after:scale-100" : ""}`}
      href={link}
    >
      {text}
    </Link>
  );
};

export default NavLinks;
