// src/components/Navbar.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Hamburger icon
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import logo from '../image/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-2">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">
             <img src={logo} alt="Logo" className="h-[90px] w-[90px] inline-block" /> {/* Replace with your logo path */}
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="https://t.me/hotleakschannel" className="hover:text-gray-400">Join Telegram Channels</Link>
          <Link to="https://t.me/ads_kuddy0" className="hover:text-gray-400">DM Admin</Link>
          <Link to="https://t.me/ads_kuddy0" className="hover:text-gray-400">Join Premium Channel</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link to="https://t.me/hotleakschannel" className="block text-lg py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded">Join Telegram Channels</Link>
          <Link to="https://t.me/ads_kuddy0" className="block text-lg py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded">DM Admin</Link>
          <Link to="https://t.me/ads_kuddy0" className="block text-lg py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded">Join Premium Channel</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
