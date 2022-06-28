import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { auth } from "../../firebase";
import AuthContext from "../../store/auth-context";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const authCtx = useContext(AuthContext);

  console.log(authCtx.onLogin);

  const emailInputChangeHandler = (event) => {
    setEmailInput(event.target.value);
    console.log(emailInput);
  };

  const passwordInputChangeHandler = (event) => {
    setPasswordInput(event.target.value);
    console.log(passwordInput);
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      await authCtx?.login(emailInput.value, passwordInput.value);
      console.log("IN LOGIN " + authCtx.user);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={loginHandler}>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={emailInput.value}
          onChange={emailInputChangeHandler}
        ></Input>
        <FormLabel htmlFor="paswword">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={passwordInput.value}
          onChange={passwordInputChangeHandler}
        ></Input>
        <Button type="submit">Login In</Button>
      </FormControl>
    </form>
  );
};

export default Login;
