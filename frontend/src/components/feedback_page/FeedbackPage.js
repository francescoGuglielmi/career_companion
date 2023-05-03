import React, { useEffect, useState } from "react";
import NavbarHP from "../navbar/navBarHP";
import FeedbackForm from "../feedback_form/FeedbackForm";
import Feedback from "../feedback/Feedback";
import "./FeedbackPage.css";

const FeedbackPage = ({ navigate }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [applications, setApplications] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [rating, setRating] = useState("5");
  const [content, setContent] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFeedbacks, setFilteredFeedbacks] = useState(feedbacks);

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
          setToken(data.token);
          const filteredApplications = data.applications.filter(
            (application) => application.user._id === data.user._id //only shows user that is logged in applications
          );
          setApplications(filteredApplications);
          filteredApplications.forEach((application) => {
            companies.push(application.company);
          });
        });
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetch("/feedback", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(async (data) => {
          window.localStorage.setItem("token", data.token);
          setToken(data.token);
          setFeedbacks(data.feedbacks);
        });
    }
  }, []);

  useEffect(() => {
    setFilteredFeedbacks(
      feedbacks.filter((feedback) =>
        feedback.company.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [feedbacks, searchQuery]);

  function handleSelectCompanyChange(event) {
    setSelectedCompany(event.target.value);
  }

  function handleJobTitleChange(event) {
    setJobTitle(event.target.value);
  }

  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    fetch("/feedback", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: window.localStorage.getItem("user_id"),
        company: selectedCompany,
        jobTitle: jobTitle,
        rating: rating,
        content: content,
      }),
    }).then((response) => {
      if (response.status === 201) {
        console.log("feedback saved successfully");
        window.location.reload();
      } else {
        console.log("there was an error saving the feedback");
      }
    });
  }

  function handleQueryChange(event) {
    setSearchQuery(event.target.value);
  }

  if (token) {
    return (
      <>
        <NavbarHP />
        <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-10 md:pr-10 pr-5 pl-5">
          <h1 className="flex justify-center text-lorange font-poppins-bold text-2xl pb-2 pt-8 mb-2">
            Leave a review
          </h1>
          <p>To leave a review, you need to have at least 1 job application</p>
          <br />
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
          <br />
          <br />

          <div>
            <h1 className="feedback-intro-title">Reviews</h1>
            <br />
            <Feedback
              feedbacks={feedbacks}
              filteredFeedbacks={filteredFeedbacks}
              handleQueryChange={handleQueryChange}
              searchQuery={searchQuery}
            />
          </div>
          <br />
          <br />
          <br />
        </div>
      </>
    );
  }
};

export default FeedbackPage;
