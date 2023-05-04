import React from "react";
import "./Feedback.css";

const Feedback = (props) => {
  // console.log(props.feedbacks[1].user.firstName)
  return (
    <>
      <form>
        <div className="text-lg">Search:</div>
        <input
          className="shadow border h-10 w-96 text-md mb-2 md:mb-4"
          type="text"
          value={props.searchQuery}
          onChange={props.handleQueryChange}
        />
      </form>
      {props.filteredFeedbacks &&
        props.filteredFeedbacks.map(
          (
            feedback,
            index // border below will have to be removed
          ) => (
            <div key={index} className="feedback">
              <h2 className="jobPosition">
                {feedback.jobPosition}
                <span className="company"> for {feedback.company}</span>
              </h2>
              <h2 id="author">
                {feedback.user.firstName} rating: {feedback.rating}{" "}
              </h2>

              <article className="feedback-content">{feedback.content}</article>
            </div>
          )
        )}
    </>
  );
};

export default Feedback;
