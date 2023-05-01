import React from "react";

const Application = ({ application }) => {
  return (
    <>
      <article data-cy="application" key={application._id}>
        {console.log(application)}
        {application.company} - {application.jobTitle} - {application.location} - Applied on {application.createdAt} - <a
              className="bg-transparent py-1 px-2 border border-black mt-2"
              href={application.link}
            >
              Link
            </a>
      </article>
    </>
  );
};

export default Application;
