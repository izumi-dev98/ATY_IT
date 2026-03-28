# Spec for EMR User Account

branch: claude/feature/emr-user-account

## Summary

Create an EMR User Account management page similar to the existing KPI Details page. This feature allows users to manage EMR system user accounts with fields for user identification, personal information, role assignment, and account status tracking.

## Functional Requirements

1. **Table Columns** (in order):
   - No (auto-increment row number)
   - Date (account creation/modification date)
   - UserID (unique user identifier)
   - First Name
   - Last Name
   - Position
   - Department
   - Created By (user who created the account)
   - Status (account status)
   - Remark (additional notes)

2. **CRUD Operations**:
   - Create new user account records
   - Edit existing user account records
   - Delete single user account records
   - Bulk delete multiple user account records

3. **Search & Filter**:
   - Search by: First Name, Last Name, UserID, Department
   - Filter by: Status, Department, Created By

4. **Pagination**:
   - Next/Prev buttons only (no numbered page buttons)
   - Configurable items per page (default: 10)
   - Display current page range and total entries

5. **Sorting**:
   - Sortable columns with ascending/descending toggle
   - Visual indicator for current sort column and direction

6. **Row Selection**:
   - Individual row checkbox selection
   - Select all checkbox in header
   - Bulk actions toolbar when rows are selected

## Possible Edge Cases

- Empty table state (no records)
- Long text in name fields (truncate with tooltip)
- Duplicate UserID validation
- Status values consistency (e.g., Active, Inactive, Suspended)
- Date format consistency with Myanmar timezone

## Acceptance Criteria

- [ ] Table displays all 10 columns with proper widths
- [ ] Add New Record button opens modal form
- [ ] Form includes all required fields with validation
- [ ] Edit button pre-fills form with existing data
- [ ] Delete confirms before removing record
- [ ] Bulk delete works for multiple selected rows
- [ ] Search filters results in real-time
- [ ] Filter dropdowns work independently and combined
- [ ] Pagination with Next/Prev only
- [ ] Column sorting works on all sortable columns
- [ ] Dark theme consistent with KPI page
- [ ] Responsive layout for various screen sizes

## Open Questions

1. What are the valid Status values? (e.g., Active, Inactive, Suspended)
2. What departments should be available in the dropdown?
3. What positions are valid for EMR users?
4. Should UserID have a specific format or validation pattern?
5. Is there a need for role/permission management beyond basic account status?

## Testing Guidelines

Create a test file in the ./tests folder for the new feature, and create meaningful tests for the following cases:

- Form validation (required fields, unique UserID)
- Create, read, update, delete operations
- Search functionality
- Filter functionality (individual and combined)
- Sorting (ascending/descending)
- Pagination (Next/Prev navigation)
- Row selection (individual and select all)
- Bulk delete operation
- Empty state display
- Loading state handling
