import Link from "next/link";
import React from "react";
import { cn } from "~/lib/utils";
import { headers } from "next/headers";

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
  const headersList = headers();
  const pathname = headersList.get("next-url");

  return (
    <Link
      className={`hover:text-primary after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-[0.125rem] after:w-full after:content-[''] ${pathname !== link ? "after:hidden" : ""} `}
      href={link}
    >
      {text}
    </Link>
  );
};

export default NavLinks;
