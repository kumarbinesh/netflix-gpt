// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-oz1eU2E834kBgBF-5BtWnYGqiLbqqvY",
  authDomain: "netflixgpt-42f58.firebaseapp.com",
  projectId: "netflixgpt-42f58",
  storageBucket: "netflixgpt-42f58.appspot.com",
  messagingSenderId: "591009470044",
  appId: "1:591009470044:web:7e9e7ba8fb7c75d597f899",
  measurementId: "G-XYGETQ22LT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
