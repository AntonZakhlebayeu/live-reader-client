import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import { getAuthors } from "../../actions/author";
import AuthorCard from "./author/AuthorCard";

function AuthorsList() {
  const isAuth = useSelector((state: AnyAction) => state.user.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  const authors = useSelector((state: AnyAction) => state.author.authors);

  if (authors.length === 0) {
    return (
      <div className="grid place-items-center w-full font-serif">
        <h3>Welcome to Live Reader!</h3>
        <h3 className="mt-5">Now it's empty</h3>
        {!isAuth ? (
          <h4>Register and Login to post new authors.</h4>
        ) : (
          <h4>You can create new author.</h4>
        )}
      </div>
    );
  }

  return (
    <div className="grid mt-10 ml-10 mb-10 overflow-hidden dark sm grid-cols-4 auto-rows-max gap-3 gap-x-0 gap-y-10 grid-flow-row w-screen h-auto place-items-center">
      {authors.map((author: any) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
  );
}

export default AuthorsList;
