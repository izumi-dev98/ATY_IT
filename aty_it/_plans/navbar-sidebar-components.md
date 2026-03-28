# Plan: Navbar and Sidebar Components

## Context

The user requested a modern navigation layout for an EMR (Electronic Medical Records) application using Tailwind CSS. The spec file `_specs/navbar-sidebar-components.md` defines requirements for:
- A top Navbar with branding and user account access
- A collapsible Sidebar with navigation links (KPI Details, EMR User Account, EMR Issue Log)
- Modern, clean design with responsive behavior
- Smooth animations and transitions

This is a **greenfield implementation** - the current codebase is a blank React 19 + Tailwind CSS v4 boilerplate with no existing components or layout patterns.

## Problem Statement

The application currently has no navigation structure. Users need a consistent, modern navigation system to access key features: KPI Details, EMR User Account, and EMR Issue Log.

## Technical Environment

| Aspect | Details |
|--------|---------|
| Framework | React 19.2.4 |
| Styling | Tailwind CSS v4.2.2 (CSS-first config, no tailwind.config.js) |
| Build Tool | Vite 8.0.1 with @vitejs/plugin-react |
| Entry Point | `src/main.jsx` → `src/App.jsx` |
| Existing Components | None (App.jsx returns empty fragment) |

## Implementation Approach

### 1. Create Components Directory Structure

```
src/components/
├── Navbar.jsx
├── Sidebar.jsx
└── Layout.jsx (optional wrapper)
```

### 2. Navbar Component (`src/components/Navbar.jsx`)

**Structure:**
- Fixed top position (`fixed top-0 left-0 right-0`)
- Flexbox layout with logo, hamburger toggle (mobile), and user profile
- Height: `h-16` (64px standard)
- Background: White with subtle shadow (`shadow-md`)
- Z-index: Above sidebar (`z-50`)

**Features:**
- Logo/brand on left
- Hamburger menu button (visible on mobile, triggers sidebar)
- User avatar/name on right
- Optional: notification bell icon placeholder

**Props:**
- `sidebarOpen`: boolean - controls mobile sidebar visibility
- `setSidebarOpen`: function - toggle handler

### 3. Sidebar Component (`src/components/Sidebar.jsx`)

**Structure:**
- Fixed left position (`fixed left-0 top-16 bottom-0`)
- Width: `w-64` desktop, slide-in on mobile
- Transition: `transition-transform duration-300 ease-in-out`
- Background: Neutral gray (`bg-gray-900` or `bg-gray-800`)
- Z-index: Below navbar (`z-40`)

**Navigation Items:**
| Label | Icon | Path |
|-------|------|------|
| KPI Details | Chart/Graph icon | `/kpi-details` |
| EMR User Account | User icon | `/user-account` |
| EMR Issue Log | Clipboard/Alert icon | `/issue-log` |

**Features:**
- Collapsible state (expanded/collapsed on desktop)
- Mobile: slides in from left
- Active state styling (accent color background)
- Hover states on all items
- Icons using inline SVG (Lucide-style, no external dependency)

**Props:**
- `isOpen`: boolean - visibility control
- `currentPath`: string - for active state
- `onNavigate`: function - optional callback

### 4. Update App.jsx with React Router

**Layout Structure:**
```jsx
<Router>
  <div className="min-h-screen bg-gray-50">
    <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <Sidebar isOpen={sidebarOpen} />
    <main className="ml-64 pt-16 transition-all duration-300">
      <Routes>
        <Route path="/" element={<Navigate to="/kpi-details" replace />} />
        <Route path="/kpi-details" element={<KpiDetails />} />
        <Route path="/user-account" element={<UserAccount />} />
        <Route path="/issue-log" element={<IssueLog />} />
      </Routes>
    </main>
  </div>
</Router>
```

**State Management:**
- `sidebarOpen` state for mobile toggle
- React Router's `useLocation` for active link highlighting in Sidebar

### 5. Styling Approach (Tailwind CSS v4)

Tailwind v4 uses CSS-first configuration. For custom values:
- Use arbitrary values: `w-[250px]`
- Or extend via CSS variables in `index.css`

**Color Palette:**
- Navbar: `bg-white text-gray-900`
- Sidebar: `bg-gray-900 text-gray-100`
- Active state: `bg-indigo-600` (user selected)
- Hover: `hover:bg-gray-700` (sidebar), `hover:bg-gray-100` (navbar)

**Responsive Breakpoints:**
- Mobile: `< 640px` (sm)
- Tablet: `640px - 1024px`
- Desktop: `> 1024px` (lg)

## Critical Files to Create/Modify

| Action | File Path |
|--------|-----------|
| Install | React Router (`npm install react-router-dom`) |
| Create | `/home/izumi/nmm/it/aty_it/src/components/Navbar.jsx` |
| Create | `/home/izumi/nmm/it/aty_it/src/components/Sidebar.jsx` |
| Create | `/home/izumi/nmm/it/aty_it/src/pages/KpiDetails.jsx` (placeholder) |
| Create | `/home/izumi/nmm/it/aty_it/src/pages/UserAccount.jsx` (placeholder) |
| Create | `/home/izumi/nmm/it/aty_it/src/pages/IssueLog.jsx` (placeholder) |
| Modify | `/home/izumi/nmm/it/aty_it/src/App.jsx` |

## Design Decisions

1. **Icons**: Inline SVG (no external library dependency for simplicity)
2. **Sidebar behavior**: Fixed on desktop, slide-in on mobile
3. **Dark sidebar**: Modern SaaS pattern, better visual hierarchy
4. **React Router**: Full routing setup with proper URL paths
5. **Indigo accent**: User-selected color for active states

## User Decisions

| Question | Decision |
|----------|----------|
| Accent color | **Indigo** (`bg-indigo-600`) for active states |
| Sidebar default | **Expanded** on desktop |
| Branding | **Placeholder** - user will provide logo/brand name later |
| Routing | **React Router** with proper URL paths |

## Verification Steps

After implementation:

1. **Visual Check**: Run `npm run dev` and verify:
   - Navbar appears at top with correct styling
   - Sidebar appears on left with all 3 navigation links
   - Hover states work on all interactive elements
   - Active state is visually distinct (indigo background)

2. **Responsive Check**: Resize browser to verify:
   - Desktop (>1024px): Sidebar visible, expanded by default
   - Mobile (<640px): Sidebar hidden, hamburger menu visible
   - Hamburger toggles sidebar on mobile

3. **Routing Check**: Click each navigation link and verify:
   - URL changes to correct path
   - Active link shows indigo highlight
   - Page content updates accordingly

4. **Console Check**: No errors or warnings in browser dev tools

5. **Lint Check**: Run `npm run lint` - no errors
