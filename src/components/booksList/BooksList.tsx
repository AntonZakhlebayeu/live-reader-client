import React from "react";
import { useSelector } from "react-redux";
import { AnyAction } from "redux";
import BookSmall from "./book/BookSmall";

function BooksList() {
  const isAuth = useSelector((state: AnyAction) => state.user.isAuth);
  const books = useSelector((state: AnyAction) => state.book.books);

  if (books.length === 0) {
    return (
      <div className="grid place-items-center w-full font-serif">
        <h3>Welcome to Live Reader!</h3>
        <h3 className="mt-5">Now it's empty</h3>
        {!isAuth ? (
          <h4>Register and Login to post new authors with their's books.</h4>
        ) : (
          <h4>You can create new authors with theirs</h4>
        )}
      </div>
    );
  }

  return (
    <div className="grid overflow-hidden dark sm grid-cols-4 auto-rows-max gap-3 gap-x-0 gap-y-10 grid-flow-row w-screen h-auto place-items-center">
      {books.map((book: any) => (
        <BookSmall key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BooksList;
