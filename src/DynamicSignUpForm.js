// DynamicSignUpForm.js
import React from "react";
import SignUpForm from "./SignUpForm";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

const createDynamicSignUpForm = () => {
  const handleSignUpSubmit = async (data) => {
    try {
      const { name, email, password } = data;
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await updateProfile(user, {
        displayName: name,
      });
      // Handle successful signup (e.g., redirect user)
    } catch (err) {
      console.log("Error-", err);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      // Handle successful signup with Google (e.g., redirect user)
    } catch (error) {
      console.log("Error-", error);
    }
  };

  return <SignUpForm onSubmit={handleSignUpSubmit} onGoogleSignUp={handleGoogleSignUp} />;
};

export default createDynamicSignUpForm;
