import { create } from "zustand";

interface SidebarState {
  openSidebarState: boolean;
  setSidebarState: (newState: boolean) => void;
}

export const useSidebarStore = create<SidebarState>()((set) => ({
  openSidebarState: false,
  setSidebarState: (newState) =>
    set((state) => ({
      openSidebarState: newState,
    })),
}));
