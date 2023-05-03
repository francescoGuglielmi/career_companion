import React from "react";
import './Feedback.css'

const Feedback = (props) => {

  return (
    <>
    <div className="feed-container">
      <form className="search" >
        <span>Search:</span><input className="search_bar" type="text" value={props.searchQuery} onChange={props.handleQueryChange} />
      </form>
      
      <div className="feed">  
        { props.filteredFeedbacks && props.filteredFeedbacks.map((feedback, index) => ( 
          <div key={index} className="feedback"> 
          <h2 id="author">{feedback.user.firstName} Rating: {feedback.rating} </h2>
            <h2 className="jobPosition">{feedback.jobPosition}<span className="company">for {feedback.company}</span></h2>
            <article className="feedback-content">{feedback.content}</article>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Feedback;