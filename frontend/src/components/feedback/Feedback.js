import React from "react";
import DeleteFeedback from "../deleteFeedback/deleteFeedback";
import "./Feedback.css";

const Feedback = (props) => {
  function displayRating(feedback) {
    const stars = [];
    for (let i = 0; i < feedback.rating; i++) {
      stars.push(
        <input
          type="radio"
          name="rating-2"
          value=""
          className="mask mask-star-2 rating-sm bg-orange-400 star"
        />
      );
    }

    return <div className="rating">{stars}</div>;
  }

  return (
    <>
      <div className="feed-container">
        <form className="flex justify-center items-center">
          <input
            className="shadow border h-10 md:w-96 w-72 text-md ml-2 pl-2"
            type="text"
            value={props.searchQuery}
            onChange={props.handleQueryChange}
            placeholder="Search"
          />
        </form>

        <div className="w-11/12 lg:w-8/12">
          {props.filteredFeedbacks &&
            props.filteredFeedbacks
            .map((feedback, index) => (
              <div key={index} className="bg-white text-navy mt-4 mb-4 px-2 py-4 shadow rounded-lg pl-4">
                <h2 id="author">
                  {feedback.user.firstName}{" "}
                  <span className="flex">{displayRating(feedback)}</span>
                </h2>
                <h2 className="">
                  {feedback.jobPosition} -{" "}
                  <span className="company">{feedback.company}</span>
                </h2>
                <article className="mt-4 mb-4 text-lblue">
                  "{feedback.content}"
                </article>
                {props.user.firstName === feedback.user.firstName && (
                  <DeleteFeedback feedback={feedback} />
                )}
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </>
  );
};

export default Feedback;
