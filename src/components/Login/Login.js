import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useContext } from "react";
// import db from "./firebase";
// import { getAuth } from "firebase/auth";
import AuthContext from "../../store/auth-context";

const Login = (props) => {
  const authCtx = useContext(AuthContext);

  return (
    <FormControl>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input></Input>
      <FormLabel htmlFor="paswword">Password</FormLabel>
      <Input></Input>
    </FormControl>
  );
};

export default Login;
