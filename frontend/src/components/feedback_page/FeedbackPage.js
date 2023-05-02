import React, { useEffect, useState } from "react";
import NavbarHP from '../navbar/navBarHP';
import FeedbackForm from "../feedback_form/FeedbackForm";

const FeedbackPage = ({navigate}) => {

  const [token, setToken] = useState(window.localStorage.getItem("token"))
  const [applications, setApplications] = useState([]);
  const [companies, setCompanies] = useState([])
  const [selectedCompany, setSelectedCompany] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [rating, setRating] = useState("")
  const [content, setContent] = useState("")
  
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
          filteredApplications.forEach(application => {
            companies.push(application.company)
          })
        });
    }
  }, []);

  function handleSelectCompanyChange(event) {
    setSelectedCompany(event.target.value)
  }

  function handleJobTitleChange(event) {
    setJobTitle(event.target.value)
  }

  function handleRatingChange(event) {
    setRating(event.target.value)
  }

  function handleContentChange(event) {
    setContent(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()

    fetch("/feedback", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        userId: window.localStorage.getItem("user_id"),
        company: selectedCompany,
        jobTitle: jobTitle,
        rating: rating,
        content: content
      }),
    }).then((response) => {
      if (response.status === 201) {
        console.log("feedback saved successfully")
      } else {
        console.log("there was an error saving the feedback")
      }
    });
  }

  if(token) {
    return (
      <>
        <NavbarHP />
        <h1>We want to hear about your application process!</h1>
        <div className="feedback_form">
          <FeedbackForm 
          handleSelectCompanyChange={handleSelectCompanyChange} 
          handleJobTitleChange={handleJobTitleChange} 
          handleRatingChange={handleRatingChange}
          handleContentChange={handleContentChange}
          handleFormSubmit={handleFormSubmit} 
          jobTitle={jobTitle}
          selectedCompany={selectedCompany}
          companies={companies}
          applications={applications}
          rating={rating}
          content={content}
          />
        </div>
      </>
    )
  }
}

export default FeedbackPage;
