import React from "react";
import App from "../app/App";

const Application = ({ application }) => {
  return (
    <>
      <h2>Applications</h2>
      <article data-cy="application" key={application._id}>
        {console.log(application)}
        {application.company} - {application.jobTitle} - {application.location} - Applied on {application.createdAt}
      </article>
    </>
  );
};

export default Application;
