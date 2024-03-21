import Image from "next/image";
import React from "react";
import { cn } from "~/lib/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Logo = ({ className, ...props }: Props) => {
  return (
    <div className={cn(className)} {...props}>
      <Image src={"/audiophile-logo.svg"} width={143} height={25} alt="logo" />
    </div>
  );
};

export default Logo;
