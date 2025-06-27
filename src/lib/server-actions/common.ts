import { adminAuth, adminDb } from "../firebase/firebaseServer";
import { COLLECTIONS } from "../firebase/firebaseConstants";
import { UserDetailsTypeDoc } from "@/types";

export type WithAuthIdToken<T> = T & { authIdToken: string };

export async function decodeAuthToken(tokenId: string) {
  const decodedToken = await adminAuth.verifyIdToken(tokenId);

  const [authUser, userDetails] = await Promise.all([
    adminAuth.getUser(decodedToken.uid),
    adminDb.collection(COLLECTIONS.USERS).doc(decodedToken.uid).get(),
  ]);

  return { authUser, userDetails: { ...userDetails.data(), id: userDetails.id } as UserDetailsTypeDoc };
}

export async function failIfNotBackoffice(tokenId: string) {
  const { userDetails } = await decodeAuthToken(tokenId);
  if (!userDetails.isBackofficeEnabled) {
    throw new Error("User is not an admin");
  }
}
