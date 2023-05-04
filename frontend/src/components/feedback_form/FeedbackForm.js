import React, { useEffect, useState } from "react";
import './FeedbackForm.css'

const FeedbackForm = (props) => {

  return (
    <>
    <div className="form-container">
      <form className="form" onSubmit={props.handleFormSubmit}>

        <h2>What company would you like to review?</h2>

        <select className="feedback-select" value={props.selectedCompany} onChange={props.handleSelectCompanyChange}>
          <option value="">Select an option below</option>
          {props.companies
            .filter((company, index, array) => array.indexOf(company) === index)
            .map((company, index) => (
              <option  key={index} value={company}>{company}</option>
          ))}
        </select>

        <h2>What job position would you like to rate?</h2>

        <select className="feedback-select" value={props.jobTitle} onChange={props.handleJobTitleChange}>
          <option value="">Select an option below</option>
          { props.applications
            .filter((application) => application.company === props.selectedCompany)
            .filter((application, index, array) => array.indexOf(application) === index)
            .map((application, index) => (
              <option key={index} value={application.jobTitle}>{application.jobTitle}</option>
            ))}
        </select><br/>
        
        <div className="rating">
          <input type="radio" name="rating-2" value="1" onChange={props.handleRatingChange} className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" value="2" onChange={props.handleRatingChange} className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" value="3" onChange={props.handleRatingChange} className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" value="4" onChange={props.handleRatingChange} className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" value="5" onChange={props.handleRatingChange} className="mask mask-star-2 bg-orange-400" />
        </div>

        <h2>Describe your experience:</h2>
        <textarea className="feedback-textarea"  value={props.content} onChange={props.handleContentChange}></textarea><br/><br/>
        
        <button className="submit-feedback" type="submit">Submit Review</button>

      </form>
    </div>
    </>
  )
}

export default FeedbackForm;