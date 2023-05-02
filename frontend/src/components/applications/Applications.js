import React from "react";
import UpdateApplication from "../updateApplicationModal/updateApplicationModal";
import DeleteApplication from "../deleteApplicationModal/deleteApplicationModal";
import DetailsApplication from "../detailsApplicationModal/detailsApplicationModal";

const Application = ({ application }) => {
  return (
    <>
      <article data-cy="application" key={application._id}>
        {application.company} - {application.jobTitle} - {application.location}{" "}
        - Applied on {application.createdAt} -{" "}
        <span>
          <UpdateApplication key={application._id} application={application} />
        </span>
        <span>
          <DetailsApplication key={application._id} application={application} />
        </span>
        <span>
          <DeleteApplication key={application._id} application={application} />
        </span>
      </article>
    </>
  );
};

export default Application;
