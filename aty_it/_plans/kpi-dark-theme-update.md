# Plan: KPI Details Table - Dark Theme Design

## Context

The user wants a complete KPI Details management page with a **dark theme design** matching the existing Navbar and Sidebar components. The feature includes search, filters, data table, add/edit modal with React Hook Form, and Supabase integration.

## Technical Environment

| Aspect | Details |
|--------|---------|
| Framework | React 19.2.4 |
| Styling | Tailwind CSS v4.2.2 (dark theme: gray-900, indigo-600) |
| Routing | React Router DOM v7.13.2 |

## Required Dependencies

Already installed:
- `@supabase/supabase-js`
- `react-hook-form`
- `sweetalert2`

## Design Decisions - Dark Theme

All components use the same dark theme as Navbar/Sidebar:

| Component | Dark Theme Styling |
|-----------|-------------------|
| Table header | `bg-gray-800 text-gray-100` |
| Table rows | `bg-gray-900 text-gray-100` |
| Row hover | `hover:bg-gray-800` |
| Borders | `border-gray-700` |
| Selected rows | `bg-indigo-900/50` |
| Modal backdrop | `bg-gray-900/50` |
| Modal content | `bg-gray-800 text-gray-100` |
| Form inputs | `bg-gray-700 text-gray-100 border-gray-600` |
| Form labels | `text-gray-300` |
| Focus ring | `focus:ring-indigo-500` |
| Status badges | Green (Completed), Yellow (Not Strated) |

## User Decisions (Confirmed)

| Field | Options |
|-------|---------|
| Confirm By | Chit Ko Ko, Nay Myo Maung, It Teams |
| Done By | Chit Ko Ko, Nay Myo Maung, It Teams |
| Check | Not yet, Checked |
| Status | Not Strated, Completed |

## Files Modified

| File | Changes |
|------|---------|
| `src/components/kpi/KpiForm.jsx` | Updated Confirm By, Done By, Check, Status to dropdown options |
| `src/components/kpi/KpiFilter.jsx` | Added Confirm By and Done By filters, updated status options |
| `src/pages/KpiDetails.jsx` | Added confirmBy and doneBy to filters state and filter logic |

## Verification

Run `npm run lint` - passes with no errors.
Dev server running at http://localhost:5173/
