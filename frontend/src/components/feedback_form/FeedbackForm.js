import React, { useEffect, useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = (props) => {
  return (
    <>
      <div className="">
        <form className="" onSubmit={props.handleFormSubmit}>
          <h2 className="mb-2">What company would you like to review?</h2>

          <select
            className="shadow border h-10 w-11/12 md:w-96 text-md mb-4 md:mb-8"
            value={props.selectedCompany}
            onChange={props.handleSelectCompanyChange}
          >
            <option value="">Select an option below</option>
            {props.companies
              .filter(
                (company, index, array) => array.indexOf(company) === index
              )
              .map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))}
          </select>

          <h2 className="mb-2">What job position would you like to rate?</h2>

          <select
            className="shadow border h-10 w-11/12 md:w-96 text-md mb-4 md:mb-8"
            value={props.jobTitle}
            onChange={props.handleJobTitleChange}
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
          <h2>Choose a rating:</h2>
          <div className="rating mt-0 mb-6">
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
            className="w-full md:w-4/5 border-2 h-20 border-gray-100 shadow mb-2 mt-2 p-2"
            value={props.content}
            onChange={props.handleContentChange}
          ></textarea>
          <div className="flex justify-center items-center md:justify-start md:items-center">
            <button
              className="bg-blue text-white text-md mt-2 py-2 px-4 mb-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
              type="submit"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeedbackForm;
