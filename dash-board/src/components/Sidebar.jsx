import { CiGrid42 } from 'react-icons/ci';
import React from 'react';
import { MdOutlineContentPasteSearch } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; // <-- Add this import


const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      {/* Demo Logo Section */}
      <div className="flex items-center justify-center h-24 border-b border-gray-100">
        <img src="/logo.svg" alt="Logo" className="w-28 h-25 " />
      </div>
      <div className="p-6 flex-1">
        <div className="space-y-4">
          <Link
            to="/"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full text-left transition-colors no-underline ${
              location.pathname === '/' ? 'text-[#7D4BAE] bg-[#f3eaff]' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <MdOutlineContentPasteSearch className="w-5 h-5" />
            </span>
            <span className="font-light">Content Management</span>
          </Link>
          <Link
            to="/categories"
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg w-full text-left transition-colors no-underline ${
              location.pathname === '/categories' ? 'text-[#7D4BAE] bg-[#f3eaff]' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <CiGrid42 className="w-5 h-5" />
            </span>
            <span>Categories</span>
          </Link>
        </div>
      </div>
      {/* Logout Section */}
      <div className="p-6 border-t border-gray-100 mt-auto">
        <button className="flex items-center space-x-2 text-red-500 hover:text-red-600 w-full">
          <FiLogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
