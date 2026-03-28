# KPI Form Date/Time Update Plan

**Created:** 2026-03-28
**Status:** COMPLETED
**Request:** Update KPI form with datetime fields and auto-duration calculation

---

## Context

The user requested three changes to the KPI components:
1. Change KPI components background to dark theme
2. Update the form to use DateTime fields (date + time combined) for Start and End instead of separate date and time fields
3. Auto-calculate duration as the difference between End Date/Time and Start Date/Time

**Note:** The components already use dark theme styling (gray-700/800/900 backgrounds). The existing styling is consistent with a dark theme, so no changes are needed for item #1.

---

## Implementation Plan

### Files to Modify

1. **`src/components/kpi/KpiForm.jsx`** - Main form component
2. **`src/pages/KpiDetails.jsx`** - Data submission handling
3. **`_database/schema.sql`** - Update schema to reflect new field types

---

## Changes Required

### 1. KpiForm.jsx Changes

**Current fields:**
- `date` (type="date")
- `startTime` (type="time")
- `endTime` (type="time")
- `duration` (text input, manually entered)

**New fields:**
- `startDateTime` (type="datetime-local") - combined start date/time
- `endDateTime` (type="datetime-local") - combined end date/time
- `duration` (text input, auto-calculated, read-only)

**Implementation details:**

```jsx
// Add useEffect for duration calculation
useEffect(() => {
  if (startDateTime && endDateTime) {
    const start = new Date(startDateTime);
    const end = new Date(endDateTime);
    const diffMs = end - start;

    if (diffMs >= 0) {
      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

      let durationStr = '';
      if (hours > 0) durationStr += `${hours} hour${hours > 1 ? 's' : ''} `;
      if (minutes > 0) durationStr += `${minutes} minute${minutes > 1 ? 's' : ''}`;
      if (hours === 0 && minutes === 0) durationStr = '0 minutes';

      setValue('duration', durationStr.trim());
    }
  }
}, [startDateTime, endDateTime, setValue]);
```

**Form fields replacement:**

```jsx
{/* Start DateTime */}
<div>
  <label className="block text-sm font-medium text-gray-300 mb-1">
    Start Date & Time
  </label>
  <input
    type="datetime-local"
    {...register('startDateTime')}
    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
  />
</div>

{/* End DateTime */}
<div>
  <label className="block text-sm font-medium text-gray-300 mb-1">
    End Date & Time
  </label>
  <input
    type="datetime-local"
    {...register('endDateTime')}
    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
  />
</div>

{/* Duration (Auto-calculated, Read-only) */}
<div>
  <label className="block text-sm font-medium text-gray-300 mb-1">
    Duration (Auto-calculated)
  </label>
  <input
    type="text"
    {...register('duration')}
    readOnly
    className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-400 cursor-not-allowed"
  />
</div>
```

---

### 2. KpiDetails.jsx Changes

Update the `handleSubmit` function to map the new field names:

```jsx
const handleSubmit = async (formData) => {
  setIsSubmitting(true);
  try {
    // Map new datetime fields to database columns
    const dataToSave = {
      ...formData,
      startTime: formData.startDateTime ? new Date(formData.startDateTime).toISOString() : null,
      endTime: formData.endDateTime ? new Date(formData.endDateTime).toISOString() : null,
      // Remove the datetime-local fields before saving
    };
    delete dataToSave.startDateTime;
    delete dataToSave.endDateTime;

    if (editingRecord) {
      const { error } = await supabase
        .from('Kpi Details')
        .update(dataToSave)
        .eq('id', editingRecord.id);
      // ... rest of update logic
    } else {
      const { error } = await supabase.from('Kpi Details').insert([{
        ...dataToSave,
        created_at: new Date().toISOString(),
      }]);
      // ... rest of insert logic
    }
  } catch (error) {
    // ... error handling
  } finally {
    setIsSubmitting(false);
  }
};
```

Also update `fetchData` to convert ISO datetime strings back to datetime-local format for editing:

```jsx
// When loading data for edit, convert ISO strings to datetime-local format
const loadForEdit = (record) => {
  const editData = { ...record };
  if (record.startTime) {
    editData.startDateTime = new Date(record.startTime).toISOString().slice(0, 16);
  }
  if (record.endTime) {
    editData.endDateTime = new Date(record.endTime).toISOString().slice(0, 16);
  }
  return editData;
};
```

---

### 3. Database Schema Update

The existing schema already has `startTime`, `endTime`, and `duration` as TEXT fields, which is compatible. The application will store ISO 8601 datetime strings.

Update `_database/schema.sql` comments to clarify the format:

```sql
"startTime" TEXT,  -- ISO 8601 datetime string (e.g., "2026-03-28T09:00:00")
"endTime" TEXT,    -- ISO 8601 datetime string
duration TEXT,     -- Human-readable duration (e.g., "2 hours 30 minutes")
```

---

## Verification Steps

1. Run `npm run dev` to start the development server
2. Navigate to the KPI Details page
3. Click "Add New Record"
4. Verify the form shows:
   - "Start Date & Time" field with datetime picker
   - "End Date & Time" field with datetime picker
   - "Duration" field (read-only, grayed out)
5. Select start and end date/times
6. Verify duration auto-calculates correctly
7. Submit the form and verify data saves to Supabase
8. Edit an existing record and verify datetime values load correctly

---

## Notes

- **Dark theme:** Already implemented - all KPI components use dark gray backgrounds (gray-700, gray-800, gray-900)
- **Backward compatibility:** Existing records without datetime values will display empty fields when edited
- **Validation:** Consider adding validation to ensure endDateTime >= startDateTime
- **Timezone:** datetime-local uses local timezone; stored as ISO strings in UTC
