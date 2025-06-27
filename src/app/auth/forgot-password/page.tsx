"use client";

import React, { useState } from "react";
import { ROUTES } from "@/lib/routes";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase/firebaseClient";
import { sendPasswordResetEmail } from "firebase/auth";
import Link from "next/link";
import { FirebaseError } from "firebase/app";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Email inviata con successo");
    } catch (e) {
      console.error(e);
      if (e instanceof FirebaseError) {
        toast.error("Ops, recupero password non andato a buon fine... " + e.code);
      } else {
        toast.error("Ops, recupero password non andato a buon fine...");
      }
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 min-w-sm">
        <div className="text-2xl font-bold">Recupera la password</div>
        <Input
          id="email"
          type="text"
          autoFocus
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="default" className="w-full" onClick={handleResetPassword}>
          Recupera la password
        </Button>
        <Link className="text-sm" href={ROUTES.LOGIN}>
          Torna al <span className="underline">Login</span>
        </Link>
      </div>
    </div>
  );
}
