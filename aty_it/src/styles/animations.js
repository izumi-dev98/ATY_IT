/**
 * Animation Definitions for Table Themes
 *
 * Provides animation classes for:
 * - Hover effects on rows and elements
 * - Loading states and skeletons
 * - Row entry animations
 * - Sort indicator animations
 * - Button interactions
 */

// Hover Animation Definitions
export const hoverAnimations = {
  'color-transition': {
    id: 'color-transition',
    name: 'Color Transition',
    description: 'Smooth color change on hover',
    class: 'transition-colors duration-200',
    css: '',
  },
  'shadow-expand': {
    id: 'shadow-expand',
    name: 'Shadow Expand',
    description: 'Shadow grows on hover',
    class: 'transition-shadow duration-200 hover:shadow-lg',
    css: '',
  },
  'scale-lift': {
    id: 'scale-lift',
    name: 'Scale Lift',
    description: 'Row lifts slightly on hover',
    class: 'transition-transform duration-200 hover:scale-[1.01] hover:-translate-y-0.5',
    css: '',
  },
  'glow': {
    id: 'glow',
    name: 'Glow Effect',
    description: 'Glowing shadow on hover',
    class: 'transition-shadow duration-200 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]',
    css: '',
  },
  'border-glow': {
    id: 'border-glow',
    name: 'Border Glow',
    description: 'Border glows on hover',
    class: 'transition-all duration-200 hover:shadow-[0_0_0_2px_rgba(99,102,241,0.5)]',
    css: '',
  },
  'brightness': {
    id: 'brightness',
    name: 'Brightness',
    description: 'Brightens on hover',
    class: 'transition-filter duration-200 hover:brightness-110',
    css: '',
  },
  'saturate': {
    id: 'saturate',
    name: 'Saturate',
    description: 'Increases saturation on hover',
    class: 'transition-filter duration-200 hover:saturate-150',
    css: '',
  },
  'none': {
    id: 'none',
    name: 'None',
    description: 'No hover animation',
    class: '',
    css: '',
  },
};

// Loading Animation Definitions
export const loadingAnimations = {
  'pulse': {
    id: 'pulse',
    name: 'Pulse',
    description: 'Standard pulse animation',
    class: 'animate-pulse',
    css: '',
  },
  'shimmer': {
    id: 'shimmer',
    name: 'Shimmer',
    description: 'Sweeping shimmer effect',
    class: 'animate-shimmer',
    css: `
      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }
      .animate-shimmer {
        animation: shimmer 2s infinite linear;
        background: linear-gradient(to right, #1f2937 4%, #374151 25%, #1f2937 36%);
        background-size: 1000px 100%;
      }
    `,
  },
  'wave': {
    id: 'wave',
    name: 'Wave',
    description: 'Wave animation',
    class: 'animate-wave',
    css: `
      @keyframes wave {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      .animate-wave {
        animation: wave 1.5s ease-in-out infinite;
      }
    `,
  },
  'bounce-slow': {
    id: 'bounce-slow',
    name: 'Bounce Slow',
    description: 'Slow bouncing dots',
    class: 'animate-bounce-slow',
    css: `
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-25%); }
      }
      .animate-bounce-slow {
        animation: bounce-slow 1.5s ease-in-out infinite;
      }
    `,
  },
  'progress': {
    id: 'progress',
    name: 'Progress Bar',
    description: 'Horizontal progress animation',
    class: 'animate-progress',
    css: `
      @keyframes progress {
        0% { width: 0%; }
        50% { width: 100%; }
        100% { width: 0%; }
      }
      .animate-progress {
        animation: progress 2s ease-in-out infinite;
      }
    `,
  },
  'spin-slow': {
    id: 'spin-slow',
    name: 'Spin Slow',
    description: 'Slow spinning loader',
    class: 'animate-spin-slow',
    css: `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      .animate-spin-slow {
        animation: spin 2s linear infinite;
      }
    `,
  },
  'fade-in-out': {
    id: 'fade-in-out',
    name: 'Fade In Out',
    description: 'Gentle fade animation',
    class: 'animate-fade-in-out',
    css: `
      @keyframes fade-in-out {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }
      .animate-fade-in-out {
        animation: fade-in-out 2s ease-in-out infinite;
      }
    `,
  },
};

// Row Entry Animation Definitions
export const entryAnimations = {
  'none': {
    id: 'none',
    name: 'None',
    description: 'Instant appearance',
    class: '',
    css: '',
  },
  'fade-in': {
    id: 'fade-in',
    name: 'Fade In',
    description: 'Simple fade in animation',
    class: 'animate-fade-in-entry',
    css: `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fade-in-entry {
        animation: fadeIn 0.3s ease-out forwards;
      }
    `,
  },
  'slide-up': {
    id: 'slide-up',
    name: 'Slide Up',
    description: 'Slides up while fading in',
    class: 'animate-slide-up-entry',
    css: `
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-slide-up-entry {
        animation: slideUp 0.4s ease-out forwards;
      }
    `,
  },
  'slide-down': {
    id: 'slide-down',
    name: 'Slide Down',
    description: 'Slides down while fading in',
    class: 'animate-slide-down-entry',
    css: `
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-slide-down-entry {
        animation: slideDown 0.4s ease-out forwards;
      }
    `,
  },
  'scale-in': {
    id: 'scale-in',
    name: 'Scale In',
    description: 'Scales up from small',
    class: 'animate-scale-in-entry',
    css: `
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .animate-scale-in-entry {
        animation: scaleIn 0.3s ease-out forwards;
      }
    `,
  },
  'stagger': {
    id: 'stagger',
    name: 'Stagger',
    description: 'Cascading row animation (requires JS)',
    class: 'animate-stagger-entry',
    css: `
      @keyframes staggerIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-stagger-entry {
        animation: staggerIn 0.4s ease-out forwards;
      }
    `,
  },
  'bounce-in': {
    id: 'bounce-in',
    name: 'Bounce In',
    description: 'Bouncy entrance',
    class: 'animate-bounce-in-entry',
    css: `
      @keyframes bounceIn {
        0% {
          opacity: 0;
          transform: scale(0.3);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
        }
        70% {
          transform: scale(0.9);
        }
        100% {
          transform: scale(1);
        }
      }
      .animate-bounce-in-entry {
        animation: bounceIn 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
      }
    `,
  },
};

// Sort Indicator Animations
export const sortAnimations = {
  'fade': {
    id: 'fade',
    name: 'Fade',
    description: 'Simple fade toggle',
    class: 'transition-opacity duration-200',
    css: '',
  },
  'rotate': {
    id: 'rotate',
    name: 'Rotate',
    description: 'Rotating arrow',
    class: 'transition-transform duration-200',
    css: '',
  },
  'bounce': {
    id: 'bounce',
    name: 'Bounce',
    description: 'Small bounce on sort',
    class: 'animate-bounce-once',
    css: `
      @keyframes bounceOnce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-3px); }
      }
      .animate-bounce-once {
        animation: bounceOnce 0.3s ease-in-out;
      }
    `,
  },
  'slide': {
    id: 'slide',
    name: 'Slide',
    description: 'Sliding arrow indicator',
    class: 'transition-all duration-200',
    css: '',
  },
};

// Speed options for animations
export const animationSpeeds = {
  'fast': {
    id: 'fast',
    name: 'Fast',
    duration: '150ms',
    class: 'duration-150',
  },
  'normal': {
    id: 'normal',
    name: 'Normal',
    duration: '200ms',
    class: 'duration-200',
  },
  'slow': {
    id: 'slow',
    name: 'Slow',
    duration: '300ms',
    class: 'duration-300',
  },
  'slower': {
    id: 'slower',
    name: 'Slower',
    duration: '500ms',
    class: 'duration-500',
  },
};

// Helper functions

/**
 * Get hover animation class by name
 * @param {string} name - Animation name
 * @returns {Object} Animation object with class and css
 */
export function getHoverAnimation(name) {
  return hoverAnimations[name] || hoverAnimations['color-transition'];
}

/**
 * Get loading animation class by name
 * @param {string} name - Animation name
 * @returns {Object} Animation object
 */
export function getLoadingAnimation(name) {
  return loadingAnimations[name] || loadingAnimations['pulse'];
}

/**
 * Get entry animation class by name
 * @param {string} name - Animation name
 * @returns {Object} Animation object
 */
export function getEntryAnimation(name) {
  return entryAnimations[name] || entryAnimations['fade-in'];
}

/**
 * Get sort animation class by name
 * @param {string} name - Animation name
 * @returns {Object} Animation object
 */
export function getSortAnimation(name) {
  return sortAnimations[name] || sortAnimations['fade'];
}

/**
 * Get animation speed class
 * @param {string} speed - Speed option
 * @returns {Object} Speed object
 */
export function getAnimationSpeed(speed) {
  return animationSpeeds[speed] || animationSpeeds['normal'];
}

/**
 * Get all animations grouped by type
 * @returns {Object} Grouped animations
 */
export function getAllAnimations() {
  return {
    hover: Object.values(hoverAnimations).map(a => ({
      id: a.id,
      name: a.name,
      description: a.description,
    })),
    loading: Object.values(loadingAnimations).map(a => ({
      id: a.id,
      name: a.name,
      description: a.description,
    })),
    entry: Object.values(entryAnimations).map(a => ({
      id: a.id,
      name: a.name,
      description: a.description,
    })),
    sort: Object.values(sortAnimations).map(a => ({
      id: a.id,
      name: a.name,
      description: a.description,
    })),
    speeds: Object.values(animationSpeeds),
  };
}

/**
 * Get CSS string for all custom animations
 * @returns {string} Combined CSS string
 */
export function getAllAnimationCSS() {
  const allCss = [
    ...Object.values(loadingAnimations),
    ...Object.values(entryAnimations),
    ...Object.values(sortAnimations),
  ]
    .filter(a => a.css)
    .map(a => a.css)
    .join('\n');

  return allCss;
}

export default {
  hoverAnimations,
  loadingAnimations,
  entryAnimations,
  sortAnimations,
  animationSpeeds,
  getHoverAnimation,
  getLoadingAnimation,
  getEntryAnimation,
  getSortAnimation,
  getAnimationSpeed,
  getAllAnimations,
  getAllAnimationCSS,
};
