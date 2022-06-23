import React from "react";
import { createContext } from "react";
import { initialAuth, reducerAuth } from "./Reducer";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dishpatch] = React.useReducer(reducerAuth, initialAuth);

  return <AuthContext.Provider value={[state, dishpatch]}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
