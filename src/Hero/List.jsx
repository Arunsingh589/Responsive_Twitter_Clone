import React from 'react';
import { FaArrowLeft, FaEllipsisH, FaPlus, FaList } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const lists = [
  {
    name: 'news delhi',
    members: 80,
    followers: '32.4K',
    followersIncluding: '@Bjp',
    iconBg: 'bg-yellow-400',
    avatarUrls: ['bjp.jpg', 'bjp2.jpg', 'bjp3.jpeg'], // replace with actual image URLs
  },
  {
    name: 'Delhi',
    members: 44,
    followers: '35.4K',
    followersIncluding: '@xg',
    iconBg: 'bg-purple-600',
    avatarUrls: ['temple.jpg', 'india.jpg', 'lotus.webp'], // replace with actual image URLs
  },
  {
    name: 'News',
    members: 53,
    followers: '11.8K',
    followersIncluding: '@xwc',
    iconBg: 'bg-blue-600',
    avatarUrls: ['modi.jpeg', 'news.jpeg', 'bjp2.jpg'], // replace with actual image URLs
  }
];

const DiscoverNewLists = () => {
  return (
    <div className="p-4 text-white bg-[#1a202c] min-h-screen">
      {/* Navbar */}
      <div className="flex items-center justify-between mb-4">
        <Link to={'/main'}>
        <FaArrowLeft className="text-xl" />
        </Link>
        <input
          type="text"
          placeholder="Search Lists"
          className="w-1/2 p-2 rounded-full bg-gray-800 px-10 text-white"
        />
        <FaEllipsisH className="text-xl" />
      </div>
      
      <h2 className="text-xl font-bold mt-4">Discover new Lists</h2>
      <div className="space-y-4 mt-4">
        {lists.map((list, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`p-4 rounded-xl  ${list.iconBg}`}>
                <FaList className="text-white" />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-white">{list.name} <span className="text-gray-400 text-sm">{list.members} members</span></h3>
                <p className="text-gray-400 text-sm">
                  {list.followers} followers including {list.followersIncluding}
                </p>
                <div className="flex -space-x-2 mt-1">
                  {list.avatarUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt="avatar"
                      className="w-6 h-6 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
            <button className="bg-white p-2 rounded-full">
              <FaPlus className="text-gray-800" />
            </button>
          </div>
        ))}
      </div>
      <button className="mt-4 text-blue-500">Show more</button>
      <div className="border-b border-gray-700 mt-4"></div>
      <h2 className="text-xl font-bold mt-4">Your Lists</h2>
      <p className="text-gray-400 mt-2">You haven't created or followed any Lists. When you do, they'll show up here.</p>
    </div>
  );
};

export default DiscoverNewLists;
