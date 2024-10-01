// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmCnq1-VZU6IjzgQt3AsSbR8lhvBNAdYY",
  authDomain: "smtopt-a27eb.firebaseapp.com",
  projectId: "smtopt-a27eb",
  storageBucket: "smtopt-a27eb.appspot.com",
  messagingSenderId: "525940169887",
  appId: "1:525940169887:web:905e68a1a1f0ac3a5416aa",
  measurementId: "G-XZW9LZZWJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);
