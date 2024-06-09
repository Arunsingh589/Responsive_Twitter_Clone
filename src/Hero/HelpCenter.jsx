import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-[#1a202c] text-white p-8">
      <div className="bg-[#1a202c] dark:bg-gray-800 p-6 rounded-lg shadow-md mb-4">
        <div className="flex items-center mb-4">
          <Link to="/main">
            <FaArrowLeft size={24} className="mr-2 text-white cursor-pointer" />
          </Link>
          <h2 className="text-2xl font-bold text-gray-300 dark:text-gray-300">Help Center</h2>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-300 dark:text-gray-300 mb-2">Frequently Asked Questions</h3>
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-400 dark:text-gray-300">1. How do I reset my password?</h4>
            <p className="text-gray-400 dark:text-gray-400">
              To reset your password, go to the login page and click on "Forgot Password". Follow the instructions to reset your password via email.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-400 dark:text-gray-300">2. How can I change my email address?</h4>
            <p className="text-gray-400 dark:text-gray-400">
              Navigate to your profile settings and select "Change Email". Enter your new email address and confirm the change.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-400 dark:text-gray-300">3. How do I delete my account?</h4>
            <p className="text-gray-400 dark:text-gray-400">
              To delete your account, go to the account settings and select "Delete Account". Please note that this action is irreversible.
            </p>
          </div>
          {/* Add more FAQs as needed */}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-400 dark:text-gray-300 mb-2">Contact Support</h3>
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-400 dark:text-gray-300">Email Support</h4>
            <p className="text-gray-400 dark:text-gray-400">
              You can reach our support team via email at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-400 dark:text-gray-300">Phone Support</h4>
            <p className="text-gray-400 dark:text-gray-400">
              Our phone support is available from 9 AM to 5 PM, Monday to Friday. Call us at <a href="tel:+1234567890" className="text-blue-500">+1 (234) 567-890</a>.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-400 dark:text-gray-300">Live Chat</h4>
            <p className="text-gray-400 dark:text-gray-400">
              Use the live chat feature on our website to get instant support from our team.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-400 dark:text-gray-300 mb-2">General Help</h3>
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-400 dark:text-gray-300">How to Use Our Platform</h4>
            <p className="text-gray-400 dark:text-gray-400">
              For a detailed guide on how to use our platform, please refer to the user manual available <a href="/user-manual" className="text-blue-500">here</a>.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-400 dark:text-gray-300">Community Guidelines</h4>
            <p className="text-gray-400 dark:text-gray-400">
              Please read our community guidelines to understand the dos and don'ts of our platform. You can find them <a href="/community-guidelines" className="text-blue-500">here</a>.
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-md font-semibold text-gray-400 dark:text-gray-300">Report a Problem</h4>
            <p className="text-gray-400 dark:text-gray-400">
              If you encounter any issues, please report them using the form available <a href="/report-problem" className="text-blue-500">here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
