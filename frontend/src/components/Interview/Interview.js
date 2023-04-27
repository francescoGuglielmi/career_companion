import React, { useState, useEffect } from 'react';
import key from './api_key';
import SelectJobPosition from './JobSelection';
import QuestionsForm from './QuestionsForm';
import './Interview.css';
import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(new Configuration({
  apiKey: key
}))

const Interview = ({ navigate }) => {

  //  HOOKS
  
  const [token, setToken] = useState(window.localStorage.getItem("token"))
  const [jobSelection, setJobSelection] = useState("")
  const [loadingFormAlert, setLoadingFormAlert] = useState("")
  const [questions, setQuestions] = useState(null)
  const [answer1, setAnswer1] = useState(null)
  const [answer2, setAnswer2] = useState(null)
  const [answer3, setAnswer3] = useState(null)
  const [answer4, setAnswer4] = useState(null)
  const [answer5, setAnswer5] = useState(null)
  const [loadingFeedbackAlert, setLoadingFeedbackAlert] = useState("")
  const [feedback, setFeedback] = useState(null)
  const [rating, setRating] = useState(null)

  // FUNCTION TO SET THE JOB SELECTION 

  useEffect(() => {
    if(token) {
      fetch("/interview", {
        headers: {
          //makes sure a vaild token is present
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(async data => {
          window.localStorage.setItem("token", data.token)
          setToken(window.localStorage.getItem("token"))
          ///console.log()
        })

    } else { 
      return "" }
  })

  function handleSelectionChange(event) {
    setJobSelection(event.target.value);
  }

  // HANDLE SUBMIT

  function handleSelectionSubmit(event) {
    event.preventDefault()

    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptInputJob()}]
    }).then((res) => {
      const result = res.data.choices[0].message.content.split('?')
      setQuestions(result);
      setLoadingFormAlert("");
    })

    setLoadingFormAlert("Loading, please wait...")
  }

  // SET INPUT FOR chatGPT

  function gptInputJob() {
    return `Give me 5 of the most asked questions in a job interview for a ${jobSelection} position without any additional text`
  }

  function gptInputAnswers() {
    let answersForGPT = `Knowing that the answers to these questions are for an interview for a ${jobSelection} position, could you give a feedback on how the answers to these questions could be improved to have more complete information?` +
    `Question 1: ${questions[0]} Answer: ${answer1}` +
    `Question 2: ${questions[1]} Answer: ${answer2}` +
    `Question 3: ${questions[2]} Answer: ${answer3}` +
    `Question 4: ${questions[3]} Answer: ${answer4}` +
    `Question 5: ${questions[4]} Answer: ${answer5}`

    return answersForGPT
  }

  // FUNCTIONS TO SET THE ANSWERS TO THE VALUE INPUTTED

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

  // HANDLE SUBMIT

  function handleAnswersSubmit(event) {
    event.preventDefault()
    setLoadingFeedbackAlert("Please wait, your feedback is being generated...")

    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptInputAnswers()}]
    }).then((res) => {
      const result = res.data.choices[0].message.content;
      setFeedback(result);
      setLoadingFeedbackAlert("");
    })
    
  }

  // function generateRating() {
  //   openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [{ role: "user", content: `Please just give me a one word answer as a rating for the questionaire you gave a feedback above: Very Bad, Bad, Incomplete, Average, Satisfactory, Good or Excellent. Beware that to give a good rating the answer must be complete and well argumented`}]
  //   }).then((res) => {
  //     const result = res.data.choices[0].message.content;
  //     setRating(result)
  //   })
  // }

  // RENDERED FUNCTIONS:

  if (token) {
    return (
      <div className="dojo_container">
        <h2 id="title">Welcome to the interview dojo!</h2>
        <br/>
        <SelectJobPosition handleSelectionSubmit={handleSelectionSubmit} handleSelectionChange={handleSelectionChange} jobSelection={jobSelection}/> 
        <h2>{loadingFormAlert}</h2>
        { questions && <QuestionsForm handleAnswersSubmit={handleAnswersSubmit} questions={questions} handleAnswer1Change={handleAnswer1Change} handleAnswer2Change={handleAnswer2Change} handleAnswer3Change={handleAnswer3Change} handleAnswer4Change={handleAnswer4Change} handleAnswer5Change={handleAnswer5Change} answer1={answer1} answer2={answer2} answer3={answer3} answer4={answer4} answer5={answer5} />}
        <br/>
        <h2>{loadingFeedbackAlert}</h2>
        { feedback && <h3 className="feedback">{feedback}</h3> }
        {/* { feedback && generateRating()} */}
        <br/><br/>
        { feedback && <a className='start_again' href='/interview' >Start Again!</a> }
        <div className="space"></div>
        {/* { rating && <>
          <h1 className="score_title">Your Score:</h1>
          <h2 className="rating">{rating}</h2>
          <div className="start_again">
          
          </div>
        </> } */}
      </div>
    )
  }
}

export default Interview;