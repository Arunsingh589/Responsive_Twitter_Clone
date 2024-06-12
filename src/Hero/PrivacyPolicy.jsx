import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-lg w-full mx-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-300">Privacy Policy</h2>
        <div className="privacy-content overflow-y-auto max-h-96">
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            This Privacy Policy explains how [Your App Name] ("we", "our", or "us") collects, uses, and discloses information about you when you use our website, mobile app, and other online products and services (collectively, the "Services") or when you otherwise interact with us.
          </p>
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-300">Information We Collect</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            We collect information you provide directly to us. For example, we collect information when you create an account, fill out a form, or communicate with us. The types of information we may collect include your name, email address, username, password, and any other information you choose to provide.
          </p>
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-300">Use of Information</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            We use the information we collect to provide, maintain, and improve our Services, such as to create and manage your account, to communicate with you, and to monitor and analyze trends, usage, and activities in connection with our Services.
          </p>
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-300">Sharing of Information</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            We may share information about you as follows or as otherwise described in this Privacy Policy: With vendors and other service providers who need access to such information to carry out work on our behalf; In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process, or as otherwise required by any applicable law, rule, or regulation.
          </p>
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-300">Your Choices</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            You may update, correct, or delete information about you at any time by logging into your account or emailing us at [your email]. If you wish to deactivate your account, please email us, but note we may retain certain information as required by law or for legitimate business purposes.
          </p>
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-300">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            If you have any questions about this Privacy Policy, please contact us at [your email].
          </p>
        </div>
        <Link to={'/main'}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
          onClick={closeModal}
        >
          Close Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
