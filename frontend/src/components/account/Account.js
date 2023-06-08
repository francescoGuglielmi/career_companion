import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarHP from "../navbar/navBarHP";

const Account = ({ navigate }) => {
  const { state } = useLocation();
  console.log('state:', state);
console.log('userdata:', state.userData)  
  const userData = state.userData;
  const token = state.token;


  const [firstName, setFirstName] = useState(userData.firstName);
  const [lastName, setLastName] = useState(userData.lastName);
  const [email, setEmail] = useState(userData.email);

  useEffect(() => {
    const updateUser = async () => {
      let response = await fetch(`${window.BACKEND_API_SERVER_ADDRESS}/users/${userData._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
        }),
      });

      if (response.status !== 201) {
        console.log("error saving your updated user");
      } else {
        console.log("your updated user saved to db");
      }
    };

    updateUser();
  }, [firstName, lastName, email, userData._id]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
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
          <h2 className="flex justify-center text-lorange font-poppins-bold text-4xl pb-2 pt-8">
            Account information
          </h2>
          <div className="flex justify-center items-center pt-6">
          <form onSubmit={handleSubmit}>
            <h3 className="flex justify-center md:justify-start text-blue text-lg font-poppins-bold pb-4">
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
                type="email"
                className="border border-gray-400 rounded w-96 h-10 shadow py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={userData.email}
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                onChange={handleEmailChange}
              />
            </div>
            <button
              className="bg-blue text-white text-md py-2 px-4 mb-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
              type="submit"
                >
                  Submit
                </button>
          </form>
          </div>
        </div>
      </>
    );
  }  else {
    return (
      <>
        <h1>Please  Sign in to access this resource</h1>
        <a href='/login'>Sign in</a>
      </>
    )
  }
};

export default Account;
