import React from 'react'
import { FaArrowLeft, FaXTwitter } from 'react-icons/fa6'
import { FaCog } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Notification = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Notifications Section - 40% */}
        <div className="w-full lg:w-2/5 border-b lg:border-b-0 lg:border-r border-gray-700 p-4 flex flex-col">
          {/* Navbar-like section */}
          <div className="flex justify-between items-center p-2">
            <Link to={'/main'} >
              <FaArrowLeft size={24} className="mr-4 cursor-pointer" />
            </Link>
            <h2 className="text-xl font-bold">Notifications</h2>
            <FaCog className="w-6 h-6" />
          </div>
          {/* Tabs */}
          <div className="flex justify-around border-b border-gray-700 p-2">
            <button className="focus:outline-none text-white">All</button>
            <button className="focus:outline-none text-white">Verified</button>
            <button className="focus:outline-none text-white">Mentions</button>
          </div>
          {/* Notifications List */}
          <div className="p-4 flex-grow">
            <ul className="space-y-4">
              <li className="flex items-center border-b border-gray-700">
                <FaXTwitter className="w-8 h-8 mr-4" />
                <p>There was a login to your account @thakur_589 from a new device on Jun 06, 2024. Review it now.</p>
              </li>
              {/* Add more notifications here */}
            </ul>
          </div>
        </div>

        {/* Sidebar Section - 60% */}
        <div className="w-full lg:w-3/5 p-4">
          <div className="bg-black p-6 rounded-lg md:border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">What's happening</h2>
            <ul className="space-y-4">
              <li>#NEETExamResults</li>
              <li>#रवीश_कुमार</li>
              <li>#LKAdvani</li>
              <li>#Kavin</li>
              {/* Add more trending topics here */}
            </ul>
            <button className="mt-4 bg-[#1aa1f5] text-white py-3 px-5 rounded-full font-bold focus:outline-none">Show more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification;
