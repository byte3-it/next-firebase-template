"use client";

import React from "react";
import { ROUTES } from "@/lib/routes";
import toast from "react-hot-toast";
import { auth } from "@/lib/firebase/firebaseClient";
import { sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";
import DefaultLayout from "@/components/default-layout";
import { ResetPasswordDtoType, ResetPasswordForm } from "@/components/form/ResetPasswordForm";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export default function ForgotPassword() {
  const form = useForm<z.infer<typeof ResetPasswordDtoType>>({
    resolver: zodResolver(ResetPasswordDtoType),
    defaultValues: {
      email: "",
    },
  });

  const handleResetPassword = useMutation({
    mutationFn: async (data: z.infer<typeof ResetPasswordDtoType>) => {
      await sendPasswordResetEmail(auth, data.email);
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Email inviata con successo");
    },
  });

  return (
    <DefaultLayout title="Recupera la password" centeredTitle>
      <div className="flex flex-col items-center gap-4 my-10">
        <div className="w-full max-w-md flex flex-col gap-4">
          <ResetPasswordForm onSubmit={handleResetPassword.mutate} form={form} />
          <div className="flex items-center gap-2">
            <span>Hai già un account?</span>
            <Link className="underline" href={ROUTES.LOGIN}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
