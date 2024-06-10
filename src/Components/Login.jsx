import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaDove, FaTwitter } from 'react-icons/fa';

const Login = () => {
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
      if (userData.activated) {
        // Reset error message
        setError('');

        // Navigate to the main page after successful login
        navigate('/main');
      } else {
        setError('Account not activated. Please activate your account.');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f8fd] flex flex-col items-center">
      {/* Navbar */}
      <nav className="bg-white shadow-sm w-full py-4 fixed top-0 left-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <FaTwitter className="text-[#1aa1f5] text-2xl" />
            <Link to="/" className="text-[#555] hover:text-[#1aa1f5] font-bold text-lg hover:border-b-2 border-[#1aa1f5]">Home</Link>
            <Link to="/about" className="text-[#555] hover:text-[#1aa1f5] font-bold text-lg hover:border-b-2 border-[#1aa1f5]">About</Link>
          </div>
          <div className="relative cursor-pointer">
            <select className="bg-white border hover:text-[#1aa1f5] text-[#555] hover:border-b-2 hover:border-b-[#1aa1f5]  border-[#ddd] rounded-md px-3 py-2 focus:outline-none">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              {/* Add more languages as needed */}
            </select>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <div className="bg-white shadow-md w-full max-w-3xl mt-28 rounded-lg">
        <div className="p-4 sm:p-10">
          <h2 className="text-2xl font-bold mb-6 text-black">Log in to X</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="flex flex-col">
            <input 
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-2/3 h-10 mb-4 px-3 border border-gray-300 rounded-md focus:bg-[#d9ebf7]" 
              placeholder="Phone, email, or username" 
              required
            />
            <input 
              type="password" 
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full sm:w-2/3 h-10 mb-4 px-3 border border-gray-300 rounded-md focus:bg-[#d9ebf7]" 
              placeholder="Password" 
              required
            />
            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
              <button 
                type="submit" 
                className="bg-[#1aa1f5] text-white px-6 py-2 rounded-full font-bold hover:bg-[#0d8ae7] transition-transform"
              >
                Log In
              </button>
              <div className="ml-0 mt-4 sm:ml-4 sm:mt-0 flex items-center">
                <input 
                  type="checkbox" 
                  id="check" 
                  className="mr-2" 
                />
                <label htmlFor="check" className="text-sm text-gray-600">Remember me</label>
              </div>
              <Link to="/forgot-password" className="ml-0 mt-4 sm:ml-2 sm:mt-0 text-sm text-[#1aa1f5]">Forgot password?</Link>
            </div>
          </form>
        </div>

        <div className="bg-[#edf3f7] w-full p-4 sm:p-10 rounded-md">
          <p className="text-sm mb-2">New to X? <Link to="/signup" className="text-[#1aa1f5]">Sign up now</Link></p>
          <p className="text-sm">Already using X via text message? <Link to="/activate" className="text-[#1aa1f5]">Activate your account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
