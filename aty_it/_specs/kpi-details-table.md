# Spec for kpi-details-table

branch: claude/feature/kpi-details-table
figma_component (if used): N/A

## Summary

Build a complete KPI Details management page with a data table featuring search functionality, filters, add new record modal, and Supabase integration. The form will be built using React Hook Form for validation and state management. This component allows users to view, search, filter, and add KPI records with manual column configuration capability.

## Functional Requirements

### Search Function
- Search input field with debounced input
- Search across multiple columns (name, description, etc.)
- Clear search button
- Visual indicator when search is active

### Filter Functionality
- Filter dropdowns or chips for common filter criteria
- Ability to filter by status, category, or date range
- Multiple active filters support
- Clear all filters option

### Data Table
- Responsive table layout
- Column headers with sort functionality
- Pagination controls
- Empty state when no data matches
- Loading state during data fetch
- Row actions (edit, delete placeholders)

### Add Record Modal
- Modal dialog that opens on "Add" button click
- Form built with React Hook Form
- Validation for required fields
- Submit and cancel actions
- Close on outside click or ESC key
- Success/error feedback after submission

### Supabase Integration
- Connect to Supabase for data storage
- Fetch KPI records from Supabase table
- Insert new records via Supabase client
- Handle loading and error states
- Environment-based configuration (credentials added later)

### Manual Column Configuration
- Ability to add custom columns later
- Flexible schema design for extensibility

## Figma Design Reference (only if referenced)
- File: N/A
- Component name: N/A
- Key visual constraints:
  - Modern table design with Tailwind CSS
  - Modal with backdrop and smooth animation
  - Consistent dark theme matching existing navigation
  - Responsive design for all screen sizes

## Possible Edge Cases

- Empty table state (no records)
- Search with no matching results
- Network errors during Supabase fetch
- Form validation errors
- Duplicate record handling
- Long text in table cells (truncation/overflow)
- Modal accessibility (focus trap, keyboard navigation)
- Pagination with large datasets

## Acceptance Criteria

- [ Yes] Search input filters table results in real-time
- [ yes] Filter controls apply and clear correctly
- [ yes] Table displays KPI data with proper columns
- [ yes] Sort functionality works on column headers
- [ yes] Pagination controls navigate through pages
- [ yes] Add button opens modal dialog
- [ yes] Form validation works with React Hook Form
- [ yes] Submit creates new record in Supabase
- [ yes] Loading states display during async operations
- [ yes] Error states show appropriate messages (using sweetalert2)
- [ yes] Modal closes on cancel, submit, outside click, and ESC
- [ yes] Responsive design works on mobile and desktop

## Open Questions

- What are the initial KPI columns/fields needed? (yes)
- What validation rules are required for each field? (yes)
- Should there be edit functionality for existing records? (yes)
- Should there be delete functionality for records? (yes)
- What is the Supabase table name and schema? (Kpi Details)
- Should filters be saved in URL params for sharing? (yes)
- What date format should be used? ( Myanmar Date Time Now)

## Testing Guidelines

Create a test file(s) in the ./tests folder for the new feature, and create meaningful tests for the following cases, without going too heavy:

- Search input filters table correctly
- Filter controls apply and clear
- Table renders with correct data structure
- Sort changes column order
- Pagination navigates pages
- Modal opens and closes correctly
- Form validation shows errors for invalid input
- Form submission calls Supabase insert
- Loading state displays during fetch
- Error state displays on fetch failure
