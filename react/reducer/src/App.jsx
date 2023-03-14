import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import UserInfo from "./components/UserInfo";
import UserList from "./components/UserList";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <UserList />
      {/* <UserInfo /> */}
    </UserProvider>
  );
}

export default App;
