"use client";

import { Button } from "../ui/button";
import { FormField, FormLabel, FormControl, Form, FormItem, FormMessage } from "../ui/form";
import { UserDetailsSchema } from "@/types";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const RegisterDtoType = UserDetailsSchema.extend({
  password: z.string().min(7),
  confirmPassword: z.string().min(7),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Le password non coincidono",
  path: ["confirmPassword"],
});

export const RegisterForm = ({
  onSubmit,
  form,
  submitButtonLabel = "Salva",
}: {
  onSubmit: (data: z.infer<typeof RegisterDtoType>) => void;
  submitButtonLabel?: string;
  form: UseFormReturn<z.infer<typeof RegisterDtoType>>;
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

        {/* confirm password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conferma password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Conferma password" {...field} />
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
