"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  loginSchema,
  type LoginValues,
} from "@/features/auth/validations/login-schema";

type LoginFormProps = {
  onSubmit?: (values: LoginValues) => void | Promise<void>;
};

export function LoginForm({ onSubmit }: LoginFormProps) {
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(values: LoginValues) {
    await onSubmit?.(values);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Enter your credentials to continue.</CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(handleSubmit)} noValidate>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="login-email">Email</FieldLabel>
              <Input
                {...form.register("email")}
                id="login-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!form.formState.errors.email}
              />
              <FieldError errors={[form.formState.errors.email]} />
            </Field>
            <Field>
              <FieldLabel htmlFor="login-password">Password</FieldLabel>
              <Input
                {...form.register("password")}
                id="login-password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                aria-invalid={!!form.formState.errors.password}
              />
              <FieldError errors={[form.formState.errors.password]} />
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            Sign in
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
