import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BookmarksSection = () => {
  return (
    <div className="min-h-screen bg-[#1a202c] text-white">
      {/* Navbar */}
      <nav className="bg-[#1c2938] dark:bg-gray-800 py-4 px-6 rounded-lg shadow-md mb-4 flex items-center">
        <Link to="/main" className="flex items-center">
          <FaArrowLeft size={24} className="mr-4 text-white cursor-pointer" />
        </Link>
        <div>
          <h2 className="text-lg font-semibold text-gray-300 dark:text-gray-300">Bookmarks</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">@thakur_589</p>
        </div>
      </nav>

      {/* Bookmark content */}
      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl md:text-4xl font-bold mb-2">Save your post for later</h3>
        <p className="text-sm text-gray-400 dark:text-gray-400">Bookmark posts to easily find them again in the future.</p>
      </div>
    </div>
  );
};

export default BookmarksSection;
