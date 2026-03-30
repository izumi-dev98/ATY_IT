/**
 * Theme Exporter/Importer Utility
 *
 * Provides functions for exporting and importing table themes as JSON.
 * Supports sharing themes between users and backing up custom themes.
 */

import { tableThemes } from '../styles/tableThemes';

/**
 * Export a theme or multiple themes to JSON string
 * @param {Object|Object[]} themes - Single theme object, array of themes, or theme IDs
 * @param {Object} options - Export options
 * @param {boolean} options.pretty - Whether to pretty-print JSON (default: true)
 * @param {boolean} options.includeMetadata - Include export timestamp and version (default: true)
 * @returns {string} JSON string
 */
export function exportThemes(themes, options = {}) {
  const { pretty = true, includeMetadata = true } = options;

  let themesToExport = [];

  // Handle different input types
  if (Array.isArray(themes)) {
    // Array of theme objects or IDs
    themesToExport = themes.map((theme) => {
      if (typeof theme === 'string') {
        // It's a theme ID
        return tableThemes[theme] || { id: theme, error: 'Theme not found' };
      }
      return theme;
    });
  } else if (typeof themes === 'string') {
    // Single theme ID
    themesToExport = [tableThemes[themes] || { id: themes, error: 'Theme not found' }];
  } else if (themes && typeof themes === 'object') {
    // Single theme object
    themesToExport = [themes];
  }

  // Build export object
  const exportData = {
    version: '1.0',
    exportType: 'table-theme',
    themes: themesToExport,
  };

  if (includeMetadata) {
    exportData.metadata = {
      exportedAt: new Date().toISOString(),
      source: 'aty-it-table-theme-exporter',
      themeCount: themesToExport.length,
    };
  }

  return pretty
    ? JSON.stringify(exportData, null, 2)
    : JSON.stringify(exportData);
}

/**
 * Import themes from JSON string
 * @param {string} jsonString - JSON string to parse
 * @returns {Object} Import result with success, themes array, and errors
 */
export function importThemes(jsonString) {
  const result = {
    success: false,
    themes: [],
    errors: [],
    warnings: [],
  };

  // Parse JSON
  let data;
  try {
    data = JSON.parse(jsonString);
  } catch (e) {
    result.errors.push(`Invalid JSON: ${e.message}`);
    return result;
  }

  // Validate structure
  if (!data || typeof data !== 'object') {
    result.errors.push('Invalid data structure: expected an object');
    return result;
  }

  // Check for our export format
  if (data.exportType && data.exportType !== 'table-theme') {
    result.errors.push(`Unknown export type: ${data.exportType}`);
    return result;
  }

  // Get themes array
  let themesToImport = [];
  if (data.themes && Array.isArray(data.themes)) {
    themesToImport = data.themes;
  } else if (data.theme) {
    // Single theme in old format
    themesToImport = [data.theme];
  } else {
    result.errors.push('No themes found in export data');
    return result;
  }

  // Validate each theme
  for (const theme of themesToImport) {
    const validation = validateImportedTheme(theme);
    if (validation.valid) {
      result.themes.push(theme);
    } else {
      result.errors.push(...validation.errors);
    }
  }

  // Add warnings for metadata
  if (data.metadata) {
    if (data.metadata.exportedAt) {
      const exportDate = new Date(data.metadata.exportedAt);
      const now = new Date();
      const daysDiff = (now - exportDate) / (1000 * 60 * 60 * 24);
      if (daysDiff > 30) {
        result.warnings.push(`Export is ${Math.floor(daysDiff)} days old`);
      }
    }
    if (data.metadata.source) {
      result.warnings.push(`Imported from: ${data.metadata.source}`);
    }
  }

  result.success = result.themes.length > 0 && result.errors.length === 0;
  return result;
}

/**
 * Validate an imported theme object
 * @param {Object} theme - Theme object to validate
 * @returns {Object} Validation result with valid boolean and errors array
 */
function validateImportedTheme(theme) {
  const errors = [];
  const requiredFields = ['id', 'name', 'container'];

  for (const field of requiredFields) {
    if (!theme[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Check for nested field structures
  const nestedFields = ['header', 'body', 'row', 'cell', 'border'];
  for (const field of nestedFields) {
    if (theme[field] && typeof theme[field] !== 'object') {
      errors.push(`Field "${field}" must be an object`);
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Download themes as a JSON file
 * @param {Object|Object[]} themes - Themes to export
 * @param {string} filename - Filename for the download (default: auto-generated)
 */
export function downloadThemes(themes, filename) {
  const json = exportThemes(themes, { pretty: true, includeMetadata: true });
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const defaultFilename = `table-theme-export-${new Date().toISOString().split('T')[0]}.json`;
  const downloadName = filename || defaultFilename;

  const link = document.createElement('a');
  link.href = url;
  link.download = downloadName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Upload and parse a theme file
 * @param {File} file - File object from input
 * @returns {Promise<Object>} Import result
 */
export function uploadThemeFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const result = importThemes(event.target.result);
        resolve(result);
      } catch (e) {
        reject(new Error(`Failed to parse file: ${e.message}`));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsText(file);
  });
}

/**
 * Copy theme JSON to clipboard
 * @param {Object|Object[]} themes - Themes to copy
 * @returns {Promise<boolean>} Success status
 */
export async function copyThemesToClipboard(themes) {
  try {
    const json = exportThemes(themes, { pretty: true, includeMetadata: true });
    await navigator.clipboard.writeText(json);
    return true;
  } catch (e) {
    console.error('Failed to copy to clipboard:', e);
    return false;
  }
}

/**
 * Paste themes from clipboard
 * @returns {Promise<Object>} Import result
 */
export async function pasteThemesFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    return importThemes(text);
  } catch (e) {
    return {
      success: false,
      themes: [],
      errors: [`Failed to read clipboard: ${e.message}`],
    };
  }
}

/**
 * Create a shareable link with theme data (encoded in URL hash)
 * @param {Object} theme - Theme to share
 * @returns {string} Shareable URL with encoded theme
 */
export function createShareableLink(theme) {
  const json = exportThemes(theme, { pretty: false, includeMetadata: false });
  const encoded = btoa(unescape(encodeURIComponent(json)));
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}#theme=${encoded}`;
}

/**
 * Parse theme from URL hash
 * @returns {Object|null} Theme object or null if not found
 */
export function parseThemeFromURL() {
  const hash = window.location.hash;
  if (!hash || !hash.includes('theme=')) {
    return null;
  }

  try {
    const encoded = hash.split('theme=')[1];
    const json = decodeURIComponent(escape(atob(encoded)));
    const data = JSON.parse(json);
    return data.themes?.[0] || null;
  } catch (e) {
    console.error('Failed to parse theme from URL:', e);
    return null;
  }
}

/**
 * Get export statistics
 * @param {Object[]} themes - Array of themes
 * @returns {Object} Statistics about the themes
 */
export function getExportStats(themes) {
  const themeArray = Array.isArray(themes) ? themes : [themes];

  const customThemes = themeArray.filter((t) => t.isCustom);
  const builtInThemes = themeArray.filter((t) => !t.isCustom);

  return {
    total: themeArray.length,
    custom: customThemes.length,
    builtIn: builtInThemes.length,
    customThemeNames: customThemes.map((t) => t.name),
    builtInThemeIds: builtInThemes.map((t) => t.id),
    jsonSize: exportThemes(themes).length,
  };
}

export default {
  exportThemes,
  importThemes,
  downloadThemes,
  uploadThemeFile,
  copyThemesToClipboard,
  pasteThemesFromClipboard,
  createShareableLink,
  parseThemeFromURL,
  getExportStats,
};
