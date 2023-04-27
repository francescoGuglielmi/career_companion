import React from "react";
import AddApplication from "../addApplication/AddApplication"


const Application = ({ application }) => {
  return (
    <>
    <AddApplication />
      <article data-cy="application" key={application._id}>
        {console.log(application)}
        {application.company} - {application.jobTitle} - {application.location} - Applied on {application.createdAt}
      </article>
    </>
  );
};

export default Application;
