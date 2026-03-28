# EMR User Account - Implementation Plan

## Context

Build an EMR User Account management page following the existing KPI Details pattern. The feature manages user accounts with fields: No, Date, UserID, First Name, Last Name, Position, Department, Created By, Status, and Remark. A placeholder `UserAccount.jsx` already exists at `/src/pages/UserAccount.jsx` and is routed in `App.jsx`.

## Architecture

Reuse the existing KPI component structure with minimal modifications:
- **Page Component**: `src/pages/EmrUserAccount.jsx` (new) - main page logic
- **Table Component**: `src/components/emr/EmrTable.jsx` (new) - table rendering
- **Modal Component**: `src/components/emr/EmrModal.jsx` (new) - modal wrapper
- **Form Component**: `src/components/emr/EmrForm.jsx` (new) - form with validation
- **Search Component**: `src/components/emr/EmrSearch.jsx` (new) - search input
- **Filter Component**: `src/components/emr/EmrFilter.jsx` (new) - filter dropdowns
- **Bulk Actions**: `src/components/emr/BulkActions.jsx` (new) - bulk delete toolbar

## Files to Create

### 1. Database Schema: `_database/emr-user-account.sql`
```sql
CREATE TABLE IF NOT EXISTS "EMR User Account" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE,
  user_id TEXT,
  first_name TEXT,
  last_name TEXT,
  position TEXT,
  department TEXT,
  created_by TEXT,
  status TEXT,
  remark TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
-- Indexes on: user_id, department, status, created_at
-- RLS policies for authenticated users (SELECT, INSERT, UPDATE, DELETE)
-- Trigger for updated_at
```

### 2. Page Component: `src/pages/EmrUserAccount.jsx`
- State: `data`, `loading`, `searchQuery`, `filters` (status, department, createdBy), `sortConfig`, `currentPage`, `selectedRows`, `modalOpen`, `editingRecord`, `isSubmitting`
- `fetchData()`: Supabase query from "EMR User Account"
- Filter logic: Search (firstName, lastName, userId, department), Filter (status, department, createdBy)
- Sort, pagination, CRUD handlers (copy from KpiDetails)

### 3. Table Component: `src/components/emr/EmrTable.jsx`
- Column config:
  ```js
  { key: 'no', label: 'No', sortable: false, width: '60px' },
  { key: 'date', label: 'Date', sortable: true, width: '100px' },
  { key: 'userId', label: 'UserID', sortable: true, width: '120px' },
  { key: 'firstName', label: 'First Name', sortable: true, width: '120px' },
  { key: 'lastName', label: 'Last Name', sortable: true, width: '120px' },
  { key: 'position', label: 'Position', sortable: true, width: '120px' },
  { key: 'department', label: 'Department', sortable: true, width: '100px' },
  { key: 'createdBy', label: 'Created By', sortable: true, width: '100px' },
  { key: 'status', label: 'Status', sortable: true, width: '90px' },
  { key: 'remark', label: 'Remark', sortable: false, width: '200px' },
  ```
- "No" column: Calculate as `(currentPage - 1) * itemsPerPage + index + 1`
- Fixed table layout, scroll-to-top, Next/Prev pagination only
- Reuse KpiTable structure, adapt for new columns

### 4. Form Component: `src/components/emr/EmrForm.jsx`
- Fields with validation:
  - Date (required)
  - UserID (required, unique validation TBD)
  - First Name (required)
  - Last Name (required)
  - Position (required)
  - Department (required, dropdown)
  - Created By (dropdown)
  - Status (required: Active, Inactive)
  - Remark (textarea, optional)
- Dark theme styling (copy from KpiForm)

### 5. Modal, Search, Filter, BulkActions
- Copy from `src/components/kpi/` and adapt for EMR fields

### 6. Update App.jsx
- Add route: `<Route path="/emr-user-account" element={<EmrUserAccount />} />`
- Update Navbar and Sidebar to include "EMR User Account" link

## Reusable Patterns from KPI

| Pattern | Source | Reuse |
|---------|--------|-------|
| Page state structure | `KpiDetails.jsx` | Direct copy |
| Supabase fetch | `KpiDetails.jsx` | Change table name |
| Filter/search logic | `KpiDetails.jsx` | Adapt field names |
| Sort/pagination | `KpiDetails.jsx` | Direct copy |
| Fixed column table | `KpiTable.jsx` | Direct copy with new columns |
| Scroll-to-top | `KpiTable.jsx` | Direct copy |
| Modal with backdrop | `KpiModal.jsx` | Direct copy |
| RHF form pattern | `KpiForm.jsx` | Adapt fields |
| Dark theme classes | `KpiForm.jsx` | Direct copy |
| Date formatting | `formatMyanmarDate.js` | Reuse utility |

## Resolved Decisions

- **Status values**: Active, Inactive
- **Departments**: Same as KPI (IT, HR, Finance, Operations, Sales, Marketing, Customer Support, Other)
- **Positions**: Medical + Admin mix (Doctor, Nurse, Pharmacist, Lab Technician, Admin, Receptionist, Manager)
- **Created By**: Same as KPI (Chit Ko Ko, Nay Myo Maung, It Teams)
- **UserID validation**: Required field, no specific format enforced (text input)

## Verification Steps

1. Run `npm run dev` and navigate to `/emr-user-account`
2. Verify table displays all 10 columns with correct widths
3. Test "Add New Record" opens modal form
4. Create a record, verify it appears in table
5. Edit the record, verify changes persist
6. Delete single record (with confirmation)
7. Test bulk select and delete
8. Test search by First Name, Last Name, UserID, Department
9. Test filters (Status, Department, Created By)
10. Test sorting on all sortable columns
11. Test Next/Prev pagination
12. Verify dark theme consistency
13. Check responsive layout on narrow screens
