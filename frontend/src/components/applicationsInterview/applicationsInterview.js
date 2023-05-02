import React from "react";
import UpdateApplication from "../updateApplication/updateApplication";

const ApplicationInterview = ({ application }) => {
  const handleDelete = async (event) => {
    event.preventDefault();

    let response = await fetch(`/applications/${application._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
    if (response.status !== 200) {
      console.log("error deleting your application");
    } else {
      console.log("your application was deleted from the db");
      window.location.reload();
    }
  };

  return (
    <>
      <article data-cy="application" key={application._id}>
        <div className="bg-white w-80 lg:w-96 ml-2 px-2 py-4 shadow rounded-lg">
          <div className="text-lg">{application.company}</div>
          <div>{application.jobTitle}</div>
          <div>{application.location}</div>
          <div className="mb-2">{application.createdAt}</div>
          <div>
            <UpdateApplication
              key={application._id}
              application={application}
            />

            <button
              className="bg-cream text-black font-bold py-2 px-4 ml-2 rounded"
            >
              Details
            </button>

            <button
              className="bg-cream text-black font-bold py-2 px-4 ml-2 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </article>
    </>
  );
};

export default ApplicationInterview;
