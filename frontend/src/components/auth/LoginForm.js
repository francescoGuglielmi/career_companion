import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./LoginForm.css";
import { BsFillMoonStarsFill } from "react-icons/bs";

const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      console.log(data._id);
      if (response.status === 404) {
        setLoginMessage(
          "There is no account with this email address. Please Sign up."
        );
      } else if (response.status === 401) {
        setLoginMessage("Password doesn't match, try again.");
      }
    } else {
      let data = await response.json();
      if (data.token === undefined) {
        console.log("token not valid");
      } else if (data.user_id === undefined) {
        console.log("user id is undefined");
      }
      setLoginMessage(null);
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
    <>
      <header className="bg-cream dark:bg-navy">
        <nav className="flex justify-between items-center w-full font-poppins-regular">
          <div className="">
            <a href="/">
              <img
                src="/cc-logo.png"
                className="h-40 sticky top-0 px-10"
                alt="Career Companion Logo"
              />
            </a>
          </div>
          <div
            className={`nav-links duration-500 justify-center md:static md:flex-row md:items-end absolute bg-cream dark:bg-navy min-h-screen md:min-h-fit left-0 ${
              isMenuOpen ? "top-0" : "-top-full"
            } md:w-auto w-full flex flex-col items-center px-5`}
          >
            <div className="flex items-center h-full md:h-auto">
              <ul className="flex flex-col items-center md:items-stretch md:flex-row md:justify-center md:gap-[4vw] gap-8">
                <li>
                  <a
                    href="/#about"
                    className="text-5xl border-b-1 border-r-0 border-t-0 border-l-0 md:border-blue border-b-lblue dark:border-b-cream hover:border-b-lorange w-[80vw] md:w-40 inline-flex items-center justify-center py-3 md:text-2xl font-bold text-center bg-cream dark:bg-navy text-navy dark:text-cream border-2 dark:border-blue dark:hover:border-lorange"
                    onClick={() => navigate("/#about")}
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="/#team"
                    className="text-5xl border-b-1 border-r-0 border-t-0 border-l-0 md:border-blue border-b-lblue dark:border-b-cream hover:border-b-lorange w-[80vw] md:w-40 inline-flex items-center justify-center py-3 md:text-2xl font-bold text-center bg-cream dark:bg-navy text-navy dark:text-cream border-2 dark:border-blue dark:hover:border-lorange"
                    onClick={() => navigate("/#team")}
                  >
                    TEAM
                  </a>
                </li>
                <li>
                  <a
                    href="/#features"
                    className="text-5xl border-b-1 border-r-0 border-t-0 border-l-0 md:border-blue border-b-lblue dark:border-b-cream hover:border-b-lorange w-[80vw] md:w-40 inline-flex items-center justify-center py-3 md:text-2xl font-bold text-center bg-cream dark:bg-navy text-navy dark:text-cream border-2 dark:border-blue dark:hover:border-lorange"
                    onClick={() => navigate("/#features")}
                  >
                    FEATURES
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl mr-8 text-blue dark:text-lorange"
            />
            <button
              className="sm:hidden w-48 inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center bg-lorange dark:bg-cream hover:bg-lorange hover:dark:bg-lorange  text-navy dark:text-blue border-2 border-lorange hover:border-blue rounded-xl dark:border-gray-700 dark:hover:bg-gray-700"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </button>
            <div
              onClick={() => onToggleMenu()}
              className={`hamburger-menu cursor-pointer md:hidden ${
                isMenuOpen ? "open" : ""
              }`}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>
      </header>
      <div className="w-full flex flex-col md:flex-row items-center justify-center min-h-[70vh] md:pl-60 bg-cream">
      <div className="w-1/4">
          <h1 className="text-5xl font-poppins-bold text-navy">Sign in</h1>
          {loginMessage && <h2 className="login_message">{loginMessage}</h2>}
          <form
            onSubmit={handleSubmit}
            className="bg-cream pt-6 pb-8 mb-4 font-dm-sans-regular"
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
                className="text-lorange text-5xl font-thin rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
                type="submit"
              >
                <FontAwesomeIcon icon={faArrowRight} size="sm" className="" />
              </button>
            </div>

            <p className="pt-4 text-sm text-navy">Don't have an account yet? <span>
                <a className="text-lorange" href="/signup">
                  Sign up
                </a>
              </span>
            </p>
          </form>
        </div>
        <div>
          <img
            src="/cc-login.png"
            width={600}
            alt="illustration of login page"
            className="hidden md:visible overflow-visible w-2/6 mx-auto lg:mt-0 lg:col-span-5 lg:flex lg:w-1/2"
          />
        </div>
      </div>
      <footer className="bg-cream dark:bg-navy p-6 pb-20 font-dm-sans-regular">
        
      </footer>
    </>
  );
};

export default LogInForm;
