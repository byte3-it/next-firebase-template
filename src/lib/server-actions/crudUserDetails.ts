"use server";

import { UserDetailsSchema } from "@/types";
import { COLLECTIONS } from "../firebase/firebaseConstants";
import { adminDb } from "../firebase/firebaseServer";
import { z } from "zod";
import { decodeAuthToken, WithAuthIdToken } from "@/lib/server-actions/common";

export async function createUserDetails({
  authIdToken,
  userDetails,
}: WithAuthIdToken<{ userDetails: z.infer<typeof UserDetailsSchema> }>) {
  const { authUser } = await decodeAuthToken(authIdToken);

  const userDoc = await adminDb.doc(`${COLLECTIONS.USERS}/${authUser.uid}`).get();

  if (!userDoc.exists) {
    await adminDb.doc(`${COLLECTIONS.USERS}/${authUser.uid}`).set({ ...userDetails, isAdminEnabled: false });
    return { message: "User registered" };
  }

  return { message: "User already exists" };
}
