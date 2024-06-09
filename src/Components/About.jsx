import React from 'react';
import { Link } from 'react-router-dom';
import { FaDove } from 'react-icons/fa';

const About = () => {
  return (
    <main className="bg-[#f0f8fd] w-full min-h-screen font-josefin p-8">
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link to="/" className="text-[#1aa1f5] text-2xl flex items-center">
            <FaDove className="mr-2" /> Home
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-600 hover:text-[#1aa1f5] border-b-2 border-transparent hover:border-[#1aa1f5]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-[#1aa1f5] border-b-2 border-transparent hover:border-[#1aa1f5]">
                About
              </Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </nav>
      
      <section className="container mx-auto mt-8 p-6 bg-white shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">About X</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-7">
            X, originally launched in 2006, has grown to become one of the most influential social media platforms worldwide. Our mission is to give everyone the power to create and share ideas and information instantly without barriers.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Benefits of Using X</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Stay updated with real-time information and news.</li>
            <li>Connect with a global community.</li>
            <li>Share your thoughts and ideas instantly.</li>
            <li>Follow your interests and discover new ones.</li>
            <li>Engage with a vast audience.</li>
          </ul>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">People Reviews</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-md shadow-sm">
              <p className="text-gray-700">"X has changed the way I stay informed. It's my go-to platform for real-time updates." - <strong>John Doe</strong></p>
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <p className="text-gray-700">"I love how I can connect with people from all over the world on X. It's a truly global community." - <strong>Jane Smith</strong></p>
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <p className="text-gray-700">"Sharing my thoughts and ideas has never been easier. X is a powerful platform for expression." - <strong>Mike Johnson</strong></p>
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <p className="text-gray-700">"X helps me stay connected with my interests and discover new ones. It's an amazing platform." - <strong>Lisa Brown</strong></p>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Client Logos</h2>
          <div className="flex flex-wrap justify-around items-center">
            <img src="1.jpeg" alt="Client Logo 1" className="w-24 h-24 m-4" />
            <img src="2.jpeg" alt="Client Logo 2" className="w-24 h-24 m-4" />
            <img src="3.jpeg" alt="Client Logo 3" className="w-24 h-24 m-4" />
            <img src="4.jpeg" alt="Client Logo 4" className="w-24 h-24 m-4" />
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-md shadow-sm">
              <h3 className="font-bold text-xl mb-2">Case Study 1</h3>
              <p className="text-gray-700">Discover how X helped Company X achieve remarkable results through strategic social media engagement.</p>
            </div>
            <div className="p-4 border rounded-md shadow-sm">
              <h3 className="font-bold text-xl mb-2">Case Study 2</h3>
              <p className="text-gray-700">Learn about the innovative ways Company Y leveraged X to connect with their audience and drive growth.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
