import { API_URL } from "../config";
import axios from "axios";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import {
  addAuthor,
  setAuthor,
  setAuthors,
  unsetAuthor,
} from "../reducers/authorReducer";

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

export const createAuthor = async (
  firstName: string,
  lastName: string,
  age: number,
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const response = await axios.post(
      `${API_URL}api/author`,
      {
        firstName,
        lastName,
        age,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    dispatch(addAuthor(response.data));
    if (response.status === 201) {
      alert("Author successfully added!");
    }
  } catch (e: any) {
    alert(e.response.data.message);
  }
};

export const updateAuthor = async (
  id: string,
  firstName: string,
  lastName: string,
  age: number,
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const response = await axios.put(
      `${API_URL}api/author/${id}`,
      {
        firstName,
        lastName,
        age,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    dispatch(addAuthor(response.data));
    if (response.status === 204) {
      alert("Author successfully updated!");
    }
  } catch (e: any) {
    alert(e.response.data.message);
  }
};

export const deleteAuthor = async (
  id: string,
  dispatch: Dispatch<AnyAction>
): Promise<any> => {
  try {
    const response = await axios.delete(`${API_URL}api/author/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    dispatch(unsetAuthor(id));
    if (response.status === 204) {
      alert("Author deleted successfully");
    }
  } catch (e: any) {
    alert(e.response.data.message);
  }
};
