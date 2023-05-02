import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarHP from "../navbar/navBarHP";

const Account = ({ navigate }) => {
  const { state } = useLocation();
  const userData = state.userData;
  const token = state.token;

  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [email, setEmail] = useState(userData.email);

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(`/users/${userData._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email
      }),
    });

    if (response.status !== 201) {
      console.log("error saving your updated user");
    } else {
      console.log("your updated user saved to db");
    }

    navigate('/profile')
  };

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  if (token) {
    return (
      <>
      
        <NavbarHP />
        <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-10 md:pr-10">
          <h1 className="text-lorange text-6xl font-poppins-bold">
            Account information
          </h1>
          <form onSubmit={handleSubmit}>
            <h3 className="text-blue text-lg font-poppins-bold">
              Personal details
            </h3>
            <div className="mb-4">
              <input
                type="text"
                className="border border-gray-400 rounded w-96 h-10 shadow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={userData.firstName}
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="border border-gray-400 rounded w-96 h-10 shadow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={userData.lastName}
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="border border-gray-400 rounded w-96 h-10 shadow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={userData.email}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <button
                  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
          </form>
        </div>
      </>
    );
  } else {
    navigate("/signin");
  }
};

export default Account;
