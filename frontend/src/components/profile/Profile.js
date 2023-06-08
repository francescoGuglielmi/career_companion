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
  const [toggleITI, setToggleITI] = useState(true);
  const [toggleAFR, setToggleAFR] = useState(true);
  const [toggleNYA, setToggleNYA] = useState(false);
  const [toggleArchived, setToggleArchived] = useState(false);

  useEffect(() => {
    if (token) {
      fetch(`${window.BACKEND_API_SERVER_ADDRESS}/applications`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          window.localStorage.setItem("token", data.token);
          setToken(window.localStorage.getItem("token"));
          const filteredApplications = data.applications.filter(
            (application) => application.user._id === window.localStorage.getItem("user_id")
          ); //only shows applications from user that is logged in 
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

  function switchToggleAFR() {
    setToggleAFR(!toggleAFR);
  }

  function switchToggleITI() {
    setToggleITI(!toggleITI);
  }

  function switchToggleNYA() {
    setToggleNYA(!toggleNYA);
  }

  function switchToggleArchived() {
    setToggleArchived(!toggleArchived);
  }

  if (token) {
    return (
      <>
        
        <NavbarHP logout={logout} account={account} />

        <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-20 md:pr-20">
          <h1 className="flex justify-center items-center pt-8 text-3xl text-navy md:text-5xl font-poppins-bold pb-6">
            Welcome {userData.firstName}
          </h1>

          <div className="flex justify-center pt-4 pb-12">
            <Stats key={applications._id} application={applications} />
          </div>
          <div>
            <FeatureLinks />
          </div>

          <div id="applicationSection">
            <div className="flex justify-center md:justify-start mt-12 md:mt-0 mb-2 ">
              <span>
                <AddApplication navigate={navigate} />
              </span>
            </div>
            <p className="flex justify-center md:justify-start pt-6 pb-6 text-navy text-lg font-poppins-bold">
              Interview stage
              <span>
                <button className="toggle-switch" onClick={switchToggleITI}>
                  &#10010;
                </button>
              </span>
            </p>
            {toggleITI && (
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
            )}
          </div>
          <div>
            <p className="flex justify-center md:justify-start pt-6 pb-6 text-navy text-lg font-poppins-bold">
              Completed applications{" "}
              <span>
                <button className="toggle-switch" onClick={switchToggleAFR}>
                  &#10010;
                </button>
              </span>
            </p>
            {toggleAFR && (
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
                )
                .reverse()}
              </div>
            )}
          </div>
          <div>
            <p className="flex justify-center md:justify-start pt-6 pb-6 text-navy text-lg font-poppins-bold">
              Incomplete applications
              <span>
                <button className="toggle-switch" onClick={switchToggleNYA}>
                  &#10010;
                </button>
              </span>
            </p>
            {toggleNYA && (
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
                )
                .reverse()}
              </div>
            )}
          </div>
          <div>
            <p className="flex justify-center md:justify-start pt-6 pb-6 text-navy text-lg font-poppins-bold">
              Archived applications{" "}
              <span>
                <button
                  className="toggle-switch"
                  onClick={switchToggleArchived}
                >
                  &#10010;
                </button>
              </span>
            </p>
            {toggleArchived && (
              <>
                <a className="underline text-navy">
                  See archived applications here
                </a>
                {applications
                  .filter(
                    (application) =>
                      application.applicationStatus ===
                        "Interview successful" ||
                      application.applicationStatus ===
                        "Interview unsuccessful" ||
                      application.applicationStatus === "No response / archive"
                  )
                  .map((application) => (
                    <Application
                      key={application._id}
                      application={application}
                    />
                  ))}
              </>
            )}
          </div>
        </div>
        <footer className="bg-cream p-6 font-dm-sans-regular">
          <div className="w-full bg-cream h-100 ">
          <h4 className="text-md text-center text-navy dark:text-cream cursor-pointer">
              <span><a href="/" onClick={account} >About |</a></span> Terms & Conditions
            </h4>
          </div>
        </footer>
      </>
    );
  } else if (token === undefined) {
    window.location.href = "/login";
  }
};

export default Profile;
