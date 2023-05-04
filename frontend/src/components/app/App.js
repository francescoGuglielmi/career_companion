import './App.css';
import LandingPage from '../landingPage/LandingPage';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../user/SignUpForm';
import Interview from '../Interview/Interview.js';
import CoverLetterGenerator from '../coverLetterGen/CoverLetterGen';
import Profile from '../profile/Profile';
import Account from '../account/Account';
import Resume from '../resumeGenerator/Resume'
import React, { useState } from 'react';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import FeedbackPage from '../feedback_page/FeedbackPage';

const App = () => {
  return (
    <Routes>
      <Route path='/resume' element={<Resume navigate={useNavigate()} />} />
      <Route path='/feedback' element={<FeedbackPage navigate={useNavigate()} />} />
      <Route path='/generator' element={<CoverLetterGenerator navigate={useNavigate()} />} />
      <Route path='/' element={<LandingPage navigate={useNavigate()} />} />
      <Route path='/profile' element={<Profile navigate={useNavigate()} />} />
      <Route path='/interview' element={<Interview navigate={useNavigate()} />} />
      <Route path='/login' element={<LoginForm navigate={useNavigate()} />} />
      <Route path='/signup' element={<SignUpForm navigate={useNavigate()} />} />
      <Route path='/account' element={<Account navigate={useNavigate()} />} />
    </Routes>
  );
}

export default App;
