import React, { useEffect, useState } from "react";
import "./Profile.css";
import Application from "../applications/Applications";
import AddApplication from "../addApplicationModal/AddApplicationModal";
import ApplicationInterview from "../applicationsInterview/applicationsInterview";
import NavbarHP from "../navbar/navBarHP";
import Stats from "../stats/Stats";
import Account from "../account/Account";
import FeatureLinks from "../featureLinks/FeatureLinks";

const Profile = ({ navigate }) => {
  const [applications, setApplications] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (token) {
      fetch("/applications", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
          // console.log(data.applications)
          const filteredApplications = data.applications.filter(
            (application) => application.user._id === data.user._id
          ); //only shows user that is logged in applications
          setApplications(filteredApplications);
          setUserData(data.user);
        });
    } else {
      navigate("/signup");
    }
  }, [token, navigate]);

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  const account = () => {
    navigate("/account", { state: { userData: userData, token: token } });
  };

  if (token) {
    return (
      <>
        <NavbarHP logout={logout} account={account} />

        <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-20 md:pr-20">
          <h1 className="flex justify-center pt-12 text-navy text-5xl font-poppins-bold pb-6">
            Welcome {userData.firstName}
          </h1>
          
          <div className="flex justify-center pt-4 pb-12">
            <Stats key={applications._id} application={applications} />
          </div>
          <div>
            <FeatureLinks />
          </div>
          <div className="flex justify-center md:justify-start mt-8 md:mt-0 mb-4 ">
            <span>
              <AddApplication navigate={navigate} />
            </span>
            {/* <span className="ml-4 mr-4"><AddApplication navigate={navigate} /></span>
            <span><AddApplication navigate={navigate} /></span> */}
          </div>

          <div id="applicationSection">
            <div></div>
            <p className="flex justify-center md:justify-start pt-6 pb-6 text-navy text-lg font-poppins-bold">
              Interview stage
            </p>
            <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-y-4 ">
              {applications
                .filter(
                  (application) =>
                    application.applicationStatus === "Invited to interview"
                )
                .map((application) => (
                  <ApplicationInterview
                    key={application._id}
                    application={application}
                  />
                ))}
            </div>
          </div>
          <div>
            <p className="flex justify-center md:justify-start pt-6 pb-6 text-navy text-lg font-poppins-bold">
              Completed applications{" "}
            </p>
            <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-y-4">
              {applications.filter(
                (application) =>
                  application.applicationStatus === "Applied for role"
              ).length === 0 ? (
                <p className="text-blue text-lg">Nothing to show here!</p>
              ) : (
                applications
                  .filter(
                    (application) =>
                      application.applicationStatus === "Applied for role"
                  )
                  .map((application) => (
                    <Application
                      key={application._id}
                      application={application}
                    />
                  ))
              )}
            </div>
          </div>
          <div>
            <p className="flex justify-center md:justify-start pt-6 pb-6 text-navy text-lg font-poppins-bold">
              Incomplete applications
            </p>
            <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-y-4">
              {applications.filter(
                (application) =>
                  application.applicationStatus === "Not yet applied"
              ).length === 0 ? (
                <p className="text-blue text-lg">Nothing to show here!</p>
              ) : (
                applications
                  .filter(
                    (application) =>
                      application.applicationStatus === "Not yet applied"
                  )
                  .map((application) => (
                    <Application
                      key={application._id}
                      application={application}
                    />
                  ))
              )}
            </div>
          </div>
          <div>
            <p className="flex justify-center md:justify-start pt-6 pb-6 text-navy text-lg font-poppins-bold">
              Archived applications{" "}
            </p>
            <a className="underline text-navy">
              See archived applications here
            </a>
            {applications
              .filter(
                (application) =>
                  application.applicationStatus === "Interview successful" ||
                  application.applicationStatus === "Interview unsuccessful" ||
                  application.applicationStatus === "No response / archive"
              )
              .map((application) => (
                <Application key={application._id} application={application} />
              ))}
          </div>
          <button onClick={logout}>Logout</button>
        </div>
      </>
    );
  } else if (token === undefined) {
    window.location.href = "/login";
  }
};

export default Profile;
