import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_APP_ID || "",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
