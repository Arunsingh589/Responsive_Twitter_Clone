import React from 'react';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const settingsOptions = [
  "Your account",
  "Monetization",
  "Premium",
  "Creator Subscriptions",
  "Security and account access",
  "Privacy and safety",
  "Notifications",
  "Accessibility, display, and languages",
  "Additional resources",
  "Help Center"
];

const Settings = () => {
  return (
    <div className="bg-[#1a202c] min-h-screen text-white">
      <div className="flex items-center p-4 border-b border-gray-700">
      <Link to={'/main'} >
        <FaArrowLeft size={24} className="mr-4 cursor-pointer" />
        </Link>
        <div className="flex-grow">
          <h1 className="text-xl font-bold">Settings</h1>
          <h2 className="text-sm text-gray-400">@thakur_589</h2>
        </div>
      </div>
      <div className="px-4">
        <div className="mt-4 flex items-center bg-gray-800 rounded-full p-2">
          <FaSearch size={18} className="text-gray-400 ml-2" />
          <input
            type="text"
            placeholder="Search Settings"
            className="bg-gray-800 ml-2 w-full outline-none text-gray-400"
          />
        </div>
        <div className="mt-4">
          {settingsOptions.map((option, index) => (
            <div key={index} className="flex justify-between items-center p-4 hover:bg-gray-700 cursor-pointer border-b border-gray-700">
              <p>{option}</p>
              <FaArrowLeft className="text-gray-400 rotate-180" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
