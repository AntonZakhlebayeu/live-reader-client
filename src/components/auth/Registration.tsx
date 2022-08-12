import React, { useState } from "react";
import { registration } from "../../actions/user";
import Input from "../../utils/input/Input";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  return (
    <section className="dark:bg-gray-900">
      <div className="authorization flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Registration of a new user
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="space-y-4 md:space-y-6">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter email
              </label>
              <Input
                value={email}
                setValue={setEmail}
                type="text"
                placeholder="Enter email..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter your first name
              </label>
              <Input
                value={firstName}
                setValue={setFirstname}
                type="text"
                placeholder="Enter first name..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter your last name
              </label>
              <Input
                value={lastName}
                setValue={setLastname}
                type="text"
                placeholder="Enter last name..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter your username
              </label>
              <Input
                value={username}
                setValue={setUsername}
                type="text"
                placeholder="Enter username..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter your age
              </label>
              <Input
                value={age}
                setValue={setAge}
                type="text"
                placeholder="Enter age..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Enter your password
              </label>
              <Input
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Enter password..."
              />
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() =>
                  registration(
                    firstName,
                    lastName,
                    username,
                    Number(age),
                    email,
                    password
                  )
                }
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
