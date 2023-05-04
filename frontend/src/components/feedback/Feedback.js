import React from "react";
import DeleteFeedback from "../deleteFeedback/deleteFeedback";
import './Feedback.css'

const Feedback = (props) => {

  function displayRating(feedback) {
    const stars = []
    for (let i=0; i < feedback.rating; i++) {
      stars.push(<input type="radio" name="rating-2" value="" className="mask mask-star-2 rating-sm bg-orange-400 star"/>)
    }

    return (
      <div className="rating"> 
        {stars}
      </div>
    )
  }

  return (
    <>
    <div className="feed-container">
      <form className="search" >
        <span>Search:</span><input className="search_bar" type="text" value={props.searchQuery} onChange={props.handleQueryChange} />
      </form>
      
      <div className="feed">  
        { props.filteredFeedbacks && props.filteredFeedbacks.map((feedback, index) => ( 
          <div key={index} className="feedback"> 
            <h2 id="author">{feedback.user.firstName} <span className="rated">{displayRating(feedback)}</span></h2>
            <h2 className="jobPosition">{feedback.jobPosition} - <span className="company">{feedback.company}</span></h2>
            <article className="feedback-content">{feedback.content}</article>
            {props.user.firstName === feedback.user.firstName && <DeleteFeedback feedback={feedback} /> } 
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Feedback;