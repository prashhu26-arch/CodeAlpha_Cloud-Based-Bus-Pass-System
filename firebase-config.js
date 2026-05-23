// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2auvBhYB5MutqzaAlezQ8BOE6U_urnxg",
  authDomain: "cloud-bus-pass-de80d.firebaseapp.com",
  projectId: "cloud-bus-pass-de80d",
  storageBucket: "cloud-bus-pass-de80d.firebasestorage.app",
  messagingSenderId: "416865043327",
  appId: "1:416865043327:web:3e0e795393aca73250d04a",
  measurementId: "G-5JK4DX9TES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);