import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import Interview from '../Interview/Interview'
import CoverLetterGenerator from '../coverLetterGen/CoverLetterGen';
import Profile from '../profile/Profile'
import React, { useState } from 'react';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
          <Route path='/generator' element={<CoverLetterGenerator navigate={ useNavigate() }/>}/>
        <Route path='/profile' element={<Profile navigate={useNavigate()} />} />
        <Route path='/interview' element={<Interview navigate={useNavigate()} />} />
        <Route path='/login' element={<LoginForm navigate={useNavigate()} />} />
        <Route path='/signup' element={<SignUpForm navigate={useNavigate()} />} />
      </Routes>
    </>
  );
}

export default App;
