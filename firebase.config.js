// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-r5rykSn9G7dmZwBypkeWVbjegfqwTTo",
  authDomain: "otp-auth-d1720.firebaseapp.com",
  projectId: "otp-auth-d1720",
  storageBucket: "otp-auth-d1720.appspot.com",
  messagingSenderId: "955620255835",
  appId: "1:955620255835:web:8fd4587a0f5cd1e2e0377e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);