"use client";

import { FormField, FormLabel } from "../ui/form";
import { FormControl } from "../ui/form";
import { Button } from "../ui/button";
import { Form, FormItem, FormMessage } from "../ui/form";
import { UserDetailsSchema } from "@/types";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const UserDetailsForm = ({
  onSubmit,
  form,
  submitButtonLabel = "Salva",
}: {
  onSubmit: (data: z.infer<typeof UserDetailsSchema>) => void;
  submitButtonLabel?: string;
  form: UseFormReturn<z.infer<typeof UserDetailsSchema>>;
}) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome dell&apos;iscritto</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* surname */}
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cognome dell&apos;iscritto</FormLabel>
              <FormControl>
                <Input placeholder="Cognome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email dell&apos;iscritto</FormLabel>
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
