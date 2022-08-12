import { API_URL } from "../config";
import axios from "axios";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import { setAuthor, setAuthors } from "../reducers/authorReducer";

export const getAuthors = (): any => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.get(`${API_URL}api/author/`);
      dispatch(setAuthors(response.data));
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
};

export const getAuthor = (id: string): any => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.get(`${API_URL}api/author/${id}`);
      dispatch(setAuthor(response.data));
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
};
