import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SpecialistLogo from './SpecialistLogo.svg';
import SpecialistLogo2 from './SpecialistLogo2.svg';
const Navbar = ({ isAuthenticated }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <>
    <nav className="w-3/5 lg:w-3/5 bg-domino-gray p-4 rounded-r-full shadow-lg flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={SpecialistLogo} alt="Logo" className="h-10 w-32 sm:w-32 md:w-48 lg:w-auto" />
        </Link>
        <div className="lg:hidden relative">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none w-12"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          {/* Add transition and styling to the dropdown */}
          <ul
            className={`${
              isDropdownVisible ? 'block' : 'hidden'
            } transition-all duration-300 absolute top-12 left-0 bg-domino-gray text-white mt-2 py-2 px-4 rounded-md shadow-lg`}
          >
            <li>
              {/* <a href="/">Home</a> */}
              <Link to="/aboutUs">About</Link>
            </li>
            <li>
              {/* <a href="/specialists">Specialists</a> */}
              <Link to="/specialists">Specialists</Link>
            </li>
            <li>
              {isAuthenticated ? (
                <a href="/profile">My Profile</a>
              ) : (
                <a href="/login">Login</a>
              )}
            </li>
          </ul>
        </div>
        <ul className="hidden space-x-6 lg:flex space-x-6">
          <li className="text-white">
            {/* <a href="/">Home</a> */}
            <Link to="/aboutUs">About</Link>
          </li>
          <li className="text-white">
            {/* <a href="/specialists">All Specialists</a> */}
            <Link to="/specialists"> All Specialists</Link>
          </li>
          <li className="text-white">
            {isAuthenticated ? (
              <a href="/profile">My Profile</a>
            ) : (
              <a href="/login">Login</a>
            )}
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};
export default Navbar;

