import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch("/tokens", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (response.status !== 201) {
      let data = await response.json();
      console.log(data);
    } else {
      let data = await response.json();
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("user_id", data.user_id);
      navigate("/profile");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex flex-row items-start justify-start h-screen md:pl-60 md:pt-40 bg-cream">
      <div className="w-full max-w-xs">
        <h1 className="text-5xl font-epilogue-regular text-black pt-4">
          Sign in
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-cream rounded px-2 pt-6 pb-8 mb-4 font-dm-sans-regular"
        >
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
          <p className="pt-4 text-sm">Don't have an account yet? Sign up now</p>
        </form>
      </div>
      <div>
          <img src="/cc-login.png" width={600} className="pl-40" />
        </div>
    </div>
  );
};

export default LogInForm;
