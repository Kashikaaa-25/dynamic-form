"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // SignUpForm.js
const SignUpForm = _ref => {
  let {
    onSubmit,
    onGoogleSignUp
  } = _ref;
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0, _reactHookForm.useForm)();
  const handleSignUp = async data => {
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-center items-center h-screen"
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit(handleSignUp),
    className: "bg-black text-white p-8 rounded-lg shadow-lg"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-center mb-4 text-3xl"
  }, "Sign Up"), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "name",
    className: "block mb-2"
  }, "Name:"), /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "text"
  }, register("name", {
    required: {
      value: true,
      message: "This field is required"
    }
  }), {
    placeholder: "Enter your name",
    className: "w-full px-3 py-2 mb-3 rounded-md border border-gray-300 text-black"
  })), errors.name && /*#__PURE__*/_react.default.createElement("p", {
    className: "text-red-700 font-bold"
  }, errors.name.message), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "email",
    className: "block mb-2"
  }, "Email:"), /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "text"
  }, register("email", {
    required: {
      value: true,
      message: "This field is required"
    }
  }), {
    placeholder: "Enter your email",
    className: "w-full px-3 py-2 rounded-md border border-gray-300 text-black"
  })), errors.email && /*#__PURE__*/_react.default.createElement("p", {
    className: "text-red-700 font-bold"
  }, errors.email.message), /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "password",
    className: "block mt-4 mb-2"
  }, "Password:"), /*#__PURE__*/_react.default.createElement("input", _extends({
    type: "password"
  }, register("password", {
    required: {
      value: true,
      message: "This field is required"
    }
  }), {
    placeholder: "Enter your password",
    className: "w-full px-3 py-2 rounded-md border border-gray-300 text-black"
  })), errors.password && /*#__PURE__*/_react.default.createElement("p", {
    className: "text-red-700 font-bold"
  }, errors.password.message), /*#__PURE__*/_react.default.createElement("button", {
    className: "w-full mt-7 bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline",
    type: "submit"
  }, "Sign Up"), /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-center mt-2"
  }, "OR"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: handleGoogleSignUpClick,
    className: "w-full mt-3 bg-red-600 hover:bg-red-900 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline"
  }, "Sign Up with Google"), /*#__PURE__*/_react.default.createElement("h1", {
    className: "mt-8"
  }, "Already have an account?", " ", /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: " ml-4 p-2 rounded-md border-white border hover:bg-white hover:text-black"
  }, "Login"))));
};
var _default = exports.default = SignUpForm;