import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { config } from "../config";

export const googleAuthProvider = new GoogleAuthProvider();
export const firebaseApp = initializeApp(config.firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
