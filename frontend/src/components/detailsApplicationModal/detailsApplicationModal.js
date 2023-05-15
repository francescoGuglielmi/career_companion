import { useState } from "react";

const DetailsApplication = ({ application }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button
        className={`text-md bg-transparent mr-2 ml-2 text-navy inline-flex items-center justify-center text-center border border-lorange hover:border-blue  rounded-xl ease-in-out duration-200 ${
          application.applicationStatus === "Invited to interview"
            ? "py-1.5 px-4 "
            : "py-1 px-3"
        }`}
        onClick={() => setIsModalOpen(true)}
        id="updateButton"
      >
        Details
      </button>

      {isModalOpen ? (
        <div
          data-cy="application"
          key={application._id}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75"
          id="detailsApplication"
        >
          <div className="bg-white rounded-lg p-5 w-3/4 md:w-1/3">
            <div className="flex justify-end">
              <button
                className="text-gray-700 hover:text-gray-900 font-bold text-xl leading-none focus:outline-none"
                onClick={handleClose}
                id="closeModal"
              >
                &times;
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">Application details</h2>
            <div className="">
            <div className="text-bold">{application.jobTitle} @ {application.company}</div>
              <div className="mt-2">Location: {application.location}</div>
              <div className="mt-2">Job Details: {application.jobDetails}</div>
              <div className="mt-2 text-lblue">
                <a
                  href={application.link}
                  target="_blank"
                  className="underline"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DetailsApplication;
