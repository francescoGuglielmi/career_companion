import './App.css';
import LandingPage from '../landingPage/LandingPage';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../user/SignUpForm';
import Interview from '../Interview/Interview';
import CoverLetterGenerator from '../coverLetterGen/CoverLetterGen';
import Profile from '../profile/Profile';
import Account from '../account/Account'
import React, { useState } from 'react';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
          <Route path='/generator' element={<CoverLetterGenerator navigate={ useNavigate() }/>}/>
          <Route path='/' element={<LandingPage  navigate={ useNavigate() }/>}/>
          <Route path='/profile' element={<Profile navigate={ useNavigate() }/>}/>
          <Route path='/interview' element={<Interview navigate={ useNavigate() }/>}/>
          <Route path='/login' element={<LoginForm  navigate={ useNavigate() }/>}/>
          <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
          <Route path='/account' element={<Account navigate={ useNavigate() }/>}/>
        </Routes>
    );
}

export default App;
