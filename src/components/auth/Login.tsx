import React, { useState } from "react";
import Input from "../../utils/input/Input";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="authorization flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Authorization
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email:
            </label>
            <Input
              value={email}
              setValue={setEmail}
              type="text"
              placeholder="Enter email..."
            />
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password:
            </label>
            <Input
              value={password}
              setValue={setPassword}
              type="password"
              placeholder="Enter password..."
            />
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => dispatch(login(email, password))}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
