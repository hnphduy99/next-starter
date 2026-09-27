export type AuthUser = {
  id: string;
  email: string;
  name: string;
  role: "admin" | "member";
};

export type AuthStatus = "loading" | "authenticated" | "unauthenticated";
