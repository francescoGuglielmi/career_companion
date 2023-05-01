import React from "react";
import UpdateApplication from "../updateApplication/updateApplication";

const ApplicationInterview = ({ application }) => {
  return (
    <>
      <article data-cy="application" key={application._id}>
        <div className="border border-black w-96 ml-2 px-2 py-4">
          <div>{application.company}</div>
          <div>{application.jobTitle}</div>
          <div>{application.location}</div>
          <div className="mb-2">{application.createdAt}</div>
          <div>
            <a
              className="bg-transparent py-1 px-4 border border-black mt-2"
              href={application.link}
            >
              Link
            </a>
            <UpdateApplication
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
