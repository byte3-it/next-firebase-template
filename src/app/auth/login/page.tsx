"use client";

import React, { useState } from "react";
import { ROUTES } from "@/lib/routes";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase/firebaseClient";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential?.user) router.replace(ROUTES.APP_PROFILE);
    } catch (e) {
      console.error(e);
      if (e instanceof FirebaseError) {
        toast.error("Ops, login non andato a buon fine... " + e.code);
      } else {
        toast.error("Ops, login non andato a buon fine...");
      }
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 min-w-sm">
        <div className="text-2xl font-bold">Accedi</div>
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
        <Button variant="default" className="w-full" onClick={handleLogin}>
          Login
        </Button>
        <Link className="text-sm" href={ROUTES.FORGOT_PASSWORD}>
          Hai dimenticato la password? <span className="underline">Recupera la password</span>
        </Link>
        <Link className="text-sm" href={ROUTES.REGISTER}>
          Non hai un account? <span className="underline">Registrati</span>
        </Link>
      </div>
    </div>
  );
}
