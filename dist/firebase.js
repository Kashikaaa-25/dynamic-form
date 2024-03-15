"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provider = exports.auth = exports.app = void 0;
var _app = require("firebase/app");
var _auth = require("firebase/auth");
// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyBppPMHGlyXXM0t9B16cfmHxECL120BS4I",
  authDomain: "react-form-3da8c.firebaseapp.com",
  projectId: "react-form-3da8c",
  storageBucket: "react-form-3da8c.appspot.com",
  messagingSenderId: "156645811211",
  appId: "1:156645811211:web:b0502371f1e1a9b170130e",
  measurementId: "G-Y1TK5DMY1R"
};

// Initialize Firebase
const app = exports.app = (0, _app.initializeApp)(firebaseConfig);
const auth = exports.auth = (0, _auth.getAuth)();
const provider = exports.provider = new _auth.GoogleAuthProvider();