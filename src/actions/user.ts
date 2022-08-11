import { API_URL } from "../config";
import axios from "axios";
import { setUser } from "../reducers/userReducer";
import { Dispatch } from "react";
import { AnyAction } from "redux";

export const registration = async (
  firstName: string,
  lastName: string,
  username: string,
  age: number,
  email: string,
  passwordHash: string
) => {
  try {
    const response = await axios.post(`${API_URL}api/auth/register`, {
      firstName,
      lastName,
      username,
      email,
      age,
      passwordHash,
    });
    alert(response.data.message);
  } catch (e: any) {
    alert(e.response.data.message);
  }
};

export const login = (email: string, password: string): any => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.post(`${API_URL}api/auth/login`, {
        email,
        password,
      });
      console.log(response.data.user);
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.accessToken);
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };
};

export const auth = (): any => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.get(`${API_URL}api/auth/auth`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      dispatch(setUser(response.data.user));
      console.log(response.data.user);
      localStorage.setItem("token", response.data.token.accessToken);
      console.log(response.data.token.accessToken);
    } catch (e) {
      localStorage.removeItem("token");
    }
  };
};
