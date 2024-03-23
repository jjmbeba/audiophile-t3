import React from "react";
import { Menu } from "lucide-react";
import Logo from "../Logo";

const MobileMenu = () => {
  return (
    <div className="flex items-center gap-[2.625rem]">
      <Menu className="h-6 w-6 lg:hidden" />
      <Logo className="hidden md:block" />
    </div>
  );
};

export default MobileMenu;
