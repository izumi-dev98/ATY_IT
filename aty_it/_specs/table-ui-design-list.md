# Spec for Table UI Design List - Phase 4 Extended Typography & More Themes

branch: claude/feature/table-ui-design-list
figma_component (if used):

## Summary

Provide an advanced table design customization system with extensive color palettes, animation styles, comprehensive typography options (font family, size, weight, color, line-height, letter-spacing), and granular control over every table element. Users can create highly personalized themes with advanced features like gradient backgrounds, custom animations, icon sets, and per-element styling with real-time preview and persistent storage. Phase 4 adds extended typography controls, more pre-defined themes (20 total), and enhanced color customization.

## Functional Requirements

### Core Features
- Display a list of available table UI design variants with visual previews
- Users can select a design from the list to apply to their tables
- Selection is persisted per-user via localStorage
- Theme selector accessible from all table pages
- Advanced customizer with extensive options for colors, styles, and animations

### Extended Color System

#### 1. Extended Color Palettes

**Primary Accent Colors (15+ options):**
- Indigo, Blue, Sky, Cyan, Teal, Emerald, Green, Lime
- Yellow, Amber, Orange, Red, Rose, Pink, Purple, Violet
- Slate, Gray, Zinc, Neutral color scales

**Background Color Scales:**
- Light mode: White, Warm Gray, Cool Gray, Slate, Stone, Cream
- Dark mode: Pure Black, Gray, Slate, Navy, Charcoal, Brown-tinted
- Gradient combinations: 20+ pre-built gradient presets

**Text Color Options:**
- Primary: 10 contrast-optimized colors per theme
- Secondary: 10 muted variations
- Tertiary: Subtle hints for disabled/decorative text

**Border Color System:**
- Match accent, subtle, or custom colors
- Transparency controls (opacity sliders)
- Multi-color border options (gradient borders)

#### 2. Advanced Animation Styles

**Hover Animations:**
- Color transition (default)
- Shadow expansion
- Scale/lift effect
- Glow effect
- Border highlight sweep
- Background gradient shift
- Ripple effect on click

**Loading Animations:**
- Pulse (default)
- Wave/shimmer
- Dots bounce
- Skeleton gradient sweep
- Progress bar
- Spinner overlay

**Row Entry Animations:**
- Fade in
- Slide from bottom
- Stagger cascade
- Scale up
- None (instant)

**Sort Indicator Animations:**
- Fade toggle
- Rotate arrow
- Bounce
- Color pulse

### Extended Typography System

#### 3. Font Family Options
**System Fonts:**
- Sans-serif (default)
- Monospace (for data-heavy tables)
- Serif (for formal documents)

**Google Fonts Integration (optional):**
- Inter, Roboto, Open Sans, Lato
- Poppins, Montserrat, Raleway
- Noto Sans (for Myanmar text support)
- Custom font upload support

**Per-Element Font Selection:**
- Header font family (independent from body)
- Body/cell font family
- Numeric data font (optional monospace for alignment)

#### 4. Font Size Presets
**Predefined Sizes:**
- XXS (10px), XS (11px), S (12px), M (14px), L (16px), XL (18px), XXL (20px), 3XL (24px)

**Per-Element Font Sizes:**
- Header font size (independent control)
- Body/cell font size
- Caption/footer font size
- Numeric data font size

**Custom Size Input:**
- Range: 8px - 32px
- Step: 0.5px precision
- Responsive size overrides (mobile, tablet, desktop)

#### 5. Font Weight Options
**Predefined Weights:**
- Light (300), Normal (400), Medium (500), Semibold (600), Bold (700), Extrabold (800), Black (900)

**Per-Element Font Weights:**
- Header font weight
- Body/cell font weight
- Emphasized text weight
- Disabled text weight

#### 6. Font Color System
**Text Color Categories:**
- Primary text color (main content)
- Secondary text color (descriptions, subtitles)
- Tertiary text color (hints, timestamps)
- Disabled text color
- Link text color
- Error text color
- Success text color
- Warning text color

**Per-Element Text Colors:**
- Header text color
- Body text color
- Selected row text color
- Hover row text color
- Numeric data color
- Status badge text color

**Color Features:**
- Full color picker (HSL/RGB/HEX)
- Opacity control (0-100%)
- Contrast checker (WCAG AA/AAA indicator)
- Recent colors history
- Palette presets (light, dark, high-contrast)

#### 7. Text Transforms & Spacing
**Text Transforms:**
- None, Uppercase, Lowercase, Capitalize

**Letter Spacing:**
- Tighter (-0.05em), Tight (-0.025em), Normal (0), Wide (0.025em), Wider (0.05em), Widest (0.1em)
- Custom value input (-0.2em to 0.3em)

**Line Height:**
- None (1), Tight (1.25), Snug (1.375), Normal (1.5), Relaxed (1.625), Loose (2)
- Custom value input (0.8 to 3.0)

**Per-Element Typography:**
- Header: font-family, size, weight, color, transform, spacing
- Body: font-family, size, weight, color, spacing
- Numeric: monospace toggle, tabular nums option

### Extended Layout & Spacing

#### 7. Density Presets
- Ultra Compact (minimal padding, small fonts)
- Compact
- Comfortable (default)
- Spacious
- Ultra Spacious (large padding, prominent elements)

#### 8. Column Width Options
- Fixed pixel widths (50px - 500px)
- Percentage-based (10% - 100%)
- Content-based (auto-fit)
- Flexible (min-max ranges)

#### 9. Row Height Controls
- Short (32px)
- Medium (48px)
- Tall (64px)
- Auto (content-based)
- Custom (slider: 32-128px)

### Extended Border & Shadow System

#### 10. Border Styles
- None
- Solid (default)
- Dashed
- Dotted
- Double
- Groove
- Ridge

#### 11. Border Width Options
- Hairline (0.5px)
- Thin (1px)
- Medium (2px)
- Thick (3px)
- Extra Thick (4px+)

#### 12. Corner Radius Options
- None (sharp)
- Small (4px)
- Medium (8px)
- Large (12px)
- Extra Large (16px)
- Full (pill-shaped)
- Custom per-corner

#### 13. Shadow Depth Presets
- None
- Subtle (soft, light shadow)
- Medium (default)
- Deep (prominent shadow)
- Floating (large diffuse shadow)
- Custom shadow builder (X, Y, blur, spread, color)

### Extended Interactive Elements

#### 14. Checkbox/Radio Styles
- Square, Rounded, Circle
- Filled, Outlined, Mixed
- Size: Small, Medium, Large
- Custom colors (checked, unchecked, indeterminate states)
- Animation on toggle

#### 15. Action Button Styles
- Icon only, Text only, Icon + Text
- Button variants: Solid, Outlined, Ghost, Underlined
- Size: Small, Medium, Large
- Color per action type
- Tooltip on hover
- Confirmation dialog for destructive actions

#### 16. Pagination Styles
- Numbered pages
- Simple Prev/Next
- Load More button
- Infinite scroll
- Jump to page input
- Page size selector

### Extended Status & Badge System

#### 17. Status Badge Variants
- Pill (default, rounded)
- Rounded rectangle
- Square
- Outlined
- Filled
- Underlined
- With icon prefix
- Animated (pulsing for "active" status)

#### 18. Status Color Schemes
- Pre-built schemes: Default, Traffic Light, Severity, Priority
- Custom color per status value
- Gradient badge support
- Icon + color combinations

### Extended Empty & Loading States

#### 19. Empty State Illustrations
- Icon set: Material, Heroicons, FontAwesome, Custom SVG
- Illustration styles: Minimal, Colorful, Monochrome, 3D
- Custom image upload
- Animated illustrations (Lottie support)

#### 20. Empty State Messages
- Pre-written message templates
- Custom HTML support
- Call-to-action button configuration
- Multi-language support

#### 21. Loading Skeleton Variants
- Block skeleton
- Line skeleton
- Circular skeleton (for avatars)
- Custom skeleton builder
- Animation speed control

### Advanced Features

#### 22. Conditional Styling Rules
- Row coloring based on data values
- Cell highlighting for outliers
- Status-based icon changes
- Dynamic column visibility

#### 23. Responsive Behavior
- Mobile-specific theme overrides
- Tablet-specific adjustments
- Breakpoint customization
- Hide/show columns per viewport

#### 24. Accessibility Features
- High contrast mode toggle
- Reduced motion option
- Focus indicator styles
- Screen reader optimization toggle
- Keyboard navigation hints

#### 25. Export/Import Themes
- Export custom theme as JSON
- Import theme from JSON file
- Share theme via URL/query params
- Theme gallery/community themes

### Pre-defined Design Variants (Extended)

**Core Themes (1-8):**
1. **Dark** - Default dark theme with indigo accents
2. **Light** - Clean light theme with subtle borders
3. **Blue** - Dark theme with blue accent colors
4. **Compact** - Dense layout for maximum data visibility
5. **Bordered** - Prominent borders for clarity
6. **Striped** - Alternating row backgrounds
7. **Modern** - Minimal with subtle shadows and gradients
8. **High Contrast** - Maximum contrast for accessibility

**Phase 3 Themes (9-15):**
9. **Gradient** - Colorful gradient backgrounds throughout
10. **Minimal** - Ultra-clean, barely-there styling
11. **Bold** - Heavy borders, strong colors, prominent UI
12. **Pastel** - Soft, muted colors for gentle appearance
13. **Neon** - Vibrant, glowing colors for dark mode
14. **Corporate** - Professional, conservative styling
15. **Playful** - Rounded, colorful, fun appearance

**Phase 4 New Themes (16-20):**
16. **Midnight** - Deep navy/purple dark theme with subtle gradients
17. **Forest** - Green-tinted theme with nature-inspired colors
18. **Ocean** - Blue-teal gradient theme with wave-like styling
19. **Sunset** - Warm orange-pink gradient theme
20. **Monochrome** - Pure black-white-gray with single accent color

## Figma Design Reference (only if referenced)
- File: TBD
- Component name: Table Theme System v3
- Key visual constraints: Maintain accessibility (WCAG AA/AAA contrast ratios)

## Possible Edge Cases

- No design options available (empty state)
- Selected design no longer exists
- Preview rendering issues for complex table designs
- Responsive behavior on different screen sizes
- Custom theme combinations that break accessibility
- Conflicting style options (e.g., striped + gradient rows)
- Browser compatibility for CSS features
- Long text content breaking layout
- Very wide tables with many columns
- Performance issues with complex animations
- Memory usage with many saved custom themes
- Color combinations that fail WCAG guidelines

## Acceptance Criteria

- [Yes] Theme selector displays all available design variants with previews
- [Yes] Each variant shows a visual preview representative of the actual table styling
- [Yes] User can select a design and see immediate visual feedback
- [Yes] Selected design is applied consistently across all tables
- [Yes] Theme preference persists across page reloads and sessions
- [Yes] All text maintains sufficient contrast ratios (WCAG AA minimum, AAA preferred)
- [Yes] Responsive design works on mobile and tablet viewports
- [Yes] Interactive elements (checkboxes, buttons, pagination) are themed
- [Yes] Loading and empty states match selected theme
- [Yes] Status badges adapt to theme color scheme
- [Yes] 20+ pre-defined design variants available
- [Yes] Advanced customizer provides 30+ customization categories
- [Yes] Color picker supports full spectrum selection with opacity
- [Yes] Animation previews work in real-time
- [Yes] Custom themes can be exported/imported as JSON
- [Yes] Typography options include 10+ font families
- [Yes] Font size control for header, body, and numeric data independently
- [Yes] Font weight control for all text elements
- [Yes] Font color customization for primary, secondary, and accent text
- [Yes] Letter spacing and line height controls available
- [Yes] Accessibility features (high contrast, reduced motion) work correctly

## Open Questions

- Should users be able to create and save custom theme variants? (Answer: Yes)
- Should there be a default design selected on first use? (Answer: Yes - Dark)
- Are there role-based permissions for changing table designs? (Answer: Yes)
- Should theme preferences sync across devices via backend? (Future)
- Should there be a "reset to default" option? (Answer: Yes)
- Should individual users have different preferences per table type? (Future)
- Should custom themes be shareable between users? (Future)
- Should there be admin controls to restrict available themes? (Future)

## Testing Guidelines

Create a test file(s) in the ./tests folder for the new feature, and create meaningful tests for the following cases:

### Unit Tests
- Theme context initializes with correct default theme
- Theme selection updates context state
- localStorage persistence works correctly
- Invalid theme ID falls back to default
- Color utility functions produce valid Tailwind classes
- Animation class generation is correct
- Typography presets apply correct CSS

### Integration Tests
- Theme selector renders all available themes
- Selecting a theme updates all table components
- Theme changes reflect immediately without page reload
- Customizer modal opens and closes correctly
- Preset selections update live preview
- Save custom theme flow works end-to-end

### Visual/Regression Tests
- Each theme renders with correct colors and spacing
- Text contrast meets accessibility standards
- Responsive layout works at breakpoints (mobile, tablet, desktop)
- Loading and empty states match theme
- Animations play smoothly at 60fps
- Gradient backgrounds render correctly

### E2E Tests
- User selects theme → reloads page → theme persists
- Theme works across different pages (KPI, EMR)
- Keyboard navigation works in theme selector
- Customizer is fully navigable via keyboard
- Export/import theme flow works correctly
- Accessibility features toggle correctly

### Performance Tests
- Theme switching completes under 100ms
- Customizer preview updates under 50ms
- No memory leaks with extended use
- Animation frames maintain 60fps
- Large tables (1000+ rows) remain performant
