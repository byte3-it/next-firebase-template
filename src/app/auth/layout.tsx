"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/firebaseClient";
import { FullPageLoader } from "@/components/full-page-loader";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";

export default function OrganizationLayout({ children }: { children: React.ReactNode }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) return <FullPageLoader />;
  if (user) router.push(ROUTES.APP_PROFILE);

  return children;
}
