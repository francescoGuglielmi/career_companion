import React, { useEffect, useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = (props) => {
  return (
    <>
      <form className="font-bold" onSubmit={props.handleFormSubmit}>
        <h2>What company would you like to review?</h2>

        <select
          value={props.selectedCompany}
          onChange={props.handleSelectCompanyChange}
          className="shadow border h-10 w-96 text-md mb-2 md:mb-4"
        >
          <option value="">Select an option below</option>
          {props.companies
            .filter((company, index, array) => array.indexOf(company) === index)
            .map((company, index) => (
              <option key={index} value={company}>
                {company}
              </option>
            ))}
        </select>

        <h2>What job position would you like to rate?</h2>

        <select
          value={props.jobTitle}
          onChange={props.handleJobTitleChange}
          className="shadow border h-10 w-96 text-md mb-2 md:mb-4"
        >
          <option value="">Select an option below</option>
          {props.applications
            .filter(
              (application) => application.company === props.selectedCompany
            )
            .filter(
              (application, index, array) =>
                array.indexOf(application) === index
            )
            .map((application, index) => (
              <option key={index} value={application.jobTitle}>
                {application.jobTitle}
              </option>
            ))}
        </select>
        <br />

        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            value="1"
            onChange={props.handleRatingChange}
            className="mask mask-star-2 bg-lorange"
          />
          <input
            type="radio"
            name="rating-2"
            value="2"
            onChange={props.handleRatingChange}
            className="mask mask-star-2 bg-lorange"
          />
          <input
            type="radio"
            name="rating-2"
            value="3"
            onChange={props.handleRatingChange}
            className="mask mask-star-2 bg-lorange"
          />
          <input
            type="radio"
            name="rating-2"
            value="4"
            onChange={props.handleRatingChange}
            className="mask mask-star-2 bg-lorange"
          />
          <input
            type="radio"
            name="rating-2"
            value="5"
            onChange={props.handleRatingChange}
            className="mask mask-star-2 bg-lorange"
          />
        </div>

        <h2>Describe your experience:</h2>
        <textarea
          className="w-full md:w-4/5  h-20 border-2 border-gray-100 shadow mb-4 mt-2"
          placeholder="Please Konrad, forgive this styling"
          value={props.content}
          onChange={props.handleContentChange}
        ></textarea>
        <div>
          <button
            className="bg-blue text-white text-md py-2 px-4 mb-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
            type="submit"
          >
            Submit Review
          </button>
        </div>
      </form>
    </>
  );
};

export default FeedbackForm;
