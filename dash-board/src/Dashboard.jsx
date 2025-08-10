import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { FaPlus } from 'react-icons/fa';
import { IoIosLink } from 'react-icons/io';
import { CiShare1 } from 'react-icons/ci';
// import other icons/components as needed

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('content');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Food', 'Education', 'Club', 'News'];
  const videos = [
    { id: 1, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Education' },
    { id: 2, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Food' },
    { id: 3, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Education' },
    { id: 4, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Education' },
    { id: 5, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Food' },
    { id: 6, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Education' },
    { id: 7, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Education' },
    { id: 8, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Food' },
    { id: 9, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Education' },
    { id: 10, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Education' },
    { id: 11, title: 'English Spoken Video', thumbnail: '/pasta.jpg', category: 'Food' }
  ];

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const paginatedVideos = videos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen w-full bg-gray-50 flex">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 h-screen ">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-7">
          <div className="flex items-center justify-between">
            <div />
            <div className="flex items-center space-x-4">
              <div className="w-12 h-10  rounded-full flex items-center justify-center">
                <img src="/logo.svg" alt="Demo Logo" className="w-8 h-8 object-contain" />
              </div>
            </div>
          </div>
        </div>
  <div className="p-6 h-full">
          {activeSection === 'content' && (
            <>
              {/* Category Tabs and New Category Button */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                        activeCategory === category
                          ? 'bg-[#7D4BAE] text-white border-[#7D4BAE]'
                          : 'bg-white text-[#7D4BAE] border-[#7D4BAE] hover:bg-[#f3eaff]'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <button className="flex items-center space-x-2 bg-[#7D4BAE] text-white px-4 py-2 rounded-lg hover:bg-[#6c3e9c] transition-colors border border-[#7D4BAE]">
                  <FaPlus className="w-4 h-4" />
                  <span>New Category</span>
                </button>
              </div>
              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {paginatedVideos.map((video) => (
                  <div key={video.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden relative">
                    {/* Top corners icons */}
                    <div className="relative">
                      <img src={video.thumbnail} alt="Thumbnail" className="w-full h-40 object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">{video.title}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-1 text-[#7D4BAE] cursor-pointer">
                          <IoIosLink className="w-5 h-5" />
                          <span className="text-xs font-medium">Link</span>
                        </div>
                        <div className="flex items-center space-x-1 text-[#7D4BAE] cursor-pointer">
                          <CiShare1 className="w-5 h-5" />
                          <span className="text-xs font-medium">Share</span>
                        </div>
                      </div>
                      <div className="border-b border-gray-300 my-3" />
                      <div className="flex items-center space-x-4 mt-2">
                        <button className="text-gray-500 hover:text-[#7D4BAE]">
                          <FaRegEdit className="w-5 h-5" />
                        </button>
                        <button className="text-gray-500 hover:text-red-500">
                          <FaRegTrashAlt className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="flex items-center justify-center mt-8">
                <div className="flex items-center rounded-lg space-x-2">
                  <button
                    className="px-3 py-1 rounded text-black hover:bg-gray-200 transition-colors"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >&lt;</button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      className={`px-3 py-1 rounded font-semibold ${
                        currentPage === i + 1
                          ? 'text-white bg-[#7D4BAE]'
                          : 'text-black bg-gray-200 hover:bg-gray-300 transition-colors'
                      }`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    className="px-3 py-1 rounded text-black hover:bg-gray-200 transition-colors"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >&gt;</button>
                </div>
              </div>
            </>
          )}
          {activeSection === 'categories' && (
            <div>
              {/* Categories management UI here */}
              <h2 className="text-xl font-semibold mb-4">Categories (In Progress)</h2>
              <div className="text-gray-500">Category management coming soon...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
