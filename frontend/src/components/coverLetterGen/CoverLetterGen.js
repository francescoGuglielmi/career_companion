import React, { useState, useEffect } from 'react';
import './CoverLetterGen.css'
import Navbar from '../navbar/navBarHP';
import Footer from '../footer/Footer';
import { Configuration, OpenAIApi } from "openai";
import key from '../api_key';

const openai = new OpenAIApi(new Configuration({
  apiKey: key
}))

const CoverLetterGenerator = ({ navigate }) => {

  const [token, setToken] = useState(window.localStorage.getItem("token"))
  const [applications, setApplications] = useState([])
  const [application, setApplication] = useState(null)
  const [jobPosition, setJobPosition] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [reasons, setReasons] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState(null);
  const [loadingAlert, setLoadingAlert] = useState("");

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
          setToken(data.token)
          const filteredApplications = data.applications.filter(
            (application) => application.user._id === data.user._id  //only shows user that is logged in applications
          ); 
          setApplications(filteredApplications);      
        });
    }
  }, []);

  function handleApplicationChange(event) {
    setApplication(event.target.value)
    setJobPosition(event.target.value.split('-')[0])
    setCompanyName(event.target.value.split('-')[1])
  }

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

  async function handleSaveButtonClick() {

    let response = await fetch('/coverLetterGen', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        companyName: companyName,
        jobPosition: jobPosition,
        content: coverLetter
      })

    })
    if (response.status === 201) {
      navigate("/profile");
    } else {
      return "There was an error saving your cover letter, refresh the page to try again.";
    }
      
  } 

  if (token) {
  return (
    <>
    <Navbar />
      <div className="cover_letter_gen">
        <h2 className="title" >Generate your tailored cover letter</h2>
        <form onSubmit={handleSubmit}>
          <h3>if you have already applied for it choose from below:</h3>
          <select value={application} onChange={handleApplicationChange}>
            <option value="" >Select below...</option>
            {applications && applications.map((application, index) => (
              <option key={index} value={`${application.jobTitle}-${application.company}`} >{application.jobTitle} - {application.company}</option>
            ))}
          </select>
          <br/>
          <br/>
          <h2>What's the job position you are applying for?</h2>
          <textarea value={application? application.split('-')[0] : jobPosition} onChange={handleJobPositionChange}></textarea>
          <br/>
          <h2>What's the company name?</h2>
          <textarea value={application? application.split('-')[1] : companyName} placeholder={application && application.split('-')[1]} onChange={handleCompanyNameChange}></textarea>
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
      { coverLetter && <button className="save_button" onClick={handleSaveButtonClick}>Save Cover Letter</button> }
      <br/>
      <Footer />
    </>
  )
  } else {
    return (
      <>
        <h1>Please  Sign in to access this resource</h1>
        <a href='/login'>Sign in</a>
      </>
    )
  }
}

export default CoverLetterGenerator;
