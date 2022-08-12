import { AnyAction } from "redux";

const SET_AUTHORS = "SET_AUTHORS";
const SET_AUTHOR = "SET_AUTHOR";

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
