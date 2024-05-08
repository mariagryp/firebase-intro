import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC4RV6yaFb7V1umzCOYZuo-DrZJ9wa62U",
  authDomain: "new-project-d5102.firebaseapp.com",
  projectId: "new-project-d5102",
  storageBucket: "new-project-d5102.appspot.com",
  messagingSenderId: "518804959522",
  appId: "1:518804959522:web:a92064ad1e32f673a9757b",
  measurementId: "G-1719FNMCQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export { db };
