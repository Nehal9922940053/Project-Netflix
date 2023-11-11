// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjvbISr1KhSG-zDYYgvIglxVUErO5CO4M",
  authDomain: "netflix-app-de4d7.firebaseapp.com",
  projectId: "netflix-app-de4d7",
  storageBucket: "netflix-app-de4d7.appspot.com",
  messagingSenderId: "799258371834",
  appId: "1:799258371834:web:2fd609c09223b0a876cb43",
  measurementId: "G-9X8NF424R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);