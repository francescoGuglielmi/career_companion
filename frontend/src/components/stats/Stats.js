import React from "react";

const Stats = ({ application }) => {
  return (
    <>
      <div data-cy="application" key={application._id} className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-lblue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Completed</div>
          <div className="stat-value text-lblue">
            {
              application.filter(
                (application) =>
                  application.applicationStatus !== "Not yet applied"
              ).length
            }
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-lorange">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Interviews</div>
          <div className="stat-value text-lorange">
            {
              application.filter(
                (application) =>
                  application.applicationStatus === "Invited to interview"
              ).length
            }
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-lblue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Incomplete</div>
          <div className="stat-value text-lblue">
            {
              application.filter(
                (application) =>
                  application.applicationStatus === "Not yet applied"
              ).length
            }
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
