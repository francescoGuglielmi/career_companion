import React, { useEffect, useState } from "react";
import Application from "../applications/Applications";
import AddApplication from "../addApplication/AddApplication";
import ApplicationInterview from "../applicationsInterview/applicationsInterview";
import NavbarHP from "../navbar/navBarHP";
import Stats from "../stats/Stats";

const Profile = ({ navigate }) => {
  const [applications, setApplications] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [userData, setUserData] = useState({});
  const [showAll, setShowAll] = useState(false);

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
    }
  }, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  if (token) {
    return (
      <>
        <NavbarHP />
        <div className="min-h-screen bg-cream">
          <h1 className="flex justify-center pt-20 text-black text-5xl font-epilogue-regular">
            Welcome {userData.firstName}
          </h1>

          <Stats key={applications._id} application={applications} />
          
          <h2 className="font-dm-sans-bold text-2xl">
            What would you like to do?
          </h2>
          <div className="flex flex-row">
            <button className="font-dm-sans-bold text-lg border py-1 px-2 flex items-center justify-center">
              Build CV
            </button>
          </div>
          <AddApplication />
          <div>
            <h2>Track your applications</h2>
          </div>
          <div>
            <p className="pt-2 pb-2">applications - interview </p>
            <div className="flex flex-wrap">
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
            <p className="pt-2 pb-2">you have applied for these roles: </p>
            {applications
              .filter(
                (application) =>
                  application.applicationStatus === "Applied for role"
              )
              .map((application) => (
                <Application key={application._id} application={application} />
              ))}
          </div>
          <div>
            <p className="pt-2 pb-2">finish your application! </p>
            {applications
              .filter(
                (application) =>
                  application.applicationStatus === "Not yet applied"
              )
              .map((application) => (
                <Application key={application._id} application={application} />
              ))}
          </div>
          <div>
            <p className="pt-2 pb-2">archived applications </p>
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
  } else {
    navigate("/signin");
  }
};

export default Profile;
