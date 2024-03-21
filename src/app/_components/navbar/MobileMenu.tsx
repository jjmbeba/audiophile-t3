import React from "react";
import { Menu } from "lucide-react";
import Logo from "../common/Logo";

const MobileMenu = () => {
  return (
    <div className="flex items-center space-x-[2.625rem]">
      <Menu className="h-6 w-6" />
      <Logo className="hidden md:block" />
    </div>
  );
};

export default MobileMenu;
