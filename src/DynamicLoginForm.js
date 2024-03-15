// DynamicLoginForm.js
import React from "react";
import LoginForm from "./LoginForm";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth,provider } from './firebase'

const createDynamicLoginForm = () => {
  const handleLoginSubmit = async (data) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      // Handle successful login (e.g., redirect user)
    } catch (err) {
      console.log("Error-", err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log("Login successful with Google");
      // Handle successful login with Google (e.g., redirect user)
    } catch (error) {
      console.log("Error-", error);
    }
  };

  return <LoginForm onSubmit={handleLoginSubmit} onGoogleSignIn={handleGoogleSignIn} />;
};

export default createDynamicLoginForm;
