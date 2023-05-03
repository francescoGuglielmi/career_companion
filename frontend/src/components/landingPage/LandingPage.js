import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navBarLP';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";


export default function LandingPage() {
  const[darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar />
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-cream dark:bg-navy">
          <nav className="sticky top-0 z-50 bg-cream dark:bg-navy dark:text-white flex justify-center items-center">
            <div className="w-full h-44 flex justify-between">
              <div className="">
                <img src="/cc-logo.png" className="h-44 px-10" />
              </div>
              <div className="py-16">
                <HiMenuAlt3 className="cursor-pointer text-4xl mr-5 text-navy xl:hidden lg:hidden md:hidden" onClick={toggleMenu} />
                <ul className={isMenuOpen ? "menu-open" : ""}>
                  <button className="close-icon cursor-pointer text-right text-4xl text-navy xl:hidden lg:hidden md:hidden" onClick={toggleMenu}>×</button>
                  <li className="py-2 mr-2">
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl text-navy dark:text-lorange"
                    />
                  </li>
                  <li>
                    <a href="/#about" className="border-none w-40 inline-flex items-center justify-center py-3 text-base font-bold text-center bg-cream dark:bg-cream hover:text-lblue hover:dark:bg-lorange  text-blue dark:text-blue border-2  hover:border-blue rounded-xl dark:border-gray-700 dark:hover:bg-gray-700" onClick={() => navigate('/#about')}>ABOUT</a>
                  </li>
                  <li>
                    <a href="/#team" className="border-none w-40 inline-flex items-center justify-center py-3 text-base font-bold text-center bg-cream dark:bg-cream hover:text-lblue hover:dark:bg-lorange  text-blue dark:text-blue border-2  hover:border-blue rounded-xl dark:border-gray-700 dark:hover:bg-gray-700" onClick={() => navigate('/#team')}>TEAM</a>
                  </li>
                  <li>
                    <a href="/#features" className="border-none w-40 inline-flex items-center justify-center py-3 mr-5 text-base font-bold text-center bg-cream dark:bg-cream hover:text-lblue hover:dark:bg-lorange  text-blue dark:text-blue border-2  hover:border-blue rounded-xl dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" onClick={() => navigate('/#features')}>FEATURES</a>
                  </li>
                  <li>
                    <a href="/login" className="w-48 inline-flex items-center justify-center px-5 py-3 mr-10 text-base font-bold text-center bg-lorange dark:bg-cream hover:bg-lorange hover:dark:bg-lorange  text-navy dark:text-blue border-2 border-lorange hover:border-blue rounded-xl dark:border-gray-700 dark:hover:bg-gray-700" onClick={() => navigate('/login')}>LOGIN</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <section className="min-h-fit mt-20 mb-56">
            <section className="bg-cream dark:bg-navy">
              <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="text-navy max-w-4xl mb-6 ml-10 text-4xl font-poppins-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-cream">Life's too short to hate your job!</h1>
                    <p className=" text-blue max-w-3xl mb-6 ml-10 text-2xl font-medium dark:text-gray-400">Let Career Companion be your personal coach and help you build a career you'll love.</p>
                      <div className="flex flex-row items-left justify-left mb-16 ml-10 space-x-6">
                        <a href="#about" className="w-48 inline-flex items-center justify-center bg-blue dark:bg-lblue hover:bg-lblue hover:dark:bg-blue border-2 border-blue px-5 py-3 rounded-xl text-base font-bold text-center text-cream bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900" onClick={() => window.scrollTo({ top: document.getElementById("about").offsetTop, behavior: 'smooth' })}>
                          LEARN MORE
                          <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="/signup" className="w-48 inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center bg-lorange dark:bg-cream hover:bg-lorange hover:dark:bg-lorange  text-navy dark:text-blue border-2 border-lorange hover:border-blue rounded-xl focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800" onClick={() => navigate('/signup')}>
                          SIGN UP
                        </a> 
                      </div>
                </div>
                <div className="overflow-visible w-4/6 mx-auto lg:mt-0 lg:col-span-5 lg:flex lg:w-full">
                  <img src="/cc-hero-image.png" alt="Career Companion Hero Illustration" />
                </div>                
              </div>
            </section>
          </section>
          <section className="min-h-fit mb-44 bg-cream dark:bg-navy" id="about">
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/3 p-8 items-center justify-center">
                <h1 className="text-navy max-w-4xl mb-6 ml-10 pb-2 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-cream border-b-2 border-lorange border-dashed">
                  ABOUT
                </h1>
              </div>
              <div className="w-full lg:w-2/3 p-8">
                <p className=" text-blue mb-6 ml-10 text-2xl font-medium dark:text-gray-400">
                  Welcome to <span className="text-lorange">Career Companion</span>, your ultimate job search assistant.
                </p>
                <p className=" text-blue mb-6 ml-10 text-2xl font-medium dark:text-gray-400">
                With us, you can easily track your job applications, manage your interviews, and receive reminders and notifications to stay on top of your job search.
                </p>
                <p className=" text-blue mb-6 ml-10 text-2xl font-medium dark:text-gray-400">
                  At <span className="text-lorange">Career Companion</span>, we understand that job hunting can be a daunting process. That's why we're here to support you every step of the way. Whether you're a recent graduate or an experienced professional, our platform can help you land your dream job.
                </p>
                <p className=" text-blue ml-10 text-2xl font-medium dark:text-gray-400">
                  Before we show you the features, make sure you meet the team below!
                </p>
              </div>                
            </div>
            <div className="w-full flex items-center justify-center pt-20 lg:pt-5">
              <a href="#team" className="w-52 inline-flex items-center justify-center bg-blue dark:bg-lblue hover:bg-lblue dark:hover:bg-blue px-5 py-3 rounded-xl text-base font-bold text-center text-cream bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Meet the Team 
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </section>
          <section className="bg-cream dark:bg-navy" id="team">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="text-navy max-w-4xl mb-6 ml-10 pb-2 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-cream border-b-2 border-lorange border-dashed">OUR TEAM</h2>
              </div> 
              <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                <div className="h-72 items-center bg-cream border-2 border-lorange rounded-lg shadow sm:flex dark:bg-blue dark:border-lorange">
                  <a href="#">
                    <img className="rounded-full p-2" src="/sarah-avatar.png" alt="Sarah Avatar" />
                  </a>
                  <div className="">
                    <h3 className="text-xl font-bold tracking-tight text-navy dark:text-cream px-2">
                      Sarah Davies
                    </h3>
                    <span className="text-blue dark:text-gray-200 px-2">Full-Stack Web Developer</span>
                    <p className="mt-3 mb-4 font-light text-lblue dark:text-gray-300 px-2">Sarah loves gymming, exploring the Kent wilderness and feeding her wanderlust.</p>
                    <ul className="flex space-x-4 sm:mt-0 px-2">
                      <li>
                        <a href="#" className="text-navy hover:text-gray-900 dark:hover:text-white">
                        <HiOutlineDocumentText className="cursor-pointer text-2xl text-navy dark:text-lorange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                          <BsGithub className="cursor-pointer text-2xl text-blue dark:text-lorange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                          <BsTwitter className="cursor-pointer text-2xl text-lblue dark:text-lorange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="h-72 items-center bg-cream border-2 border-lorange rounded-lg shadow sm:flex dark:bg-blue dark:border-lorange">
                  <a href="#">
                    <img className="rounded-full p-2" src="/francesco-avatar.png" alt="Francesco Avatar" />
                  </a>
                  <div className="">
                    <h3 className="text-xl font-bold tracking-tight text-navy dark:text-cream px-2">
                      Francesco 'Franchie' Guglielmi
                    </h3>
                    <span className="text-blue dark:text-gray-200 px-2">Back-end Engineer</span>
                    <p className="mt-3 mb-4 font-light text-lblue dark:text-gray-300 px-2">Francesco is a rebel at heart. He expresses it by always putting pineapple on a pizza.</p>
                    <ul className="flex space-x-4 sm:mt-0 px-2">
                      <li>
                        <a href="#" className="text-navy hover:text-gray-900 dark:hover:text-white">
                        <HiOutlineDocumentText className="cursor-pointer text-2xl text-navy dark:text-lorange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                          <BsGithub className="cursor-pointer text-2xl text-blue dark:text-lorange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                          <BsTwitter className="cursor-pointer text-2xl text-lblue dark:text-lorange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="h-72 items-center bg-cream border-2 border-lorange rounded-lg shadow sm:flex dark:bg-blue dark:border-lorange">
                  <a href="#">
                    <img className="rounded-full p-2" src="/adnan-avatar.png" alt="Adnan Avatar" />
                  </a>
                  <div className="">
                    <h3 className="text-xl font-bold tracking-tight text-navy dark:text-cream px-2">
                      Adnan Mann
                    </h3>
                    <span className="text-blue dark:text-gray-200 px-2">Full-Stack Web Developer</span>
                    <p className="mt-3 mb-4 font-light text-lblue dark:text-gray-300 px-2">Adnan loves tutorials and story-telling. Perhaps he even loves the latter a bit too much.</p>
                    <ul className="flex space-x-4 sm:mt-0 px-2">
                      <li>
                        <a href="#" className="text-navy hover:text-gray-900 dark:hover:text-white">
                        <HiOutlineDocumentText className="cursor-pointer text-2xl text-navy dark:text-lorange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                          <BsGithub className="cursor-pointer text-2xl text-blue dark:text-lorange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                          <BsTwitter className="cursor-pointer text-2xl text-lblue dark:text-lorange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="h-72 items-center bg-cream border-2 border-lorange rounded-lg shadow sm:flex dark:bg-blue dark:border-lorange">
                  <a href="#">
                    <img className="rounded-full p-2" src="/konrad-avatar.png" alt="Konrad Avatar" />
                  </a>
                  <div className="">
                    <h3 className="text-xl font-bold tracking-tight text-navy dark:text-cream px-2">
                      Konrad Duński
                    </h3>
                    <span className="text-blue dark:text-gray-200 px-2">Front-end Engineer</span>
                    <p className="mt-3 mb-4 font-light text-lblue dark:text-gray-300 px-2">Konrad has always been a class clown. Suffice to say he still is. Handsome though.</p>
                    <ul className="flex space-x-4 sm:mt-0 px-2">
                      <li>
                        <a href="#" className="text-navy hover:text-gray-900 dark:hover:text-white">
                        <HiOutlineDocumentText className="cursor-pointer text-2xl text-navy dark:text-lorange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                          <BsGithub className="cursor-pointer text-2xl text-blue dark:text-lorange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                          <BsTwitter className="cursor-pointer text-2xl text-lblue dark:text-lorange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="h-72 items-center bg-cream border-2 border-lorange rounded-lg shadow sm:flex dark:bg-blue dark:border-lorange">
                  <a href="#">
                    <img className="rounded-full p-2" src="/kassandra-avatar.png" alt="Kassandra Avatar" />
                  </a>
                  <div className="">
                    <h3 className="text-xl font-bold tracking-tight text-navy dark:text-cream px-2">
                      Kassandra Kalejaye
                    </h3>
                    <span className="text-blue dark:text-gray-200 px-2">Full-Stack Web Developer</span>
                    <p className="mt-3 mb-4 font-light text-lblue dark:text-gray-300 px-2">Kassandra loves Hunger Games trilogy, Love Island and RuPaul's Drag Race.</p>
                    <ul className="flex space-x-4 sm:mt-0 px-2">
                      <li>
                        <a href="#" className="text-navy hover:text-gray-900 dark:hover:text-white">
                        <HiOutlineDocumentText className="cursor-pointer text-2xl text-navy dark:text-lorange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                          <BsGithub className="cursor-pointer text-2xl text-blue dark:text-lorange" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-900 dark:hover:text-white">
                          <BsTwitter className="cursor-pointer text-2xl text-lblue dark:text-lorange" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
            </div>
            <div className="w-full flex items-center justify-center pt-20 lg:pt-5">
              <a href="#features" className="w-52 inline-flex items-center justify-center bg-blue dark:bg-lblue hover:bg-lblue hover:dark:bg-blue px-5 py-3 mb-36 rounded-xl text-base font-bold text-center text-cream bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                See Features
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </section>
          <div className="w-full mx-auto lg:w-1/3 p-8 items-center justify-center" id="features">
            <h1 className="text-navy max-w-4xl ml-10 pb-2 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-cream border-b-2 border-lorange border-dashed">
              FEATURES
            </h1>
          </div>
          <section className="bg-cream dark:bg-navy">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-navy">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-lorange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-navy dark:text-white">Job Applications Tracker</h3>
                  <p className="text-blue dark:text-gray-200">Keep track of all your job applications in one place, with real-time updates on their status, deadlines, and other details to help you stay organized and on top of your job search.</p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-blue">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-lorange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-navy dark:text-white">Interview Training</h3>
                  <p className="text-blue dark:text-gray-200">Get personalized feedback on your interview skills, with tips and insights from artificial intelligence that can help you improve your performance and increase your chances of landing your dream job.</p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-light-blue-700">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-lorange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-navy dark:text-white">Resume Builder</h3>
                  <p className="text-blue dark:text-gray-200">Create a professional, eye-catching resume in minutes, with customizable templates, expert guidance, and real-time previews that make it easy to showcase your skills, experience, and achievements.</p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-light-blue-500">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:dark:text-lorange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-navy font-bold dark:text-white">Cover Letter Generator</h3>
                  <p className="text-blue dark:text-gray-200">Craft a compelling cover letter that stands out from the crowd, with customizable templates, expert guidance, and real-time previews that help you highlight your strengths and explain why you're the right candidate for the job.</p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-light-blue-300">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-lorange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-navy font-bold dark:text-white">Share Feedback</h3>
                  <p className="text-blue dark:text-gray-200">Share your interview experiences and insights with others in your network, with real-time feedback and advice that can help you improve your skills and increase your chances of success.</p>
                </div>
                <div>
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 text-light-blue-200">
                  <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-lorange" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                  </div>
                  <h3 className="mb-2 text-xl text-navy font-bold dark:text-white">Research Companies</h3>
                  <p className="text-blue dark:text-gray-200">Get insights and information on companies and employers you're interested in, with real-time updates on their size, culture, ratings, reviews, and other details that can help you make informed decisions about your career.</p>
              </div>
              </div>
            </div>
          </section>
          
          <section className="bg-cream dark:bg-blue border-t-2 border-lorange border-dashed">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-navy dark:text-white">Start your free trial today</h2>
                <p className="mb-6 font-light text-blue dark:text-gray-200 md:text-lg">Try Career Companion for 30 days. No credit card required.</p>
                <a href="/signup" className="w-40 inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-navy bg-lorange border-2 border-lorange hover:border-blue rounded-xl hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Sign Up Now!</a>
              </div>
            </div>
          </section>
        </main>
      </div>

    {/* <Footer /> */}
    </>
  );
};
