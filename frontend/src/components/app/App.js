import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import Interview from '../Interview/Interview'
import Profile from '../profile/Profile'
import React, { useState } from 'react';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import NavbarLP from '../navbar/navBarLP';
import Body from '../footer/body/body';
import Footer from '../footer/footer';

const App = () => {
  return (
    <>
      <NavbarLP />
      <Routes>
        <Route path='/profile' element={<Profile navigate={useNavigate()} />} />
        <Route path='/interview' element={<Interview navigate={useNavigate()} />} />
        <Route path='/login' element={<LoginForm navigate={useNavigate()} />} />
        <Route path='/signup' element={<SignUpForm navigate={useNavigate()} />} />
      </Routes>
      <Body />
      <Footer />
    </>
  );
}

export default App;
