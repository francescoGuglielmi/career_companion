import { useState } from "react";

const AddApplication = (props) => {
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [link, setLink] = useState("");
  const [jobDetails, setJobDetails] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");
  const [interviewDate, setInterviewDate] = useState("");

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleJobDetailsChange = (event) => {
    setJobDetails(event.target.value);
  };

  const handleApplicationStatusChange = (event) => {
    setApplicationStatus(event.target.value);
  };

  const handleInterviewDateChange = (event) => {
    setInterviewDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(`${window.BACKEND_API_SERVER_ADDRESS}/applications`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        company: company,
        jobTitle: jobTitle,
        location: location,
        link: link,
        jobDetails: jobDetails,
        applicationStatus: applicationStatus,
        createdAt: new Date().toLocaleDateString(),
        interviewDate: interviewDate.split("-").reverse().join("/"),
      }),
    });

    if (response.status !== 201) {
      console.log("error saving your application");
      if (response.status === 401) {
        window.location.href = "/login";
      }
    } else {
      console.log("your application saved to db");
      window.location.reload();
    }
  };

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
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-3"
        id="applicationModal"
        className="bg-cream text-blue font-poppins-bold text-lg cursor-pointer inline-flex items-start justify-start text-start border-blue border-2 py-2 px-4 hover:text-lorange hover:border-lorange rounded-xl ease-in-out duration-200 "
      >
        Add new application
      </label>
      <div className="flex justify-center text-navy">
        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent text-navy hover:bg-transparent"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold mb-4">Add an application</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="company"
                  type="text"
                  placeholder="Company name"
                  value={company}
                  onChange={handleCompanyChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="jobTitle"
                  type="text"
                  placeholder="Job title"
                  value={jobTitle}
                  onChange={handleJobTitleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={handleLocationChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="link"
                  type="text"
                  placeholder="Link to job posting"
                  value={link}
                  onChange={handleLinkChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows={4}
                  id="jobDetails"
                  type="text"
                  placeholder="Key details from job posting"
                  value={jobDetails}
                  onChange={handleJobDetailsChange}
                  required
                  autoComplete="off"
                ></textarea>
              </div>
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
              {applicationStatus === "Invited to interview" && (
                <input
                  type="date"
                  id="interviewDate"
                  value={interviewDate}
                  onChange={handleInterviewDateChange}
                  required
                />
              )}
              <div className="flex items-center justify-center">
                <button
                className="bg-blue text-white text-md py-2 px-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-white hover:text-navy rounded-xl ease-in-out duration-200 "
                type="submit"
                id="submit-application"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddApplication;
