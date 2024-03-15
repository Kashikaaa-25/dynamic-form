// SignUpForm.js
import React from "react";
import { useForm } from "react-hook-form";

const SignUpForm = ({ onSubmit, onGoogleSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    try {
      await onSubmit(data);
    } catch (err) {
      console.log("Error-", err);
    }
  };

  const handleGoogleSignUpClick = async () => {
    try {
      await onGoogleSignUp();
    } catch (error) {
      console.log("Error-", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="bg-black text-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-center mb-4 text-3xl">Sign Up</h1>
        <label htmlFor="name" className="block mb-2">
          Name:
        </label>
        <input
          type="text"
          {...register("name", {
            required: { value: true, message: "This field is required" },
          })}
          placeholder="Enter your name"
          className="w-full px-3 py-2 mb-3 rounded-md border border-gray-300 text-black"
        />
        {errors.name && (
          <p className="text-red-700 font-bold">{errors.name.message}</p>
        )}

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

        <button className="w-full mt-7 bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline" type="submit">
          Sign Up
        </button>
        <h1 className="text-center mt-2">OR</h1>
        <button
          type="button"
          onClick={handleGoogleSignUpClick}
          className="w-full mt-3 bg-red-600 hover:bg-red-900 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline"
        >
          Sign Up with Google
        </button>
        <h1 className="mt-8">
          Already have an account?{" "}
          <a
            href="/"
            className=" ml-4 p-2 rounded-md border-white border hover:bg-white hover:text-black"
          >
            Login
          </a>
        </h1>
      </form>
    </div>
  );
};

export default SignUpForm;
