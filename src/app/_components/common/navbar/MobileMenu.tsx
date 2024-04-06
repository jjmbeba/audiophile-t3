import React from "react";
import { Menu } from "lucide-react";
import Logo from "../Logo";
import Sidebar from "../Sidebar";

const MobileMenu = () => {
  return (
    <div className="flex items-center gap-[2.625rem]">
      <Sidebar/>
      <Logo className="hidden md:block" />
    </div>
  );
};

export default MobileMenu;
