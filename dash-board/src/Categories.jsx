import React, { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import CategoryUploadForm from './components/CategoryUploadForm';

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSection, setActiveSection] = useState('categories');
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  const categories = [
    {
      id: 1,
      name: 'Education',
      bgColor: 'from-orange-400 to-orange-500'
    },
    {
      id: 2,
      name: 'Food',
      bgColor: 'from-red-500 to-red-600'
    },
    {
      id: 3,
      name: 'Cook',
      bgColor: 'from-orange-400 to-orange-500'
    },
    {
      id: 4,
      name: 'Games',
      bgColor: 'from-purple-600 to-purple-700'
    },
    {
      id: 5,
      name: 'News',
      bgColor: 'from-blue-600 to-blue-700'
    },
    {
      id: 6,
      name: 'Food',
      bgColor: 'from-red-500 to-red-600'
    }
  ];

  const renderCategoryImage = (category) => {
    switch(category.name) {
      case 'Education':
        return (
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-2 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-white bg-opacity-40 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-white bg-opacity-40 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      
      case 'Food':
        return (
          <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="flex flex-wrap justify-center items-center gap-1">
              <div className="w-4 h-3 bg-red-400 rounded-sm"></div>
              <div className="w-4 h-3 bg-yellow-400 rounded-sm"></div>
              <div className="w-4 h-3 bg-orange-400 rounded-sm"></div>
              <div className="w-4 h-3 bg-green-400 rounded-sm"></div>
            </div>
          </div>
        );
      
      case 'Cook':
        return (
          <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="relative">
              <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center mb-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div className="w-12 h-2 bg-orange-600 rounded-full"></div>
            </div>
          </div>
        );
      
      case 'Games':
        return (
          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="relative">
              <div className="w-8 h-6 bg-purple-800 rounded-sm mb-1"></div>
              <div className="flex justify-center space-x-1">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      
      case 'News':
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <div className="text-white text-xs font-bold">NEWS</div>
              <div className="w-8 h-1 bg-blue-300 rounded-full mt-1"></div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className={`w-full h-full bg-gradient-to-br ${category.bgColor} rounded-full`}></div>
        );
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 h-screen bg-gray-50">
        {/* Header with logo/avatar */}
        <div className="bg-white border-b border-gray-200 px-6 py-7">
          <div className="flex items-center justify-between">
            <div />
            <div className="flex items-center space-x-4">
              <div className="w-12 h-10 rounded-full flex items-center justify-center">
                <img src="/logo.svg" alt="Demo Logo" className="w-8 h-8 object-contain" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 h-full">
          <div className="max-w-7xl mx-auto">
          {/* Header with New Category Button */}
          <div className="flex justify-end mb-8">
            {!showCategoryForm && (
              <button
                className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                onClick={() => setShowCategoryForm(true)}
              >
                <Plus className="w-4 h-4" />
                <span className="font-medium">New Category</span>
              </button>
            )}
          </div>

          {/* Show CategoryUploadForm if requested, else show main content */}
          {showCategoryForm ? (
            <div className="relative">
              <button
                className="absolute right-0 top-0 z-10 p-2 text-gray-400 hover:text-gray-700"
                onClick={() => setShowCategoryForm(false)}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <CategoryUploadForm />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex flex-col items-center">
                    {/* Circular Image */}
                    <div className="w-24 h-24 mb-6">
                      {renderCategoryImage(category)}
                    </div>
                    {/* Category Name */}
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {category.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2">
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-400">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-2 rounded-lg bg-purple-600 text-white font-medium">1</button>
            <button className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">2</button>
            <button className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">3</button>
            <button className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">4</button>
            <span className="px-2 text-gray-400">...</span>
            <button className="px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100">30</button>
            <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;