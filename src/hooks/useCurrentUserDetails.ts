import { auth, db } from "@/lib/firebase/firebaseClient";
import { COLLECTIONS } from "@/lib/firebase/firebaseConstants";
import { UserDetailsTypeDoc } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { getDoc, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export const useCurrentUserDetails = () => {
  const [user] = useAuthState(auth);

  return useQuery({
    queryKey: ["current-user"],
    queryFn: async () => {
      const docRef = await getDoc(doc(db, COLLECTIONS.USERS, user?.uid ?? "0"));
      return { id: docRef.id, ...docRef.data() } as unknown as UserDetailsTypeDoc;
    },
    enabled: !!user,
  });
};
