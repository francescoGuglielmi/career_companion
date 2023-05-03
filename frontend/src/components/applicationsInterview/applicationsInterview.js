import React from "react";
import UpdateApplication from "../updateApplicationModal/updateApplicationModal";
import DeleteApplication from "../deleteApplicationModal/deleteApplicationModal";
import DetailsApplication from "../detailsApplicationModal/detailsApplicationModal";

const ApplicationInterview = ({ application }) => {
  const dateParts = application.createdAt.split("T")[0].split("-");
  const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

  return (
    <>
      <article data-cy="application" key={application._id}>
        <div className="bg-white text-navy w-80 lg:w-96 ml-2 px-2 py-4 shadow rounded-lg pl-4">
          <div className="text-lg">{application.company}</div>
          <div>{application.jobTitle}</div>
          <div>{application.location}</div>
          <div className="mb-2">{formattedDate}</div>
          <div>
            <UpdateApplication
              key={application._id}
              application={application}
            />
            <DetailsApplication
              key={application._id}
              application={application}
            />
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
