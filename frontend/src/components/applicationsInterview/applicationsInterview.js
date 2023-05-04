import React from "react";
import UpdateApplication from "../updateApplicationModal/updateApplicationModal";
import DeleteApplication from "../deleteApplicationModal/deleteApplicationModal";
import DetailsApplication from "../detailsApplicationModal/detailsApplicationModal";

const ApplicationInterview = ({ application }) => {

  return (
    <>
      <article data-cy="application" key={application._id}>
        <div className="bg-white text-navy w-80 lg:w-96 ml-2 px-2 py-4 shadow rounded-lg pl-4">
          <div className="text-lg font-bold">{application.company}</div>
          <div className="text-md">{application.jobTitle}</div>
          <div className="text-md">{application.location}</div>
          <div className="mb-2 text-md text-bold">Interview date: {application.interviewDate}</div>
          <div>
            <UpdateApplication
              key={`update__${application._id}`}
              application={application}
            />
            <DetailsApplication
              key={`details__${application._id}`}
              application={application}
            />
            <DeleteApplication
              key={`delete__${application._id}`}
              application={application}
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default ApplicationInterview;
