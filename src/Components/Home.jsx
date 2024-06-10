import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

   // Retrieve user data from local storage
   const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

   const userData = existingUsers.find(userData => userData.email === email && userData.password === password);

   if (userData) {
     // Reset error message
     setError('');
     
     // Navigate to the main page after successful login
     navigate('/main');
   } else {
     setError('Invalid email or password');
   }


    if (email === userData.email && password === userData.password) {
      // Reset error message
      setError('');
      setEmail('')
      setPassword('')

      // Navigate to the main page after successful login
      navigate('/main');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <main className="relative block bg-[#f0f8fd] w-full h-full font-josefin">
      <div className="flex flex-col md:flex-row justify-center text-center h-full">
        <div className="bg-[#1aa1f5] flex flex-col justify-center items-center text-center text-white w-full md:w-1/2 h-[50vh] md:h-[93vh] p-8 md:p-16 font-sans">
          <div className="flex flex-col items-start space-y-9">
            <div className="w-full flex items-center">
              <IoIosSearch className="text-[20px] md:text-[2.5rem] mr-4" />
              <h3 className="text-[12px] md:text-[20px] font-bold">Find Your Interest</h3>
            </div>
            <div className="w-full flex items-center">
              <FaUserFriends className="text-[20px] md:text-[2.5rem] mr-4" />
              <h3 className="text-[12px] md:text-[20px] font-bold">Explore what people are talking about</h3>
            </div>
            <div className="w-full flex items-center">
              <FaComment className="text-[20px] md:text-[2.5rem] mr-4" />
              <h3 className="text-[12px] md:text-[20px] font-bold">Join the people</h3>
            </div>
          </div>
          <FaTwitter className="absolute top-4 left-4 text-white text-[20px] md:hidden" />
        </div>
        <div className="bg-[#d9ebf7] w-full md:w-1/2 h-[50vh] md:h-[93vh]">
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleLogin} className=' xl:flex flex-col md:flex-row justify-center mt-6 md:mt-4 relative hidden '>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-[14rem] h-[2.5rem] ml-20  md:mr-3 py-0 px-4 mb-4 md:mb-0 border border-[#ddd] 
             rounded-md focus:bg-[#d9ebf7]'
              placeholder='Phone, Email, User Name'
              required />


            <input
              type='password'
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-[14rem] h-[2.5rem] ml-20 md:ml-0 md:mr-3 py-0 px-4  border border-[#ddd] 
                       rounded-md focus:bg-[#d9ebf7]'
              placeholder='password'
              required />

            <h3 className=' top-10 absolute text-[#a7a6a6] text-[16px] ml-20 mt-16 md:mt-1  md:ml-0 '>Forget Password?</h3>

            <button type="submit" className="bg-white text-[#1aa1f5] border border-[#1aa1f5] w-20 rounded-3xl 
            font-bold text-[15px] hover:bg-[#d9ebf7] transition-transform
             mt-12 md:mt-0 ml-36 md:ml-0 flex justify-center items-center">Log in</button>
          </form>
          <div className=' justify-center text-center w-full mt-2 md:mt-48 '>
            <div className=' mt-8 md:mt-28 '>
              <FaTwitter className=' text-[#1aa1f5] text-[30px] md:text-[50px] ml-20 md:ml-[278px] mb-4 ' />
              <h1 className='text-[20px] md:text-[30px] font-bold md:mb-6 leading-10'> Explore what's happening <span className=' flex flex-col text-[#1aa1f5] mr-32 md:mr-48 '> in the world.</span> </h1>

            </div>
            <div className=''>
              <h4 className=' tex-[13px] md:text-[19px] mb-6 font-bold mr-36 md:mr-60'>Join X Today</h4>
              <Link to={'/signup'}>
                <button className='bg-[#1aa1f5] text-white w-[30%] md:w-[60%] py-2 mr-2 md:mr-0 rounded-3xl font-bold text-[15px] mb-2 hover:bg-[#0d8ae7] transition-transform'>Sign Up</button>

              </Link>
              <Link to={'/login'}>
                <button className='bg-white text-[#1aa1f5] border border-[#1aa1f5]  w-[30%] md:w-[60%] py-2 rounded-3xl font-bold text-[15px] hover:bg-[#d9ebf7] transition-transform'>Log in</button>

              </Link>

            </div>
          </div>

        </div>
      </div>
      <div className="bg-[#f5f4f5] text-[#444] w-full border-t-2 border-[#ddd] flex items-center justify-center py-4">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link to={'/about'} className="mx-2">About</Link>
          <p className="mx-2 hidden md:block">Blog</p>
          <p className="mx-2 hidden md:block">Help</p>
          <p className="mx-2 hidden md:block">Terms</p>
          <p className="mx-2 hidden md:block">Apps</p>
          <p className="mx-2">Settings</p>
          <p className="mx-2 hidden md:block">Contact</p>
          <p className="mx-2 hidden md:block">Status</p>
          <p className="mx-2">Privacy Policy</p>
          <p className="mx-2 hidden md:block">Brand</p>
          <p className="mx-2 hidden md:block">Developer</p>
          <p className="mx-2">&copy; 2024 X</p>
        </div>
      </div>

    </main>
  );
};

export default Home;
