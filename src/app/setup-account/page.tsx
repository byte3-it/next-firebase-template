"use client";

import { ROUTES } from "@/lib/routes";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { auth } from "@/lib/firebase/firebaseClient";
import { signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthState } from "react-firebase-hooks/auth";
import { FullPageLoader } from "@/components/full-page-loader";

export default function SetupAccount() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push(ROUTES.LOGIN);
  };

  if (loading) return <FullPageLoader />;

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 min-w-sm">
        <div className="text-2xl font-bold">Setup account</div>

        <Input id="uid" type="text" value={user?.uid ?? "-"} readOnly />
        <div>Copia questo UID e invialo al tuo amministratore per attivare il tuo account</div>

        <Button
          variant="default"
          className="w-full"
          onClick={() => {
            navigator.clipboard.writeText(user?.uid ?? "-");
            toast.success("UID copiato");
          }}
        >
          Copia
        </Button>

        <Button
          variant="destructive"
          className="w-full"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
