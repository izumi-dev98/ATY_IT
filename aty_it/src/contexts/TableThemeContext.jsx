import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { tableThemes } from '../styles/tableThemes';
import { mergeThemes, validateTheme, createCustomTheme } from '../styles/tableCustomThemes';
import { exportThemes, importThemes, downloadThemes } from '../utils/themeExporter';

const TableThemeContext = createContext(null);

const THEME_STORAGE_KEY = 'tableTheme';
const CUSTOM_THEMES_STORAGE_KEY = 'tableCustomThemes';
const DEFAULT_THEME = 'dark';

export function TableThemeProvider({ children }) {
  // Current theme state
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && tableThemes[saved]) {
        return saved;
      }
    }
    return DEFAULT_THEME;
  });

  // Custom themes state
  const [customThemes, setCustomThemes] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(CUSTOM_THEMES_STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse custom themes:', e);
          return {};
        }
      }
    }
    return {};
  });

  const [isInitialized, setIsInitialized] = useState(false);

  // Persist current theme to localStorage
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
    } else {
      setIsInitialized(true);
    }
  }, [currentTheme, isInitialized]);

  // Persist custom themes to localStorage
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(CUSTOM_THEMES_STORAGE_KEY, JSON.stringify(customThemes));
    }
  }, [customThemes, isInitialized]);

  // Set theme by ID (supports both built-in and custom themes)
  const setTheme = useCallback((themeId) => {
    if (tableThemes[themeId]) {
      setCurrentTheme(themeId);
    } else if (customThemes[themeId]) {
      setCurrentTheme(themeId);
    } else {
      console.warn(`Theme "${themeId}" not found`);
    }
  }, [customThemes]);

  // Save a new custom theme
  const saveCustomTheme = useCallback((baseThemeId, customizations, name, description) => {
    try {
      const customTheme = createCustomTheme(baseThemeId, customizations, name, description);

      const validation = validateTheme(customTheme);
      if (!validation.isValid) {
        return { success: false, error: validation.errors.join(', ') };
      }

      setCustomThemes(prev => ({
        ...prev,
        [customTheme.id]: customTheme,
      }));

      return { success: true, theme: customTheme };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  // Update an existing custom theme
  const updateCustomTheme = useCallback((themeId, updates) => {
    if (!customThemes[themeId]) {
      return { success: false, error: 'Custom theme not found' };
    }

    const updatedTheme = mergeThemes(customThemes[themeId], updates);
    updatedTheme.updatedAt = new Date().toISOString();

    setCustomThemes(prev => ({
      ...prev,
      [themeId]: updatedTheme,
    }));

    // If this is the current theme, refresh it
    if (currentTheme === themeId) {
      setCurrentTheme(themeId);
    }

    return { success: true, theme: updatedTheme };
  }, [customThemes, currentTheme]);

  // Delete a custom theme
  const deleteCustomTheme = useCallback((themeId) => {
    if (!customThemes[themeId]) {
      return { success: false, error: 'Custom theme not found' };
    }

    setCustomThemes(prev => {
      const updated = { ...prev };
      delete updated[themeId];
      return updated;
    });

    // If this is the current theme, reset to default
    if (currentTheme === themeId) {
      setCurrentTheme(DEFAULT_THEME);
    }

    return { success: true };
  }, [customThemes, currentTheme]);

  // Reset a custom theme to its base
  const resetToDefault = useCallback((themeId) => {
    if (tableThemes[themeId]) {
      setCurrentTheme(themeId);
      return { success: true };
    }
    return { success: false, error: 'Theme not found' };
  }, []);

  // Export themes to JSON file
  const exportThemesToFile = useCallback((themeIds) => {
    const themesToExport = themeIds || Object.keys(customThemes);
    downloadThemes(themesToExport.map(id => customThemes[id] || tableThemes[id]).filter(Boolean));
    return { success: true };
  }, [customThemes]);

  // Import themes from JSON
  const importThemesFromJson = useCallback((jsonString) => {
    const result = importThemes(jsonString);
    if (result.success) {
      setCustomThemes(prev => {
        const updated = { ...prev };
        for (const theme of result.themes) {
          // Generate unique ID if conflict
          let uniqueId = theme.id;
          let counter = 1;
          while (updated[uniqueId] || tableThemes[uniqueId]) {
            uniqueId = `${theme.id}-${counter}`;
            counter++;
          }
          theme.id = uniqueId;
          theme.isCustom = true;
          theme.importedAt = new Date().toISOString();
          updated[uniqueId] = theme;
        }
        return updated;
      });
      return { success: true, importedCount: result.themes.length, warnings: result.warnings };
    }
    return { success: false, errors: result.errors };
  }, [customThemes]);

  // Copy theme to clipboard
  const copyThemeToClipboard = useCallback(async (themeId) => {
    const theme = customThemes[themeId] || tableThemes[themeId];
    if (!theme) {
      return { success: false, error: 'Theme not found' };
    }
    try {
      const json = exportThemes(theme, { pretty: true });
      await navigator.clipboard.writeText(json);
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }, [customThemes]);

  // Paste theme from clipboard
  const pasteThemeFromClipboard = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      return importThemesFromJson(text);
    } catch (e) {
      return { success: false, error: e.message };
    }
  }, [importThemesFromJson]);

  // Get the current theme object (from built-in or custom)
  const getCurrentThemeObject = useCallback(() => {
    if (tableThemes[currentTheme]) {
      return tableThemes[currentTheme];
    }
    if (customThemes[currentTheme]) {
      return customThemes[currentTheme];
    }
    return tableThemes[DEFAULT_THEME];
  }, [currentTheme, customThemes]);

  // Get all available themes (built-in + custom)
  const availableThemes = [
    ...Object.values(tableThemes).map(t => ({
      id: t.id,
      name: t.name,
      description: t.description,
      isCustom: false,
    })),
    ...Object.values(customThemes).map(t => ({
      id: t.id,
      name: t.name,
      description: t.description,
      isCustom: true,
      baseThemeId: t.baseThemeId,
    })),
  ];

  const value = {
    currentTheme: getCurrentThemeObject(),
    currentThemeId: currentTheme,
    availableThemes,
    customThemes,
    setTheme,
    saveCustomTheme,
    updateCustomTheme,
    deleteCustomTheme,
    resetToDefault,
    exportThemesToFile,
    importThemesFromJson,
    copyThemeToClipboard,
    pasteThemeFromClipboard,
  };

  return (
    <TableThemeContext.Provider value={value}>
      {children}
    </TableThemeContext.Provider>
  );
}

export function useTableTheme() {
  const context = useContext(TableThemeContext);
  if (!context) {
    throw new Error('useTableTheme must be used within a TableThemeProvider');
  }
  return context;
}

export default TableThemeContext;
