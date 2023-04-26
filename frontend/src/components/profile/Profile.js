import React, { useEffect, useState } from "react";
import Application from "../applications/Applications"

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
          setApplications(data.applications);
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
        <div className="h-screen bg-cream">
          <h1 className="flex justify-center pt-20 text-black text-5xl font-epilogue-regular">
            Welcome {userData.firstName}
          </h1>
          <h2 className="font-dm-sans-bold text-2xl">
            What would you like to do?
          </h2>
          <div className="flex flex-row">
            <button className="font-dm-sans-bold text-lg border py-1 px-2 flex items-center justify-center mr-3">
              Add application
            </button>
            <button className="font-dm-sans-bold text-lg border py-1 px-2 flex items-center justify-center">
              Build CV
            </button>
          </div>
          {applications.map((application) => {
            return (
              <Application key={application._id} application={application} />
            );
          })}

          {/* <div id="profile" role="profile">
            {applications.map((application) => application.company)}
          </div> */}
          <button onClick={logout}>Logout</button>
        </div>
      </>
    );
  } else {
    navigate("/signin");
  }
};

export default Profile;
