// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

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
const auth = getAuth(app);
const db = getFirestore(app);

// const registerWithEmailAndPassword = async (name, email, password, type) => {
//   try {
//     const res = await createUserWithEmailAndPassword(
//       auth,
//       name,
//       email,
//       password,
//       type
//     );
//     const user = res.user;
//     await addDoc(collection(db.Users, "Users"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       type,
//       email,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export { auth, db };
