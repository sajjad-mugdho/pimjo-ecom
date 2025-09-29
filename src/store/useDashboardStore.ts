"use client";

import create from "zustand";
import type { StateCreator } from "zustand";

type State = {
  collapsed: boolean;
  toggle: () => void;
  setCollapsed: (v: boolean) => void;
  // mobile drawer state for small screens
  mobileOpen: boolean;
  openMobile: () => void;
  closeMobile: () => void;
  toggleMobile: () => void;
};

const initializer: StateCreator<State> = (set) => ({
  collapsed: false,
  toggle: () => set((s) => ({ collapsed: !s.collapsed })),
  setCollapsed: (v: boolean) => set({ collapsed: v }),
  mobileOpen: false,
  openMobile: () => set({ mobileOpen: true }),
  closeMobile: () => set({ mobileOpen: false }),
  toggleMobile: () => set((s) => ({ mobileOpen: !s.mobileOpen })),
});

export const useDashboardStore = create<State>(initializer);
