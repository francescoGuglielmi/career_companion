import { useState } from "react";
import { Switch } from "@material-tailwind/react";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    company: "",
    jobTitle: "",
    location: "",
    link: ""
  });
  const [interviewOffered, setInterviewOffered] = useState(false);

  function handleChange(event) {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
    console.log(
      interviewOffered ? "Offered an interview" : "Did not offer an interview"
    );

    // send form data to database or perform other actions
    setIsModalOpen(false);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
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
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  placeholder="Company name"
                  value={formState.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  placeholder="Job title"
                  value={formState.jobTitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  placeholder="Location"
                  value={formState.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  placeholder="Link to job posting"
                  value={formState.link}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Switch id="auto-update" label="Asked to interview?" />
              </div>
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
}

export default Modal;
