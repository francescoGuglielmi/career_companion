import React, { useEffect, useState } from "react";
import './Profile.css'
import Application from "../applications/Applications";
import AddApplication from "../addApplication/AddApplication";
import ApplicationInterview from "../applicationsInterview/applicationsInterview";
import NavbarHP from '../navbar/navBarHP';

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
          console.log(data.applications)
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
          <div id="dashboard">
            <h2 className="font-dm-sans-bold text-2xl dashboard-title">
              Dashboard
            </h2>
            <div className="applications-dashboard font-dm-sans-bold">
              <h2>Your Applications <span className="right">Incoming Interviews</span></h2>
              <h2 className="applications-amount" >{applications.length} <span className="applications-amount right">{applications.length}</span></h2>
            </div>
          </div>
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
            <h1 className="pt-2 pb-2">applications - interview </h1>
            <div className="flex flex-wrap">
            {applications
              .filter((application) => application.applicationStatus === 'invited to interview')
              .slice(0, 3)
              .map((application) => (
                <ApplicationInterview key={application._id} application={application} />
              ))}
              </div>
          </div>
          <div>
          <h1 className="pt-2 pb-2">you have applied for these roles: </h1>
            {applications
              .filter((application) => application.applicationStatus === 'applied for role')
              .map((application) => (
                <Application key={application._id} application={application} />
              ))}
          </div>
          <div>
          <h1 className="pt-2 pb-2">finish your application! </h1>
            {applications
              .filter((application) => application.applicationStatus === 'not yet applied')
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
