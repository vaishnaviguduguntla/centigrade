// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from "./DropDown";

const Navbar = ({categories, onSelect, sortOrder, handleSort,cartCount}) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-bold">
          MyStore
        </Link>
        <div className="flex space-x-4">
          <Dropdown categories={categories} onSelect={onSelect} />
          <button
            onClick={handleSort}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            Sort {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
          </button>
          <Link to="/cart" className="text-white hover:text-gray-300">
            Cart {cartCount}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
