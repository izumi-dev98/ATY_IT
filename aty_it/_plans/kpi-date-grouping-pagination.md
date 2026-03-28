# KPI Table: Date Grouping & Simplified Pagination

## Context

User requested modifications to the KPI table:
1. **Sort/Group by date column** - Group records by date with collapsible sections
2. **Pagination: Next/Prev Only** - Remove numbered page buttons, keep only Previous/Next navigation

Current state (`KpiDetails.jsx`, `KpiTable.jsx`):
- Flat table with client-side sorting and pagination (10 items/page)
- Pagination shows: "Showing X to Y of Z entries" + Prev + [1][2][3]... + Next
- Default sort is by date descending

## Implementation Plan

### Approach: Date Grouping with Collapsible Sections

#### 1. Modify `KpiDetails.jsx`
- Add new state: `groupedByDate` (boolean, default true) and `expandedDates` (Set of date strings)
- Create a helper function to group `sortedData` by date field
- Pass grouped data structure to `KpiTable` instead of flat `paginatedData`
- Add handlers: `toggleDateGroup(date)` to expand/collapse groups

#### 2. Modify `KpiTable.jsx`

**Props changes:**
- Add: `groupedData` (array of {date, records} objects)
- Add: `expandedDates` (Set or array of date strings)
- Add: `onToggleDateGroup` (function)
- Add: `groupedByDate` (boolean toggle)

**UI changes:**
- Add a "Group by Date" toggle button/checkbox near the table header
- Replace flat `<tbody>` rendering with grouped rendering:
  - For each date group, render a collapsible header row showing the date and record count
  - Use `expandedDates` to control visibility of records under each date
  - Add chevron icon (▼/▶) to indicate expanded/collapsed state
- **Pagination**: Remove the numbered page buttons (lines 218-230), keep only:
  - "Showing X to Y of Z entries" text
  - Previous button
  - Next button

#### 3. Pagination Logic Update

Since grouping changes how data is displayed, pagination should work on the **grouped data**:
- When `groupedByDate=true`: pagination applies to date groups (each group expands to show all its records)
- When `groupedByDate=false`: use original flat pagination

Alternative simpler approach: Keep pagination working on flat data, just visually group by date in the table rendering.

**Recommended**: Simpler approach - pagination works on flat sorted data, visual grouping is just a rendering layer. This avoids complexity with "how many records per group" affecting page size.

### Files to Modify

1. **`/home/izumi/nmm/it/aty_it/src/components/kpi/KpiTable.jsx`**
   - Remove numbered pagination buttons (lines 218-230)
   - Add grouped date rendering with collapsible headers
   - Add "Group by Date" toggle UI

2. **`/home/izumi/nmm/it/aty_it/src/pages/KpiDetails.jsx`**
   - Add `groupedByDate` state
   - Add `expandedDates` state
   - Add `toggleDateGroup` handler
   - Create `groupDataByDate()` helper function
   - Pass new props to KpiTable

### Design Considerations

- **Dark theme consistency**: Use existing `bg-gray-800/900`, `text-gray-300/400`, `border-gray-700`
- **Collapsible animation**: Use CSS transitions for smooth expand/collapse
- **Date header styling**: Similar to table header but distinct, show record count badge
- **Default state**: All date groups expanded by default, or most recent N days expanded

### Verification

- [x] Dev server runs without errors
- [x] No ESLint/diagnostic errors in modified files
- [ ] Manual testing: Navigate to KPI Details page
- [ ] Manual testing: Verify date grouping displays correctly
- [ ] Manual testing: Click date group headers to expand/collapse
- [ ] Manual testing: Verify Previous/Next pagination works
- [ ] Manual testing: Verify no numbered page buttons visible
- [ ] Manual testing: Test sorting on columns
- [ ] Manual testing: Test with filters

### Status

**COMPLETED** - Implementation done. Dev server running at http://localhost:5175/
