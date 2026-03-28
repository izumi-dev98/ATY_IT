import { useState } from 'react';

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-gray-900 border-b border-gray-800 z-50">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left: Logo/Brand and Hamburger */}
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

          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EMR</span>
            </div>
            <span className="text-xl font-semibold text-gray-100 hidden sm:inline">
              EMR App
            </span>
          </div>
        </div>

        {/* Right: User Profile and Notifications */}
        <div className="flex items-center gap-2">
          {/* Notification Bell */}
          <button
            type="button"
            className="p-2 rounded-md hover:bg-gray-800 transition-colors relative"
            aria-label="Notifications"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              aria-label="User menu"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">U</span>
              </div>
              <span className="text-sm font-medium text-gray-300 hidden sm:inline">
                User
              </span>
              <svg
                className="w-4 h-4 text-gray-400 hidden sm:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-700">
                <a
                  href="/emr-user-account"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  EMR User Account
                </a>
                <a
                  href="/issue-log"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
                >
                  Support
                </a>
                <hr className="my-1 border-gray-700" />
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
