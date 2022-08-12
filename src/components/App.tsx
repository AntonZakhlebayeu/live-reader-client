import React, { useEffect } from "react";
import NavbarLiveReader from "./navbar/NavbarLiveReader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../actions/user";
import Index from "./index/Index";
import Author from "./author/Author";
import Authors from "./author/Authors";
import CreateAuthor from "./author/CreateAuthor";
import Book from "./book/Book";
import UpdateAuthor from "./author/UpdateAuthor";

function App() {
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <NavbarLiveReader />
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/author/:id" element={<Author />} />
            <Route path="/authors/" element={<Authors />} />
          </Routes>
          {!isAuth ? (
            <Routes>
              <Route path="/register" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/create/author" element={<CreateAuthor />} />
              <Route path="/update/author/:id" element={<UpdateAuthor />} />
              <Route path="/login" element={<Navigate replace to="/" />} />
            </Routes>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
