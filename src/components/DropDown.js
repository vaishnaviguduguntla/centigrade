// src/components/Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({categories, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center items-center p-2 text-gray-500 rounded-md hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
        id="dropdown-menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Categories
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a2 2 0 100-4 2 2 0 000 4zM4 10a2 2 0 114 0 2 2 0 01-4 0zm12 0a2 2 0 114 0 2 2 0 01-4 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu-button"
        >
          <div className="py-1" role="none">
            {categories.map(item => {
               return <div
               key={item}
               href="#"
               className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
               role="menuitem"
               onClick={() => {onSelect(item)}}
             >
               {item}
             </div>
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
