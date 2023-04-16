// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVrDbxNiGwT09fz3NbCImCJAqyq8AGdMM",
  authDomain: "ema-john-with-firebase-a-200a3.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-200a3",
  storageBucket: "ema-john-with-firebase-a-200a3.appspot.com",
  messagingSenderId: "910994088760",
  appId: "1:910994088760:web:28636d1f5c1e46992c17cd",
  measurementId: "G-MEFSGFGMMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;