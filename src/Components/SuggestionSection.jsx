import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const suggestedUsers = [
  { id: 1, name: 'Rohit', username: '@gola', avatar: 'user6.png' },
  { id: 2, name: 'Ankush', username: '@pubg', avatar: 'user7.png' },
  { id: 3, name: 'Bhisham', username: '@Kadi', avatar: 'user4.png' },
  { id: 4, name: 'Vikram', username: '@vik', avatar: 'user2.png' },
  { id: 5, name: 'Deepak', username: '@deep', avatar: 'user3.png' },
  { id: 6, name: 'Harsh', username: '@attrish', avatar: 'user5.png' },

  // Add more users as needed
];


const SuggestionSection = ({ setFollowingCount }) => {
  const [showMore, setShowMore] = useState(true);
  const [visibleUsers, setVisibleUsers] = useState(3)
  const [followStatus, setFollowStatus] = useState(
    suggestedUsers.reduce((acc, user) => {
      acc[user.id] = false;
      return acc;
    }, {})
  );

  const toggleFollow = (id) => {
    setFollowStatus(prevStatus => {
      const isFollowing = !prevStatus[id];
      // Update following count
      setFollowingCount(prevCount => isFollowing ? prevCount + 1 : prevCount - 1);
      return {
        ...prevStatus,
        [id]: isFollowing
      };
    });
  };

  const toggleShowMore = () => {
    setVisibleUsers(showMore ? suggestedUsers.length : 3);
    setShowMore(!showMore);
  };


  return (
    <>
      <div className="follow hidden md:block dark:bg-gray-800 p-4 rounded-xl shadow-md w-96  bg-white">
        <h3 className="follow-heading text-xl font-bold text-gray-800 dark:text-gray-300 border-b pb-2 mb-4">Who to follow</h3>
        {suggestedUsers.slice(0, visibleUsers).map(user => (
          <div key={user.id} className="follow-user flex items-center justify-between border-b pb-4 mb-4">
            <div className="follow-user-img">
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
            </div>
            <div className="follow-user-info ml-4">
              <h4 className="font-bold text-gray-800 dark:text-gray-300">{user.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 mr-28">{user.username}</p>
            </div>
            <button
              type="button"
              className={`flex items-center justify-center border px-6 py-1 rounded-full w-24 h-10 ${followStatus[user.id] ? 'border border-[#1aa1f5] text-[#1aa1f5]' : 'text-white bg-[#1aa1f5]'}`}
              onClick={() => toggleFollow(user.id)}
            >
              {followStatus[user.id] ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
        <div className="follow-link" >
          <p className="text-[#1aa1f5] hover:underline text-xl mb-2 cursor-pointer"
          onClick={toggleShowMore}>
            {showMore ? 'Show More' : 'Show Less'}
          </p>
        </div>

      </div>
      <div className="follow-footer hidden md:block dark:bg-gray-800 mt-1">
        <div className="text-gray-400 dark:text-gray-300 flex flex-wrap gap-[26px] ml-1">
          <h3 className="hover:underline">Terms</h3>
          <h3 className="hover:underline">Privacy policy</h3>
          <h3 className="hover:underline">Cookies</h3>
          <Link to={'/about'} className="hover:underline">About</Link>
          <h3 className="hover:underline">More</h3>
        </div>
      </div>
    </>
  );
};

export default SuggestionSection;
