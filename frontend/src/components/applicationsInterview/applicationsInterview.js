import React from "react";
import UpdateApplication from "../updateApplicationModal/updateApplicationModal";
import DeleteApplication from "../deleteApplicationModal/deleteApplicationModal";

const ApplicationInterview = ({ application }) => {
  
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
            <DeleteApplication
              key={application._id}
              application={application}
            />
           
          </div>
        </div>
      </article>
    </>
  );
};

export default ApplicationInterview;
