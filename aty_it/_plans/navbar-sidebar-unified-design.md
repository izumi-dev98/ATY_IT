# Plan: Navbar and Sidebar Components - Unified Design Update

## Context

The user requested that the Navbar and Sidebar components share a **unified, consistent design**. Currently the components have mismatched styles (white navbar vs dark sidebar). This update ensures both navigation components use the same visual language for a cohesive look.

**Current State:** Components are implemented but have inconsistent styling:
- Navbar: White background with gray text
- Sidebar: Dark gray background with light text

**Goal:** Update both components to share the same design system.

## Problem Statement

The current implementation has inconsistent styling between Navbar (white) and Sidebar (dark). User wants both components to share a unified **dark theme** for a cohesive, modern appearance.

## Technical Environment

| Aspect | Details |
|--------|---------|
| Framework | React 19.2.4 |
| Styling | Tailwind CSS v4.2.2 (CSS-first config, no tailwind.config.js) |
| Build Tool | Vite 8.0.1 with @vitejs/plugin-react |
| Entry Point | `src/main.jsx` → `src/App.jsx` |
| Existing Components | Navbar.jsx, Sidebar.jsx (implemented, inconsistent styles) |

## Implementation Approach

### Unified Dark Design System

Both Navbar and Sidebar will share:
- **Background**: `bg-gray-900` (dark gray)
- **Text**: `text-gray-100` (light gray/white)
- **Accent**: `bg-indigo-600` for active states
- **Hover**: `hover:bg-gray-800`
- **Borders**: `border-gray-800` for subtle separation

### 1. Navbar Updates (`src/components/Navbar.jsx`)

**Changes Required:**
- Background: `bg-white` → `bg-gray-900`
- Text colors: `text-gray-900` → `text-gray-100`
- Hamburger icon: `text-gray-600` → `text-gray-300`
- Hover states: `hover:bg-gray-100` → `hover:bg-gray-800`
- User dropdown: Update to dark theme
- Border: Add subtle bottom border `border-b border-gray-800`

**New Color Scheme:**
```
- Background: bg-gray-900
- Primary text: text-gray-100
- Secondary text: text-gray-400
- Hover: hover:bg-gray-800
- Icons: text-gray-300
- Accent: indigo-600 (logo background)
```

### 2. Sidebar Updates (`src/components/Sidebar.jsx`)

**Changes Required:**
- Already has dark theme - minor tweaks for consistency
- Ensure border colors match navbar (`border-gray-800`)
- Match hover states exactly (`hover:bg-gray-800`)

### 3. App.jsx

No changes needed - layout structure remains the same.

## Critical Files to Modify

| Action | File Path |
|--------|-----------|
| Modify | `/home/izumi/nmm/it/aty_it/src/components/Navbar.jsx` |
| Modify | `/home/izumi/nmm/it/aty_it/src/components/Sidebar.jsx` (minor tweaks) |

**Files Already Complete (no changes needed):**
- `src/components/Sidebar.jsx` - Already has dark theme
- `src/pages/KpiDetails.jsx`, `UserAccount.jsx`, `IssueLog.jsx`
- `src/App.jsx` - Layout structure unchanged

## Design Decisions

1. **Unified Dark Theme**: Both Navbar and Sidebar use `bg-gray-900` for consistency
2. **Icons**: Inline SVG (no external library dependency)
3. **Sidebar behavior**: Fixed on desktop, slide-in on mobile
4. **React Router**: Full routing with proper URL paths
5. **Accent color**: Indigo (`bg-indigo-600`) for active states and logo

## Verification Steps

After implementation:

1. **Visual Check**: Run `npm run dev` and verify:
   - Both Navbar and Sidebar have matching dark backgrounds (`bg-gray-900`)
   - Text colors are consistent across both components
   - Hover states work and match on all interactive elements
   - Active state is visually distinct (indigo background)

2. **Responsive Check**: Resize browser to verify:
   - Desktop (>1024px): Sidebar visible, Navbar full width
   - Mobile (<640px): Sidebar slides in, hamburger menu visible
   - Unified design maintained at all screen sizes

3. **Console Check**: No errors or warnings in browser dev tools

4. **Lint Check**: Run `npm run lint` - no errors

## User Decisions

| Question | Decision |
|----------|----------|
| Design style | **Both Dark** - unified dark theme for Navbar and Sidebar |
| Accent color | **Indigo** (`bg-indigo-600`) for active states |
| Sidebar default | **Expanded** on desktop |
| Branding | **Placeholder** - user will provide logo/brand name later |
| Routing | **React Router** with proper URL paths |

## Updated Requirements

Based on user decisions, the implementation will:
- Use `bg-gray-900` for both Navbar and Sidebar backgrounds
- Use `text-gray-100` for primary text in both components
- Use `hover:bg-gray-800` for consistent hover states
- Use indigo accent for active states and logo
- Maintain existing React Router setup
