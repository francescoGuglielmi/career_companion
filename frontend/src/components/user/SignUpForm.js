import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }),
    }).then((response) => {
      if (response.status === 201) {
        navigate("/login");
      } else {
        navigate("/signup");
      }
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div className="flex flex-row items-start justify-start h-screen md:pl-60 md:pt-40 bg-cream">
      <div className="w-full max-w-xs">
      <h1 className="text-5xl font-epilogue-regular text-black pt-4">
        Sign up
      </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-cream px-2 pt-6 pb-8 mb-4 font-dm-sans-regular"
        >
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="first name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="last name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center justify-between">
          <button
              className="text-orange hover:bg-blue-700 text-5xl font-thin rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
              type="submit"
            >
              <FontAwesomeIcon icon={faArrowRight} size="sm" className="" />
            </button>
          </div>
          <p className="pt-4 text-sm">Already have an account? Sign in now</p>
        </form>
      </div>
      <div>
        <img src="/cc-signup.png"  width={600} className="pl-40"/>
      </div>
    </div>
  );
};

export default SignUpForm;
