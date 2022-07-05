import React, { useEffect } from "react";
import { initialBook, reducerBook } from "./BookReducer";
import { apiGetBook } from "./../firebase/api/apiBook";
import { getBooks } from "./ActionsCreators";

const BookContext = React.createContext();

//https://codesandbox.io/s/zr3mx12zzx?file=/src/TaskReduck.js:990-995
const BookProvier = ({ children }) => {
  const [stateBooks, dispatch] = React.useReducer(reducerBook, initialBook);

  useEffect(() => {
    const fetchdb = async () => {
      const data = await apiGetBook();

      dispatch(getBooks(data));
    };

    fetchdb();
  }, [dispatch]);

  return <BookContext.Provider value={[stateBooks, dispatch]}>{children}</BookContext.Provider>;
};

export { BookContext, BookProvier };
