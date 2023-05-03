import React from "react";
import UpdateApplication from "../updateApplicationModal/updateApplicationModal";
import DeleteApplication from "../deleteApplicationModal/deleteApplicationModal";
import DetailsApplication from "../detailsApplicationModal/detailsApplicationModal";

const Application = ({ application }) => {

  return (
    <>
      <div data-cy="application" key={application._id} className="bg-white text-navy mb-4  ml-2 px-2 py-2 shadow rounded-lg pl-4">
        
        <span className="text-navy text-lg">{application.company} - </span>
        <span className="text-navy text-lg">{application.jobTitle} - </span>
        <span className="text-navy text-lg">{application.location} - </span>
        <span className="text-navy text-lg">Created on: {application.createdAt}</span>
      
        <span>
          <UpdateApplication key={application._id} application={application} />
        </span>
        <span>
          <DetailsApplication key={application._id} application={application} />
        </span>
        <span>
          <DeleteApplication key={application._id} application={application} />
        </span>
      </div>
    </>
  );
};

export default Application;
