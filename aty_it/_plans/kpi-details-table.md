# Plan: KPI Details Table with Search, Filter, Modal and Supabase Integration

## Context

The user wants to build a complete KPI Details management page with:
- Search functionality
- Filter controls
- Data table with sorting and pagination
- Add record modal with React Hook Form
- Supabase integration for data storage
- Edit/Delete functionality for existing records
- SweetAlert2 for error/success messages
- Myanmar date time format

This is a **greenfield feature** - the current KpiDetails page is a placeholder with no implementation.

## Technical Environment

| Aspect | Details |
|--------|---------|
| Framework | React 19.2.4 |
| Styling | Tailwind CSS v4.2.2 (dark theme: gray-900, indigo-600) |
| Routing | React Router DOM v7.13.2 |
| Existing Pattern | Functional components, useState/useEffect |

## Required Dependencies

Install before implementation:
```bash
npm install @supabase/supabase-js react-hook-form sweetalert2
```

## Implementation Approach

### 1. Supabase Client Setup

Create `src/lib/supabaseClient.js`:
- Initialize Supabase client with URL and anon key
- Environment variables via `.env` file (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
- Export client for use across components

### 2. KPI Details Page Structure

Create component hierarchy:
```
src/pages/KpiDetails.jsx (main container)
src/components/kpi/
  ├── KpiTable.jsx (table with sorting, pagination)
  ├── KpiSearch.jsx (search input)
  ├── KpiFilter.jsx (filter controls)
  ├── KpiModal.jsx (add/edit modal)
  ├── KpiForm.jsx (form with react-hook-form)
  └── BulkActions.jsx (bulk delete when rows selected)
```

### 3. State Management

Use useState for:
- `data`: Array of KPI records
- `loading`: Boolean for loading state
- `searchQuery`: Search string
- `filters`: Object for active filters
- `sortConfig`: { key, direction }
- `currentPage`: Number
- `itemsPerPage`: Number (default 10)
- `modalOpen`: Boolean
- `editingRecord`: null or record being edited
- `selectedRows`: Set of selected row IDs

### 4. Search Functionality

- Debounced search input (300ms delay)
- Filter data by Description, Department, Issue Type columns
- Clear search button
- Visual indicator when search active

### 5. Filter Functionality

- Filter by status (All/Active/Inactive dropdown)
- Filter by Issue Type dropdown
- Filter by Department dropdown
- Filter by date range
- Multiple filters can be active simultaneously
- "Clear All Filters" button
- Save filters to URL params for sharing

### 6. Data Table

**Columns (from user requirements):**
- Checkbox (for bulk selection)
- Date (Myanmar format)
- Issue Type
- Department
- Description
- Confirm By
- Status (badge with color)
- Start Time (Myanmar format)
- End Time (Myanmar format)
- Duration
- Done By
- Check
- Solution
- Actions (Edit, Delete buttons)

**Features:**
- Checkbox for row selection (bulk actions)
- Bulk delete button appears when rows selected
- Click column header to sort (asc/desc)
- Sort indicator icon (↑/↓)
- Pagination controls (Previous, page numbers, Next)
- Empty state when no data
- Loading skeleton during fetch
- Responsive: horizontal scroll on mobile

### 7. Add/Edit Modal

**Modal Features:**

- Opens on "Add New KPI" button click
- Backdrop with blur effect
- Close on ESC, outside click, cancel, or submit
- Focus trap for accessibility
- Title: "Add New KPI" or "Edit KPI"

**Form Fields (React Hook Form):**
- Date (required, date input, default: today)
- Issue Type (required, select dropdown)
- Department (required, select dropdown)
- Description (required, textarea)
- Confirm By (optional, text input)
- Status (required, select: Active/Inactive)
- Start Time (optional, time input)
- End Time (optional, time input)
- Duration (optional, text input - auto-calculated or manual)
- Done By (optional, text input)
- Check (optional, text input)
- Solution (optional, textarea)

**Validation:**
- Required fields show error on blur
- Submit disabled until valid
- Error messages below each field

### 8. Supabase Integration

**Fetch Data:**
```js
const { data, error } = await supabase
  .from('Kpi Details')
  .select('*')
  .order('created_at', { ascending: false });
```

**Insert Record:**
```js
const { data, error } = await supabase
  .from('Kpi Details')
  .insert([{ ...formData, created_at: new Date().toISOString() }]);
```

**Update Record:**
```js
const { data, error } = await supabase
  .from('Kpi Details')
  .update(formData)
  .eq('id', editingRecord.id);
```

**Delete Record:**
```js
const { error } = await supabase
  .from('Kpi Details')
  .delete()
  .eq('id', id);
```

### 9. Myanmar Date Time Format

Use Intl.DateTimeFormat for Myanmar locale:
```js
const formatMyanmarDateTime = (dateString) => {
  return new Intl.DateTimeFormat('my-MM', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateString));
};
```

### 10. SweetAlert2 Feedback

**Success:**
```js
Swal.fire({
  icon: 'success',
  title: 'Success',
  text: 'KPI added successfully!',
  timer: 2000,
  showConfirmButton: false
});
```

**Error:**
```js
Swal.fire({
  icon: 'error',
  title: 'Error',
  text: error.message
});
```

**Delete Confirmation:**
```js
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#4f46e5',
  cancelButtonColor: '#ef4444'
});
```

## Critical Files to Create/Modify

| Action | File Path |
|--------|-----------|
| Install | Dependencies (supabase-js, react-hook-form, sweetalert2) |
| Create | `src/lib/supabaseClient.js` |
| Create | `.env` (environment variables template) |
| Create | `src/components/kpi/KpiTable.jsx` |
| Create | `src/components/kpi/KpiSearch.jsx` |
| Create | `src/components/kpi/KpiFilter.jsx` |
| Create | `src/components/kpi/KpiModal.jsx` |
| Create | `src/components/kpi/KpiForm.jsx` |
| Create | `src/components/kpi/BulkActions.jsx` |
| Modify | `src/pages/KpiDetails.jsx` |
| Create | `src/utils/formatMyanmarDate.js` |

## Design Decisions

1. **Dark theme matching**: Use gray-900 for headers, indigo-600 for accents (matching Navbar/Sidebar)
2. **Table styling**: White background with gray borders, hover states on rows
3. **Modal styling**: Dark backdrop (bg-gray-900/50), white content box
4. **Form styling**: Tailwind forms with indigo focus states
5. **Pagination**: Simple Previous/Next with page numbers
6. **Mobile responsive**: Horizontal scroll for table, stacked layout for filters
7. **Status badges**: Green for Active, Red for Inactive
8. **Checkbox styling**: Indigo accent color matching theme

## User Decisions (Already Confirmed)

| Question | Decision |
|----------|----------|
| Initial columns | Date, Issue Type, Department, Description, Confirm By, Status, Start Time, End Time, Duration, Done By, Check, Solution |
| Validation rules | Required: Date, Issue Type, Department, Description, Status |
| Edit functionality | Yes |
| Delete functionality | Yes |
| Supabase table name | "Kpi Details" |
| URL params for filters | Yes |
| Date format | Myanmar Date Time Now |
| Error messages | SweetAlert2 |
| Row selection | Yes, checkboxes for bulk actions |

## Verification Steps

After implementation:

1. **Install Dependencies**: Run `npm install @supabase/supabase-js react-hook-form sweetalert2`

2. **Visual Check**: Run `npm run dev` and verify:
   - Table displays with proper columns and styling
   - Search input filters results in real-time
   - Filter controls apply and clear correctly
   - Sort changes column order on header click
   - Pagination navigates through pages
   - Add button opens modal with form
   - Form validation shows errors
   - Submit creates record in Supabase
   - Edit button opens modal with pre-filled data
   - Delete button shows confirmation then removes record
   - SweetAlert2 notifications appear on actions

3. **Responsive Check**:
   - Desktop: Full table layout
   - Mobile: Horizontal scroll for table, stacked filters

4. **Console/Lint**: No errors, `npm run lint` passes

5. **Supabase Check**: Verify data persists in Supabase dashboard
