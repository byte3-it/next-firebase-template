"use client";

import DefaultLayout from "@/components/default-layout";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebaseClient";
import { useMutation } from "@tanstack/react-query";
import { ROUTES } from "@/lib/routes";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserDetails } from "@/lib/server-actions/crudUserDetails";
import { RegisterDtoType, RegisterForm } from "@/components/form/RegisterForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { pickFields } from "@/lib/utils";
import { UserDetailsSchema } from "@/types";

export default function RegisterPage() {
  const router = useRouter();

  const registerForm = useForm<z.infer<typeof RegisterDtoType>>({
    resolver: zodResolver(RegisterDtoType),
  });

  const handleSignupMutation = useMutation({
    mutationFn: async (data: z.infer<typeof RegisterDtoType>) => {
      console.log("data", data);

      const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log(res);

      if (res.user) {
        createUserDetails({
          authIdToken: await res.user.getIdToken(),
          userDetails: pickFields<z.infer<typeof UserDetailsSchema>>(
            data,
            Object.keys(UserDetailsSchema.shape) as (keyof z.infer<typeof UserDetailsSchema>)[]
          ),
        });
      } else {
        throw new Error("Errore nel login");
      }
    },
    onSuccess: () => {
      toast.success("Registrato con successo");
      router.push(ROUTES.SETUP_ACCOUNT);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <DefaultLayout title="Registrati" centeredTitle>
      <div className="flex flex-col items-center gap-4 my-10">
        <div className="w-full max-w-md flex flex-col gap-4">
          <RegisterForm form={registerForm} onSubmit={handleSignupMutation.mutate} submitButtonLabel="Registrati" />
          <div className="flex items-center gap-2">
            <span>Hai già un account?</span>
            <Link className="underline" href={ROUTES.LOGIN}>
              Accedi
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
