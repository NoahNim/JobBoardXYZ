import React, { useContext } from "react";
import AuthContext from "./store/auth-context";
import { Box } from "@chakra-ui/react";
import Login from "./components/Login/Login";
import UserHome from "./components/UserHome/UserHome";

function App() {
  const userCtx = useContext(AuthContext);
  console.log(userCtx.theUser);
  return <Box>{userCtx.theUser ? <UserHome /> : <Login />}</Box>;
}

export default App;
