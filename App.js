import React from "react";
import RootScreen from "./screens/RootScreen";
import { AuthProvider } from "./store/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <RootScreen />
      </AuthProvider>
    </>
  );
};

export default App;
