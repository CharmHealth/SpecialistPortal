import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SpecialistLogo from './SpecialistLogo.svg';
import SpecialistLogo2 from './SpecialistLogo2.svg';
import { useSpecialty } from './SpecialtyContext';
import { useInsurance } from './InsuranceContext';


const Navbar = ({ isAuthenticated }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const {specialty, setSpecialty} = useSpecialty();
  const {insurance, setInsurance} = useInsurance();

  const navigate = useNavigate()
  const handleClick = () => {
    console.log("specialists page");
    setSpecialty(null);
    setInsurance(null);
    navigate("/specialists?specialty=All%20Specialists&insurance=Skip%20for%20now")
  };

  return (
    <>
    <nav className="w-3/5 lg:w-3/5 bg-domino-gray p-4 rounded-r-full shadow-lg flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={SpecialistLogo} alt="Logo" className="h-[2.25rem] w-32 sm:w-32 md:w-48 lg:w-auto" />
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
              <span onClick={handleClick} style={{cursor:'pointer'}}>Specialists</span>
              {/* <Link to="/specialists">Specialists</Link> */}
            </li>

          </ul>
        </div>
        <ul className="hidden space-x-6 lg:flex">
          <li className="text-white">
            {/* <a href="/">Home</a> */}
            <Link to="/aboutUs">About</Link>
          </li>
          <li className="text-white">
            {/* <a href="/specialists">All Specialists</a> */}
            {/* <Link to="/specialists"> All Specialists</Link> */}
            <span onClick={handleClick} style={{cursor:'pointer'}}>All Specialists</span>
          </li>

        </ul>
      </div>
    </nav>
    </>
  );
};
export default Navbar;

