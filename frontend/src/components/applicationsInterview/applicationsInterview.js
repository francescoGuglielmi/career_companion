import React from "react";

const ApplicationInterview = ({ application }) => {
  return (
    <>
      <article data-cy="application" key={application._id}>
        <div className="border border-black w-80 ml-2">
          <div>{application.company}</div>
          <div>{application.jobTitle}</div>
          <div>{application.location}</div>
          <div>{application.createdAt}</div>
          <div>{application.link}</div>
        </div>
      </article>
    </>
  );
};

export default ApplicationInterview;
