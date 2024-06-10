import { useState, useRef, useEffect } from "react";

const FollowSection = ({ setFollowingCount }) => {
  const usersToFollow = [
    { id: 1, name: 'Rohit', username: '@gola', avatar: 'user6.png' },
    { id: 2, name: 'Ankush', username: '@pubg', avatar: 'user7.png' },
    { id: 3, name: 'Bhisham', username: '@Kadi', avatar: 'user4.png' },
    { id: 4, name: 'Vikram', username: '@vik', avatar: 'user2.png' },
    { id: 5, name: 'Deepak', username: '@deep', avatar: 'user3.png' },
    { id: 6, name: 'Harsh', username: '@attrish', avatar: 'user5.png' },
  ];

  const [showMore, setShowMore] = useState(true);
  const [visibleUsers, setVisibleUsers] = useState(3);
  const [followStatus, setFollowStatus] = useState(
    usersToFollow.reduce((acc, user) => {
      acc[user.id] = false;
      return acc;
    }, {})
  );

  const toggleFollow = (id) => {
    setFollowStatus(prevStatus => {
      const isFollowing = !prevStatus[id];
      setFollowingCount(prevCount => isFollowing ? prevCount + 1 : prevCount - 1);
      return {
        ...prevStatus,
        [id]: isFollowing
      };
    });
  };

  const toggleShowMore = () => {
    setVisibleUsers(showMore ? usersToFollow.length : 3);
    setShowMore(!showMore);
  };

  return (
    <div className="fixed inset-x-0 bottom-20 block md:hidden bg-white w-[92%] mx-auto dark:bg-gray-800 p-4 rounded-t-xl shadow-lg max-h-[50vh] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 pb-2 text-gray-800 border-b dark:text-gray-300">Who to follow</h2>
      {usersToFollow.slice(0, visibleUsers).map((user, index) => (
        <div key={index} className="flex border-b pb-2 items-center mb-4">
          <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-bold text-gray-800 dark:text-gray-300">{user.name}</p>
            <p className="text-gray-600 dark:text-gray-400">{user.username}</p>
          </div>
          <button
            type="button"
            className={`flex items-center justify-center border ml-auto px-4 py-2 rounded-full w-24 h-10 ${followStatus[user.id] ? 'border border-[#1aa1f5] text-[#1aa1f5]' : 'text-white bg-[#1aa1f5]'}`}
            onClick={() => toggleFollow(user.id)}
          >
            {followStatus[user.id] ? 'Following' : 'Follow'}
          </button>
        </div>
      ))}
      <div className="follow-link">
        <p className="text-[#1aa1f5] hover:underline text-xl mb-2 cursor-pointer" onClick={toggleShowMore}>
          {showMore ? 'Show More' : 'Show Less'}
        </p>
      </div>
    </div>
  );
};

export default FollowSection;
