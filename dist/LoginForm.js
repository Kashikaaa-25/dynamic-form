"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _auth = require("firebase/auth");
var _firebase = require("./firebase");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // LoginForm.js
const LoginForm = _ref => {
  let {
    onSubmit,
    onGoogleSignIn
  } = _ref;
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    getValues
  } = (0, _reactHookForm.useForm)();
  const handleLogin = async data => {
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
      const {
        email
      } = getValues();
      await (0, _auth.sendPasswordResetEmail)(_firebase.auth, email);
      alert("Password reset link has been sent to your email");
    } catch (err) {
      console.log("Error-", err);
    }
  };
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleSignUpClick = () => {
    // Redirect to the dynamically generated signup form
    navigate("/signup");
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-center items-center h-screen"
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "bg-black text-white p-8 rounded-lg shadow-lg",
    onSubmit: handleSubmit(handleLogin)
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-center mb-4 text-3xl"
  }, "Login"), /*#__PURE__*/_react.default.createElement("label", {
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
    type: "button",
    onClick: handlePassword,
    className: "mt-2 hover:text-gray-500 text-white font-bold "
  }, "Forgot Password?"), /*#__PURE__*/_react.default.createElement("button", {
    className: "w-full mt-7 bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline",
    type: "submit"
  }, "Sign In"), /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-center mt-2"
  }, "OR"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: handleClick,
    className: "w-full mt-3 bg-red-600 hover:bg-red-900 text-white font-bold py-2 rounded-md focus:outline-none focus:shadow-outline"
  }, "Sign In with Google"), /*#__PURE__*/_react.default.createElement("h1", {
    className: "mt-8"
  }, "Don't have an account?", " ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/signup",
    className: " ml-4 p-2 rounded-md border-white border hover:bg-white hover:text-black",
    onClick: handleSignUpClick
  }, "SignUp"))));
};
var _default = exports.default = LoginForm;