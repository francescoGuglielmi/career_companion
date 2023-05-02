import React, { useEffect, useState } from "react";

const FeedbackForm = (props) => {

  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [applications, setApplications] = useState([]);
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
          window.localStorage.setItem("user", data.user);
          setToken(data.token)
          const filteredApplications = data.applications.filter(
            (application) => application.user._id === data.user._id  //only shows user that is logged in applications
          ); 
          setApplications(filteredApplications);
        });
    }
  }, []);

  return (
    <>
      <form onSubmit={props.handleFormSubmit}>
        <h2>What company would you like to review?</h2>
        <select value="" onChange={props.handleSelectionChange}>
          <option value="">Select an option below</option>
          {applications
            .slice(0, 3)
            .map((application) => (
              <option value={application.company}>{application.company}</option>
          ))}
        </select>
      </form>
    </>
  )
}

export default FeedbackForm;