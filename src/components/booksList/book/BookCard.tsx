import React from "react";
import { NavLink } from "react-router-dom";

const BookCard = ({ book }: any) => {
  const date = new Date(book.createdAt);
  const urlBook = `/book/${book.id}`;
  const urlAuthor = `/author/${book.author.id}`;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://www.kindpng.com/picc/m/114-1145774_add-book-icon-add-book-icon-png-transparent.png"
        alt="BookCard cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          Title: <NavLink to={urlBook}>{book.title}</NavLink>
        </div>
        <p className="text-gray-700 text-m">Description: {book.description}</p>
        <p className="text-gray-700 text-base">Category: {book.category}</p>
        <p className="text-gray-700 text-base">
          Mark: <strong>{book.mark}</strong>
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <NavLink to={urlAuthor}>
            {book.author.firstName + " " + book.author.lastName}
          </NavLink>
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {date.toUTCString()}
        </span>
      </div>
    </div>
  );
};

export default BookCard;
