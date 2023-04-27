import React, { useState } from 'react';
import './CoverLetterGen.css'
import { Configuration, OpenAIApi } from "openai";
import key from '../Interview/api_key';

const openai = new OpenAIApi(new Configuration({
  apiKey: key
}))

const CoverLetterGenerator = ({ navigate }) => {

  const [jobPosition, setJobPosition] = useState("");
  const [companyName, setCompanyName] = useState("")
  const [reasons, setReasons] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState(null);
  const [loadingAlert, setLoadingAlert] = useState("")

  function handleJobPositionChange(event) {
    setJobPosition(event.target.value)
  }

  function handleCompanyNameChange(event) {
    setCompanyName(event.target.value)
  }

  function handleReasonsChange(event) {
    setReasons(event.target.value)
  }

  function handleResumeChange(event) {
    setResume(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    setLoadingAlert("Please wait, your cover letter is being generated...")

    openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `I am applying for a position as a ${jobPosition} at ${companyName} and the reasons that motivate me to apply for this position are: '${reasons}'. A text copy of my resume is: ${resume}. Can you generate a short tailored cover letter that shows personality for this position that will likely get me hired?`}]
    }).then((res) => {
      const result = res.data.choices[0].message.content
      setCoverLetter(result);
      setLoadingAlert("");
    })
  }

  return (
    <>
      <div>
        <h2 className="title" >Generate your tailored cover letter</h2>
        <form onSubmit={handleSubmit}>
          <h2>What's the job position you are applying for?</h2>
          <textarea value={jobPosition} onChange={handleJobPositionChange}></textarea>
          <br/>
          <h2>What's the company name?</h2>
          <textarea value={companyName} onChange={handleCompanyNameChange}></textarea>
          <br/>
          <h2>Why do you want to apply for this position/company? What motivates you?</h2>
          <textarea value={reasons} onChange={handleReasonsChange}></textarea>
          <br/>
          <h2>Please, paste a text copy of your cv here:</h2>
          <textarea value={resume} onChange={handleResumeChange}></textarea>
          <br/>
          <button className="submit" type="submit">Generate</button>
        </form>
      </div>
      <br/>
      <h2>{ loadingAlert }</h2> 
      { coverLetter && <div className="cover_letter">
        <h3>{ coverLetter }</h3>
      </div> }
      <br/>
      { coverLetter && <a href='/generator'>Try Again!</a> }
      <br/>
    </>
  )

}

export default CoverLetterGenerator;
