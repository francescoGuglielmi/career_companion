import { useState } from "react";

const UpdateApplication = ({ application }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState("");

  const handleApplicationStatusChange = (event) => {
    setApplicationStatus(event.target.value);
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

  const handleDelete = async (event) => {
    event.preventDefault();

    let response = await fetch(`/applications/${application._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      }
    })
    if (response.status !== 200) {
      console.log("error deleting your application");
    } else {
      console.log("your application was deleted from the db");
      window.location.reload();
      setIsModalOpen(false);
    }
  }

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
    <div>
      <button
        className="bg-cream text-black font-bold py-2 px-4 rounded"
        onClick={() => setIsModalOpen(true)}
      >
        Update application
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
            <h2 className="text-2xl font-bold mb-4">Update application</h2>
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
              <div className="flex items-center justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  id="delete"
                  type="button"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UpdateApplication;
