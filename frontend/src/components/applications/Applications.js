import React from "react";
import UpdateApplication from "../updateApplicationModal/updateApplicationModal";
import DeleteApplication from "../deleteApplicationModal/deleteApplicationModal";
import DetailsApplication from "../detailsApplicationModal/detailsApplicationModal";

const Application = ({ application }) => {
  return (
    <>
      <div
        data-cy="application"
        key={application._id}
        className="bg-white text-navy mb-4 w-80 lg:w-96 px-2 py-2 shadow rounded-lg pl-4"
      >
        <div className="text-navy text-md">{application.company} </div>
        <div className="text-navy text-md">{application.jobTitle}</div>
        {/* <div className="text-navy text-md">{application.location}</div> */}
        <div className="text-navy text-md">
          Created on: {application.createdAt}
        </div>

        <div className="">
          <span>
            <UpdateApplication
              key={`update_${application._id}`}
              application={application}
            />
          </span>
          <span>
            <DetailsApplication
              key={`details_${application._id}`}
              application={application}
            />
          </span>
          <span>
            <DeleteApplication
              key={`delete_${application._id}`}
              application={application}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Application;
