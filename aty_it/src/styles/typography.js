/**
 * Typography Definitions for Table Themes
 *
 * Provides typography options for:
 * - Font families (system + Google Fonts)
 * - Font sizes
 * - Font weights
 * - Letter spacing
 * - Line heights
 * - Text transforms
 */

// Font Family Definitions
export const fontFamilies = {
  // System fonts
  'sans': {
    id: 'sans',
    name: 'Sans Serif',
    class: 'font-sans',
    css: '',
    category: 'system',
    preview: 'Aa Bb Cc',
  },
  'serif': {
    id: 'serif',
    name: 'Serif',
    class: 'font-serif',
    css: '',
    category: 'system',
    preview: 'Aa Bb Cc',
  },
  'mono': {
    id: 'mono',
    name: 'Monospace',
    class: 'font-mono',
    css: '',
    category: 'system',
    preview: 'Aa Bb 12',
  },

  // Google Fonts (need to be loaded in index.html)
  'inter': {
    id: 'inter',
    name: 'Inter',
    class: 'font-inter',
    css: '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");',
    category: 'google',
    preview: 'Aa Bb Cc',
    url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  },
  'roboto': {
    id: 'roboto',
    name: 'Roboto',
    class: 'font-roboto',
    css: '@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");',
    category: 'google',
    preview: 'Aa Bb Cc',
    url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
  },
  'open-sans': {
    id: 'open-sans',
    name: 'Open Sans',
    class: 'font-open-sans',
    css: '@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");',
    category: 'google',
    preview: 'Aa Bb Cc',
    url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap',
  },
  'lato': {
    id: 'lato',
    name: 'Lato',
    class: 'font-lato',
    css: '@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap");',
    category: 'google',
    preview: 'Aa Bb Cc',
    url: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap',
  },
  'poppins': {
    id: 'poppins',
    name: 'Poppins',
    class: 'font-poppins',
    css: '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");',
    category: 'google',
    preview: 'Aa Bb Cc',
    url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  },
  'noto-sans': {
    id: 'noto-sans',
    name: 'Noto Sans',
    class: 'font-noto-sans',
    css: '@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap");',
    category: 'google',
    preview: 'Aa Bb Cc',
    url: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap',
    supports: ['myanmar', 'latin'],
  },
  'montserrat': {
    id: 'montserrat',
    name: 'Montserrat',
    class: 'font-montserrat',
    css: '@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");',
    category: 'google',
    preview: 'Aa Bb Cc',
    url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap',
  },
  'raleway': {
    id: 'raleway',
    name: 'Raleway',
    class: 'font-raleway',
    css: '@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap");',
    category: 'google',
    preview: 'Aa Bb Cc',
    url: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap',
  },
};

// Font Size Definitions
export const fontSizes = {
  'xxs': {
    id: 'xxs',
    name: 'Extra Extra Small',
    class: 'text-[10px]',
    px: 10,
    rem: '0.625rem',
  },
  'xs': {
    id: 'xs',
    name: 'Extra Small',
    class: 'text-[11px]',
    px: 11,
    rem: '0.6875rem',
  },
  'sm': {
    id: 'sm',
    name: 'Small',
    class: 'text-xs',
    px: 12,
    rem: '0.75rem',
  },
  'base': {
    id: 'base',
    name: 'Medium',
    class: 'text-sm',
    px: 14,
    rem: '0.875rem',
  },
  'lg': {
    id: 'lg',
    name: 'Large',
    class: 'text-base',
    px: 16,
    rem: '1rem',
  },
  'xl': {
    id: 'xl',
    name: 'Extra Large',
    class: 'text-lg',
    px: 18,
    rem: '1.125rem',
  },
  '2xl': {
    id: '2xl',
    name: '2X Large',
    class: 'text-xl',
    px: 20,
    rem: '1.25rem',
  },
  '3xl': {
    id: '3xl',
    name: '3X Large',
    class: 'text-2xl',
    px: 24,
    rem: '1.5rem',
  },
};

// Font Weight Definitions
export const fontWeights = {
  'light': {
    id: 'light',
    name: 'Light',
    class: 'font-light',
    weight: 300,
  },
  'normal': {
    id: 'normal',
    name: 'Normal',
    class: 'font-normal',
    weight: 400,
  },
  'medium': {
    id: 'medium',
    name: 'Medium',
    class: 'font-medium',
    weight: 500,
  },
  'semibold': {
    id: 'semibold',
    name: 'Semibold',
    class: 'font-semibold',
    weight: 600,
  },
  'bold': {
    id: 'bold',
    name: 'Bold',
    class: 'font-bold',
    weight: 700,
  },
  'extrabold': {
    id: 'extrabold',
    name: 'Extra Bold',
    class: 'font-extrabold',
    weight: 800,
  },
  'black': {
    id: 'black',
    name: 'Black',
    class: 'font-black',
    weight: 900,
  },
};

// Letter Spacing Definitions
export const letterSpacing = {
  'tighter': {
    id: 'tighter',
    name: 'Tighter',
    class: 'tracking-tighter',
    value: '-0.05em',
  },
  'tight': {
    id: 'tight',
    name: 'Tight',
    class: 'tracking-tight',
    value: '-0.025em',
  },
  'normal': {
    id: 'normal',
    name: 'Normal',
    class: 'tracking-normal',
    value: '0em',
  },
  'wide': {
    id: 'wide',
    name: 'Wide',
    class: 'tracking-wide',
    value: '0.025em',
  },
  'wider': {
    id: 'wider',
    name: 'Wider',
    class: 'tracking-wider',
    value: '0.05em',
  },
  'widest': {
    id: 'widest',
    name: 'Widest',
    class: 'tracking-widest',
    value: '0.1em',
  },
};

// Line Height Definitions
export const lineHeights = {
  'none': {
    id: 'none',
    name: 'None',
    class: 'leading-none',
    value: 1,
  },
  'tight': {
    id: 'tight',
    name: 'Tight',
    class: 'leading-tight',
    value: 1.25,
  },
  'snug': {
    id: 'snug',
    name: 'Snug',
    class: 'leading-snug',
    value: 1.375,
  },
  'normal': {
    id: 'normal',
    name: 'Normal',
    class: 'leading-normal',
    value: 1.5,
  },
  'relaxed': {
    id: 'relaxed',
    name: 'Relaxed',
    class: 'leading-relaxed',
    value: 1.625,
  },
  'loose': {
    id: 'loose',
    name: 'Loose',
    class: 'leading-loose',
    value: 2,
  },
};

// Text Transform Definitions
export const textTransforms = {
  'none': {
    id: 'none',
    name: 'None',
    class: 'normal-case',
  },
  'uppercase': {
    id: 'uppercase',
    name: 'Uppercase',
    class: 'uppercase',
  },
  'lowercase': {
    id: 'lowercase',
    name: 'Lowercase',
    class: 'lowercase',
  },
  'capitalize': {
    id: 'capitalize',
    name: 'Capitalize',
    class: 'capitalize',
  },
};

// Text Decoration Definitions
export const textDecorations = {
  'none': {
    id: 'none',
    name: 'None',
    class: 'no-underline',
  },
  'underline': {
    id: 'underline',
    name: 'Underline',
    class: 'underline',
  },
  'overline': {
    id: 'overline',
    name: 'Overline',
    class: 'overline',
  },
  'line-through': {
    id: 'line-through',
    name: 'Line Through',
    class: 'line-through',
  },
};

// Helper functions

/**
 * Get font family class by name
 * @param {string} name - Font family name
 * @returns {Object} Font family object
 */
export function getFontFamily(name) {
  return fontFamilies[name] || fontFamilies['sans'];
}

/**
 * Get font size class by name
 * @param {string} name - Font size name
 * @returns {Object} Font size object
 */
export function getFontSize(name) {
  return fontSizes[name] || fontSizes['sm'];
}

/**
 * Get font weight class by name
 * @param {string} name - Font weight name
 * @returns {Object} Font weight object
 */
export function getFontWeight(name) {
  return fontWeights[name] || fontWeights['normal'];
}

/**
 * Get letter spacing class by name
 * @param {string} name - Letter spacing name
 * @returns {Object} Letter spacing object
 */
export function getLetterSpacing(name) {
  return letterSpacing[name] || letterSpacing['normal'];
}

/**
 * Get line height class by name
 * @param {string} name - Line height name
 * @returns {Object} Line height object
 */
export function getLineHeight(name) {
  return lineHeights[name] || lineHeights['normal'];
}

/**
 * Get text transform class by name
 * @param {string} name - Text transform name
 * @returns {Object} Text transform object
 */
export function getTextTransform(name) {
  return textTransforms[name] || textTransforms['none'];
}

/**
 * Get text decoration class by name
 * @param {string} name - Text decoration name
 * @returns {Object} Text decoration object
 */
export function getTextDecoration(name) {
  return textDecorations[name] || textDecorations['none'];
}

/**
 * Get all typography options grouped by category
 * @returns {Object} Grouped typography options
 */
export function getAllTypographyOptions() {
  return {
    fontFamilies: Object.values(fontFamilies).map(f => ({
      id: f.id,
      name: f.name,
      category: f.category,
      preview: f.preview,
      supports: f.supports,
    })),
    fontSizes: Object.values(fontSizes).map(s => ({
      id: s.id,
      name: s.name,
      px: s.px,
    })),
    fontWeights: Object.values(fontWeights).map(w => ({
      id: w.id,
      name: w.name,
      weight: w.weight,
    })),
    letterSpacing: Object.values(letterSpacing).map(l => ({
      id: l.id,
      name: l.name,
    })),
    lineHeights: Object.values(lineHeights).map(l => ({
      id: l.id,
      name: l.name,
      value: l.value,
    })),
    textTransforms: Object.values(textTransforms).map(t => ({
      id: t.id,
      name: t.name,
    })),
  };
}

/**
 * Get Google Fonts URL string for all selected Google fonts
 * @param {Array} fontIds - Array of font IDs to include
 * @returns {string} Google Fonts URL
 */
export function getGoogleFontsURL(fontIds) {
  const googleFonts = fontIds
    .filter(id => fontFamilies[id]?.category === 'google')
    .map(id => fontFamilies[id]);

  if (googleFonts.length === 0) return '';

  const families = googleFonts.map(f => {
    const weights = 'wght@300;400;500;600;700';
    return `${f.name.replace(' ', '+')}:${weights}`;
  }).join('&family=');

  return `https://fonts.googleapis.com/css2?family=${families}&display=swap`;
}

/**
 * Get CSS string for loading Google fonts
 * @param {Array} fontIds - Array of font IDs to include
 * @returns {string} CSS import statement
 */
export function getGoogleFontsCSS(fontIds) {
  const url = getGoogleFontsURL(fontIds);
  if (!url) return '';
  return `@import url("${url}");`;
}

export default {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  textTransforms,
  textDecorations,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
  getTextTransform,
  getTextDecoration,
  getAllTypographyOptions,
  getGoogleFontsURL,
  getGoogleFontsCSS,
};
