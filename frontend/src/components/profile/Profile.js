import React, { useEffect, useState } from "react";

const Profile = ({ navigate }) => {
  const [applications, setApplications] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [userData, setUserData] = useState({})


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
          setUserData(data.user)
        });
    }
  }, []);

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  if(token) {
    return(
      <>
        <h2>Welcome</h2>
          <button onClick={logout}>
            Logout
          </button>
        <div id='feed' role="feed">
            {applications.map(
              (application) => (application.user.firstName)
            )}
        </div>
      </>
    )
  } else {
    navigate('/signin')
  }
};

export default Profile;