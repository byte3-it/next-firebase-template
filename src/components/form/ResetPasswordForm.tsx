"use client";

import { Button } from "../ui/button";
import { FormField, FormLabel, FormControl, Form, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const ResetPasswordDtoType = z.object({
  email: z.string().email(),
});

export const ResetPasswordForm = ({
  onSubmit,
  form,
  submitButtonLabel = "Recupera la password",
}: {
  onSubmit: (data: z.infer<typeof ResetPasswordDtoType>) => void;
  submitButtonLabel?: string;
  form: UseFormReturn<z.infer<typeof ResetPasswordDtoType>>;
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
                <Input placeholder="Email" {...field} />
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
