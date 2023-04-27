import React from "react";
import App from "../app/App";

const Application = ({ application }) => {
  return (
    <>
      <article data-cy="application" key={application._id}>
        {console.log(application)}
        {application.company} - {application.jobTitle} - {application.location} - Applied on {console.log(application.user._id)}
      </article>
    </>
  );
};

export default Application;
