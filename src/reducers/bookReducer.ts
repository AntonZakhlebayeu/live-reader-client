import { AnyAction } from "redux";

const SET_BOOKS = "SET_BOOKS";

const defaultState = {
  books: [],
};

export default function fileReducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
}

export const setBooks = (books: any) => ({ type: SET_BOOKS, payload: books });
