import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const CategoryUploadForm = () => {
  const [categoryName, setCategoryName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Category Name:', categoryName);
    console.log('Selected File:', selectedFile);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex p-6">
      <div className="w-full max-w-md mt-12 mx-auto">
        {/* Category Name Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category Name
          </label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder=""
          />
        </div>

        {/* Image Upload Area */}
        <div className="mb-8">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center bg-white hover:border-purple-400 transition-colors">
            <div className="flex flex-col items-center">
              {/* Upload Icon */}
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-gray-400" />
              </div>
              
              {/* Upload Text */}
              <p className="text-gray-600 mb-4">Select image to Upload</p>
              
              {/* Select File Button */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <span className="inline-flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                  <Upload className="w-4 h-4 mr-2" />
                  Select File
                </span>
              </label>
              
              {/* Selected File Name */}
              {selectedFile && (
                <p className="text-sm text-gray-500 mt-2">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CategoryUploadForm;