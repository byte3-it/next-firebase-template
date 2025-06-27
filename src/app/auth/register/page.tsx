"use client";

import React, { useState } from "react";
import { ROUTES } from "@/lib/routes";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { auth } from "@/lib/firebase/firebaseClient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FirebaseError } from "firebase/app";

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential?.user) router.replace(ROUTES.APP_PROFILE);
    } catch (e) {
      console.error(e);
      if (e instanceof FirebaseError) {
        toast.error("Ops, la registrazione non è andata a buon fine... " + e.code);
      } else {
        toast.error("Ops, la registrazione non è andata a buon fine...");
      }
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 min-w-sm">
        <div className="text-2xl font-bold">Registrati</div>
        <Input
          id="email"
          type="text"
          autoFocus
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          id="passwordConfirm"
          type="password"
          placeholder="Conferma Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <Button variant="default" className="w-full" onClick={handleRegister} disabled={password !== passwordConfirm}>
          Registrati
        </Button>

        <Link className="text-sm" href={ROUTES.LOGIN}>
          Hai già un account? <span className="underline">Accedi</span>
        </Link>
      </div>
    </div>
  );
}
