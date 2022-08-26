// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzJn3qDj_WcqorJhX5XpSWZzrG2KWuHVg",
  authDomain: "biblioteca-joaquim-alves.firebaseapp.com",
  projectId: "biblioteca-joaquim-alves",
  storageBucket: "biblioteca-joaquim-alves.appspot.com",
  messagingSenderId: "431662324588",
  appId: "1:431662324588:web:176296acd7e984003c7149",
  measurementId: "G-VVHRM9FLS5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
