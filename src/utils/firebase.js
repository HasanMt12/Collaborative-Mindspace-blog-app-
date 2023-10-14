// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-39f1c.firebaseapp.com",
  projectId: "blog-39f1c",
  storageBucket: "blog-39f1c.appspot.com",
  messagingSenderId: "793775089174",
  appId: "1:793775089174:web:183c4e5f0f12be5acf3737"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);