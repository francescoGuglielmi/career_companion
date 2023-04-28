import { useState } from "react";
import { Switch } from "@material-tailwind/react";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [link, setLink] = useState("");
  // const [interviewOffered, setInterviewOffered] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(formState);

    // console.log(
    //   interviewOffered ? "Offered an interview" : "Did not offer an interview"
    // )

    console.log("Company: ", company);
    console.log("jobTitle: ", jobTitle);
    console.log("location: ", location);

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
      }),
    });

    if (response.status !== 201) {
      console.log("error saving your application");
    } else {
      console.log("your application saved to db");
    }

    // send form data to database or perform other actions
    setIsModalOpen(false);
  };

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <button
        className="bg-cream text-black font-bold py-2 px-4 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Add application
      </button>

      {isModalOpen ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-lg p-8 w-1/2">
            <div className="flex justify-end">
              <button
                className="text-gray-700 hover:text-gray-900 font-bold text-xl leading-none focus:outline-none"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Add an application</h2>
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
              {/* <div>
                <Switch id="auto-update" label="Asked to interview?" />
              </div> */}
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
      ) : null}
    </div>
  );
};

export default Modal;
