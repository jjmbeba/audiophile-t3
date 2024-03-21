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
      className={cn(
        `nav-link ${pathname === link ? "text-primary" : "text-primary-foreground"}`,
      )}
      href={link}
    >
      {text}
    </Link>
  );
};

export default NavLinks;
