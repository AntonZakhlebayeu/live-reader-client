import { API_URL } from "../config";
import axios from "axios";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import { setBooks } from "../reducers/bookReducer";

export const getBooks = (): any => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.get(`${API_URL}api/book/`);
      dispatch(setBooks(response.data));
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
};
