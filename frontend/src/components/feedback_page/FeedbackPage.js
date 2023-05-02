import React, { useEffect, useState } from "react";
import NavbarHP from '../navbar/navBarHP';
import FeedbackForm from "../feedback_form/FeedbackForm";

const FeedbackPage = ({navigate}) => {

  const [token] = useState(window.localStorage.getItem("token"))
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [jobPosition, setJobPosition] = useState(null)
  const [rating, setRating] = useState(null)
  const [content, setContent] = useState(null)

  function handleSelectionChange(event) {
    setJobPosition(event.target.value)
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
        jobPosition: jobPosition,
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
          <FeedbackForm handleSelectionChange={handleSelectionChange} handleFormSubmit={handleFormSubmit}/>
        </div>
      </>
    )
  }
}

export default FeedbackPage;
