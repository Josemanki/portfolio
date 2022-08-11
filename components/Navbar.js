import React from 'react';

const Navbar = () => {
  return (
    <nav className="hidden w-screen h-16 fixed z-50 bg-custom-navy shadow-md sm:block">
      <div className="px-6 h-full container flex justify-between items-center">
        <div>
          <h1 className="text-white text-4xl font-semibold font-poppins">
            JH
            <span className="text-blue-500">.</span>
          </h1>
        </div>
        <ul className="flex flex-row space-x-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
