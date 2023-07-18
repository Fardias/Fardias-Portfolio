import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

 
  return (
    <div className=" flex justify-between items-center h-20 max-w-[1980px] mx-auto px-4 md:px-40 text-white fixed top-0 right-0 left-0 bg-[#000300] z-50 border-b-2 border-b-[#00df9a]">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">FARALF.</h1>
      <ul className="hidden md:flex  md:w-[60%] md:justify-end">
        <li className="p-4">
          <a href="#home" className="hover:text-[#00df9a]">Home</a>
        </li>
        <li className="p-4">
          <a href="#about" className="hover:text-[#00df9a]">About</a>
        </li>
        <li className="p-4">
          <a href="#project" className="hover:text-[#00df9a]">Project</a>
        </li>
        <li className="p-4">
          <a href="#sosmed" className="hover:text-[#00df9a]">Social Media</a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-[-100%]"
            : "fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-[#000300] ease-in-out duration-300 md:hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold mt-[23px] ml-4 text-[#00df9a]">
          FARALF.
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4  border-gray-600">
            <a href="#home" className="hover:text-[#00df9a]" onClick={handleNav}>Home</a>
          </li>
          <li className="p-4  border-gray-600">
            <a href="#about" className="hover:text-[#00df9a]" onClick={handleNav}>About</a>
          </li>
          <li className="p-4  border-gray-600">
            <a href="#project" className="hover:text-[#00df9a]" onClick={handleNav}>Project</a>
          </li>
          <li className="p-4  border-gray-600">
            <a href="#sosmed" className="hover:text-[#00df9a]" onClick={handleNav}>Social Media</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
