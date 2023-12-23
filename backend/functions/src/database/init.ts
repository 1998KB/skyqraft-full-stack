import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "skyqraft-61cdf.firebaseapp.com",
  projectId: "skyqraft-61cdf",
  storageBucket: "skyqraft-61cdf.appspot.com",
  messagingSenderId: "827000968514",
  appId: "1:827000968514:web:5b700eff99a1816ca564db",
  measurementId: "G-N5DFVJ6WD1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
