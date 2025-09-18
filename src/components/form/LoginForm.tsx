"use client";

import { Button } from "../ui/button";
import { FormField, FormLabel, FormControl, Form, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const LoginDtoType = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const LoginForm = ({
  onSubmit,
  form,
  submitButtonLabel = "Login",
}: {
  onSubmit: (data: z.infer<typeof LoginDtoType>) => void;
  submitButtonLabel?: string;
  form: UseFormReturn<z.infer<typeof LoginDtoType>>;
}) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{submitButtonLabel}</Button>
      </form>
    </Form>
  );
};
