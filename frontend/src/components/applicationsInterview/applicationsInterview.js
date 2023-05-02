import React from "react";
import UpdateApplication from "../updateApplication/updateApplication";

const ApplicationInterview = ({ application }) => {
  return (
    <>
      <article data-cy="application" key={application._id}>
        <div className="bg-white w-80 lg:w-96 ml-2 px-2 py-4 shadow rounded-lg">
          <div className="dropdown dropdown-bottom flex justify-end">
            <label tabIndex={0} className="btn m-1">
              Click
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
            >
              <li>
                <a href={application.link} target="_blank">Link</a>
              </li>
              <li>
                <a >Item 2</a>
              </li>
            </ul>
          </div>
          <div className="text-lg">{application.company}</div>
          <div>{application.jobTitle}</div>
          <div>{application.location}</div>
          <div className="mb-2">{application.createdAt}</div>
          <div>
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
