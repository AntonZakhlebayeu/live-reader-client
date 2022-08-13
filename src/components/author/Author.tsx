import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { AnyAction } from "redux";
import { deleteAuthor, getAuthor } from "../../actions/author";
import AuthorBooks from "./AuthorBooks";

function Author() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthor(id!));
  }, [dispatch, id]);

  const isAuth = useSelector((state: any) => state.user.isAuth);
  const author = useSelector((state: AnyAction) => state.author.author);
  const navigate = useNavigate();

  const deleteHandler = (): void => {
    deleteAuthor(id!, dispatch);
    navigate("/authors/");
  };

  return (
    <div className="mt-10 ml-10 grid overflow-hidden dark sm grid-cols-4 auto-rows-max gap-3 gap-x-0 gap-y-10 grid-flow-row w-screen h-auto">
      <div className="rounded-xl h-329 w-378">
        <img
          className="rounded-3xl"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Author avatar"
        />
      </div>
      <div className="ml-10 font-mono">
        <p className="text-4xl text-center subpixel-antialiased inline-block">
          <strong>{author.firstName + " " + author.lastName}</strong>
        </p>
        {isAuth && (
          <div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate(`/update/author/${id}`)}
            >
              Update
            </button>
            <button
              className="mt-3 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => deleteHandler()}
            >
              Delete
            </button>

            <button
              className="mt-11 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate(`/add/book/${id}`)}
            >
              Add book
            </button>
          </div>
        )}
        <p className="text-3xl mt-10">Age: {author.age}</p>
        <p className="text-3xl mt-10">Author books:</p>
        <div className="grid overflow-hidden dark sm grid-cols-4 auto-rows-max gap-3 gap-x-0 gap-y-10 grid-flow-row w-screen h-auto">
          {author.books ? (
            author.books.map((book: any) => (
              <AuthorBooks key={book.id} book={book} />
            ))
          ) : (
            <h5>There are no books.</h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default Author;
