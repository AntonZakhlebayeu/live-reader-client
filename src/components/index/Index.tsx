import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBooks } from "../../actions/book";
import BooksList from "../booksList/BooksList";

function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="mt-10 mb-10">
      <BooksList />
    </div>
  );
}

export default Index;
