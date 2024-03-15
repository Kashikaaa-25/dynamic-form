// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBppPMHGlyXXM0t9B16cfmHxECL120BS4I",
  authDomain: "react-form-3da8c.firebaseapp.com",
  projectId: "react-form-3da8c",
  storageBucket: "react-form-3da8c.appspot.com",
  messagingSenderId: "156645811211",
  appId: "1:156645811211:web:b0502371f1e1a9b170130e",
  measurementId: "G-Y1TK5DMY1R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };