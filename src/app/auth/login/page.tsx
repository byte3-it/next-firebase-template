"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseClient";
import { useMutation } from "@tanstack/react-query";
import { ROUTES } from "@/lib/routes";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DefaultLayout from "@/components/default-layout";
import { LoginDtoType, LoginForm } from "@/components/form/LoginForm";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginDtoType>>({
    resolver: zodResolver(LoginDtoType),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLoginMutation = useMutation({
    mutationFn: async (data: z.infer<typeof LoginDtoType>) => {
      const res = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log(res);

      if (res.user) {
        router.replace(ROUTES.APP_HOME);
      } else {
        toast.error("Errore nel login");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <DefaultLayout title="Login" centeredTitle>
      <div className="flex flex-col items-center gap-4 my-10">
        <div className="w-full max-w-md flex flex-col gap-4">
          <LoginForm onSubmit={handleLoginMutation.mutate} form={form} />
          <div className="flex items-center gap-2">
            <span>Don&apos;t have an account?</span>
            <Link className="underline" href={ROUTES.REGISTER}>
              Register
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span>Forgot password?</span>
            <Link className="underline" href={ROUTES.FORGOT_PASSWORD}>
              Reset password
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
