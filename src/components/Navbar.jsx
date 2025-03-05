import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-green">L.S. Sujai Sideshwer</h1>
        <div className="flex space-x-4">
          <a
            href="#about"
            className="text-black hover:text-green transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-black hover:text-green transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-black hover:text-green transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-black hover:text-green transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
