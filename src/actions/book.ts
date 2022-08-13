import { API_URL } from "../config";
import axios from "axios";
import { AnyAction } from "redux";
import { Dispatch } from "react";
import { addBook, setBook, setBooks, unsetBook } from "../reducers/bookReducer";

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

export const getBook = (id: string): any => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.get(`${API_URL}api/book/${id}`);
      dispatch(setBook(response.data));
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
};

export const createBook = async (
  title: string,
  description: string,
  category: string,
  mark: number,
  authorId: string,
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const response = await axios.post(
      `${API_URL}api/book`,
      {
        title,
        description,
        category,
        mark,
        authorId,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    dispatch(addBook(response.data));
    if (response.status === 201) {
      alert("Book successfully added!");
    }
  } catch (e: any) {
    alert(e.response.data.message);
  }
};

export const updateBook = async (
  id: string,
  title: string,
  description: string,
  category: string,
  mark: number,
  dispatch: Dispatch<AnyAction>
) => {
  try {
    const response = await axios.put(
      `${API_URL}api/book/${id}`,
      {
        title,
        description,
        category,
        mark,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    dispatch(addBook(response.data));
    if (response.status === 204) {
      alert("Book successfully updated!");
    }
  } catch (e: any) {
    alert(e.response.data.message);
  }
};

export const deleteBook = async (
  id: string,
  dispatch: Dispatch<AnyAction>
): Promise<any> => {
  try {
    const response = await axios.delete(`${API_URL}api/book/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    dispatch(unsetBook(id));
    if (response.status === 204) {
      alert("Book deleted successfully");
    }
  } catch (e: any) {
    alert(e.response.data.message);
  }
};
