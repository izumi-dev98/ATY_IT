# Spec for navbar-sidebar-components

branch: claude/feature/navbar-sidebar-components
figma_component (if used): N/A

## Summary

Implement a modern navigation layout for the EMR application consisting of a top Navbar and a collapsible Sidebar. The Navbar provides global navigation and user account access, while the Sidebar contains the primary navigation links: KPI Details, EMR User Account, and EMR Issue Log. The design follows modern Tailwind CSS patterns with clean aesthetics, smooth transitions, and responsive behavior.

## Functional Requirements

### Navbar
- Fixed position at the top of the viewport
- Contains application logo/brand on the left
- Hamburger menu toggle for mobile sidebar visibility
- User profile avatar/name display on the right
- Notification bell icon (optional placeholder)
- Subtle shadow or border separation from main content

### Sidebar
- Vertical navigation panel on the left side (below navbar on desktop)
- Collapsible/expandable with smooth animation
- Contains navigation links:
  - KPI Details
  - EMR User Account
  - EMR Issue Log
- Active state indication for current page
- Hover states on all interactive elements
- Icons alongside each navigation item (modern Lucide or Heroicons style)

### Responsive Behavior
- Desktop: Sidebar visible by default, Navbar shows full width
- Tablet: Sidebar collapsible, Navbar remains visible
- Mobile: Sidebar hidden by default, slides in on hamburger click

### Visual Design
- Modern, clean aesthetic using Tailwind CSS utility classes
- Consistent color palette (neutral grays with accent color for active states)
- Smooth transitions for hover, focus, and collapse states
- Subtle shadows and borders for depth
- Dark mode compatible structure (optional)

## Figma Design Reference (only if referenced)
- File: N/A
- Component name: N/A
- Key visual constraints:
  - Follow modern SaaS dashboard patterns
  - Clean, minimal aesthetic
  - Consistent spacing using Tailwind's spacing scale

## Possible Edge Cases

- Sidebar content overflow on small screens
- Navigation link text wrapping on extreme zoom levels
- Focus trap when sidebar is open on mobile
- Browser back button behavior after sidebar toggle
- Page content shift when sidebar collapses/expands

## Acceptance Criteria

- [ Yes ] Navbar renders at top with consistent height across viewports
- [ Yes] Sidebar renders with all three navigation links visible
- [ Yes] Sidebar toggle button functions correctly on all screen sizes
- [ Yes] Active navigation link is visually distinguished
- [ Yes] Hover states are visible on all clickable elements
- [ Yes] Mobile sidebar slides in smoothly without layout shift
- [ Yes] Main content area adjusts correctly when sidebar toggles
- [ Yes] All components use Tailwind CSS utility classes only
- [ Yes] No console errors or warnings in development mode

## Open Questions

- Should the sidebar be fixed or scroll with content?
- What is the preferred accent color for active states?
- Should navigation links include tooltips on hover when sidebar collapsed?
- Is there a specific breakpoint for mobile/tablet behavior?

## Testing Guidelines

Create a test file(s) in the ./tests folder for the new feature, and create meaningful tests for the following cases, without going too heavy:

- Navbar renders without crashing
- Sidebar toggle changes visibility state
- Navigation links have correct href values
- Active state applies to current route
- Mobile sidebar opens and closes correctly
- Responsive breakpoints trigger correct layouts
