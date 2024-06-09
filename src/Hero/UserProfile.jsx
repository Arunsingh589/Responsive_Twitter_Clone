import React from 'react';
import { FaCalendarAlt, FaUserPlus } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


 const whoToFollow = [
    {
      name: "Nattie",
      username: "NatbyNature",
      imgSrc: "nattie.jpeg",
    },
    {
      name: "NBC Sports",
      username: "NBCSports",
      imgSrc: "nbc.jpeg",
    },
    {
      name: "WWE",
      username: "WWE",
      imgSrc: "wwe.jpeg",
    },
  ];
  

const UserProfile = () => {
  return (
    <div className="bg-[#1a202c] text-white min-h-screen p-4">
      <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
        <div className="bg-[#1a202c]  p-4 rounded-t-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            <Link to={'/main'} >
        <FaArrowLeft size={24} className="mr-4 cursor-pointer" />
        </Link>
              <div className="ml-4">
                <h1 className="text-xl font-bold">Arun Singh</h1>
                <p className="text-gray-400">@thakur_589</p>
              </div>
            </div>
            <button className="border-white border text-white py-1 px-4 rounded-xl">Edit profile</button>

          </div>
        </div>
        <div className="mt-4">
          <img src="temple.jpg" alt="Cover" className="w-full h-48 object-cover rounded-lg" />
        </div>
        <div className="flex items-center mt-4">
          <img src="user1.jpg" alt="User" className="w-20 h-20 object-cover rounded-full border-4 border-gray-800" />
          <div className="ml-4">
            <p>Joined June 2024</p>
            <div className="flex space-x-4 mt-2">
              <span>10 Following</span>
              <span>600 Followers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <nav className="flex space-x-4 border-b border-gray-700 pb-2">
          <Link to="#" className="text-blue-500 border-b-2 border-blue-500 pb-1">Posts</Link>
          <Link to="#" className="hover:text-blue-500">Replies</Link>
          <Link to="#" className="hover:text-blue-500">Highlights</Link>
          <Link to="#" className="hover:text-blue-500">Articles</Link>
          <Link to="#" className="hover:text-blue-500">Media</Link>
          <Link to="#" className="hover:text-blue-500">Likes</Link>
        </nav>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Who to follow</h2>
        <div className="mt-2">
          {whoToFollow.map((user, index) => (
            <div key={index} className="flex items-center justify-between p-2 border-b border-gray-700">
              <div className="flex items-center">
                <img src={user.imgSrc} alt={user.name} className="w-10 h-10 object-cover rounded-full" />
                <div className="ml-2">
                  <p className="font-bold">{user.name}</p>
                  <p className="text-gray-400">@{user.username}</p>
                </div>
              </div>
              <button className="bg-[#1aa1f5] text-white py-1 px-4 rounded-3xl">Follow</button>
            </div>
          ))}
          <button className="text-blue-500 mt-2">Show more</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
