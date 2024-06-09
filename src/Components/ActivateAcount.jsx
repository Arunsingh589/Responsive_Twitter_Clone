import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaDove } from 'react-icons/fa';

const ActivateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the stored user data
    const storedUsers = JSON.parse(localStorage.getItem('userData')) || [];

    // Check if there is any matching user
    const matchingUser = storedUsers.find(
      (user) =>
        user.email === formData.email &&
        user.phone === formData.phone &&
        user.password === formData.password
    );

    if (!matchingUser) {
      setError('Incorrect details. Please try again.');
      setSuccess('');
    } else {
      // Update the activated status for the matching user
      matchingUser.activated = true;

      // Save the updated users array back to local storage
      localStorage.setItem('userData', JSON.stringify(storedUsers));

      setSuccess('Your account has been activated successfully!');
      setError('');
      setTimeout(() => {
        navigate('/main');
      }, 2000);
    }
  };

  return (
    <main className="bg-[#f0f8fd] w-full min-h-screen font-josefin p-4 sm:p-8">
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex flex-row justify-between items-center px-4 sm:px-6">
          <Link to="/" className="text-[#1aa1f5] text-2xl flex items-center mb-2 sm:mb-0">
            <FaDove className="mr-2" /> Home
          </Link>
          <div className="flex space-x-4">
            <div>
              <Link to="/" className="text-gray-600 hover:text-[#1aa1f5] border-b-2 border-transparent hover:border-[#1aa1f5]">
                Home
              </Link>
            </div>
            <div>
              <Link to="/about" className="text-gray-600 hover:text-[#1aa1f5] border-b-2 border-transparent hover:border-[#1aa1f5]">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <section className="container mx-auto mt-8 p-6 bg-white shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">Activate Your Account</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Enter Your Account Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#1aa1f5]"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#1aa1f5]"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#1aa1f5]"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-[#1aa1f5] text-white font-bold rounded-md hover:bg-[#0e7cc0] focus:outline-none focus:bg-[#0e7cc0]"
              >
                Activate Account
              </button>
            </div>
          </form>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Why Activate Your Account?</h2>
          <p className="text-gray-700 leading-7">
            Activating your account allows you to fully utilize the features of our platform. You will be able to connect with others, share your thoughts, and stay updated with real-time information and news.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-4 border rounded-md shadow-sm">
              <p className="text-gray-700">"Activating my account was a seamless process, and it opened up a world of opportunities." - <strong>John Doe</strong></p>
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <p className="text-gray-700">"The benefits of having an activated account are tremendous. Highly recommend!" - <strong>Jane Smith</strong></p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Support</h2>
          <p className="text-gray-700 leading-7">
            If you encounter any issues while activating your account, please contact our support team. We are here to assist you and ensure you have a smooth experience.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ActivateAccount;
