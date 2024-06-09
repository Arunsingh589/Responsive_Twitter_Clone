import React, { useState, useEffect, useRef } from 'react';
import { FaAdversal, FaBookmark, FaChartLine, FaChevronDown, FaHashtag, FaThumbsUp, FaShare, FaComment, FaHome, FaList, FaRegEnvelope, FaSearch, FaSignOutAlt, FaUser, FaPlus, FaTimes, FaImage, FaLeaf, FaSmile, FaCamera, FaChartBar, FaRetweet, FaCheckCircle, FaMoneyCheck, FaBriefcase, FaUserPlus } from 'react-icons/fa';
import { FaBell, FaStar, FaXTwitter } from 'react-icons/fa6';
import { FaRegStar } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import { BiSolidShoppingBags } from "react-icons/bi";
import { GoSkipFill } from "react-icons/go";
import PostSection from './PostSection';
import SuggestionSection from './SuggestionSection';
import { Link } from 'react-router-dom';
import FollowSection from './FollowSection';

const Main = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [showFollowSection, setShowFollowSection] = useState(false);
  const [post, setPost] = useState([
    {
      user: {
        name: "John Doe",
        username: "@johndoe",
        avatar: "user4.png"
      },
      text: "Hello, this is John Doe's post!",
      image: "1.jpeg"
    },
    {
      user: {
        name: "Rohit Kumar",
        username: "@rohitkm",
        avatar: "user6.png"
      },
      text: "Coding Time",
      image: "post2.png"
    },
    {
      user: {
        name: "Jane Smith",
        username: "@janesmith",
        avatar: "user7.png"
      },
      text: "Check out this cool photo!",
      image: "2.jpeg"
    }
  ]);
  const menuRef = useRef(null);
  const [followingCount, setFollowingCount] = useState(10);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuVisible]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`} style={{ backgroundColor: darkMode ? '#10171e' : '#d6e1e9' }}>

      {/* Nav section */}
      <nav className="fixed w-full h-24 lg:h-20 bg-white dark:bg-white flex flex-col lg:flex-row justify-center shadow-sm top-0 left-0 z-10">
        <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
          <div className="flex justify-around items-center w-full lg:w-auto lg:mr-8 mt-2 lg:mt-0 space-x-4 lg:space-x-40">

            <FaHome className="text-3xl text-gray-400 dark:text-gray-300 hidden lg:block hover:text-[#1aa1f5]" />
            <Link to="/grok">
              <GoSkipFill className="text-3xl text-gray-400 hidden lg:block dark:text-gray-300 hover:text-[#1aa1f5]" />
            </Link>
            <Link to="/notification">
              <FaBell className="text-3xl text-gray-400 hidden lg:block dark:text-gray-300 hover:text-[#1aa1f5]" />
            </Link>
            <Link to="/message">
              <FaRegEnvelope className="text-3xl text-gray-400 hidden lg:block dark:text-gray-300 hover:text-[#1aa1f5]" />
            </Link>
           
            </div>

          <div className="flex flex-col lg:flex-row justify-between items-center w-auto lg:w-auto  mt-2 lg:mt-0 lg:ml-8">
            <div className="relative flex items-center w-full ml-8 md:ml-0 pb-4 md:pb-0 lg:w-auto lg:mr-8 mt-2 lg:mt-0">
              <i className="absolute text-xl left-4 text-[#9a9a9a] dark:text-gray-300">
                <FaSearch />
              </i>
              <input
                type="text"
                placeholder="Search X"
                className="w-48 lg:w-80 h-8 lg:h-10 border dark:text-gray-300  text-[#9a9a9a] placeholder:text-[12px] md:placeholder:text-[15px] dark:bg-gray-800 rounded-full bg-[#d6e1e9] gap-2 pl-10 transition-all dark:focus:bg-gray-600 focus:bg-white focus:border-[#1aa1f5]"
              />
              <div className="flex items-center cursor-pointer mt-0  lg:mt-0 relative ml-8 lg:ml-8">
                <div className="w-8 h-8 md:w-12 md:h-12">
                  <img src="user1.jpg" alt="User" className="w-full h-full object-cover rounded-full" />
                </div>
                <p className="ml-2 md:ml-4 text-sm md:text-lg text-gray-800 dark:text-gray-300">Arun Singh</p>
                <div onClick={toggleMenu} className="mr-4 md:mr-0 md:ml-2 text-xl text-gray-800 cursor-pointer dark:text-gray-300">
                  <FaChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Post section */}
      <main className="mt-20 mb-16 p-4  flex justify-center" style={{ backgroundColor: darkMode ? '#10171e' : '#d6e1e9' }}>
        <div className="flex flex-col lg:flex-row w-full max-w-screen-xl">
          <div className="w-full lg:w-2/3 lg:pr-8">
            <div className="fixed bottom-24 md:bottom-8 right-4 md:right-36">
              <button className="bg-[#1aa1f5] text-white px-5 md:px-8 font-semibold text-xl md:text-2xl flex items-center py-3 md:py-5 rounded-full hover:bg-blue-600" onClick={() => setShowModal(true)}>+<FaLeaf /> Post</button>
            </div>

            <PostSection showModal={showModal} setShowModal={setShowModal} addPost={addPost} />

            {/* Top Section before post */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mt-6 md:mt-0 mb-4">
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-6 mb-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300">Home</h2>
                <FaRegStar className='text-2xl text-[#1aa1f5]' />
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16">
                  <img src="user1.jpg" alt="User" className="w-full h-full object-cover rounded-full" />
                </div>
                <div className="flex-grow">
                  <input type="text" placeholder="What's happening?" className="w-full h-10 border dark:text-gray-300 text-[#9a9a9a] dark:bg-gray-800 bg-[#d6e1e9] pl-3 md:pl-4 placeholder:text-[12px] md:placeholder:text-15px] rounded-full transition-all dark:focus:bg-gray-600 focus:bg-white focus:border-[#1aa1f5]" />
                </div>
                <div className="flex items-center gap-4">
                  <FaImage className='text-2xl text-[#1aa1f5]' onClick={() => setShowModal(true)} />
                  <FaCamera className='text-2xl text-[#1aa1f5]' />
                  <FaChartBar className='text-2xl text-[#1aa1f5]' />
                </div>
              </div>
            </div>

            {/* Post */}
            <div>
              {posts.map((post, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
                  <div className="flex items-center mb-4">
                    <img src="user1.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <p className="font-bold text-gray-800 dark:text-gray-300 flex gap-2 items-center ">Arun Singh <FaCheckCircle className='text-[#1aa1f5]' /></p>

                      <p className="text-gray-600 dark:text-gray-300">@thakur_589</p>
                    </div>
                  </div>

                  {post.text && <p className="text-gray-800 dark:text-gray-300 mb-4">{post.text}</p>}
                  {post.image && (
                    <div className="image-container">
                      <img src={post.image} alt="Post" className=" rounded-lg mb-4" style={{ width: '100%' }} />
                    </div>
                  )}
                  <div className="flex gap-20 text-gray-600 dark:text-gray-400">
                    <FaThumbsUp className="cursor-pointer" />
                    <FaShare className="cursor-pointer" />
                    <FaRetweet className='cursor-pointer ' />
                    <FaComment className="cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>

            {post.map((post, index) => (
              <div key={index} className="bg-white  dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
                <div className="flex items-center mb-4">
                  <img src={post.user.avatar} alt="User" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-bold text-gray-800 dark:text-gray-300 flex gap-2 items-center">{post.user.name}  <FaCheckCircle className='text-[#1aa1f5]' /></p>
                    <p className="text-gray-600 dark:text-gray-400">{post.user.username}</p>
                  </div>
                </div>
                {post.text && <p className="text-gray-800 dark:text-gray-300 mb-4">{post.text}</p>}
                {post.image && (
                  <div className="flex justify-center mb-4">
                    <img src={post.image} alt="Post" className="rounded-lg" style={{ width: '100%' }} />
                  </div>
                )}
                <div className="flex gap-20 text-gray-600 dark:text-gray-400">
                  <FaThumbsUp className="cursor-pointer" />
                  <FaShare className="cursor-pointer" />
                  <FaRetweet className='cursor-pointer ' />

                  <FaComment className="cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <SuggestionSection setFollowingCount={setFollowingCount} />
          </div>
        </div>
      </main>

      {/* Mobile Nav Section */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 z-10 flex justify-around items-center h-16 lg:hidden">
        <FaHome className="text-3xl text-gray-400 dark:text-gray-300 hover:text-[#1aa1f5]" />
        <Link to="/grok">
          <GoSkipFill className="text-3xl text-gray-400 dark:text-gray-300 hover:text-[#1aa1f5]" />
        </Link>
        <Link to="/notification">
          <FaBell className="text-3xl text-gray-400 dark:text-gray-300 hover:text-[#1aa1f5]" />
        </Link>
        <Link to="/message">
          <FaRegEnvelope className="text-3xl text-gray-400 dark:text-gray-300 hover:text-[#1aa1f5]" />
        </Link>
        <FaUserPlus className="text-3xl text-gray-400 dark:text-gray-300 hover:text-[#1aa1f5]" onClick={() => setShowFollowSection(!showFollowSection)} />

      </div>
      {/* Follow Section */}
      {showFollowSection && <FollowSection setFollowingCount={setFollowingCount} />}

      {/* Side Navbar */}
      {menuVisible && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleMenu}></div>
          <div ref={menuRef} className="fixed right-0 top-0 h-full w-full md:w-1/4 dark:bg-gray-800 bg-white border-l shadow-sm transition-right duration-500 ease-in-out z-20">
            <div className="p-6 border-b border-[#eee] dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-bold text-black dark:text-gray-300">Account Info</h2>
              <FaTimes className="text-2xl font-bold cursor-pointer text-[#1aa1f5]" onClick={toggleMenu} />
            </div>
            <div className="p-4 border-b border-[#eee] dark:border-gray-700  items-center">
              <div className="flex items-center justify-between">
                <img
                  src="user1.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <button className="bg-gray-700 dark:border  p-2 rounded-full">
                  <FaPlus className="text-white" />
                </button>
              </div>
              <div className="ml-1 mt-1">
                <h4 className="font-bold text-black dark:text-gray-300">Arun Singh</h4>
                <p className="mb-1 font-semibold text-gray-600 dark:text-gray-300">@thakur_589</p>
              </div>
            </div>
            <div className="p-8 border-b border-[#eee] dark:border-gray-700 flex items-center">
              <div className="flex text-sm gap-10">
                <p className="mr-4 flex flex-col text-[1.2rem] text-black dark:text-gray-300">
                  <span className="font-bold">{followingCount}</span> Following
                </p>
                <p className='flex flex-col text-[1.2rem] text-black dark:text-gray-300'><span className="font-bold">600</span> Followers</p>
              </div>
            </div>

            <div>
              <div className="p-4">
                <Link to={'/profile'} className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"><FaUser className="inline-block mr-2" />Profile</Link>
                <Link to={'/premium'} className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"><FaXTwitter className="inline-block mr-2" />Premium</Link>
                <Link to={'/list'} className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"><FaList className="inline-block mr-2" />Lists</Link>
                <Link to={'/bookmarks'} className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"><FaBookmark className="inline-block mr-2" />Bookmarks</Link>
                <Link to={'/monetization'} className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"><FaMoneyCheck className="inline-block mr-2" />Monetization</Link>
                <Link to={'/ads'} className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"><FaAdversal className="inline-block mr-2" /> Ads</Link>
                <Link to={'/jobs'} className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"><FaBriefcase className="inline-block mr-2" />Jobs</Link>
              </div>
              <div className="p-4 border-t">
                <Link to={'/settings'} className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"><MdPrivacyTip className="inline-block mr-2" /> Settings and Privacy</Link>
                <Link to={'/helpcenter'} className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"><FaHandsHelping className="inline-block mr-2" /> Help Center</Link>
                <Link to={'/'} className="block px-4 py-2 text-gray-400 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"><FaSignOutAlt className="inline-block mr-2" /> Log Out</Link>
                <h2 className="block px-4 py-2 text-gray-400  dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer" onClick={toggleDarkMode}><CgDarkMode className="inline-block mr-2" /> Dark Mode</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
