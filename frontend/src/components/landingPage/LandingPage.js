import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navBarLP';
import Footer from '../footer/Footer';

const LandingPage = () => {

  const navigate = useNavigate();

  return (
    <>
      <Navbar/>
      <div className="flex flex-col md:flex-row min-h-screen bg-cream">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-20 py-25 md:py-0">
          <h1 className="text-navy text-4xl md:text-6xl font-bold leading-tight mb-4">We're here to help you find the dream job!</h1>
          <h2 className="text-blue text-2xl md:text-4xl font-medium leading-tight mb-8">Sign up today and let Career Companion be your personal career coach.</h2>
          <div className="flex justify-center">
            <button className="w-44 h-14 flex-1 bg-blue hover:bg-lblue text-cream font-bold rounded-lg mr-4 whitespace-nowrap" onClick={() => window.scrollTo({ top: document.getElementById("about").offsetTop, behavior: 'smooth' })} href="#about">
              Learn More ⇣
            </button>
            <button className="w-44 flex-1 bg-cream text-navy font-bold border-4 border-lblue hover:border-lorange border-slate-400 rounded-lg ml-4" onClick={() => navigate('/signup')} href="/signup">
              Sign Up
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <img className="object-cover w-4/6 mx-auto" src="/cc-hero-image.png" alt="Career Companion Hero" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start px-20 py-25 md:py-0 min-h-screen bg-cream" id="about">
        <div className="flex flex-col md:flex-row justify-center items-start min-h-fit border-4 border-lorange border-slate-400 rounded-3xl">
          <h1 className="text-navy text-4xl md:text-5xl font-bold justify-center leading-tight mb-4 px-10 py-10">ABOUT</h1>
          <div className="flex flex-col items-start">
            <h2 className="text-blue text-2xl md:text-3xl font-medium leading-tight px-10 py-10">Welcome to Career Companion, your ultimate job search assistant. With Career Companion, you can easily track your job applications, manage your interviews, and receive reminders and notifications to stay on top of your job search.<br /><br />
            Our platform is designed to make your job search experience as smooth and efficient as possible. With our user-friendly interface, you can easily save jobs you applied for, track your application progress, and receive timely reminders to follow up with employers. You can also generate your resume and a custom cover letter with just a few clicks.<br /><br />
            At Career Companion, we understand that job hunting can be a daunting process. That's why we're here to support you every step of the way. Whether you're a recent graduate or an experienced professional, our platform can help you land your dream job.<br /><br />
            If you're still not quite sold, check out the features below!</h2>
          <div className="flex justify-center w-full">
            <button className="w-44 h-14 bg-blue hover:bg-lblue text-cream font-bold rounded-lg mr-4 whitespace-nowrap mb-12" onClick={() => window.scrollTo({ top: document.getElementById("features").offsetTop, behavior: 'smooth' })} href="#features">
              Features ⇣
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default LandingPage;
