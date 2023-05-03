import { useState } from "react";

const UpdateApplication = ({ application }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState("");
  const [interviewDate, setInterviewDate] = useState("");

  const handleApplicationStatusChange = (event) => {
    setApplicationStatus(event.target.value);
  };

  const handleInterviewDateChange = (event) => {
    setInterviewDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(`/applications/${application._id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        applicationStatus: applicationStatus,
        interviewDate: interviewDate.split("-").reverse().join("/")
      }),
    });

    if (response.status !== 201) {
      console.log("error saving your updated application");
    } else {
      console.log("your updated application saved to db");
      window.location.reload();
    }

    setIsModalOpen(false);
  };

  function handleClose() {
    setIsModalOpen(false);
  }

  const applicationStatuses = [
    "Not yet applied",
    "Applied for role",
    "Invited to interview",
    "Interview successful",
    "Interview unsuccessful",
    "No response / archive",
  ];

  return (
    <>
    <button
      className={`text-md py-1.5 px-4 inline-flex items-center justify-center text-center rounded-xl ease-in-out duration-100 ${
        application.applicationStatus === "Invited to interview"
          ?  "bg-transparent text-navy text-md py-1.5 px-4 inline-flex items-center justify-center text-center border-2 border-lorange hover:border-blue rounded-xl ease-in-out duration-100 "
          : "bg-transparent text-navy text-md ml-0 underline inline-flex items-start justify-start text-start py-0 px-0  hover:text-blue "
      }`}
      onClick={() => setIsModalOpen(true)}
    >
      Update
    </button>

      {isModalOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-lg p-5 w-3/4 md:w-1/3">
            <div className="flex justify-end">
              <button
                className="text-gray-700 hover:text-gray-900 font-bold text-xl leading-none focus:outline-none"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">Update application</h2>
            <form onSubmit={handleSubmit}>
              
              <div className="mb-4">
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="applicationStatus"
                  type="text"
                  value={applicationStatus}
                  onChange={handleApplicationStatusChange}
                  required
                >
                  <option value="">Select an option</option>
                  {applicationStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              {applicationStatus === "Invited to interview" && <input type="date" id="interviewDate" value={interviewDate} onChange={handleInterviewDateChange} />}
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue text-white text-md py-2 px-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-white hover:text-navy rounded-xl ease-in-out duration-200 "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default UpdateApplication;
