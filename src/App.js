import React, { useContext } from "react";
import AuthContext from "./store/auth-context";
import { Box } from "@chakra-ui/react";
import Login from "./components/Login/Login";
import UserHome from "./components/UserHome/UserHome";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <Box>
      {!ctx.isLogginIn && <Login />}
      {ctx.isLogginIn && <UserHome />}
    </Box>
  );
}

export default App;
