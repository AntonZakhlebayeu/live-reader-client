import { AnyAction } from "redux";

const SET_AUTHORS = "SET_AUTHORS";
const SET_AUTHOR = "SET_AUTHOR";
const ADD_AUTHOR = "ADD_AUTHOR";
const UNSET_AUTHOR = "UNSET_AUTHOR";

const defaultState = {
  authors: [],
  author: {},
};

export default function fileReducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case SET_AUTHORS:
      return { ...state, authors: action.payload };
    case SET_AUTHOR:
      return { ...state, author: action.payload };
    case ADD_AUTHOR:
      return { ...state, authors: [...state.authors, action.payload] };
    case UNSET_AUTHOR:
      return {
        ...state,
        authors: state.authors.filter(function (f: any) {
          return f.id !== action.payload;
        }),
        author: {},
      };
    default:
      return state;
  }
}

export const setAuthors = (authors: []) => ({
  type: SET_AUTHORS,
  payload: authors,
});
export const setAuthor = (author: {}) => ({
  type: SET_AUTHOR,
  payload: author,
});
export const addAuthor = (author: {}) => ({
  type: ADD_AUTHOR,
  payload: author,
});
export const unsetAuthor = (id: string) => ({
  type: UNSET_AUTHOR,
  payload: id,
});
