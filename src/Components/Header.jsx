import { useState } from "react";
import { FaBars, FaCartPlus, FaSun, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setopenMenu] = useState(false);
  const toogle = () => setopenMenu(!openMenu);
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow bg-opacity-60 backdrop-blur-md z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="">Logo</a>

        {/* Desktop Icons */}
        <ul className="hidden md:flex items-center justify-between space-x-8">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <div className="relative">
            <Link to="/cart">
              <FaCartPlus />

              <span
                className="absolute -top-3 -right-2 bg-pink-600 text-white flex items-center
              text-xs rounded-full w-4 h-4 justify-center"
              >
                0
              </span>
            </Link>
          </div>
          <FaSun className="w-5 h-h-5 text-gray-500 cursor-pointer" />
        </ul>
        
        {/* add fabars or fatimes besed what open */}
        <div className="md:hidden flex  items-center space-x-4">
          <FaSun className="w-5 h-h-5 text-gray-500 cursor-pointer" />

          <button onClick={toogle}>
            {openMenu ? (
              <FaTimes className="w-5 h-h-5 text-gray-500 cursor-pointer" />
            ) : (
              <FaBars className="w-5 h-h-5 text-gray-500 cursor-pointer" />
            )}
          </button>
        </div>

      </div>

      {/* mobile menu */}
      {openMenu && (
        <ul className="md:hidden bg-white  shadow-md px-4 mt=2 space-y-3">
          <Link className="block" to="/">
            Home
          </Link>
          <Link className="block" to="/about">
            About
          </Link>
          <Link className="block" to="/contact">
            Contact
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Header;
