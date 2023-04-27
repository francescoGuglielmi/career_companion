import React from 'react';

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-cream">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-20 py-25 md:py-0">
          <h1 className="text-navy text-4xl md:text-6xl font-bold leading-tight mb-4">We're here to help you find the dream job!</h1>
          <h2 className="text-blue text-2xl md:text-4xl font-medium leading-tight mb-8">Sign up today and let Career Companion be your personal career coach.</h2>
          <div className="flex justify-center">
            <button className="w-44 h-14 flex-1 bg-blue hover:bg-lblue text-cream font-bold rounded-lg mr-4 whitespace-nowrap" onClick={() => window.scrollTo({ top: document.getElementById("about").offsetTop, behavior: 'smooth' })} href="#about">
              Learn More ⇣
            </button>
            <button className="w-44 flex-1 bg-cream text-navy font-bold border-4 border-lblue hover:border-lorange border-slate-400 rounded-lg ml-4" href="/signup">
              Sign Up
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <img className="object-cover w-4/6 mx-auto" src="/cc-hero-image.png" alt="Career Companion Hero" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen bg-cream" id="about">
        <h1 className="text-navy text-4xl md:text-6xl font-bold leading-tight mb-4">What is Career Companion?</h1>
        <h2 className="text-blue text-2xl md:text-4xl font-medium leading-tight mb-8">Sign up today and let Career Companion be your personal career coach.</h2>
      </div>
    </>
  );
};

export default LandingPage;
