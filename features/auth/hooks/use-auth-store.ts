import { create } from "zustand";

import type { AuthStatus, AuthUser } from "@/features/auth/types";

type AuthState = {
  user: AuthUser | null;
  status: AuthStatus;
  setUser: (user: AuthUser) => void;
  setStatus: (status: AuthStatus) => void;
  signOut: () => void;
};

const initialState = {
  user: null,
  status: "unauthenticated" as AuthStatus,
};

export const useAuthStore = create<AuthState>()((set) => ({
  ...initialState,

  setUser: (user) => set({ user, status: "authenticated" }),

  setStatus: (status) =>
    set((state) => ({
      status,
      user: status === "unauthenticated" ? null : state.user,
    })),

  signOut: () => set(initialState),
}));
