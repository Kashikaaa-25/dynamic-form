// LoginForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onSubmit, onGoogleSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const handleLogin = async (data) => {
    try {
      await onSubmit(data);
    } catch (err) {
      console.log("Error-", err);
    }
  };

  const handleClick = async () => {
    try {
      await onGoogleSignIn();
    } catch (error) {
      console.log("Error-", error);
    }
  };

  const handlePassword = async () => {
    try {
      const { email } = getValues();
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link has been sent to your email");
    } catch (err) {
      console.log("Error-", err);
    }
  };

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    // Redirect to the dynamically generated signup form
    navigate("/signup");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-black text-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit(handleLogin)}
      >
        <h1 className="text-center mb-4 text-3xl">Login</h1>
        <label htmlFor="email" className="block mb-2">
          Email:
        </label>
        <input
          type="text"
          {...register("email", {
            required: { value: true, message: "This field is required" },
          })}
          placeholder="Enter your email"
          className="w-full px-3 py-2 rounded-md border border-gray-300 text-black"
        />
        {errors.email && (
          <p className="text-red-700 font-bold">{errors.email.message}</p>
        )}

        <label htmlFor="password" className="block mt-4 mb-2">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "This field is required" },
          })}
          placeholder="Enter your password"
          className="w-full px-3 py-2 rounded-md border border-gray-300 text-black"
        />
        {errors.password && (
          <p className="text-red-700 font-bold">{errors.password.message}</p>
        )}
        <button
          type="button"
          onClick={handlePassword}
          className="mt-2 hover:text-gray-500 text-white font-bold "
        >
          Forgot Password?
        </button>
        <button
          className="w-full mt-7 bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <h1 className="text-center mt-2">OR</h1>
        <button
          type="button"
          onClick={handleClick}
          className="w-full mt-3 bg-red-600 hover:bg-red-900 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline"
        >
          Sign In with Google
        </button>

        <h1 className="mt-8">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className=" ml-4 p-2 rounded-md border-white border hover:bg-white hover:text-black"
            onClick={handleSignUpClick}
          >
            SignUp
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default LoginForm;
