import { useState } from "react";

const AddApplication = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [link, setLink] = useState("");
  const [jobDetails, setJobDetails] = useState("");
  const [applicationStatus, setApplicationStatus] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch("/applications", {
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
      }),
    });

    if (response.status !== 201) {
      console.log("error saving your application");
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
    <div className="flex justify-center">

      {/* The button to open modal */}
      <label htmlFor="my-modal-3" className="bg-cream text-blue font-poppins-bold text-2xl py-2 px-4 underline">
        Add application
      </label>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
           Add an application
          </h3>
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
              <div></div>
              <div className="flex items-center justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
        </div>
      </div>

      
    </div>
  );
};

export default AddApplication;
