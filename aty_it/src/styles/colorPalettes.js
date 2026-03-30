/**
 * Extended Color Palettes for Table Themes
 *
 * Provides comprehensive color definitions including:
 * - 15 primary color families (50-900 shades)
 * - 6 neutral scales
 * - 20+ gradient presets
 * - Background color options
 */

// Primary Color Palettes (Tailwind CSS v4 compatible)
export const primaryColors = {
  indigo: {
    50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc',
    400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca',
    800: '#3730a3', 900: '#312e81', 950: '#1e1b4b'
  },
  blue: {
    50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
    400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
    800: '#1e40af', 900: '#1e3a8a', 950: '#172554'
  },
  sky: {
    50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc',
    400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1',
    800: '#075985', 900: '#0c4a6e', 950: '#082f49'
  },
  cyan: {
    50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9',
    400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490',
    800: '#155e75', 900: '#164e63', 950: '#083344'
  },
  teal: {
    50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4',
    400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
    800: '#115e59', 900: '#134e4a', 950: '#042f2e'
  },
  emerald: {
    50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7',
    400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857',
    800: '#065f46', 900: '#064e3b', 950: '#022c22'
  },
  green: {
    50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
    400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d',
    800: '#166534', 900: '#14532d', 950: '#052e16'
  },
  lime: {
    50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264',
    400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f',
    800: '#3f6212', 900: '#365314', 950: '#1a2e05'
  },
  yellow: {
    50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047',
    400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207',
    800: '#854d0e', 900: '#713f12', 950: '#422006'
  },
  amber: {
    50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
    400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309',
    800: '#92400e', 900: '#78350f', 950: '#451a03'
  },
  orange: {
    50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74',
    400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c',
    800: '#9a3412', 900: '#7c2d12', 950: '#431407'
  },
  red: {
    50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5',
    400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c',
    800: '#991b1b', 900: '#7f1d1d', 950: '#450a0a'
  },
  rose: {
    50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af',
    400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c',
    800: '#9f1239', 900: '#881337', 950: '#4c0519'
  },
  pink: {
    50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4',
    400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d',
    800: '#9d174d', 900: '#831843', 950: '#500724'
  },
  purple: {
    50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
    400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce',
    800: '#6b21a8', 900: '#581c87', 950: '#3b0764'
  },
  violet: {
    50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd',
    400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9',
    800: '#5b21b6', 900: '#4c1d95', 950: '#2e1065'
  },
};

// Neutral Color Scales
export const neutralColors = {
  slate: {
    50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1',
    400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155',
    800: '#1e293b', 900: '#0f172a', 950: '#020617'
  },
  gray: {
    50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db',
    400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151',
    800: '#1f2937', 900: '#111827', 950: '#030712'
  },
  zinc: {
    50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8',
    400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46',
    800: '#27272a', 900: '#18181b', 950: '#09090b'
  },
  neutral: {
    50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4',
    400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040',
    800: '#262626', 900: '#171717', 950: '#0a0a0a'
  },
  stone: {
    50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1',
    400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c',
    800: '#292524', 900: '#1c1917', 950: '#0c0a09'
  },
  warm: {
    50: '#fefefe', 100: '#f9f9f8', 200: '#f2f1ef', 300: '#e6e4e1',
    400: '#c8c5c1', 500: '#a5a09a', 600: '#857f78', 700: '#6b655f',
    800: '#57524d', 900: '#48433e', 950: '#2d2a26'
  },
};

// Gradient Presets (Tailwind class names)
export const gradientPresets = {
  // Primary gradients
  'indigo-purple': {
    class: 'bg-gradient-to-r from-indigo-500 to-purple-500',
    name: 'Indigo Purple',
    colors: ['#6366f1', '#a855f7']
  },
  'blue-cyan': {
    class: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    name: 'Blue Cyan',
    colors: ['#3b82f6', '#06b6d4']
  },
  'emerald-teal': {
    class: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    name: 'Emerald Teal',
    colors: ['#10b981', '#14b8a6']
  },
  'rose-pink': {
    class: 'bg-gradient-to-r from-rose-500 to-pink-500',
    name: 'Rose Pink',
    colors: ['#f43f5e', '#ec4899']
  },
  'amber-orange': {
    class: 'bg-gradient-to-r from-amber-500 to-orange-500',
    name: 'Amber Orange',
    colors: ['#f59e0b', '#f97316']
  },
  'lime-green': {
    class: 'bg-gradient-to-r from-lime-500 to-green-500',
    name: 'Lime Green',
    colors: ['#84cc16', '#22c55e']
  },
  'sky-blue': {
    class: 'bg-gradient-to-r from-sky-500 to-blue-500',
    name: 'Sky Blue',
    colors: ['#0ea5e9', '#3b82f6']
  },
  'violet-fuchsia': {
    class: 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
    name: 'Violet Fuchsia',
    colors: ['#8b5cf6', '#d946ef']
  },

  // Nature gradients
  'sunset': {
    class: 'bg-gradient-to-r from-orange-400 via-red-500 to-pink-500',
    name: 'Sunset',
    colors: ['#fb923c', '#ef4444', '#f43f5e']
  },
  'ocean': {
    class: 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500',
    name: 'Ocean',
    colors: ['#06b6d4', '#3b82f6', '#6366f1']
  },
  'forest': {
    class: 'bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500',
    name: 'Forest',
    colors: ['#34d399', '#22c55e', '#14b8a6']
  },
  'autumn': {
    class: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500',
    name: 'Autumn',
    colors: ['#facc15', '#f97316', '#ef4444']
  },
  'midnight': {
    class: 'bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900',
    name: 'Midnight',
    colors: ['#111827', '#581c87', '#0f172a']
  },
  'dawn': {
    class: 'bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900',
    name: 'Dawn',
    colors: ['#0f172a', '#6b21a8', '#0f172a']
  },

  // Subtle gradients
  'gray-subtle': {
    class: 'bg-gradient-to-r from-gray-800 to-gray-900',
    name: 'Gray Subtle',
    colors: ['#1f2937', '#111827']
  },
  'slate-subtle': {
    class: 'bg-gradient-to-r from-slate-800 to-slate-900',
    name: 'Slate Subtle',
    colors: ['#1e293b', '#0f172a']
  },
  'cool-gray': {
    class: 'bg-gradient-to-r from-gray-700 to-gray-800',
    name: 'Cool Gray',
    colors: ['#374151', '#1f2937']
  },

  // Vibrant gradients
  'neon-blue': {
    class: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    name: 'Neon Blue',
    colors: ['#22d3ee', '#3b82f6']
  },
  'neon-pink': {
    class: 'bg-gradient-to-r from-pink-400 to-rose-500',
    name: 'Neon Pink',
    colors: ['#f472b6', '#f43f5e']
  },
  'neon-green': {
    class: 'bg-gradient-to-r from-lime-400 to-emerald-500',
    name: 'Neon Green',
    colors: ['#a3e635', '#10b981']
  },
  'electric': {
    class: 'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500',
    name: 'Electric',
    colors: ['#a855f7', '#ec4899', '#06b6d4']
  },
};

// Background color options for light/dark themes
export const backgroundOptions = {
  light: [
    { id: 'white', name: 'White', class: 'bg-white', color: '#ffffff' },
    { id: 'warm-50', name: 'Warm White', class: 'bg-stone-50', color: '#fafaf9' },
    { id: 'cool-50', name: 'Cool White', class: 'bg-slate-50', color: '#f8fafc' },
    { id: 'gray-50', name: 'Light Gray', class: 'bg-gray-50', color: '#f9fafb' },
    { id: 'blue-50', name: 'Light Blue', class: 'bg-blue-50', color: '#eff6ff' },
    { id: 'cream', name: 'Cream', class: 'bg-amber-50', color: '#fffbeb' },
  ],
  dark: [
    { id: 'black', name: 'Pure Black', class: 'bg-black', color: '#000000' },
    { id: 'gray-900', name: 'Dark Gray', class: 'bg-gray-900', color: '#111827' },
    { id: 'slate-900', name: 'Dark Slate', class: 'bg-slate-900', color: '#0f172a' },
    { id: 'zinc-900', name: 'Dark Zinc', class: 'bg-zinc-900', color: '#18181b' },
    { id: 'navy-900', name: 'Dark Navy', class: 'bg-slate-950', color: '#020617' },
    { id: 'charcoal', name: 'Charcoal', class: 'bg-stone-900', color: '#1c1917' },
  ],
};

// Helper functions

/**
 * Get Tailwind class for a specific color and shade
 * @param {string} colorName - Color family name (e.g., 'indigo', 'blue')
 * @param {number|string} shade - Shade value (50-950)
 * @param {string} type - Type of class ('bg', 'text', 'border')
 * @returns {string} Tailwind class name
 */
export function getColorClass(colorName, shade, type = 'bg') {
  const color = primaryColors[colorName] || neutralColors[colorName];
  if (!color || !color[shade]) {
    console.warn(`Color ${colorName}-${shade} not found`);
    return type === 'bg' ? 'bg-gray-500' : type === 'text' ? 'text-gray-500' : 'border-gray-500';
  }
  return `${type}-${colorName}-${shade}`;
}

/**
 * Get hex color value for a specific color and shade
 * @param {string} colorName - Color family name
 * @param {number|string} shade - Shade value (50-950)
 * @returns {string} Hex color value
 */
export function getHexColor(colorName, shade) {
  return primaryColors[colorName]?.[shade] || neutralColors[colorName]?.[shade] || '#6b7280';
}

/**
 * Get gradient class by name
 * @param {string} gradientName - Name of the gradient preset
 * @returns {string} Tailwind gradient class
 */
export function getGradientClass(gradientName) {
  return gradientPresets[gradientName]?.class || gradientPresets['gray-subtle'].class;
}

/**
 * Get all colors as selectable options
 * @returns {Array} Array of color options
 */
export function getAllColorOptions() {
  const colors = [];

  // Primary colors
  Object.keys(primaryColors).forEach(name => {
    colors.push({
      id: name,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      type: 'primary',
      shades: Object.keys(primaryColors[name]),
      preview: primaryColors[name][500]
    });
  });

  // Neutral colors
  Object.keys(neutralColors).forEach(name => {
    colors.push({
      id: name,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      type: 'neutral',
      shades: Object.keys(neutralColors[name]),
      preview: neutralColors[name][500]
    });
  });

  return colors;
}

/**
 * Get all gradients as selectable options
 * @returns {Array} Array of gradient options
 */
export function getAllGradientOptions() {
  return Object.entries(gradientPresets).map(([id, data]) => ({
    id,
    name: data.name,
    class: data.class,
    colors: data.colors
  }));
}

export default {
  primaryColors,
  neutralColors,
  gradientPresets,
  backgroundOptions,
  getColorClass,
  getHexColor,
  getGradientClass,
  getAllColorOptions,
  getAllGradientOptions,
};
