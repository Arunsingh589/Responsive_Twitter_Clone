import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaDove } from 'react-icons/fa';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showNewPasswordFields, setShowNewPasswordFields] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

    // Find user by email
    const userIndex = existingUsers.findIndex(userData => userData.email === email);

    if (userIndex !== -1) {
      // Show new password fields
      setShowNewPasswordFields(true);
      setError('');
      setSuccessMessage('');
    } else {
      setError('User with this email address does not exist');
      setSuccessMessage('');
      setShowNewPasswordFields(false);
    }
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setError('Passwords do not match');
      return;
    }

    // Retrieve user data from local storage
    let existingUsers = JSON.parse(localStorage.getItem('userData')) || [];

    // Update user's password
    existingUsers = existingUsers.map(user => {
      if (user.email === email) {
        return { ...user, password: newPassword };
      }
      return user;
    });

    // Update local storage
    localStorage.setItem('userData', JSON.stringify(existingUsers));

    // Show success message
    setSuccessMessage('Password updated successfully');
    setError('');

    // Redirect to main page after successful password reset
    setTimeout(() => {
      navigate('/main');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f0f8fd] flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md py-6">
        <ul className="max-w-6xl mx-auto flex items-center">
          <li className="mr-4 flex items-center">
            <FaDove className="text-[#1aa1f5] text-2xl" />
            <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-[#1aa1f5] hover:border-b-2 hover:border-b-[#1aa1f5] ml-2">Home</Link>
          </li>
          <li className="mr-4">
            <Link to="/about" className="text-lg text-gray-700 hover:border-b-2 hover:border-b-[#1aa1f5] hover:text-[#1aa1f5]">About</Link>
          </li>
          <li className="ml-auto">
            <p className="text-lg text-gray-700 hover:text-[#1aa1f5] hover:border-b-2 hover:border-b-[#1aa1f5]">Language: English</p>
          </li>
        </ul>
      </nav>

      {/* Forgot Password Section */}
      <div className="bg-white shadow-md w-full max-w-3xl mt-8 rounded-lg">
        <div className=' p-10'>
          <h2 className="text-2xl font-bold mb-6 text-black">Forgot Password</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
          {!showNewPasswordFields ? (
            <form onSubmit={handleResetPassword} className="flex flex-col">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[40%] h-10 mb-4 px-3 border border-gray-300 rounded-md focus:bg-[#d9ebf7]" 
                placeholder="Enter your email" 
                required
              />
              <button 
                type="submit" 
                className="bg-[#1aa1f5] text-white px-6 py-2 rounded-full font-bold hover:bg-[#0d8ae7] transition-transform"
              >
                Reset Password
              </button>
            </form>
          ) : (
            <form onSubmit={handleUpdatePassword} className="flex flex-col">
              <input 
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-[40%] h-10 mb-4 px-3 border border-gray-300 rounded-md focus:bg-[#d9ebf7]" 
                placeholder="New Password" 
                required
              />
              <input 
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="w-[40%] h-10 mb-4 px-3 border border-gray-300 rounded-md focus:bg-[#d9ebf7]" 
                placeholder="Confirm New Password" 
                required
              />
              <button 
                type="submit" 
                className="bg-[#1aa1f5] text-white px-6 py-2 rounded-full font-bold hover:bg-[#0d8ae7] transition-transform"
              >
                Update Password
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
