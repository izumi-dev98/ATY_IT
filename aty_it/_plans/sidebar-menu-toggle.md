# Plan: Sidebar Menu Toggle

## Context

The user wants a toggle button added to the Sidebar component that allows collapsing and expanding the sidebar on desktop screens. Currently, the sidebar is always fully visible on desktop (lg screens) and only controlled by the mobile hamburger menu. This feature will give desktop users more screen real estate by allowing them to collapse the sidebar when not needed.

**Current State:**
- Sidebar is always expanded on desktop (w-64, fixed position)
- Mobile uses hamburger menu toggle from Navbar
- No desktop toggle control exists

**Goal:** Add a toggle button within the Sidebar that collapses it to a mini-state (icons only) or expands it back to full width.

## Technical Environment

| Aspect | Details |
|--------|---------|
| Framework | React 19.2.4 |
| Styling | Tailwind CSS v4.2.2 |
| Existing Component | `src/components/Sidebar.jsx` |
| State Management | useState in App.jsx (sidebarOpen for mobile) |

## Implementation Approach

### 1. Add Desktop Collapsed State with localStorage

Add state management with localStorage persistence:
- Read initial state from localStorage on mount
- Save state to localStorage on change
- Separate from mobile `isOpen` state
- Defaults to `false` (expanded) if no stored value

### 2. Update Sidebar Component

**New Props:**
- `isCollapsed`: boolean - controls mini-sidebar state
- `onToggle`: function - callback for toggle button click

**Toggle Button (at top of sidebar):**
- Icon: Chevron left/right that rotates based on state
- Style: Matches dark theme (`text-gray-400`, `hover:bg-gray-800`)
- Accessibility: aria-label, keyboard support
- Position: First item in sidebar navigation

**Collapsed State Styling:**
- Width: `w-20` (mini sidebar, ~80px for icons only)
- Hide text labels: `overflow-hidden` and conditional rendering
- Keep icons visible and centered
- Adjust navigation item padding for compact layout

### 3. Update App.jsx

**State Management with localStorage:**
```jsx
const [sidebarCollapsed, setSidebarCollapsed] = useState(
  () => localStorage.getItem('sidebarCollapsed') === 'true'
);

useEffect(() => {
  localStorage.setItem('sidebarCollapsed', sidebarCollapsed.toString());
}, [sidebarCollapsed]);
```

**Pass props to Sidebar:**
```jsx
<Sidebar
  isOpen={sidebarOpen}
  isCollapsed={sidebarCollapsed}
  onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
/>
```

**Update main content margin:**
- Full sidebar: `lg:ml-64`
- Collapsed sidebar: `lg:ml-20`

### 4. CSS Classes for States

| State | Width | Text Labels | Main Margin |
|-------|-------|-------------|-------------|
| Expanded | `w-64` | Visible | `ml-64` |
| Collapsed | `w-20` | Hidden | `ml-20` |
| Mobile Hidden | `w-64` | Visible | `ml-0` |

## Critical Files to Modify

| Action | File Path |
|--------|-----------|
| Modify | `/home/izumi/nmm/it/aty_it/src/components/Sidebar.jsx` |
| Modify | `/home/izumi/nmm/it/aty_it/src/App.jsx` |

## Design Decisions

1. **Collapsed width**: `w-20` (80px) - enough space for centered icons
2. **Toggle button location**: Top of sidebar navigation (first item)
3. **Toggle icon**: Chevron left/right (rotate 180deg based on state)
4. **Animation**: Smooth transition (duration-300) for width and text visibility
5. **Mobile behavior**: Unchanged - mobile still uses hamburger menu from Navbar
6. **localStorage persistence**: State saved and restored on refresh

## User Decisions

| Question | Decision |
|----------|----------|
| Toggle Position | **Top of sidebar** - just below the navbar |
| Persistence | **Yes, use localStorage** - remember user preference |

## Updated Requirements

Based on user decisions:
- Toggle button positioned at the top of sidebar navigation
- Collapsed state persisted in localStorage
- State restored on page load

## Verification Steps

After implementation:

1. **Visual Check**: Run `npm run dev` and verify:
   - Toggle button visible on desktop sidebar
   - Clicking toggle collapses sidebar to mini-state (icons only)
   - Clicking again expands to full width
   - Toggle icon rotates/changes direction

2. **Responsive Check**:
   - Desktop: Toggle button functional
   - Mobile: Hamburger menu still works, toggle hidden on small screens

3. **Layout Check**:
   - Main content margin adjusts when sidebar collapses/expands
   - No content overlap or layout shift

4. **Console/Lint**: No errors, `npm run lint` passes
