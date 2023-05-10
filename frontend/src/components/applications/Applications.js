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
        className="bg-white text-navy w-80 lg:w-96 ml-2 px-2 py-4 shadow rounded-lg pl-4"
        id="application"
      >
        <div className="text-navy text-md font-bold">{application.company} </div>
        <div className="text-navy text-md">{application.jobTitle}</div>
        {/* <div className="text-navy text-md">{application.location}</div> */}
        <div className="text-navy text-md mb-2">
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
