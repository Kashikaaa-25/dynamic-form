"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _LoginForm = _interopRequireDefault(require("./LoginForm"));
var _auth = require("firebase/auth");
var _firebase = require("./firebase");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// DynamicLoginForm.js

const createDynamicLoginForm = () => {
  const handleLoginSubmit = async data => {
    try {
      const {
        email,
        password
      } = data;
      await (0, _auth.signInWithEmailAndPassword)(_firebase.auth, email, password);
      console.log("Login successful");
      // Handle successful login (e.g., redirect user)
    } catch (err) {
      console.log("Error-", err);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const res = await (0, _auth.signInWithPopup)(_firebase.auth, _firebase.provider);
      console.log("Login successful with Google");
      // Handle successful login with Google (e.g., redirect user)
    } catch (error) {
      console.log("Error-", error);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_LoginForm.default, {
    onSubmit: handleLoginSubmit,
    onGoogleSignIn: handleGoogleSignIn
  });
};
var _default = exports.default = createDynamicLoginForm;