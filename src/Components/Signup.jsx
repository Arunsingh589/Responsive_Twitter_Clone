import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation rules
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password) {
      setError('All fields are required');
      return;
    }

    if (!/^[a-zA-Z]+$/.test(formData.firstName) || !/^[a-zA-Z]+$/.test(formData.lastName)) {
      setError('First and last name should contain only alphabets');
      return;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setError('Enter a valid email address');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setError('Enter a valid 10-digit phone number starting from 6-9');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // Retrieve existing users from local storage
    let existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

    // Ensure existingUsers is an array
    if (!Array.isArray(existingUsers)) {
      existingUsers = [];
    }

    // Add new user to the array
    existingUsers.push(formData);

    // Save updated users array to local storage
    localStorage.setItem('userData', JSON.stringify(existingUsers));
    
    // Reset form data and error message
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      activated: false, // Reset activation status
    });
    setError('');
    
    console.log('Form Data:', formData);
    navigate('/main');
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f8fd] font-josefin">
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

      <div className="bg-white  rounded-lg  w-full max-w-3xl mt-24 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center p-8 text-black">Sign Up to X</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col p-8 space-y-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-2 border border-[#ddd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1aa1f5]"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-[#ddd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1aa1f5]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-[#ddd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1aa1f5]"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-[#ddd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1aa1f5]"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border border-[#ddd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1aa1f5]"
            required
          />
          <button
         
            type="submit"
            className="bg-[#1aa1f5] text-center text-white py-2 rounded-3xl font-bold text-[15px] hover:bg-[#0d8ae7] transition-transform"
          >
            Sign Up
         
          </button>
          
          
        </form>
        <div className="bg-[#edf3f7] w-full p-4 rounded-md mt-4 shadow-md">
            <p className="text-center text-black font-bold">Already have an account?</p>
            <p className="text-center"><Link to="/login" className="text-[#1aa1f5] font-bold underline">Log in</Link></p>
         
            <p className="text-center text-black font-bold">Already using X via text message?</p>
            <p className="text-center"><Link to="/activate" className="text-[#1aa1f5] font-bold underline">Activate your account</Link></p>
          </div>
      </div>
    </div>
  );
};

export default Signup;
