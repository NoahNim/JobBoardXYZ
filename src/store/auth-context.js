import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  // createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext({});

export const AuthContextProvider = (props) => {
  const [theUser, settheUser] = useState({});

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const currUser = userCred.user;
        console.log("IN AUTH " + currUser);
        settheUser(currUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode} ${errorMessage}`);
      });
  };

  const logout = async () => {
    return signOut(auth).then(() => {
      settheUser({});
    });
  };

  return (
    <AuthContext.Provider
      value={{
        theUser,
        login: login(),
        logout: logout(),
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
