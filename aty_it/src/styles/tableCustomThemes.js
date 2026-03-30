/**
 * Table Custom Theme Builder Utilities
 *
 * Provides functions for creating, merging, and validating custom table themes.
 */

import { tableThemes } from './tableThemes';

/**
 * Deep merge two theme objects
 * @param {Object} base - Base theme object
 * @param {Object} overrides - Override values
 * @returns {Object} Merged theme object
 */
export function mergeThemes(base, overrides) {
  if (!base || typeof base !== 'object') return overrides || {};
  if (!overrides || typeof overrides !== 'object') return base;

  const result = { ...base };

  for (const key in overrides) {
    if (overrides.hasOwnProperty(key)) {
      const overrideValue = overrides[key];
      const baseValue = base[key];

      if (
        overrideValue &&
        typeof overrideValue === 'object' &&
        !Array.isArray(overrideValue)
      ) {
        result[key] = mergeThemes(baseValue, overrideValue);
      } else {
        result[key] = overrideValue;
      }
    }
  }

  return result;
}

/**
 * Create a custom theme based on a base theme with customizations
 * @param {string} baseThemeId - ID of the base theme (e.g., 'dark', 'light')
 * @param {Object} customizations - Custom overrides to apply
 * @param {string} customName - Name for the custom theme
 * @param {string} customDescription - Description for the custom theme
 * @returns {Object} Custom theme object
 */
export function createCustomTheme(baseThemeId, customizations, customName, customDescription) {
  const baseTheme = tableThemes[baseThemeId];

  if (!baseTheme) {
    throw new Error(`Base theme "${baseThemeId}" not found. Available themes: ${Object.keys(tableThemes).join(', ')}`);
  }

  const customTheme = mergeThemes(baseTheme, customizations);

  // Ensure required fields exist
  customTheme.id = `custom-${baseThemeId}-${Date.now()}`;
  customTheme.name = customName || `Custom ${baseTheme.name}`;
  customTheme.description = customDescription || `Custom theme based on ${baseTheme.name}`;
  customTheme.isCustom = true;
  customTheme.baseThemeId = baseThemeId;
  customTheme.createdAt = new Date().toISOString();

  return customTheme;
}

/**
 * Validate a theme object structure
 * @param {Object} theme - Theme object to validate
 * @returns {Object} Validation result with isValid boolean and errors array
 */
export function validateTheme(theme) {
  const errors = [];
  const requiredFields = ['id', 'name', 'container'];

  const optionalNestedFields = [
    'header', 'body', 'row', 'cell', 'border', 'actions',
    'sortIcon', 'pagination', 'statusBadge', 'emptyState', 'loading'
  ];

  // Check required fields
  for (const field of requiredFields) {
    if (!theme[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Check nested field structures
  for (const nestedField of optionalNestedFields) {
    if (theme[nestedField] && typeof theme[nestedField] !== 'object') {
      errors.push(`Field "${nestedField}" must be an object`);
    }
  }

  // Validate specific nested structures
  if (theme.header) {
    if (theme.header.bg && typeof theme.header.bg !== 'string') {
      errors.push('header.bg must be a string');
    }
    if (theme.header.text && typeof theme.header.text !== 'string') {
      errors.push('header.text must be a string');
    }
  }

  if (theme.row) {
    const rowFields = ['default', 'hover', 'selected'];
    for (const field of rowFields) {
      if (theme.row[field] && typeof theme.row[field] !== 'string') {
        errors.push(`row.${field} must be a string`);
      }
    }
  }

  if (theme.statusBadge) {
    const badgeFields = ['active', 'inactive', 'completed', 'pending'];
    for (const field of badgeFields) {
      if (theme.statusBadge[field] && typeof theme.statusBadge[field] !== 'string') {
        errors.push(`statusBadge.${field} must be a string`);
      }
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Get a list of available base themes for customization
 * @returns {Array} Array of theme objects with id, name, description
 */
export function getAvailableBaseThemes() {
  return Object.values(tableThemes).map(theme => ({
    id: theme.id,
    name: theme.name,
    description: theme.description,
  }));
}


/**
 * Apply multiple presets to create a combined customization
 * @param {Array} presetConfigs - Array of {type, value} objects
 * @returns {Object} Combined preset overrides
 */
export function applyPresets(presetConfigs) {
  let combined = {};

  for (const config of presetConfigs) {
    const preset = createPreset(config.type, config.value);
    combined = mergeThemes(combined, preset);
  }

  return combined;
}

/**
 * Get all available presets grouped by category (Phase 3 Extended)
 * @returns {Object} Presets grouped by type
 */
export function getAllPresets() {
  return {
    // Density & Spacing
    density: [
      { value: 'ultra-compact', label: 'Ultra Compact', description: 'Minimal padding, max data' },
      { value: 'compact', label: 'Compact', description: 'Reduced padding' },
      { value: 'comfortable', label: 'Comfortable', description: 'Default spacing' },
      { value: 'spacious', label: 'Spacious', description: 'Extra padding' },
      { value: 'ultra-spacious', label: 'Ultra Spacious', description: 'Maximum padding' },
    ],
    // Contrast
    contrast: [
      { value: 'ultra-high', label: 'Ultra High', description: 'Maximum contrast (WCAG AAA)' },
      { value: 'high', label: 'High', description: 'High contrast (WCAG AA)' },
      { value: 'medium', label: 'Medium', description: 'Balanced contrast' },
      { value: 'soft', label: 'Soft', description: 'Subtle contrast' },
      { value: 'muted', label: 'Muted', description: 'Low contrast, gentle' },
    ],
    // Accent Colors (15 options)
    accent: [
      { value: 'indigo', label: 'Indigo', description: 'Purple-blue accents' },
      { value: 'blue', label: 'Blue', description: 'Classic blue' },
      { value: 'sky', label: 'Sky', description: 'Light blue accents' },
      { value: 'cyan', label: 'Cyan', description: 'Cyan/teal accents' },
      { value: 'teal', label: 'Teal', description: 'Teal accents' },
      { value: 'emerald', label: 'Emerald', description: 'Green accents' },
      { value: 'green', label: 'Green', description: 'Forest green' },
      { value: 'lime', label: 'Lime', description: 'Lime green' },
      { value: 'yellow', label: 'Yellow', description: 'Yellow accents' },
      { value: 'amber', label: 'Amber', description: 'Amber/orange' },
      { value: 'orange', label: 'Orange', description: 'Orange accents' },
      { value: 'red', label: 'Red', description: 'Red accents' },
      { value: 'rose', label: 'Rose', description: 'Rose/pink accents' },
      { value: 'pink', label: 'Pink', description: 'Pink accents' },
      { value: 'purple', label: 'Purple', description: 'Purple accents' },
      { value: 'violet', label: 'Violet', description: 'Violet accents' },
    ],
    // Borders
    borders: [
      { value: 'none', label: 'None', description: 'No visible borders' },
      { value: 'subtle', label: 'Subtle', description: 'Light dividers' },
      { value: 'medium', label: 'Medium', description: 'Standard borders' },
      { value: 'prominent', label: 'Prominent', description: 'Bold borders' },
      { value: 'heavy', label: 'Heavy', description: 'Extra thick borders' },
    ],
    // Corner Radius
    radius: [
      { value: 'none', label: 'None', description: 'Sharp corners' },
      { value: 'small', label: 'Small', description: 'Slight rounding (4px)' },
      { value: 'medium', label: 'Medium', description: 'Medium rounding (8px)' },
      { value: 'large', label: 'Large', description: 'Large rounding (12px)' },
      { value: 'xl', label: 'Extra Large', description: 'XL rounding (16px)' },
      { value: 'full', label: 'Full', description: 'Pill-shaped corners' },
    ],
    // Shadow Depth
    shadow: [
      { value: 'none', label: 'None', description: 'No shadow' },
      { value: 'sm', label: 'Small', description: 'Subtle shadow' },
      { value: 'md', label: 'Medium', description: 'Default shadow' },
      { value: 'lg', label: 'Large', description: 'Prominent shadow' },
      { value: 'xl', label: 'Extra Large', description: 'Deep shadow' },
      { value: '2xl', label: '2X Large', description: 'Maximum shadow' },
    ],
    // Row Hover Effects
    hoverEffect: [
      { value: 'color', label: 'Color', description: 'Color change only' },
      { value: 'shadow', label: 'Shadow', description: 'Shadow on hover' },
      { value: 'scale', label: 'Scale', description: 'Slight scale up' },
      { value: 'glow', label: 'Glow', description: 'Glowing effect' },
      { value: 'lift', label: 'Lift', description: 'Lift with shadow' },
      { value: 'brightness', label: 'Brightness', description: 'Brighten on hover' },
    ],
    // Status Badge Styles
    badgeStyle: [
      { value: 'pill', label: 'Pill', description: 'Rounded pill shape' },
      { value: 'rounded', label: 'Rounded', description: 'Rounded rectangle' },
      { value: 'square', label: 'Square', description: 'Square corners' },
      { value: 'outlined', label: 'Outlined', description: 'Outline style' },
      { value: 'filled', label: 'Filled', description: 'Solid fill' },
    ],
    // Font Sizes
    fontSize: [
      { value: 'xxs', label: 'XXS', description: '10px - Extra tiny' },
      { value: 'xs', label: 'XS', description: '11px - Extra small' },
      { value: 'sm', label: 'SM', description: '12px - Small' },
      { value: 'base', label: 'Base', description: '14px - Medium' },
      { value: 'lg', label: 'LG', description: '16px - Large' },
      { value: 'xl', label: 'XL', description: '18px - Extra large' },
      { value: '2xl', label: '2XL', description: '20px - 2X Large' },
    ],
    // Font Weights
    fontWeight: [
      { value: 'light', label: 'Light', description: '300 weight' },
      { value: 'normal', label: 'Normal', description: '400 weight' },
      { value: 'medium', label: 'Medium', description: '500 weight' },
      { value: 'semibold', label: 'Semibold', description: '600 weight' },
      { value: 'bold', label: 'Bold', description: '700 weight' },
      { value: 'extrabold', label: 'Extrabold', description: '800 weight' },
    ],
    // Animation Speed
    animationSpeed: [
      { value: 'instant', label: 'Instant', description: 'No transition' },
      { value: 'fast', label: 'Fast', description: '150ms' },
      { value: 'normal', label: 'Normal', description: '200ms' },
      { value: 'slow', label: 'Slow', description: '300ms' },
      { value: 'slower', label: 'Slower', description: '500ms' },
    ],
    // Header Colors
    headerColor: [
      { value: 'default', label: 'Default', description: 'Use theme default' },
      { value: 'indigo', label: 'Indigo', description: 'Purple-blue accent' },
      { value: 'blue', label: 'Blue', description: 'Classic blue' },
      { value: 'emerald', label: 'Emerald', description: 'Green accent' },
      { value: 'rose', label: 'Rose', description: 'Pink-red accent' },
      { value: 'amber', label: 'Amber', description: 'Orange-yellow' },
      { value: 'slate', label: 'Slate', description: 'Gray-blue neutral' },
    ],
    // Row Colors
    rowColor: [
      { value: 'default', label: 'Default', description: 'Use theme default' },
      { value: 'neutral', label: 'Neutral', description: 'Gray tones' },
      { value: 'warm', label: 'Warm', description: 'Warm undertones' },
      { value: 'cool', label: 'Cool', description: 'Cool undertones' },
    ],
    // Gradients
    gradient: [
      { value: 'none', label: 'None', description: 'No gradient' },
      { value: 'indigo-purple', label: 'Indigo Purple', description: 'Purple to indigo' },
      { value: 'blue-cyan', label: 'Blue Cyan', description: 'Blue to cyan' },
      { value: 'emerald-teal', label: 'Emerald Teal', description: 'Green to teal' },
      { value: 'rose-pink', label: 'Rose Pink', description: 'Rose to pink' },
      { value: 'amber-orange', label: 'Amber Orange', description: 'Amber to orange' },
      { value: 'sunset', label: 'Sunset', description: 'Orange-red-pink' },
      { value: 'ocean', label: 'Ocean', description: 'Cyan-blue-indigo' },
    ],
    // Header Style
    header: [
      { value: 'default', label: 'Default', description: 'Theme default' },
      { value: 'bold', label: 'Bold', description: 'Large, heavy weight' },
      { value: 'subtle', label: 'Subtle', description: 'Small, light weight' },
      { value: 'uppercase', label: 'Uppercase', description: 'All caps, tracked' },
      { value: 'gradient', label: 'Gradient', description: 'Gradient background' },
    ],
    // Hover Effects
    hover: [
      { value: 'color', label: 'Color', description: 'Background change' },
      { value: 'shadow', label: 'Shadow', description: 'Shadow on hover' },
      { value: 'scale', label: 'Scale', description: 'Slight scale up' },
      { value: 'glow', label: 'Glow', description: 'Glowing effect' },
      { value: 'none', label: 'None', description: 'No hover effect' },
    ],
    // Badge Styles
    badge: [
      { value: 'pill', label: 'Pill', description: 'Rounded pill shape' },
      { value: 'rounded', label: 'Rounded', description: 'Rounded rectangle' },
      { value: 'square', label: 'Square', description: 'Square corners' },
      { value: 'outlined', label: 'Outlined', description: 'Border only' },
      { value: 'filled', label: 'Filled', description: 'Solid background' },
    ],
    // Animation Types
    animation: [
      { value: 'fade', label: 'Fade', description: 'Fade in/out' },
      { value: 'slide', label: 'Slide', description: 'Slide animation' },
      { value: 'scale', label: 'Scale', description: 'Scale animation' },
      { value: 'bounce', label: 'Bounce', description: 'Bouncy effect' },
      { value: 'none', label: 'None', description: 'No animation' },
    ],
  };
}

/**
 * Extended preset creation with more categories
 */
export function createPreset(presetType, value) {
  const presets = {
    density: {
      'ultra-compact': {
        cell: { padding: 'px-2 py-1 text-xs' },
        checkbox: 'w-3 h-3',
        header: { text: 'text-[10px] font-medium' },
        pagination: { button: 'px-2 py-0.5 text-xs' },
      },
      comfortable: {
        cell: { padding: 'px-6 py-4' },
        row: { hover: 'hover:bg-opacity-80' },
      },
      compact: {
        cell: { padding: 'px-3 py-2' },
        checkbox: 'w-3 h-3',
        pagination: { button: 'px-3 py-1 text-sm' },
      },
      dense: {
        cell: { padding: 'px-2 py-1 text-xs' },
        checkbox: 'w-3 h-3',
        header: { text: 'text-xs font-medium' },
      },
      spacious: {
        cell: { padding: 'px-5 py-4' },
        row: { hover: 'hover:bg-opacity-90' },
      },
      'ultra-spacious': {
        cell: { padding: 'px-6 py-5 text-base' },
        header: { text: 'text-sm font-semibold' },
      },
    },
    contrast: {
      'ultra-high': {
        cell: { text: 'text-white', textSecondary: 'text-gray-100' },
        header: { text: 'text-white font-black' },
        border: { outer: 'border-2 border-white' },
      },
      high: {
        cell: { text: 'text-white', textSecondary: 'text-gray-200' },
        header: { text: 'text-white font-bold' },
        border: { outer: 'border-2 border-white' },
      },
      medium: {
        cell: { text: 'text-gray-100', textSecondary: 'text-gray-300' },
        header: { text: 'text-gray-200 font-medium' },
      },
      soft: {
        cell: { text: 'text-gray-300', textSecondary: 'text-gray-400' },
        header: { text: 'text-gray-400' },
      },
      muted: {
        cell: { text: 'text-gray-400', textSecondary: 'text-gray-500' },
        header: { text: 'text-gray-500 font-normal' },
      },
    },
    accent: {
      indigo: {
        actions: { edit: 'text-indigo-400 hover:text-indigo-300' },
        checkbox: 'text-indigo-600 focus:ring-indigo-500',
        row: { selected: 'bg-indigo-900/50' },
        sortIcon: { active: 'text-indigo-600' },
      },
      blue: {
        actions: { edit: 'text-blue-400 hover:text-blue-300' },
        checkbox: 'text-blue-600 focus:ring-blue-500',
        row: { selected: 'bg-blue-900/50' },
        sortIcon: { active: 'text-blue-500' },
      },
      sky: {
        actions: { edit: 'text-sky-400 hover:text-sky-300' },
        checkbox: 'text-sky-600 focus:ring-sky-500',
        row: { selected: 'bg-sky-900/50' },
        sortIcon: { active: 'text-sky-500' },
      },
      cyan: {
        actions: { edit: 'text-cyan-400 hover:text-cyan-300' },
        checkbox: 'text-cyan-600 focus:ring-cyan-500',
        row: { selected: 'bg-cyan-900/50' },
        sortIcon: { active: 'text-cyan-500' },
      },
      teal: {
        actions: { edit: 'text-teal-400 hover:text-teal-300' },
        checkbox: 'text-teal-600 focus:ring-teal-500',
        row: { selected: 'bg-teal-900/50' },
        sortIcon: { active: 'text-teal-500' },
      },
      emerald: {
        actions: { edit: 'text-emerald-400 hover:text-emerald-300' },
        checkbox: 'text-emerald-600 focus:ring-emerald-500',
        row: { selected: 'bg-emerald-900/50' },
        sortIcon: { active: 'text-emerald-500' },
      },
      green: {
        actions: { edit: 'text-green-400 hover:text-green-300' },
        checkbox: 'text-green-600 focus:ring-green-500',
        row: { selected: 'bg-green-900/50' },
        sortIcon: { active: 'text-green-500' },
      },
      lime: {
        actions: { edit: 'text-lime-400 hover:text-lime-300' },
        checkbox: 'text-lime-600 focus:ring-lime-500',
        row: { selected: 'bg-lime-900/50' },
        sortIcon: { active: 'text-lime-500' },
      },
      yellow: {
        actions: { edit: 'text-yellow-400 hover:text-yellow-300' },
        checkbox: 'text-yellow-600 focus:ring-yellow-500',
        row: { selected: 'bg-yellow-900/50' },
        sortIcon: { active: 'text-yellow-500' },
      },
      amber: {
        actions: { edit: 'text-amber-400 hover:text-amber-300' },
        checkbox: 'text-amber-600 focus:ring-amber-500',
        row: { selected: 'bg-amber-900/50' },
        sortIcon: { active: 'text-amber-500' },
      },
      orange: {
        actions: { edit: 'text-orange-400 hover:text-orange-300' },
        checkbox: 'text-orange-600 focus:ring-orange-500',
        row: { selected: 'bg-orange-900/50' },
        sortIcon: { active: 'text-orange-500' },
      },
      red: {
        actions: { edit: 'text-red-400 hover:text-red-300' },
        checkbox: 'text-red-600 focus:ring-red-500',
        row: { selected: 'bg-red-900/50' },
        sortIcon: { active: 'text-red-500' },
      },
      rose: {
        actions: { edit: 'text-rose-400 hover:text-rose-300' },
        checkbox: 'text-rose-600 focus:ring-rose-500',
        row: { selected: 'bg-rose-900/50' },
        sortIcon: { active: 'text-rose-500' },
      },
      pink: {
        actions: { edit: 'text-pink-400 hover:text-pink-300' },
        checkbox: 'text-pink-600 focus:ring-pink-500',
        row: { selected: 'bg-pink-900/50' },
        sortIcon: { active: 'text-pink-500' },
      },
      purple: {
        actions: { edit: 'text-purple-400 hover:text-purple-300' },
        checkbox: 'text-purple-600 focus:ring-purple-500',
        row: { selected: 'bg-purple-900/50' },
        sortIcon: { active: 'text-purple-500' },
      },
      violet: {
        actions: { edit: 'text-violet-400 hover:text-violet-300' },
        checkbox: 'text-violet-600 focus:ring-violet-500',
        row: { selected: 'bg-violet-900/50' },
        sortIcon: { active: 'text-violet-500' },
      },
    },
    borders: {
      none: {
        border: { outer: '', inner: '', top: '' },
        row: { default: '', hover: '' },
      },
      subtle: {
        border: { outer: '', inner: 'divide-y divide-gray-600' },
      },
      medium: {
        border: { outer: 'border border-gray-500', inner: 'divide-y divide-gray-500' },
      },
      prominent: {
        border: { outer: 'border-2 border-gray-500', inner: 'divide-y divide-gray-500' },
        row: { default: 'border border-gray-700' },
      },
      heavy: {
        border: { outer: 'border-4 border-gray-400', inner: 'divide-y-2 divide-gray-400' },
        row: { default: 'border-2 border-gray-600' },
      },
    },
    radius: {
      none: {
        container: 'rounded-none',
      },
      small: {
        container: 'rounded',
      },
      medium: {
        container: 'rounded-lg',
      },
      large: {
        container: 'rounded-xl',
      },
      xl: {
        container: 'rounded-2xl',
      },
      full: {
        container: 'rounded-3xl',
      },
    },
    shadow: {
      none: {
        container: 'shadow-none',
      },
      sm: {
        container: 'shadow-sm',
      },
      md: {
        container: 'shadow-md',
      },
      lg: {
        container: 'shadow-lg',
      },
      xl: {
        container: 'shadow-xl',
      },
      '2xl': {
        container: 'shadow-2xl',
      },
    },
    hoverEffect: {
      color: {
        row: { hover: 'hover:bg-opacity-80 transition-colors' },
      },
      shadow: {
        row: { hover: 'hover:shadow-md transition-shadow' },
      },
      scale: {
        row: { hover: 'hover:scale-[1.01] transition-transform' },
      },
      glow: {
        row: { hover: 'hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-shadow' },
      },
      lift: {
        row: { hover: 'hover:-translate-y-0.5 hover:shadow-lg transition-all' },
      },
      brightness: {
        row: { hover: 'hover:brightness-110 transition-filter' },
      },
    },
    badgeStyle: {
      pill: {
        statusBadge: {
          active: 'bg-green-900/50 text-green-400 rounded-full',
          inactive: 'bg-gray-700 text-gray-400 rounded-full',
          completed: 'bg-green-900/50 text-green-400 rounded-full',
          pending: 'bg-yellow-900/50 text-yellow-400 rounded-full',
        },
      },
      rounded: {
        statusBadge: {
          active: 'bg-green-900/50 text-green-400 rounded-md',
          inactive: 'bg-gray-700 text-gray-400 rounded-md',
          completed: 'bg-green-900/50 text-green-400 rounded-md',
          pending: 'bg-yellow-900/50 text-yellow-400 rounded-md',
        },
      },
      square: {
        statusBadge: {
          active: 'bg-green-900/50 text-green-400 rounded-none',
          inactive: 'bg-gray-700 text-gray-400 rounded-none',
          completed: 'bg-green-900/50 text-green-400 rounded-none',
          pending: 'bg-yellow-900/50 text-yellow-400 rounded-none',
        },
      },
      outlined: {
        statusBadge: {
          active: 'bg-transparent text-green-400 border border-green-500',
          inactive: 'bg-transparent text-gray-400 border border-gray-500',
          completed: 'bg-transparent text-green-400 border border-green-500',
          pending: 'bg-transparent text-yellow-400 border border-yellow-500',
        },
      },
      filled: {
        statusBadge: {
          active: 'bg-green-600 text-white',
          inactive: 'bg-gray-600 text-white',
          completed: 'bg-green-600 text-white',
          pending: 'bg-yellow-600 text-black',
        },
      },
    },
    fontSize: {
      xxs: {
        cell: { text: 'text-[10px]' },
        header: { text: 'text-[10px]' },
      },
      xs: {
        cell: { text: 'text-[11px]' },
        header: { text: 'text-[11px]' },
      },
      sm: {
        cell: { text: 'text-xs' },
        header: { text: 'text-xs' },
      },
      base: {
        cell: { text: 'text-sm' },
        header: { text: 'text-sm' },
      },
      lg: {
        cell: { text: 'text-base' },
        header: { text: 'text-base' },
      },
      xl: {
        cell: { text: 'text-lg' },
        header: { text: 'text-lg' },
      },
      '2xl': {
        cell: { text: 'text-xl' },
        header: { text: 'text-xl' },
      },
    },
    fontWeight: {
      light: {
        cell: { text: 'font-light' },
        header: { text: 'font-light' },
      },
      normal: {
        cell: { text: 'font-normal' },
        header: { text: 'font-normal' },
      },
      medium: {
        cell: { text: 'font-medium' },
        header: { text: 'font-medium' },
      },
      semibold: {
        cell: { text: 'font-semibold' },
        header: { text: 'font-semibold' },
      },
      bold: {
        cell: { text: 'font-bold' },
        header: { text: 'font-bold' },
      },
      extrabold: {
        cell: { text: 'font-extrabold' },
        header: { text: 'font-extrabold' },
      },
    },
    animationSpeed: {
      instant: {
        row: { hover: '' },
      },
      fast: {
        row: { hover: 'transition-all duration-150' },
      },
      normal: {
        row: { hover: 'transition-all duration-200' },
      },
      slow: {
        row: { hover: 'transition-all duration-300' },
      },
      slower: {
        row: { hover: 'transition-all duration-500' },
      },
    },
    headerColor: {
      indigo: {
        header: { bg: 'bg-indigo-600', text: 'text-white' },
      },
      blue: {
        header: { bg: 'bg-blue-600', text: 'text-white' },
      },
      emerald: {
        header: { bg: 'bg-emerald-600', text: 'text-white' },
      },
      rose: {
        header: { bg: 'bg-rose-600', text: 'text-white' },
      },
      amber: {
        header: { bg: 'bg-amber-600', text: 'text-white' },
      },
      slate: {
        header: { bg: 'bg-slate-600', text: 'text-white' },
      },
    },
    rowColor: {
      neutral: {
        row: { default: 'bg-gray-900', hover: 'hover:bg-gray-800' },
      },
      warm: {
        row: { default: 'bg-orange-950/20', hover: 'hover:bg-orange-900/30' },
      },
      cool: {
        row: { default: 'bg-blue-950/20', hover: 'hover:bg-blue-900/30' },
      },
    },
    gradient: {
      'indigo-purple': {
        header: { bg: 'bg-gradient-to-r from-indigo-600 to-purple-600' },
      },
      'blue-cyan': {
        header: { bg: 'bg-gradient-to-r from-blue-600 to-cyan-600' },
      },
      'emerald-teal': {
        header: { bg: 'bg-gradient-to-r from-emerald-600 to-teal-600' },
      },
      'rose-pink': {
        header: { bg: 'bg-gradient-to-r from-rose-600 to-pink-600' },
      },
      'amber-orange': {
        header: { bg: 'bg-gradient-to-r from-amber-600 to-orange-600' },
      },
      sunset: {
        header: { bg: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500' },
      },
      ocean: {
        header: { bg: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500' },
      },
    },
    header: {
      bold: {
        header: { text: 'text-sm font-black uppercase' },
      },
      subtle: {
        header: { text: 'text-[10px] font-light' },
      },
      uppercase: {
        header: { text: 'text-xs font-bold uppercase tracking-wider' },
      },
    },
    hover: {
      color: {
        row: { hover: 'hover:bg-opacity-80 transition-colors' },
      },
      shadow: {
        row: { hover: 'hover:shadow-md transition-shadow' },
      },
      scale: {
        row: { hover: 'hover:scale-[1.01] transition-transform' },
      },
      glow: {
        row: { hover: 'hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-shadow' },
      },
      none: {
        row: { hover: '' },
      },
    },
    badge: {
      pill: {
        statusBadge: {
          active: 'bg-green-900/50 text-green-400 rounded-full',
          inactive: 'bg-gray-700 text-gray-400 rounded-full',
          completed: 'bg-green-900/50 text-green-400 rounded-full',
          pending: 'bg-yellow-900/50 text-yellow-400 rounded-full',
        },
      },
      rounded: {
        statusBadge: {
          active: 'bg-green-900/50 text-green-400 rounded-md',
          inactive: 'bg-gray-700 text-gray-400 rounded-md',
        },
      },
      square: {
        statusBadge: {
          active: 'bg-green-900/50 text-green-400 rounded-none',
          inactive: 'bg-gray-700 text-gray-400 rounded-none',
        },
      },
      outlined: {
        statusBadge: {
          active: 'bg-transparent text-green-400 border border-green-500',
          inactive: 'bg-transparent text-gray-400 border border-gray-500',
        },
      },
      filled: {
        statusBadge: {
          active: 'bg-green-600 text-white',
          inactive: 'bg-gray-600 text-white',
        },
      },
    },
    animation: {
      fade: {
        row: { default: 'animate-fade-in-entry' },
      },
      slide: {
        row: { default: 'animate-slide-up-entry' },
      },
      scale: {
        row: { default: 'animate-scale-in-entry' },
      },
    },
  };

  return presets[presetType]?.[value] || {};
}

export default {
  mergeThemes,
  createCustomTheme,
  validateTheme,
  getAvailableBaseThemes,
  createPreset,
  applyPresets,
  getAllPresets,
};
