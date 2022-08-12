import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { getBook } from "../../actions/book";

function Book() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook(id!));
  }, [dispatch, id]);

  const book = useSelector((state: AnyAction) => state.book.book);
  console.log(book);
  const urlAuthor = book.author ? `/author/${book?.author.id}` : "/";
  const fullName = book.author
    ? book.author.firstName + " " + book.author.lastName
    : " ";

  return (
    <div className="mt-10 ml-10 grid overflow-hidden dark sm grid-cols-4 auto-rows-max gap-3 gap-x-0 gap-y-10 grid-flow-row w-screen h-auto">
      <div className="rounded-xl bg-zinc-400 h-329 w-378">
        <img
          className="rounded-3xl"
          src="https://www.kindpng.com/picc/m/114-1145774_add-book-icon-add-book-icon-png-transparent.png"
          alt="BookSmall cover"
        />
      </div>
      <div className="ml-10 font-mono">
        <p className="text-4xl text-center subpixel-antialiased">
          Title: <strong>{book.title}</strong>
        </p>
        <p className="text-3xl mt-10">Description: {book.description}</p>
        <div className="mt-11">
          <p className="text-gray-700 text-xl">
            Category: <strong>{book.category}</strong>
          </p>
          <p className="text-gray-700 text-xl">
            Mark: <strong>{book.mark}</strong>
          </p>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <NavLink to={urlAuthor}>{fullName}</NavLink>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {new Date(book.createdAt).toUTCString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Book;
