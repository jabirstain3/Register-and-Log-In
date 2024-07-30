// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2E9K2sfDJYI_yrz9EviVsmc8VZ_CzBBY",
  authDomain: "register-log-with-context-api.firebaseapp.com",
  projectId: "register-log-with-context-api",
  storageBucket: "register-log-with-context-api.appspot.com",
  messagingSenderId: "319029492225",
  appId: "1:319029492225:web:d8216ba9cd24408f1a9e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default  auth;