import Image from "next/image";
import { Link } from "next-view-transitions";
import React from "react";
import { cn } from "~/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Logo = ({ className, ...props }: Props) => {
  return (
    <div className={cn(className)} {...props}>
      <Link href={"/"}>
        <Image
          src={"/audiophile-logo.svg"}
          width={143}
          height={25}
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
