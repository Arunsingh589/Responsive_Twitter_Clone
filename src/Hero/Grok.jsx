import React from 'react';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Grok = () => {
  return (
    <div className="min-h-screen bg-[#1a202c] text-white flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-7/12 p-4 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-700">
        {/* Navbar */}
        <div className="flex justify-start items-center mb-4">
          <Link to={'/main'}>
            <FaArrowLeft size={24} className="text-white cursor-pointer" />
          </Link>
        </div>
        {/* Body */}
        <div className="flex flex-col items-center mt-8 lg:mt-16">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/50"
              alt="User"
              className="rounded-full w-12 h-12 mr-2 md:mr-4"
            />
            <div className="flex items-center md:space-x-2">
              <h3 className="text-xl font-bold text-gray-300">Arthur</h3>
              <FaCheckCircle className="text-blue-500" />
              <p className="text-gray-400">@adent42</p>
            </div>
          </div>
          <p className="text-gray-400 mb-8">Who is Taylor Swift dating?</p>

          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-2">
              <h4 className="font-bold text-gray-300">Grok</h4>
              <span className="ml-2 text-yellow-500">⭐️</span>
              <FaCheckCircle className="ml-2 text-blue-500" />
              <p className="ml-2 text-gray-400">@grok</p>
            </div>
            <p className="text-gray-400 mb-4">
              Taylor Swift is currently dating Travis Kelce, a tight end for the Kansas City Chiefs in the National Football League (NFL). Their relationship became public in July 2023, and they have been seen together at various events and games since then.
            </p>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <p className="text-4xl font-bold text-white text-center mb-2">GROK SOMETHING</p>
            <p className="text-gray-400 mb-4">
              Premium subscribers can now use our most advanced AI, Grok, on X.
            </p>
            <button className="bg-white text-black py-3 px-6 rounded-full text-xl">
              Subscribe now
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-5/12 p-4 lg:p-8">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-lg bg-gray-800 text-gray-300"
          />
        </div>

        {/* What's happening */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">What's happening</h3>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="text-md font-semibold text-gray-400">Summer Game Fest 2024</h4>
            <p className="text-gray-500">Gaming Event • 4 hours ago</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="text-md font-semibold text-gray-400">Trending in India</h4>
            <p className="text-gray-500">RIP Sir • 1,535 posts</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="text-md font-semibold text-gray-400">Trending in India</h4>
            <p className="text-gray-500">Rest in Peace • 28.4K posts</p>
          </div>
          {/* Add more trending topics as needed */}
        </div>
      </div>
    </div>
  );
};

export default Grok;
