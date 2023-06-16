import React, { useState, useEffect } from "react";
import SelectJobPosition from "../jobSelection/JobSelection";
import QuestionsForm from "../questionsForm/QuestionsForm";
import "./Interview.css";
import NavbarHP from "../navbar/navBarHP";

const Interview = ({ navigate }) => {

  //  HOOKS

  const [token] = useState(window.localStorage.getItem("token"));
  const [jobSelection, setJobSelection] = useState("");
  const [loadingFormAlert, setLoadingFormAlert] = useState("");
  const [questions, setQuestions] = useState(null);
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [loadingFeedbackAlert, setLoadingFeedbackAlert] = useState("");
  const [feedback, setFeedback] = useState(null);


  // OnChange FUNCTIONS

  function handleSelectionChange(event) {
    setJobSelection(event.target.value);
  }

  function handleAnswer1Change(event) {
    event.preventDefault();
    setAnswer1(event.target.value);
  }

  function handleAnswer2Change(event) {
    event.preventDefault();
    setAnswer2(event.target.value);
  }

  function handleAnswer3Change(event) {
    event.preventDefault();
    setAnswer3(event.target.value);
  }

  function handleAnswer4Change(event) {
    event.preventDefault();
    setAnswer4(event.target.value);
  }

  function handleAnswer5Change(event) {
    event.preventDefault();
    setAnswer5(event.target.value);
  }

  // JOB SELECTION

  function handleSelectionSubmit(event) {
    event.preventDefault();
    setLoadingFormAlert("Loading, please wait...");

    fetch(`${window.BACKEND_API_SERVER_ADDRESS}/openai/interviewQuestions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        jobSelection: jobSelection
      })
    })
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data.questions);
        setLoadingFormAlert("");
    });
    
  }

  // ANSWERS

  function handleAnswersSubmit(event) {
    event.preventDefault()
    setLoadingFeedbackAlert("Please wait, your feedback is being generated...");

    fetch(`${window.BACKEND_API_SERVER_ADDRESS}/openai/interviewFeedback`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        questions: questions,
        answers: [answer1, answer2, answer3, answer4, answer5],
        jobSelection: jobSelection
      })
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        setFeedback(data.feedback.split("Feedback"));
        setLoadingFeedbackAlert("");
      });

  }

  // RENDERING:

  if (token) {
    return (
      <>
        <NavbarHP />
        <div className="min-h-screen bg-cream font-dm-sans-regular md:pl-10 md:pr-10 pr-5 pl-5 pb-20 ">
          <h2 className="flex justify-center text-lorange font-poppins-bold text-4xl pb-2 pt-8">
            Interview dojo
          </h2>
          <br></br>
          <br></br>
          <p>Disclaimer: <br/>The AI generated features might not be always generated in the right format. We are working on this. If this is your case feel free to reload the questions or the feedbacks until you get a satisfactory interview. <br/> - Career Companion team.</p>
          <div className="dojo_container">
            <br />
            <SelectJobPosition
              handleSelectionSubmit={handleSelectionSubmit}
              handleSelectionChange={handleSelectionChange}
              jobSelection={jobSelection}
            />
            <h2>{loadingFormAlert}</h2>
            {questions && (
              <QuestionsForm
                handleAnswersSubmit={handleAnswersSubmit}
                questions={questions}
                handleAnswer1Change={handleAnswer1Change}
                handleAnswer2Change={handleAnswer2Change}
                handleAnswer3Change={handleAnswer3Change}
                handleAnswer4Change={handleAnswer4Change}
                handleAnswer5Change={handleAnswer5Change}
                answer1={answer1}
                answer2={answer2}
                answer3={answer3}
                answer4={answer4}
                answer5={answer5}
              />
            )}
            <h2 className="mt-8">{loadingFeedbackAlert}</h2>
            {feedback && <div className="bg-white mt-2 p-4 rounded-lg shadow">
              <h3>Feedback{feedback[1]}</h3>
              <br></br>
              <br></br>
              <h3>Feedback{feedback[2]}</h3>
              <br></br>
              <br></br>
              <h3>Feedback{feedback[3]}</h3>
              <br></br>
              <br></br>
              <h3>Feedback{feedback[4]}</h3>
              <br></br>
              <br></br>
              <h3>Feedback{feedback[5]}</h3>
            </div>}

              <br/><br/>
            {feedback && (
              <a
                className="bg-blue text-white text-md py-2 px-4 mt-4 inline-flex items-center justify-center text-center border-2 hover:border-blue hover:bg-lblue rounded-xl ease-in-out duration-200 "
                href="/interview"
              >
                Start Again!
              </a>
            )}
            <div className="space"></div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>Please Sign in to access this resource</h1>
        <a href="/login">Sign in</a>
      </>
    );
  }
};

export default Interview;

// TO BE FIXED


