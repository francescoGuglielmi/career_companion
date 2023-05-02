import React, { useEffect, useState } from "react";
import NavbarHP from '../navbar/navBarHP';
import FeedbackForm from "../feedback_form/FeedbackForm";

const FeedbackPage = ({navigate}) => {

  const [token] = useState(window.localStorage.getItem("token"))
  const [selectedCompany, setSelectedCompany] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [rating, setRating] = useState(null)
  const [content, setContent] = useState(null)

  function handleSelectCompanyChange(event) {
    setSelectedCompany(event.target.value)
  }

  function handleJobTitleChange(event) {
    setJobTitle(event.target.value)
  }


  function handleFormSubmit(event) {
    event.preventDefault()

    fetch("/feedback", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  
        company: selectedCompany,
        jobTitle: jobTitle,
        rating: rating,
        content: content
      }),
    }).then((response) => {
      if (response.status === 201) {
        navigate("/login");
      } else {
        navigate("/signup");
      }
    });
  }

  if(token) {
    return (
      <>
        <NavbarHP />
        <h1>Leave Them A Feedback!</h1>
        <div className="feedback_form">
          <FeedbackForm 
          handleSelectCompanyChange={handleSelectCompanyChange} 
          handleJobTitleChange={handleJobTitleChange} 
          handleFormSubmit={handleFormSubmit} 
          jobTitle={jobTitle}
          selectedCompany={selectedCompany}
          />
        </div>
      </>
    )
  }
}

export default FeedbackPage;
