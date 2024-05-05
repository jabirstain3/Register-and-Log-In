// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0wW3QqYXssGDJiLbNUKWCRGuoNvRqopg",
  authDomain: "fir-practice02-9bbf0.firebaseapp.com",
  projectId: "fir-practice02-9bbf0",
  storageBucket: "fir-practice02-9bbf0.appspot.com",
  messagingSenderId: "969373540099",
  appId: "1:969373540099:web:5a68b24b8ef0e2802a5336"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;