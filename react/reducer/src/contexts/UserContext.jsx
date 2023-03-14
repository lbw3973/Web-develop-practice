import React, { createContext, useReducer, useState } from "react";
import { userData } from "../constants/userData";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, userData);
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>
    </div>
  );
}
