// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sample-mern-auth-23ead.firebaseapp.com",
  projectId: "sample-mern-auth-23ead",
  storageBucket: "sample-mern-auth-23ead.appspot.com",
  messagingSenderId: "67550621455",
  appId: "1:67550621455:web:edbe27de12f3eedf28987a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);