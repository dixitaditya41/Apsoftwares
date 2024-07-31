import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../C (1).jpg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="border border-b-slate-500">
      <nav className="flex justify-between max-w-8xl items-center h-20 mx-auto pl-8">
        <div>
          <NavLink to="/">
            <div>
              <img src={logo} className="h-20" alt="Logo" />
            </div>
          </NavLink>
        </div>

          
        <div className="flex justify-center items-center h-[40px] w-5/12 rounded-[10px] border border-slate-800 bg-white pl-2 pr-3 cursor-pointer">
        <input className="text-black-600 w-full h-full focus:outline-none" placeholder="Search for products"/>
        <div className="hover:text-yellow-300"><FaSearch size={20}/> </div>
        </div>
     

        <div className="flex items-center font-medium text-slate-800 mr-5 space-x-6">
          <NavLink to="/" className="text-black">
            Home
          </NavLink>

          <div className="relative" onMouseEnter={handleMouseEnter}>
            <button className="flex items-center space-x-1 text-black transition-all duration-500 ease-in" onClick={handleDropdownToggle}>
              <span>Categories</span>
              {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isDropdownOpen && (
              <ul  onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className="absolute mt-2 bg-white shadow-lg rounded-md py-1 w-48">
                <li>
                  <NavLink
                    to="/hardware"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Hardware
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/software"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Software
                  </NavLink>
                </li>
              </ul>
            )}
          </div>

          <NavLink to="/contact" className="text-black">
            Contact
          </NavLink>
          <NavLink to="/contact" className="text-black">
            About
          </NavLink>
          <IoCart size={20} />
          <button><CgProfile size={23} /></button>
        </div>
        <div>
         
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
