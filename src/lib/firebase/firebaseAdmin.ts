import * as admin from "firebase-admin";
import { initializeApp } from "firebase-admin/app";

if (!admin.apps.length) {
  const base64Credentials = process.env.GCP_CREDENTIALS_BASE64;
  if (!base64Credentials) {
    throw new Error("Missing GCP_CREDENTIALS_BASE64 environment variable");
  }

  const decodedCredentials = JSON.parse(Buffer.from(base64Credentials, "base64").toString("utf-8"));

  // Initialize Firebase Admin with the decoded credentials
  initializeApp({
    credential: admin.credential.cert(decodedCredentials),
  });
}

const db = admin.firestore();
const storage = admin.storage();
const auth = admin.auth();

export { db, storage, auth };
