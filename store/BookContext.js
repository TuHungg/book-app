import React from "react";
import { initialBook, reducerBook } from "./BookReducer";
const BookContext = React.createContext();

const BookProvier = (props) => {
  const [state, dispatch] = React.useReducer(reducerBook, initialBook);
  return <BookContext.Provider value={[state, dispatch]}>{props.child}</BookContext.Provider>;
};
