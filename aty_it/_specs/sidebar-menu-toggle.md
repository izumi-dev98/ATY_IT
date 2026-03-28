# Spec for sidebar-menu-toggle

branch: claude/feature/sidebar-menu-toggle
figma_component (if used): N/A

## Summary

Add a menu toggle button to the Sidebar component that allows users to collapse and expand the sidebar on desktop screens. This feature improves screen real estate management by letting users hide the sidebar when not needed, providing more space for main content.

## Functional Requirements

### Desktop Toggle Behavior
- Add a visible toggle button on the sidebar (typically at the top or bottom)
- Clicking the toggle button collapses the sidebar to a mini-state (icons only) or fully hides it
- Clicking again expands the sidebar back to full width
- Toggle state persists during the session

### Visual States
- **Expanded state**: Full sidebar with icons and text labels (default)
- **Collapsed state**: Mini sidebar showing only icons, or fully hidden

### Toggle Button
- Clear visual indicator (chevron or arrow icon)
- Positioned for easy access
- Changes direction based on expanded/collapsed state
- Smooth animation during transition

### Responsive Behavior
- Desktop: Toggle button visible and functional
- Tablet: Toggle optional based on screen size
- Mobile: Toggle handled by hamburger menu in Navbar (existing behavior)

## Figma Design Reference (only if referenced)
- File: N/A
- Component name: N/A
- Key visual constraints:
  - Toggle button should not obstruct navigation items
  - Animation should be smooth (duration-300)
  - Maintain consistent dark theme styling

## Possible Edge Cases

- Content overflow when sidebar is collapsed
- Toggle button accessibility (keyboard navigation, screen readers)
- State persistence across page navigation
- Interaction with existing mobile hamburger menu toggle
- Sidebar state when resizing between desktop and mobile views

## Acceptance Criteria

- [ Yes ] Toggle button is visible on desktop screens
- [ Yes] Clicking toggle collapses/expands sidebar smoothly
- [  Yes] Toggle icon changes direction based on state
- [ Yes] Collapsed sidebar shows only icons (mini state) or hides completely
- [ Yes] Expanded sidebar shows icons and text labels
- [ Yes] Animation is smooth without jank
- [ yes] Mobile hamburger menu continues to work independently
- [ yes] No layout shift or content overlap issues
- [ yes] Keyboard accessible (Enter/Space to toggle)

## Open Questions

- Should collapsed state show icons (mini sidebar) or hide completely?
- Should toggle state persist across page refreshes (localStorage)?
- What icon style for the toggle button (chevron, arrows, hamburger)?
- Should there be a keyboard shortcut for toggling?

## Testing Guidelines

Create a test file(s) in the ./tests folder for the new feature, and create meaningful tests for the following cases, without going too heavy:

- Toggle button renders on desktop
- Click event changes sidebar state
- Collapsed state applies correct CSS classes
- Expanded state restores full sidebar
- Toggle icon rotates/changes based on state
- Mobile view is not affected by desktop toggle
