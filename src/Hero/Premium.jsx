import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const PremiumSection = () => {
  const pricingOptions = [
    {
      title: 'Basic',
      price: '$5',
      features: [
        'Ad-Free Experience',
        'Exclusive Content',
        'Priority Support',
        'Enhanced Security',
      ],
    },
    {
      title: 'Plus',
      price: '$10',
      features: [
        'Ad-Free Experience',
        'Exclusive Content',
        'Priority Support',
        'Enhanced Security',
        'Customization Options',
        'Collaboration Tools',
      ],
    },
    {
      title: 'Premium',
      price: '$15',
      features: [
        'Ad-Free Experience',
        'Exclusive Content',
        'Priority Support',
        'Enhanced Security',
        'Customization Options',
        'Collaboration Tools',
        'Advanced Analytics',
        'Early Access to Features',
      ],
    },
  ];

  return (
    <div className="bg-[#1a202c] p-8 rounded-lg shadow-md text-white">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
      <Link to={'/main'} >
        <FaArrowLeft size={24} className="mr-4 cursor-pointer" />
        </Link>
        Premium Plans
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-gray-700 rounded-xl h-full flex flex-col justify-between">
              <div>
                <p className="text-4xl mb-8">
                  {option.title}
                </p>
                <p className="mb-8">
                  <span className="text-5xl mt-6 mr-2">{option.price}</span>
                  <span className="text-gray-400 tracking-tight">/Month</span>
                </p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index} className="mt-8 flex items-center">
                      <FaRegCheckCircle className="text-[#1aa1f5] text-xl" />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-[#1aa1f5] text-white text-center w-full h-16 p-5 tracking-tight text-xl hover:bg-blue-600 border mt-4 border-[#1aa1f5] rounded-lg transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumSection;
