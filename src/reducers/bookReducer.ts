import { AnyAction } from "redux";

const SET_BOOKS = "SET_BOOKS";
const SET_BOOK = "SET_BOOK";

const defaultState = {
  books: [],
  book: {},
};

export default function fileReducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
    case SET_BOOK:
      return { ...state, book: action.payload };
    default:
      return state;
  }
}

export const setBooks = (books: []) => ({ type: SET_BOOKS, payload: books });
export const setBook = (book: {}) => ({ type: SET_BOOK, payload: book });
