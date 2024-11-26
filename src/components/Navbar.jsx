import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const items = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);
  const firstName = user?.email?.slice(0, 4);



  return (
    <nav className="bg-gray-100 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-amber-800">
          MS Store
        </div>

        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-amber-600">Home</Link>

          {/* Product link with hover dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onClick={() => setIsDropdownOpen(false)}
          >
            <button className="text-gray-700 hover:text-amber-600 focus:outline-none">
              Product ↓
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-opacity duration-300 opacity-100">
                <ul>
                  <li>
                    <Link
                      to="/products"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-100 hover:pl-6 transition-all duration-300"
                    >
                      Jewellery Items
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Gcloth"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-100 hover:pl-6 transition-all duration-300"
                    >
                      Girls Cloth
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-100 hover:pl-6 transition-all duration-300"
                    >
                      Clothing
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
          />
          <button className="absolute right-2 top-2 text-gray-500 hover:text-amber-600">
            <FaSearch />
          </button>
        </div>

        <div className="flex space-x-4 items-center">
          {firstName ? (
            <span className="text-gray-700">Welcome, {firstName}</span>
          ) : (
            <Link to="/register" className="text-gray-700 hover:text-amber-600">
              <FaUser className="text-lg" />
            </Link>
          )}
          <Link to="/cartitem" className="relative text-gray-700 hover:text-amber-600">
            <FaShoppingCart className="text-lg" />
            <span className="absolute bottom-3 left-4 bg-red-500 text-white text-xs font-bold rounded-full h-3 w-3 flex items-center justify-center">
              {items.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
