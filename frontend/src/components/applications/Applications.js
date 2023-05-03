import React from "react";
import UpdateApplication from "../updateApplicationModal/updateApplicationModal";
import DeleteApplication from "../deleteApplicationModal/deleteApplicationModal";
import DetailsApplication from "../detailsApplicationModal/detailsApplicationModal";

const Application = ({ application }) => {
  console.log(application.createdAt);
  console.log(typeof application.createdAt);
  const dateParts = application.createdAt.split("T")[0].split("-");
  const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
  return (
    <>
      <div data-cy="application" key={application._id}>
        <div>
        <span>{application.company} - </span>
        <span>{application.jobTitle} - </span>
        <span>{application.location} - </span>
        <span>{formattedDate}</span>
        
        
        </div>
        <span>
          <UpdateApplication key={application._id} application={application} />
        </span>
        <span>
          <DetailsApplication key={application._id} application={application} />
        </span>
        <span>
          <DeleteApplication key={application._id} application={application} />
        </span>
      </div>
    </>
  );
};

export default Application;
