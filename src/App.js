import React, { useContext, useEffect } from "react";
import AuthContext from "./store/auth-context";
import { Box } from "@chakra-ui/react";
import Login from "./components/Login/Login";
import UserHome from "./components/UserHome/UserHome";

function App() {
  const userCtx = useContext(AuthContext);
  useEffect(() => {
    console.log(userCtx.user);
  });

  return <Box>{userCtx.user.email ? <UserHome /> : <Login />}</Box>;
}

export default App;
