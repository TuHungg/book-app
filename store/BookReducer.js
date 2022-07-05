import { GET_USERS } from "./ActionsType";

const initialBook = {
  books: [],
};

const reducerBook = (state, action) => {
  switch (action.type) {
    case GET_USERS:
      return [...action.data];
    default:
      return state;
  }
};

export { initialBook, reducerBook };
