import React from "react";
import RootScreen from "./screens/RootScreen";
import { BookProvier } from "./store/BookContext";
import Drawers from "./navigation/drawers";

const App = () => {
  return (
    <BookProvier>
      <RootScreen />
    </BookProvier>
  );
};

export default App;
