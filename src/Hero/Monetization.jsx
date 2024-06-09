import React from "react";
import { FaArrowLeft, FaExclamationCircle } from "react-icons/fa";
import { HiOutlineStar, HiFire, HiInformationCircle } from "react-icons/hi";
import { HiMiniDocumentText } from "react-icons/hi2";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Subscriptions",
    description: "Earn a living on X by letting anyone subscribe to you for monthly content.",
    icon: <HiOutlineStar size={32} className="text-white" />,
    eligibility: "Not yet eligible",
    bgColor: "bg-blue-600",
  },
  {
    title: "Ads revenue sharing",
    description: "Earn income from the ads served in the replies to your posts.",
    icon: <HiFire size={32} className="text-white" />,
    eligibility: "Not yet eligible",
    bgColor: "bg-orange-600",
  },
  {
    title: "Learn More",
    description: "Learn more about our Monetization programs and policies here.",
    icon: <HiInformationCircle size={32} className="text-white" />,
    eligibility: "",
    bgColor: "bg-purple-600",
  },
];

const Monetization = () => {
  return (
    <div className="bg-[#1a202c] text-white min-h-screen">
      <div className="flex items-center p-4 border-b border-gray-700">
        <Link to={'/main'} >
        <FaArrowLeft size={24} className="mr-4 cursor-pointer" />
        </Link>
        <div className="flex-grow">
          <h1 className="text-xl font-bold">Monetization</h1>
          <h2 className="text-sm text-gray-400">@thakur_589</h2>
        </div>
        <FaExclamationCircle size={24} className="cursor-pointer" />
      </div>
      <div className="p-4">
        <p className="text-lg font-bold">Available programs</p>
        <p className="text-gray-400">Eligible creators can sign up for monthly subscriptions and ads revenue sharing.</p>
        <div className="mt-4">
          {programs.map((program, index) => (
            <div key={index} className="flex items-center p-4 mt-4 border border-gray-700 rounded-lg">
              <div className={`p-2 rounded-full ${program.bgColor}`}>
                {program.icon}
              </div>
              <div className="ml-4 flex-grow">
                <div className="flex items-center">
                  <h3 className="text-lg font-bold">{program.title}</h3>
                  {program.eligibility && (
                    <span className="ml-2 text-xs bg-pink-600 text-white py-1 px-2 rounded-lg">
                      {program.eligibility}
                    </span>
                  )}
                </div>
                <p className="text-gray-400">{program.description}</p>
              </div>
              <FaArrowLeft size={24} className="cursor-pointer transform rotate-180" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monetization;
