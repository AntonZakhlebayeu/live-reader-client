import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAuthor } from "../../actions/author";
import Input from "../../utils/input/Input";

function CreateAuthor() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (): void => {
    createAuthor(firstName, lastName, Number(age), dispatch);
    navigate("/");
  };

  return (
    <section className="dark:bg-gray-900">
      <div className="authorization flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Adding new author
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="space-y-4 md:space-y-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter author first name
              </label>
              <Input
                value={firstName}
                setValue={setFirstname}
                type="text"
                placeholder="Enter first name..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter author last name
              </label>
              <Input
                value={lastName}
                setValue={setLastname}
                type="text"
                placeholder="Enter last name..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter author's age
              </label>
              <Input
                value={age}
                setValue={setAge}
                type="text"
                placeholder="Enter age..."
              />

              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => submitHandler()}
              >
                Add author
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateAuthor;
