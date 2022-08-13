import { AnyAction } from "redux";

const SET_BOOKS = "SET_BOOKS";
const SET_BOOK = "SET_BOOK";
const ADD_BOOK = "ADD_BOOK";
const UNSET_BOOK = "UNSET_BOOK";

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
    case ADD_BOOK:
      return { ...state, authors: [...state.books, action.payload] };
    case UNSET_BOOK:
      return {
        ...state,
        authors: state.books.filter(function (f: any) {
          return f.id !== action.payload;
        }),
        author: {},
      };
    default:
      return state;
  }
}

export const setBooks = (books: []) => ({ type: SET_BOOKS, payload: books });
export const setBook = (book: {}) => ({ type: SET_BOOK, payload: book });
export const addBook = (book: {}) => ({
  type: ADD_BOOK,
  payload: book,
});
export const unsetBook = (id: string) => ({
  type: UNSET_BOOK,
  payload: id,
});
