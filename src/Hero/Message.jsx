import React from 'react';
import { FaCog, FaEnvelope } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Message = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex flex-col lg:flex-row border-t border-gray-700 min-h-screen">
        {/* Left 40% Section */}
        <div className="w-full lg:w-2/5 border-b lg:border-b-0 lg:border-r border-gray-700 p-4 flex flex-col">
          {/* Navbar-like section */}
          <div className="flex justify-between items-center p-2">
            <Link to={'/main'}>
              <FaArrowLeft size={24} className="mr-1 cursor-pointer" />
            </Link>
            <h2 className="text-xl font-bold">Messages</h2>
            <div className="flex space-x-4">
              <FaCog className="hidden md:block w-6 h-6 gap-2" />
              <FaEnvelope className="w-6 h-6" />
            </div>
          </div>
          {/* Body */}
          <div className="p-4 flex-grow">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Welcome to your inbox!</h2>
            <p className="mb-6 text-gray-400">Drop a line, share posts and more with private conversations between you and others on X.</p>
            <button className="bg-[#1aa1f5] font-bold text-xl text-white py-4 px-8 focus:outline-none rounded-full">Write a message</button>
          </div>
        </div>

        {/* Right 60% Section */}
        <div className="w-full lg:w-3/5 p-4 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Select a message</h2>
          <p className="mb-6 text-gray-400">Choose from your existing conversations, start a new one, or just keep swimming.</p>
          <button className="bg-[#1aa1f5] font-bold text-xl text-white py-4 px-8 focus:outline-none rounded-full">New message</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
