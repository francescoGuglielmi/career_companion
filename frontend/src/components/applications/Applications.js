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
      <article data-cy="application" key={application._id}>
        {application.company} - {application.jobTitle} - {application.location}{" "}
        - Applied on {formattedDate} -{" "}
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
