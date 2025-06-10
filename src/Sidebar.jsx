import React, { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Profile', icon: '👤' },
    { name: 'Settings', icon: '⚙️' },
    { name: 'Messages', icon: '💬' },
    { name: 'Analytics', icon: '📈' },
    { name: 'Help', icon: '❓' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg shadow-lg transition-colors duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-gray-500 black opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button
              onClick={closeSidebar}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Clicked on ${item.name}`);
                  }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 p-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              U
            </div>
            <div>
              <p className="font-medium text-gray-800">User Name</p>
              <p className="text-sm text-gray-500">user@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-8 ml-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Main Content</h1>
          <p className="text-gray-600 mb-4">
            This is the main content area. Click the hamburger menu button in the top-left corner to open the sidebar.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Content Section</h2>
            <p className="text-gray-600">
              The sidebar will slide in from the left when opened, and you can close it by clicking the X button, 
              clicking outside the sidebar, or clicking the toggle button again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}