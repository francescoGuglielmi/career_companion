import './App.css';
import LandingPage from '../landingPage/LandingPage';
import LoginForm from '../auth/LoginForm';
import SignUpForm from '../user/SignUpForm';
import React, { useState } from 'react';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
          {/* <Route path='/posts'  element={<Feed navigate={ useNavigate() }/>}/> */}
          <Route path='/' element={<LandingPage  navigate={ useNavigate() }/>}/>
          <Route path='/login'  element={<LoginForm  navigate={ useNavigate() }/>}/>
          <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
        </Routes>
    );
}

export default App;
