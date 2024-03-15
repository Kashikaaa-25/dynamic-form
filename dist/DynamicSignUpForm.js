"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SignUpForm = _interopRequireDefault(require("./SignUpForm"));
var _auth = require("firebase/auth");
var _firebase = require("./firebase");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// DynamicSignUpForm.js

const createDynamicSignUpForm = () => {
  const handleSignUpSubmit = async data => {
    try {
      const {
        name,
        email,
        password
      } = data;
      const res = await (0, _auth.createUserWithEmailAndPassword)(_firebase.auth, email, password);
      const user = res.user;
      await (0, _auth.updateProfile)(user, {
        displayName: name
      });
      // Handle successful signup (e.g., redirect user)
    } catch (err) {
      console.log("Error-", err);
    }
  };
  const handleGoogleSignUp = async () => {
    try {
      const res = await (0, _auth.signInWithPopup)(_firebase.auth, _firebase.provider);
      // Handle successful signup with Google (e.g., redirect user)
    } catch (error) {
      console.log("Error-", error);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_SignUpForm.default, {
    onSubmit: handleSignUpSubmit,
    onGoogleSignUp: handleGoogleSignUp
  });
};
var _default = exports.default = createDynamicSignUpForm;