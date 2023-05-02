import React, { useEffect, useState } from "react";

const FeedbackForm = (props) => {

  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [applications, setApplications] = useState([]);
  const [userData, setUserData] = useState({});

  // useEffect(() => {
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
  // }, []);

  return (
    <>
      <h1></h1>
      <form onSubmit={props.handleFormSubmit}>
        <h2>What company would you like to review?</h2>
        <select value={props.selectedCompany} onChange={props.handleSelectCompanyChange}>
          <option value="">Select an option below</option>
          {applications
            .slice(0, 3)
            .map((application) => (
              <option value={application.company}>{application.company}</option>
          ))}
        </select>
        <h2>What job position would you like to rate?</h2>
        <select value={props.jobTitle} onChange={props.handleJobTitleChange}>
          <option value="">Select an option below</option>
          { applications
            .slice(0, 3)
            .filter((application) => application.company === props.selectedCompany)
            .map((application) => (
              <option value={application.jobTitle}>{application.jobTitle}</option>
            ))}
        </select>
        <br/>
        {/* <div className="rating">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div> */}
      </form>
    </>
  )
}

export default FeedbackForm;