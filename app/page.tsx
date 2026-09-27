import { TechStack } from "@/components/shared/tech-stack";
import { LoginForm } from "@/features/auth/components/login-form";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-10 px-6 py-16">
        <header className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Next Starter
          </h1>
          <p className="max-w-xl text-muted-foreground">
            Feature-based architecture with the full stack pre-configured —
            clone it and start shipping.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <TechStack />

          <section className="flex flex-col items-center gap-3">
            <h2 className="text-sm font-medium text-muted-foreground">
              Feature demo — <code className="font-mono">features/auth</code>
            </h2>
            <LoginForm />
          </section>
        </div>
      </main>
    </div>
  );
}
