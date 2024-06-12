import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-lg w-full mx-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-300">Terms and Conditions</h2>
        <div className="terms-content overflow-y-auto max-h-96">
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern [business name]'s relationship with you in relation to this website.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            The term '[business name]' or 'us' or 'we' refers to the owner of the website whose registered office is [address]. The term 'you' refers to the user or viewer of our website.
          </p>
          <h2 className="text-2xl font-bold mb-4">Use of the Website</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            The content of the pages of this website is for your general information and use only. It is subject to change without notice.
          </p>
          <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
          </p>
          <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            This website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
          </p>
          <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            Your use of this website and any dispute arising out of such use of the website is subject to the laws of [Country/State].
          </p>
          <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
          <p className="text-gray-700 dark:text-gray-400 mb-4">
            We may update our Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on this page.
          </p>
        </div>
        <Link to={'/main'} onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
          Close Terms and Conditions
        </Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;
