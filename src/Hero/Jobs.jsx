// JobSearchPage.js
import React from 'react';
import { FaArrowLeft, FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const JobSearchPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center p-4">
        <div className="flex items-center space-x-4 sm:space-x-6 ml-4 sm:ml-6 mb-2 sm:mb-0">
        <Link to={'/main'} >
        <FaArrowLeft size={24} className="mr-4 cursor-pointer" />
        </Link>
        <FaXTwitter className="w-8 h-8" />
        <button className="bg-[#1a202c] text-white px-6 font-bold py-2 rounded-3xl">Job Search</button>
        </div>
        <div className="relative w-full sm:w-1/3 mt-2 sm:mt-0">
          <input 
            type="text" 
            placeholder="Search jobs" 
            className="w-full p-3 bg-black border border-gray-600 rounded-full placeholder-gray-500 focus:outline-none focus:border-gray-500"
          />
          <div className="absolute right-3 top-3 text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.65-5.65A7 7 0 1112 5a7 7 0 016.35 10.35z"></path>
            </svg>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-24 sm:mt-48 px-4">
        <div className="flex items-center space-x-4 mb-8">
          <FaXTwitter className="w-16 h-16" />
          <h1 className="text-4xl font-bold">Job Search</h1>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Keyword" 
              className="w-80 p-3 pl-10 bg-transparent border border-blue-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-600"
            />
            <div className="absolute left-3 top-3 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.65-5.65A7 7 0 1112 5a7 7 0 016.35 10.35z"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Location" 
              className="w-80 p-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
            />
          </div>
          <button className="bg-[#1aa1f5] text-white py-3 px-6 rounded-full focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchPage;

<div className="flex items-center space-x-6 ml-6">

</div>
