import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type StackItem = {
  name: string;
  version: string;
  detail: string;
};

const stack: StackItem[] = [
  { name: "Next.js", version: "16.3.6", detail: "App Router" },
  { name: "React", version: "19.2.8", detail: "Server & Client Components" },
  { name: "TypeScript", version: "5", detail: "strict mode" },
  { name: "Tailwind CSS", version: "4", detail: "v4 + Prettier class sorting" },
  { name: "shadcn/ui", version: "Base UI", detail: "components/ui" },
  { name: "Zustand", version: "5.0.15", detail: "global + feature stores" },
  { name: "Prisma", version: "7.10.0", detail: "PostgreSQL + driver adapter" },
  {
    name: "React Hook Form",
    version: "7.89.0",
    detail: "validated with Zod 4",
  },
  { name: "Prettier", version: "3.9.9", detail: "repo-wide formatting" },
];

export function TechStack() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tech Stack</CardTitle>
        <CardDescription>
          Configured and verified in this starter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-3">
          {stack.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-4 border-b border-border pb-3 last:border-b-0 last:pb-0"
            >
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-medium">
                  {item.name}
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  {item.detail}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.version}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-400">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-emerald-500"
                  />
                  Configured
                </span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
