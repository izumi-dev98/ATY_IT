import { useState, useEffect } from 'react';
import { useTableTheme } from '../../contexts/TableThemeContext';
import TableThemeCustomizer from './TableThemeCustomizer';

const RECENT_THEMES_STORAGE_KEY = 'tableRecentThemes';
const MAX_RECENT_THEMES = 5;

function TableThemeSelector() {
  const { currentTheme, currentThemeId, availableThemes, setTheme } = useTableTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentThemes, setRecentThemes] = useState([]);

  // Load recent themes from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(RECENT_THEMES_STORAGE_KEY);
    if (saved) {
      try {
        setRecentThemes(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse recent themes:', e);
      }
    }
  }, []);

  // Save theme to recent themes
  const addToRecent = (themeId) => {
    setRecentThemes(prev => {
      const filtered = prev.filter(id => id !== themeId);
      const updated = [themeId, ...filtered].slice(0, MAX_RECENT_THEMES);
      localStorage.setItem(RECENT_THEMES_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const handleSelect = (themeId) => {
    setTheme(themeId);
    addToRecent(themeId);
    setIsOpen(false);
  };

  // Filter themes by search query
  const filterThemes = (themes) => {
    if (!searchQuery.trim()) return themes;
    const query = searchQuery.toLowerCase();
    return themes.filter(theme =>
      theme.name.toLowerCase().includes(query) ||
      theme.description?.toLowerCase().includes(query) ||
      theme.id.toLowerCase().includes(query)
    );
  };

  // Group themes by type
  let builtInThemes = availableThemes.filter(t => !t.isCustom);
  let customThemes = availableThemes.filter(t => t.isCustom);

  // Apply search filter
  builtInThemes = filterThemes(builtInThemes);
  customThemes = filterThemes(customThemes);

  // Get recently used themes
  const recentThemeObjects = recentThemes
    .map(id => availableThemes.find(t => t.id === id))
    .filter(Boolean);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-100 rounded-lg transition-colors border border-gray-600"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <span className="text-sm font-medium">{currentTheme.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div
            className="absolute right-0 mt-2 w-80 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-20 overflow-hidden max-h-[80vh] flex flex-col"
            role="listbox"
          >
            {/* Header with search and Customize button */}
            <div className="p-3 border-b border-gray-600 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Table Style
                </p>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsCustomizerOpen(true);
                  }}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                >
                  Customize...
                </button>
              </div>
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search themes..."
                  className="w-full px-3 py-1.5 pl-8 text-sm bg-gray-700 border border-gray-600 rounded text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={(e) => e.stopPropagation()}
                />
                <svg
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1">
              {/* Recently Used Themes */}
              {recentThemeObjects.length > 0 && !searchQuery && (
                <div className="py-2 border-b border-gray-600">
                  <p className="px-4 py-1 text-xs text-gray-500 uppercase tracking-wider">
                    Recently Used
                  </p>
                  <ul className="py-1">
                    {recentThemeObjects.map((theme) => (
                      <li key={theme.id}>
                        <button
                          onClick={() => handleSelect(theme.id)}
                          className={`w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-gray-700 transition-colors ${
                            currentThemeId === theme.id ? 'bg-gray-700/50' : ''
                          }`}
                          role="option"
                          aria-selected={currentThemeId === theme.id}
                        >
                          <div className="flex-shrink-0 w-10 h-7 rounded border border-gray-600 overflow-hidden">
                            <ThemePreview themeId={theme.id} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-100 truncate">
                              {theme.name}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              Recent
                            </p>
                          </div>

                          {currentThemeId === theme.id && (
                            <svg
                              className="w-5 h-5 text-indigo-400 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Built-in Themes */}
              <div className="py-2">
                <p className="px-4 py-1 text-xs text-gray-500 uppercase tracking-wider">
                  Presets
                </p>
                <ul className="py-1">
                  {builtInThemes.map((theme) => (
                    <li key={theme.id}>
                      <button
                        onClick={() => handleSelect(theme.id)}
                        className={`w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-gray-700 transition-colors ${
                          currentThemeId === theme.id ? 'bg-gray-700/50' : ''
                        }`}
                        role="option"
                        aria-selected={currentThemeId === theme.id}
                      >
                        <div className="flex-shrink-0 w-10 h-7 rounded border border-gray-600 overflow-hidden">
                          <ThemePreview themeId={theme.id} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-100 truncate">
                            {theme.name}
                          </p>
                          <p className="text-xs text-gray-400 truncate">
                            {theme.description}
                          </p>
                        </div>

                        {currentThemeId === theme.id && (
                          <svg
                            className="w-5 h-5 text-indigo-400 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    </li>
                  ))}
                  {builtInThemes.length === 0 && searchQuery && (
                    <li className="px-4 py-3 text-sm text-gray-400 text-center">
                      No presets match "{searchQuery}"
                    </li>
                  )}
                </ul>
              </div>

              {/* Custom Themes */}
              {customThemes.length > 0 && (
                <div className="py-2 border-t border-gray-600">
                  <p className="px-4 py-1 text-xs text-gray-500 uppercase tracking-wider">
                    Custom
                  </p>
                  <ul className="py-1">
                    {customThemes.map((theme) => (
                      <li key={theme.id}>
                        <button
                          onClick={() => handleSelect(theme.id)}
                          className={`w-full px-4 py-2.5 text-left flex items-center gap-3 hover:bg-gray-700 transition-colors ${
                            currentThemeId === theme.id ? 'bg-gray-700/50' : ''
                          }`}
                          role="option"
                          aria-selected={currentThemeId === theme.id}
                        >
                          <div className="flex-shrink-0 w-10 h-7 rounded border border-indigo-500 overflow-hidden">
                            <ThemePreview themeId={theme.id} isCustom />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-100 truncate">
                              {theme.name}
                            </p>
                            <p className="text-xs text-indigo-400 truncate">
                              Custom theme
                            </p>
                          </div>

                          {currentThemeId === theme.id && (
                            <svg
                              className="w-5 h-5 text-indigo-400 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Customizer Modal */}
      <TableThemeCustomizer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
      />
    </div>
  );
}

// Mini preview component for each theme
function ThemePreview({ themeId, isCustom }) {
  const previews = {
    dark: (
      <div className="w-full h-full bg-gray-900 flex flex-col">
        <div className="h-1.5 bg-gray-800" />
        <div className="flex-1 bg-gray-900" />
      </div>
    ),
    light: (
      <div className="w-full h-full bg-white flex flex-col">
        <div className="h-1.5 bg-gray-100" />
        <div className="flex-1 bg-white" />
      </div>
    ),
    blue: (
      <div className="w-full h-full bg-slate-900 flex flex-col">
        <div className="h-1.5 bg-slate-800" />
        <div className="flex-1 bg-slate-900" />
      </div>
    ),
    compact: (
      <div className="w-full h-full bg-gray-900 flex flex-col">
        <div className="h-1 bg-gray-800" />
        <div className="flex-1 bg-gray-900" />
      </div>
    ),
    bordered: (
      <div className="w-full h-full bg-gray-900 flex flex-col border border-gray-600">
        <div className="h-1.5 bg-gray-800 border-b border-gray-600" />
        <div className="flex-1 bg-gray-900" />
      </div>
    ),
    gradient: (
      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
        <div className="h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600" />
        <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800" />
      </div>
    ),
    minimal: (
      <div className="w-full h-full bg-gray-50 flex flex-col">
        <div className="h-1.5 bg-gray-200" />
        <div className="flex-1 bg-gray-50" />
      </div>
    ),
    bold: (
      <div className="w-full h-full bg-gray-950 flex flex-col">
        <div className="h-2 bg-orange-600" />
        <div className="flex-1 bg-gray-950" />
      </div>
    ),
    pastel: (
      <div className="w-full h-full bg-slate-100 flex flex-col">
        <div className="h-1.5 bg-gradient-to-r from-pink-300 to-purple-300" />
        <div className="flex-1 bg-slate-100" />
      </div>
    ),
    neon: (
      <div className="w-full h-full bg-gray-950 flex flex-col border border-purple-500">
        <div className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-600" />
        <div className="flex-1 bg-gray-950" />
      </div>
    ),
    corporate: (
      <div className="w-full h-full bg-white border border-gray-300 flex flex-col">
        <div className="h-1.5 bg-blue-800" />
        <div className="flex-1 bg-gray-50" />
      </div>
    ),
    playful: (
      <div className="w-full h-full bg-yellow-50 flex flex-col">
        <div className="h-1.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400" />
        <div className="flex-1 bg-yellow-50" />
      </div>
    ),
    striped: (
      <div className="w-full h-full bg-gray-900 flex flex-col">
        <div className="h-1.5 bg-gray-800" />
        <div className="flex-1 bg-gray-900 flex flex-col justify-around">
          <div className="h-1 bg-gray-800/50" />
          <div className="h-1 bg-gray-900" />
          <div className="h-1 bg-gray-800/50" />
        </div>
      </div>
    ),
    modern: (
      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
        <div className="h-1.5 bg-gradient-to-r from-gray-800 to-gray-700" />
        <div className="flex-1 bg-gray-900" />
      </div>
    ),
    highContrast: (
      <div className="w-full h-full bg-black flex flex-col border border-white">
        <div className="h-1.5 bg-white" />
        <div className="flex-1 bg-black" />
      </div>
    ),
    midnight: (
      <div className="w-full h-full bg-gradient-to-br from-gray-950 via-slate-900 to-purple-950 flex flex-col border border-purple-800">
        <div className="h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600" />
        <div className="flex-1 bg-gray-950" />
      </div>
    ),
    forest: (
      <div className="w-full h-full bg-emerald-950 flex flex-col border border-emerald-700">
        <div className="h-1.5 bg-gradient-to-r from-emerald-600 to-teal-600" />
        <div className="flex-1 bg-emerald-950" />
      </div>
    ),
    ocean: (
      <div className="w-full h-full bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950 flex flex-col border border-cyan-700">
        <div className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600" />
        <div className="flex-1 bg-blue-950" />
      </div>
    ),
    sunset: (
      <div className="w-full h-full bg-gradient-to-br from-orange-950 via-red-950 to-pink-950 flex flex-col border border-orange-700">
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />
        <div className="flex-1 bg-red-950" />
      </div>
    ),
    monochrome: (
      <div className="w-full h-full bg-gray-900 flex flex-col border border-gray-700">
        <div className="h-1.5 bg-gray-800" />
        <div className="flex-1 bg-gray-900" />
      </div>
    ),
  };

  if (isCustom && !previews[themeId]) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-purple-900 flex flex-col">
        <div className="h-1.5 bg-indigo-800" />
        <div className="flex-1 bg-indigo-900" />
      </div>
    );
  }

  return previews[themeId] || previews.dark;
}

export default TableThemeSelector;
