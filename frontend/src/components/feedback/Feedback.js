import React from "react";

const Feedback = (props) => {
  // console.log(props.feedbacks[1].user.firstName)
  return (
    <>
      { props.feedbacks && props.feedbacks.map((feedback, index) => ( // border below will have to be removed
        <div key={index}> 
        <h2 id="author">{feedback.user.firstName}</h2>
        <article>{feedback.content}</article>
        </div>
      ))}
    </>
  )
}

export default Feedback;