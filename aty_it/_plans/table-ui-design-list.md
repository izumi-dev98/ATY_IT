# Plan: Table UI Design List - Phase 4 Extended Typography & More Themes

## Context

Phase 1 implemented basic theme switching with 5 pre-defined variants.
Phase 2 added custom theme builder with 4 customization categories (density, contrast, accent, borders) and 3 new themes.
Phase 3 extended with comprehensive color palettes (15 colors), animation styles, typography definitions, and 7 new themes (15 total).

**User Request**: More table detail design - font size, font style (family), font color, and more themes.

**Problem**: Users need granular typography control (independent font settings for header/body/numeric data), expanded color options for text elements, and more pre-defined theme variety.

**Goal**: Extend typography system with per-element font controls, add font color customization, create 5 new themes (20 total), and enhance the customizer UI for better navigation of 30+ categories.

## Architecture Overview

### Current State (Phase 2 Complete)
- **8 themes**: Dark, Light, Blue, Compact, Bordered, Striped, Modern, High Contrast
- **4 customization categories**: Density, Contrast, Accent, Borders
- **~15 presets** total across all categories
- **Custom theme persistence** via localStorage
- **Live preview** in customizer modal

### Proposed Extensions (Phase 3)

```
src/
├── contexts/
│   └── TableThemeContext.jsx      # Extend with theme export/import
├── components/
│   └── ui/
│       ├── TableThemeSelector.jsx
│       ├── TableThemeCustomizer.jsx # Extend with more tabs
│       ├── ColorPicker.jsx          # NEW: Full color spectrum picker
│       ├── AnimationPreview.jsx     # NEW: Animation preview component
│       └── ThemeGallery.jsx         # NEW: Browse community themes
├── styles/
│   ├── tableThemes.js             # Add 7 new themes (total 15)
│   ├── tableCustomThemes.js       # Extend with more presets
│   ├── colorPalettes.js           # NEW: Extended color definitions
│   ├── animations.js              # NEW: Animation definitions
│   └── typography.js              # NEW: Font family/size definitions
├── utils/
│   ├── colorUtils.js              # NEW: Color conversion utilities
│   └── themeExporter.js           # NEW: JSON export/import
└── data/
    └── themePresets.js            # NEW: 50+ quick presets
```

## Extended Color System

### Color Palette Definitions (colorPalettes.js)

```javascript
export const colorPalettes = {
  // Primary Accents (15 colors x 5 shades = 75 colors)
  indigo: { 50: '#eef2ff', 100: '#e0e7ff', ..., 900: '#312e81' },
  blue: { 50: '#eff6ff', 100: '#dbeafe', ..., 900: '#1e3a8a' },
  sky: { 50: '#f0f9ff', 100: '#e0f2fe', ..., 900: '#0c4a6e' },
  cyan: { 50: '#ecfeff', 100: '#cffafe', ..., 900: '#164e63' },
  teal: { 50: '#f0fdfa', 100: '#ccfbf1', ..., 900: '#134e4a' },
  emerald: { 50: '#ecfdf5', 100: '#d1fae5', ..., 900: '#064e3b' },
  green: { 50: '#f0fdf4', 100: '#dcfce7', ..., 900: '#14532d' },
  lime: { 50: '#f7fee7', 100: '#ecfccb', ..., 900: '#365314' },
  yellow: { 50: '#fefce8', 100: '#fef9c3', ..., 900: '#713f12' },
  amber: { 50: '#fffbeb', 100: '#fef3c7', ..., 900: '#78350f' },
  orange: { 50: '#fff7ed', 100: '#ffedd5', ..., 900: '#7c2d12' },
  red: { 50: '#fef2f2', 100: '#fee2e2', ..., 900: '#7f1d1d' },
  rose: { 50: '#fff1f2', 100: '#ffe4e6', ..., 900: '#881337' },
  pink: { 50: '#fdf2f8', 100: '#fce7f3', ..., 900: '#831843' },
  purple: { 50: '#faf5ff', 100: '#f3e8ff', ..., 900: '#581c87' },
  violet: { 50: '#f5f3ff', 100: '#ede9fe', ..., 900: '#4c1d95' },

  // Neutral Scales (6 colors x 10 shades = 60 colors)
  slate: { 50-900 },
  gray: { 50-900 },
  zinc: { 50-900 },
  neutral: { 50-900 },
  stone: { 50-900 },

  // Extended background options
  backgrounds: {
    light: ['white', 'warm-gray-50', 'cool-gray-50', 'slate-50', 'stone-50', 'cream'],
    dark: ['black', 'gray-900', 'slate-900', 'zinc-900', 'navy-900', 'charcoal'],
  },
};

// Gradient Presets (20+ combinations)
export const gradientPresets = {
  'indigo-purple': 'bg-gradient-to-r from-indigo-500 to-purple-500',
  'blue-cyan': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'emerald-teal': 'bg-gradient-to-r from-emerald-500 to-teal-500',
  'rose-pink': 'bg-gradient-to-r from-rose-500 to-pink-500',
  'amber-orange': 'bg-gradient-to-r from-amber-500 to-orange-500',
  'sunset': 'bg-gradient-to-r from-orange-400 via-red-500 to-pink-500',
  'ocean': 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500',
  'forest': 'bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500',
  'midnight': 'bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900',
  // ... 15 more
};
```

## Extended Animation System

### Animation Definitions (animations.js)

```javascript
export const hoverAnimations = {
  'color-transition': {
    class: 'transition-colors duration-200',
    description: 'Smooth color change on hover',
  },
  'shadow-expand': {
    class: 'transition-shadow duration-200 hover:shadow-lg',
    description: 'Shadow grows on hover',
  },
  'scale-lift': {
    class: 'transition-transform duration-200 hover:scale-[1.02]',
    description: 'Row lifts slightly on hover',
  },
  'glow': {
    class: 'transition-shadow duration-200 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]',
    description: 'Glowing effect on hover',
  },
  'border-sweep': {
    class: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-500',
    description: 'Border highlight sweeps across',
  },
  'gradient-shift': {
    class: 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition-all duration-500',
    description: 'Gradient direction reverses',
  },
};

export const loadingAnimations = {
  'pulse': 'animate-pulse',
  'shimmer': 'animate-shimmer', // Custom CSS animation
  'wave': 'animate-wave',
  'dots-bounce': 'animate-bounce',
  'progress': 'animate-progress',
  'spinner': 'animate-spin',
};

export const entryAnimations = {
  'fade-in': 'animate-fade-in',
  'slide-up': 'animate-slide-up',
  'stagger': 'animate-stagger', // Requires JS coordination
  'scale-in': 'animate-scale-in',
  'none': '',
};
```

## Extended Typography System (Phase 4)

### Typography Definitions (typography.js)

```javascript
export const fontFamilies = {
  'sans': 'font-sans',
  'mono': 'font-mono',
  'serif': 'font-serif',
  // Google Fonts (loaded dynamically)
  'inter': 'font-inter',
  'roboto': 'font-roboto',
  'open-sans': 'font-open-sans',
  'lato': 'font-lato',
  'poppins': 'font-poppins',
  'montserrat': 'font-montserrat',
  'raleway': 'font-raleway',
  'noto-sans': 'font-noto-sans', // Myanmar support
};

export const fontSizes = {
  'xxs': { class: 'text-[10px]', name: 'Extra Extra Small', px: 10 },
  'xs': { class: 'text-[11px]', name: 'Extra Small', px: 11 },
  'sm': { class: 'text-xs', name: 'Small', px: 12 },
  'base': { class: 'text-sm', name: 'Medium', px: 14 },
  'lg': { class: 'text-base', name: 'Large', px: 16 },
  'xl': { class: 'text-lg', name: 'Extra Large', px: 18 },
  '2xl': { class: 'text-xl', name: '2X Large', px: 20 },
  '3xl': { class: 'text-2xl', name: '3X Large', px: 24 },
};

export const fontWeights = {
  'light': { class: 'font-light', name: 'Light (300)' },
  'normal': { class: 'font-normal', name: 'Normal (400)' },
  'medium': { class: 'font-medium', name: 'Medium (500)' },
  'semibold': { class: 'font-semibold', name: 'Semibold (600)' },
  'bold': { class: 'font-bold', name: 'Bold (700)' },
  'extrabold': { class: 'font-extrabold', name: 'Extra Bold (800)' },
  'black': { class: 'font-black', name: 'Black (900)' },
};

// Phase 4: Font Color System
export const textColors = {
  // Semantic colors
  'primary': { light: 'text-gray-900', dark: 'text-gray-100' },
  'secondary': { light: 'text-gray-600', dark: 'text-gray-400' },
  'tertiary': { light: 'text-gray-500', dark: 'text-gray-500' },
  'disabled': { light: 'text-gray-400', dark: 'text-gray-600' },
  'link': { light: 'text-blue-600', dark: 'text-blue-400' },
  'error': { light: 'text-red-600', dark: 'text-red-400' },
  'success': { light: 'text-green-600', dark: 'text-green-400' },
  'warning': { light: 'text-amber-600', dark: 'text-amber-400' },

  // Per-element colors (customizable)
  'header': { light: 'text-gray-900', dark: 'text-white' },
  'body': { light: 'text-gray-700', dark: 'text-gray-300' },
  'numeric': { light: 'text-gray-800', dark: 'text-gray-200' },
};

export const textTransforms = {
  'none': 'normal-case',
  'uppercase': 'uppercase',
  'lowercase': 'lowercase',
  'capitalize': 'capitalize',
};

export const letterSpacing = {
  'tighter': 'tracking-tighter',
  'tight': 'tracking-tight',
  'normal': 'tracking-normal',
  'wide': 'tracking-wide',
  'wider': 'tracking-wider',
  'widest': 'tracking-widest',
};

export const lineHeights = {
  'none': 'leading-none',
  'tight': 'leading-tight',
  'snug': 'leading-snug',
  'normal': 'leading-normal',
  'relaxed': 'leading-relaxed',
  'loose': 'leading-loose',
};

// Phase 4: Per-element typography presets
export const typographyPresets = {
  header: {
    fontFamily: 'sans',
    fontSize: 'base',
    fontWeight: 'semibold',
    textTransform: 'uppercase',
    letterSpacing: 'wide',
  },
  body: {
    fontFamily: 'sans',
    fontSize: 'sm',
    fontWeight: 'normal',
  },
  numeric: {
    fontFamily: 'mono',
    fontSize: 'sm',
    fontWeight: 'normal',
    letterSpacing: 'tight',
  },
};
```

## Extended Customization Categories

### Phase 3: 25+ Categories

1. **Density** (existing) - Comfortable, Compact, Dense, Ultra Compact, Spacious
2. **Contrast** (existing) - High, Medium, Soft, Ultra High
3. **Accent Color** (existing) - 15+ colors
4. **Borders** (existing) - None, Subtle, Prominent, Rounded, Sharp

*New Categories:*

5. **Background Color** - Full palette selection for container, header, body, rows
6. **Header Style** - Background, text color, font weight, transform, height
7. **Row Hover** - 6 animation types + color options
8. **Selected Row** - Background, border, glow effects
9. **Text Primary** - Color, size, weight, family
10. **Text Secondary** - Color, size, weight
11. **Border Style** - Solid, dashed, dotted, double, width
12. **Corner Radius** - None to Full (7 presets + custom)
13. **Shadow Depth** - None to Floating (5 presets + custom)
14. **Checkbox Style** - Shape, size, color, animation
15. **Button Style** - Variant, size, color per action
16. **Pagination Style** - Numbered, Simple, Load More, Infinite
17. **Status Badge Shape** - Pill, Rounded, Square, Outlined
18. **Status Colors** - Per-status color assignment
19. **Loading Animation** - 6 animation types + speed
20. **Empty State Icon** - Icon set + style selection
21. **Font Family** - System + Google Fonts
22. **Font Size** - XXS to XXL + custom
23. **Font Weight** - Light to Extrabold
24. **Letter Spacing** - Tight to Widest
25. **Line Height** - Tight to Loose
26. **Gradient Backgrounds** - 20+ preset gradients
27. **Row Striping** - Colors, frequency, direction
28. **Focus Indicators** - Ring color, width, style
29. **Sort Indicator** - Icon style, color, animation
30. **Scrollbar Style** - Thin, Normal, Custom color

## Implementation Steps

### Step 1: Create Color Palette Module
**File**: `src/styles/colorPalettes.js`
- Define all 15 primary color palettes (50-900 shades)
- Define 6 neutral scales
- Define 20+ gradient presets
- Export helper functions for class generation

### Step 2: Create Animation Module
**File**: `src/styles/animations.js`
- Define hover animation classes
- Define loading animation classes
- Define entry animation classes
- Add custom CSS to index.css for keyframes

### Step 3: Create Typography Module
**File**: `src/styles/typography.js`
- Define font families (system + Google Fonts)
- Define size, weight, spacing, line-height scales
- Add Google Fonts import to index.html

### Step 4: Extend tableCustomThemes.js
**File**: `src/styles/tableCustomThemes.js`
- Add `getColorPalette(colorName)` function
- Add `getGradientPreset(name)` function
- Add `getAnimationClass(type, name)` function
- Add `getTypographyClass(category, value)` function
- Expand `getAllPresets()` to return 30+ categories

### Step 5: Create ColorPicker Component
**File**: `src/components/ui/ColorPicker.jsx`
- Visual color swatch grid
- Shade selector (50-900)
- Preview selected color on sample element
- Recent colors history
- Custom hex/RGB input

### Step 6: Create AnimationPreview Component
**File**: `src/components/ui/AnimationPreview.jsx`
- Small animated box demonstrating selected animation
- Speed control slider
- Play/pause trigger
- Loop toggle

### Step 7: Extend TableThemeCustomizer
**File**: `src/components/ui/TableThemeCustomizer.jsx`
- Add scrollable tab navigation (30+ tabs)
- Add category search/filter
- Add "Quick Presets" tab for common combinations
- Add "Advanced" tab for granular control
- Extend live preview to show more elements
- Add animation triggers for preview

### Step 8: Extend Theme Selector
**File**: `src/components/ui/TableThemeSelector.jsx`
- Add 7 new pre-defined themes (total 15)
- Add theme filtering/search
- Add "Recently Used" section
- Add "Favorites" feature

### Step 9: Create Theme Export/Import Utility
**File**: `src/utils/themeExporter.js`
- `exportTheme(theme)` - Convert to JSON
- `importTheme(jsonString)` - Parse and validate
- `shareThemeUrl(theme)` - Generate shareable URL
- `loadThemeFromUrl()` - Parse URL params

### Step 10: Add 7 New Pre-defined Themes
**File**: `src/styles/tableThemes.js`
- **Gradient** - Colorful gradients throughout
- **Minimal** - Ultra-clean, subtle styling
- **Bold** - Heavy borders, strong presence
- **Pastel** - Soft, muted colors
- **Neon** - Vibrant, glowing for dark mode
- **Corporate** - Professional, conservative
- **Playful** - Rounded, colorful, fun

## Critical Files to Modify/Create

| File | Action | Purpose |
|------|--------|---------|
| `src/styles/colorPalettes.js` | Create | Extended color definitions |
| `src/styles/animations.js` | Create | Animation class definitions |
| `src/styles/typography.js` | Create | Typography definitions |
| `src/styles/tableThemes.js` | Modify | Add 7 new themes |
| `src/styles/tableCustomThemes.js` | Modify | Extend with 30+ categories |
| `src/components/ui/ColorPicker.jsx` | Create | Color selection UI |
| `src/components/ui/AnimationPreview.jsx` | Create | Animation preview |
| `src/components/ui/TableThemeCustomizer.jsx` | Modify | Extended customization |
| `src/components/ui/TableThemeSelector.jsx` | Modify | More themes, search |
| `src/utils/themeExporter.js` | Create | JSON export/import |
| `src/contexts/TableThemeContext.jsx` | Modify | Add export/import functions |
| `src/index.css` | Modify | Add custom animation keyframes |
| `index.html` | Modify | Add Google Fonts links |

## New Design Variants

### Phase 3 Themes (9-15):
9. **Gradient** - Colorful gradient backgrounds throughout
10. **Minimal** - Ultra-clean, barely-there styling
11. **Bold** - Heavy borders, strong colors, prominent UI
12. **Pastel** - Soft, muted colors for gentle appearance
13. **Neon** - Vibrant, glowing colors for dark mode
14. **Corporate** - Professional, conservative styling
15. **Playful** - Rounded, colorful, fun appearance

### Phase 4 New Themes (16-20):
16. **Midnight** - Deep navy/purple dark theme with subtle gradients
    - Container: bg-gradient-to-br from-gray-950 via-slate-900 to-purple-950
    - Header: bg-gradient-to-r from-purple-600 to-indigo-600
    - Accent: Purple-violet spectrum

17. **Forest** - Green-tinted theme with nature-inspired colors
    - Container: bg-emerald-950/30
    - Header: bg-gradient-to-r from-emerald-600 to-teal-600
    - Accent: Emerald, teal, green

18. **Ocean** - Blue-teal gradient theme with wave-like styling
    - Container: bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950
    - Header: bg-gradient-to-r from-cyan-500 to-blue-600
    - Accent: Cyan, blue, teal

19. **Sunset** - Warm orange-pink gradient theme
    - Container: bg-gradient-to-br from-orange-950 via-red-950 to-pink-950
    - Header: bg-gradient-to-r from-orange-500 via-red-500 to-pink-500
    - Accent: Orange, red, pink

20. **Monochrome** - Pure black-white-gray with single accent color
    - Container: bg-gray-900
    - Header: bg-gray-800
    - Accent: User-selectable (default: indigo)
    - High contrast, minimal color distraction

## Customization UI Structure (Phase 3)

```
TableThemeCustomizer (Extended)
├── Header: Search categories, Reset all, Save, Close
├── Quick Presets Tab (featured combinations)
├── Color Tabs:
│   ├── Background Colors (container, header, body, rows)
│   ├── Accent Colors (15 color families)
│   ├── Text Colors (primary, secondary)
│   ├── Border Colors
│   └── Gradient Presets
├── Style Tabs:
│   ├── Density & Spacing
│   ├── Typography (font, size, weight, spacing)
│   ├── Borders (style, width, radius)
│   ├── Shadows (depth, color)
│   └── Animations (hover, loading, entry)
├── Element Tabs:
│   ├── Header Style
│   ├── Row Style (hover, selected, striping)
│   ├── Cell Style
│   ├── Checkbox/Radio
│   ├── Buttons
│   ├── Pagination
│   ├── Status Badges
│   ├── Empty State
│   └── Loading State
├── Accessibility Tab:
│   ├── High Contrast Toggle
│   ├── Reduced Motion
│   ├── Focus Indicators
│   └── Contrast Checker
├── Live Preview Panel (right side):
│   ├── Mini table with all elements
│   ├── Animation triggers
│   └── Real-time updates
└── Action Bar:
    ├── Save as Custom Theme
    ├── Export JSON
    ├── Import JSON
    └── Reset to Base
```

## Testing Guidelines

### Unit Tests
- Color palette functions return valid Tailwind classes
- Animation class generation is correct
- Typography presets apply correct CSS
- `exportTheme()` produces valid JSON
- `importTheme()` validates and parses correctly
- All 30+ categories have valid preset values

### Integration Tests
- ColorPicker updates theme in real-time
- AnimationPreview plays selected animation
- All 30+ tabs render correctly
- Live preview reflects all changes
- Export/Import flow works end-to-end
- 15 themes selectable and apply correctly

### Visual Tests
- All 15 themes render with correct colors
- Gradients display correctly
- Animations play smoothly at 60fps
- Typography options render correctly
- Color contrast passes WCAG AA
- Custom themes preview accurately

### Accessibility Tests
- High contrast mode meets WCAG AAA
- Reduced motion respects user preference
- Focus indicators visible in all themes
- Keyboard navigation works in customizer
- Screen reader announces all options
- Contrast checker validates combinations

### Performance Tests
- Theme switching under 100ms
- Preview updates under 50ms
- No memory leaks with 30+ categories
- Large color palettes don't cause lag
- Animation frames maintain 60fps

## Acceptance Criteria Verification

- [ Yes] 15 total design variants (8 existing + 7 new)
- [Yes ] 30+ customization categories available
- [ Yes  ] Full color spectrum picker (15 colors x 10 shades)
- [  Yes ] 6 hover animation types
- [ Yes  ] 6 loading animation types
- [  Yes ] 5 entry animation types
- [  Yes ] System + 6 Google Font families
- [  Yes ] 7 font sizes, 6 weights
- [ Yes ] 5 border styles, 5 widths
- [ Yes ] 7 corner radius options
- [ Yes ] 5 shadow depth presets
- [ Yes ] Export/Import theme as JSON
- [ Yes ] Live preview updates in real-time
- [ Yes ] All customizations persist correctly

## Future Considerations (Phase 4+)

- Community theme gallery/sharing
- Per-table-type preferences
- Admin theme restrictions
- Team/organization theme sync
- AI-powered theme suggestions
- Theme versioning/history
- Screenshot preview generator
- Bulk theme apply (all tables vs specific)
