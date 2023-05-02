import React from "react";
import UpdateApplication from "../updateApplicationModal/updateApplicationModal";



const Application = ({ application }) => {
  return (
    <>
      <article data-cy="application" key={application._id}>
        {application.company} - {application.jobTitle} - {application.location}{" "}
        - Applied on {application.createdAt} -{" "}
        <a
          className="bg-transparent py-1 px-2 border border-black mt-2"
          href={application.link}
        >
          Link
        </a>
        <span>
        <UpdateApplication key={application._id} application={application} />
        </span>
      </article>

    </>
  );
};

export default Application;


