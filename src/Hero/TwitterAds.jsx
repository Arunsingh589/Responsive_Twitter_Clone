import React from 'react';
import { FaArrowLeft, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TwitterAds = () => {
  return (
    <div className="bg-[#1aa1f5] min-h-screen text-white">
      <div className="flex items-center p-4  border-gray-700">
        <Link  to={'/main'}>
        <FaArrowLeft size={24} className="mr-4 cursor-pointer" />
        </Link>
        <FaTwitter size={32} className="text-white" />
      </div>
      <div className="bg-[#1aa1f5] p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Twitter Ads</h2>
        <p className="text-lg mb-8">
          Hundreds of millions of people use Twitter to discover what’s happening in the world. Twitter Ads can help you connect with them and achieve meaningful results.
        </p>
      </div>
      <div className="bg-white min-h-screen text-black text-center p-8">
        <p className="text-lg mb-4">
          <a href="https://ads.twitter.com" className="text-blue-500">Go to your account</a>
        </p>
        <p>
          To access advanced features of Twitter Ads, visit <a href="https://ads.twitter.com" className="text-blue-500">ads.twitter.com</a> on a desktop browser.
        </p>
      </div>
    </div>
  );
};

export default TwitterAds;
