'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src="/assets/images/pagepocket-logo.jpg" className="h-8 mr-3" alt="Page Pocket Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Page Pocket</span>
        </a>
        <div className="flex items-center"> {/* Container for icons */}
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover-bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl ml-3" // Add margin for spacing
          />
        </div>
          <div className={`w-full ${isDropdownOpen ? 'block' : 'hidden'}`} id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a href="/profile" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page" onClick={closeDropdown}>
                  Profile
                </a>
              </li>
              <li>
                <a href="/register" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover-text-white dark:hover-bg-gray-700 dark:hover:text-white" onClick={closeDropdown}>
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 dark:text-gray-400 dark:hover-bg-gray-700 dark:hover:text-white" onClick={() => {
                  closeDropdown();
                  signOut();
                }}>
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
