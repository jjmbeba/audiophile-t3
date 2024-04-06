"use client";

import { Menu } from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import Categories from "../home/categories/Categories";
import { useSidebarStore } from "~/store/sidebarStore";

const Sidebar = () => {
  const [openSidebarState, setSidebarState] = useSidebarStore((state) => [
    state.openSidebarState,
    state.setSidebarState,
  ]);

  return (
    <Sheet open={openSidebarState} onOpenChange={setSidebarState}>
      <SheetTrigger>
        <Menu className="h-6 w-6 lg:hidden" />
      </SheetTrigger>
      <SheetContent side={"top"} className="mt-[5.5625rem] rounded-b-[0.5rem]">
        <SheetHeader>
          <SheetDescription>
            <Categories />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
