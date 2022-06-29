// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChFaXzlWAmnh7tLj6a8An3YsgN3RgHt8E",
  authDomain: "ecommerce-e2719.firebaseapp.com",
  projectId: "ecommerce-e2719",
  storageBucket: "ecommerce-e2719.appspot.com",
  messagingSenderId: "205427839769",
  appId: "1:205427839769:web:82a60f8d9fce73ae52ab88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()