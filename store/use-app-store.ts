import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Theme = "light" | "dark" | "system";

type AppState = {
  theme: Theme;
  sidebarCollapsed: boolean;
  setTheme: (theme: Theme) => void;
  toggleSidebar: () => void;
  reset: () => void;
};

const initialState = {
  theme: "system" as Theme,
  sidebarCollapsed: false,
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      ...initialState,

      setTheme: (theme) => set({ theme }),

      toggleSidebar: () =>
        set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

      reset: () => set(initialState),
    }),
    {
      name: "next-starter-app",
      version: 1,
      // only the theme survives a reload
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
