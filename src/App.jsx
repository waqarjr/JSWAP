import { useState } from 'react'

function App() {
 const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false)
  return (
    <>
<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Open Popup Button */}
      <button
        onClick={openPopup}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors duration-200"
      >
        Open Popup
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={closePopup}
        >
          {/* Popup Content */}
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Popup Title
            </h2>
            <p className="text-gray-600 mb-6">
              This is a simple popup component. You can add any content here like forms, images, or other information.
            </p>
            
            {/* Dismiss Button */}
            <button
              onClick={closePopup}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>    </>
  )
}

export default App
