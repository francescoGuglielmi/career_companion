import React from "react";

const Application = ({ application }) => {
  return (
    <>
      <article data-cy="application" key={application._id}>
        {console.log(application)}
        {application.company} - {application.jobTitle} - {application.location} - Applied on {application.createdAt} - Link: {application.link}
      </article>
    </>
  );
};

export default Application;
