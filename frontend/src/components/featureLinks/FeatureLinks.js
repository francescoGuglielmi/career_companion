import React from "react";

const FeatureLinks = () => {
  return (
    <>
      <div className="grid grid-cols-5 lg:grid-cols-5 place-items-center">
        <a href="#applicationSection" id="applicationsLink" className="grid md:grid-rows-2 justify-center items-center">
          <div className="flex flex-col items-center hover:text-lorange ease-in-out duration-200">
            <div className="w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900 text-lblue hover:text-lorange ease-in-out duration-200 flex justify-center text-center">
              <svg
                className="text-primary-600 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="hidden md:block text-md font-bold text-navy dark:text-white text-center ">
              Job Applications Tracker
            </h3>
          </div>
        </a>

        <a href="/interview" id="interviewLink" className="grid md:grid-rows-2 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900 text-lblue hover:text-lorange ease-in-out duration-200 flex justify-center text-center">
              <svg
                className="text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 className="hidden md:block text-md font-bold text-navy dark:text-white text-center">
              Interview Training
            </h3>
          </div>
        </a>

        <a href="resume" id="resumeLink" className="grid md:grid-rows-2 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900 text-lblue hover:text-lorange ease-in-out duration-200 flex justify-center text-center">
              <svg
                className="text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </div>
            <h3 className="hidden md:block text-md font-bold text-navy dark:text-white text-center">
              Resume Builder
            </h3>
          </div>
        </a>

        <a href="generator" id="coverLetterLink" className="grid md:grid-rows-2 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900 text-lblue  hover:text-lorange ease-in-out duration-200 flex justify-center text-center">
              <svg
                className="text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
            </div>
            <h3 className="hidden md:block text-md font-bold text-navy dark:text-white text-center">
              Cover Letter Generator
            </h3>
          </div>
        </a>

        <a href="/feedback" id="feedbackLink" className="grid md:grid-rows-2 justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-primary-100 dark:bg-primary-900 text-lblue hover:text-lorange ease-in-out duration-200 flex justify-center text-center">
              <svg
                className="text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="hidden md:block text-md font-bold text-navy dark:text-white text-center">
              Research Companies
            </h3>
          </div>
        </a>
      </div>
    </>
  );
};

export default FeatureLinks;
