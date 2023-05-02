import { useState } from "react";

const DetailsApplication = ({ application }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button
        className="bg-cream text-black font-bold py-2 px-4 rounded ml-2 mr-2"
        onClick={() => setIsModalOpen(true)}
      >
        Details
      </button>

      {isModalOpen ? (
        <div data-cy="application" key={application._id} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 w-1/3">
            <div className="flex justify-end">
              <button
                className="text-gray-700 hover:text-gray-900 font-bold text-xl leading-none focus:outline-none"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Application details</h2>
            <div className="">
              <div>
              {application.jobDetails}
              </div>
              <div>
              <a href={application.link} target="_blank" className="underline">Link</a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DetailsApplication;