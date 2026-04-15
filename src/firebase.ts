// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA6rhFMWpWbwHRDtXzqpzX2PNYqNvbw98",
  authDomain: "beverageshop-gordokyl.firebaseapp.com",
  projectId: "beverageshop-gordokyl",
  storageBucket: "beverageshop-gordokyl.firebasestorage.app",
  messagingSenderId: "937775947040",
  appId: "1:937775947040:web:3ffb6c58fea52fd10c0b45",
  measurementId: "G-WEV64X1GMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);