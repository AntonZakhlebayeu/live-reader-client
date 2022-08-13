import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { getBook, updateBook } from "../../actions/book";
import Input from "../../utils/input/Input";

function UpdateBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getBook(id!));
  }, [dispatch, id]);

  const book = useSelector((state: AnyAction) => state.book.book);

  const [title, setTitle] = useState(book.title || "");
  const [description, setDescription] = useState(book.description || "");
  const [category, setCategory] = useState(book.category || "");
  const [mark, setMark] = useState(book.mark || "");

  const submitHandler = (): void => {
    updateBook(id!, title, description, category, Number(mark), dispatch);
    navigate(`/`);
  };

  return (
    <section className="dark:bg-gray-900">
      <div className="authorization flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Updating {book.title}
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="space-y-4 md:space-y-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter new book title
              </label>
              <Input
                value={title}
                setValue={setTitle}
                type="text"
                placeholder="Enter book title..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter new book description
              </label>
              <Input
                value={description}
                setValue={setDescription}
                type="text"
                placeholder="Enter book description..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter new book category
              </label>
              <Input
                value={category}
                setValue={setCategory}
                type="text"
                placeholder="Enter book category..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter new book's mark
              </label>
              <Input
                value={mark}
                setValue={setMark}
                type="text"
                placeholder="Enter mark..."
              />

              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => submitHandler()}
              >
                Update book
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateBook;
