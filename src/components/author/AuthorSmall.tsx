import React from "react";
import { NavLink } from "react-router-dom";

const AuthorSmall = ({ author }: any) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")`,
        }}
        title="Author avatar"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            <NavLink to={`/author/${author.id}`}>
              {author.firstName + " " + author.lastName}
            </NavLink>
          </div>
          <p className="text-gray-700 text-base">
            Number of books: {author.books.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorSmall;
