import React, { useEffect, useRef, useState } from 'react';
import { FaTimes, FaSmile, FaImage, FaCamera, FaChartBar } from 'react-icons/fa';
import EmojiPicker from 'emoji-picker-react';


const PostSection = ({ showModal, setShowModal, addPost, posts }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const menuRef = useRef(null);


  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    if (showEmojiPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEmojiPicker]);



  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text || image) {
      addPost({ text, image: image ? URL.createObjectURL(image) : null });
      setText('');
      setImage(null);
      setImagePreview(null);
      setShowModal(false);
    }
  };
  
  // const handleNewPost = () => {
  //   if (newPostContent.trim()) {
  //     addPost({
  //       user: {
  //         name: "Arun Singh",
  //         username: "@thakur_589",
  //         avatar: "user1.jpg"
  //       },
  //       text: newPostContent,
  //       image: imagePreview
  //     });
  //     setNewPostContent('');
  //     setImage(null);
  //     setImagePreview(null);
  //     setShowModal(false);
  //   }
  // };


  const handleEmojiClick = (emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${showModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      <div className="bg-white dark:bg-gray-800 w-[90%] sm:w-1/2  md:w-1/3 rounded-2xl left-0 top-0 shadow-lg relative">
        <div className="p-2 md:p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
          <FaTimes className="text-3xl text-blue-500 cursor-pointer" onClick={() => setShowModal(false)} />
          <button type="button" className="ml-auto bg-[#1aa1f5] text-white px-6 text-xl py-2 rounded-full hover:bg-blue-600" onClick={handleSubmit}>Post</button>
        </div>
        <div className="p-4 flex">
          <img className="w-8 h-8 md:w-12 md:h-12 rounded-full mr-4" src="user1.jpg" alt="User" />
          <div className="relative w-full">
            <textarea
              className="w-full p-2 md:p-6 border resize-none border-[#1aa1f5] rounded-xl mb-1 md:mb-4 dark:bg-gray-700 dark:text-gray-300"
              rows="4"
              placeholder="What's on your mind?"
              value={text}
              onChange={handleTextChange}
            />
          <FaSmile
              className="absolute bottom-8 right-4 text-[#1aa1f5] text-2xl cursor-pointer"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            />
            {showEmojiPicker && (
              <div ref={menuRef} className="absolute top-2 md:top-2 md:left-20 z-10 w-60 md:w-full  h-60 overflow-y-auto md:overflow-y-hidden">
                <EmojiPicker className="w-full h-full" onEmojiClick={handleEmojiClick} />
              </div>
            )}
          </div>
         
        </div>
        {imagePreview && (
          <div className="p-8">
            <img src={imagePreview} alt="Preview" className="image-container w-1/2 md:w-1/3 h-32 md:h-44 rounded-md" />
          </div>
        )}
        <div className="p-4 flex items-center border-t border-gray-200 dark:border-gray-700">
          <label className="cursor-pointer">
            <FaImage className="text-2xl text-blue-500 mr-4" />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          <FaCamera className="text-2xl text-blue-500 mr-4" />
          <FaChartBar className="text-2xl text-blue-500" />
          <span className="ml-auto text-5xl text-blue-500 border border-blue-500 rounded-full md:w-12 w-10 h-10 md:h-12 flex items-center justify-center opacity-50">+</span>
        </div>
      </div>
    </div>
  );
};

export default PostSection;
