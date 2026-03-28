import { useState } from 'react';
import logo from '../assets/logo.png';

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gray-900 border-b border-gray-800 z-50">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          {/* Hamburger Menu - Mobile */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {sidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <img src={logo} alt="ATY Logo" className="h-30 w-auto" />
        </div>

        {/* Right: Brand Text */}
        <span className="text-xl font-semibold font-serif text-gray-100 hidden sm:inline">
          ATY Information Technology
        </span>

        
        
      </div>
    </nav>
  );
}

export default Navbar;
