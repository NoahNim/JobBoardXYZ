// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

import { getAnalytics } from "firebase/analytics";
import { dblClick } from "@testing-library/user-event/dist/click";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAQg1lny3kiUxGoiuGuncidzHhAgwtJAb8",

  authDomain: "jobboardxyz.firebaseapp.com",

  projectId: "jobboardxyz",

  storageBucket: "jobboardxyz.appspot.com",

  messagingSenderId: "459351899760",

  appId: "1:459351899760:web:a0799652a32e07144d7eb5",

  measurementId: "G-GJW4RKXHBD",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

export default db;
