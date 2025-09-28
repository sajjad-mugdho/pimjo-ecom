"use client";

import create from "zustand";
import type { StateCreator } from "zustand";

type State = {
  collapsed: boolean;
  toggle: () => void;
  setCollapsed: (v: boolean) => void;
};

const initializer: StateCreator<State> = (set) => ({
  collapsed: false,
  toggle: () => set((s) => ({ collapsed: !s.collapsed })),
  setCollapsed: (v: boolean) => set({ collapsed: v }),
});

export const useDashboardStore = create<State>(initializer);
