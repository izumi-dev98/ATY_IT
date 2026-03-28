function KpiFilter({ filters, onFilterChange, onClearAll }) {
  const issueTypes = [
    'Network',
    'Hardware',
    'Software',
    'Security',
    'Performance',
    'Other',
  ];

  const departments = [
    'IT',
    'HR',
    'Finance',
    'Operations',
    'Sales',
    'Marketing',
    'Customer Support',
    'Other',
  ];

  const statusOptions = [
    { value: '', label: 'All Status' },
    { value: 'Not Strated', label: 'Not Strated' },
    { value: 'Completed', label: 'Completed' },
  ];

  const confirmByOptions = [
    { value: '', label: 'All Confirm By' },
    { value: 'Chit Ko Ko', label: 'Chit Ko Ko' },
    { value: 'Nay Myo Maung', label: 'Nay Myo Maung' },
    { value: 'It Teams', label: 'It Teams' },
  ];

  const doneByOptions = [
    { value: '', label: 'All Done By' },
    { value: 'Chit Ko Ko', label: 'Chit Ko Ko' },
    { value: 'Nay Myo Maung', label: 'Nay Myo Maung' },
    { value: 'It Teams', label: 'It Teams' },
  ];

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {/* Status Filter */}
      <select
        value={filters.status}
        onChange={(e) => onFilterChange('status', e.target.value)}
        className="px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
      >
        {statusOptions.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-gray-700">
            {opt.label}
          </option>
        ))}
      </select>

      {/* Issue Type Filter */}
      <select
        value={filters.issueType}
        onChange={(e) => onFilterChange('issueType', e.target.value)}
        className="px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
      >
        <option value="" className="bg-gray-700">All Issue Types</option>
        {issueTypes.map((type) => (
          <option key={type} value={type} className="bg-gray-700">
            {type}
          </option>
        ))}
      </select>

      {/* Department Filter */}
      <select
        value={filters.department}
        onChange={(e) => onFilterChange('department', e.target.value)}
        className="px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
      >
        <option value="" className="bg-gray-700">All Departments</option>
        {departments.map((dept) => (
          <option key={dept} value={dept} className="bg-gray-700">
            {dept}
          </option>
        ))}
      </select>

      {/* Confirm By Filter */}
      <select
        value={filters.confirmBy}
        onChange={(e) => onFilterChange('confirmBy', e.target.value)}
        className="px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
      >
        {confirmByOptions.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-gray-700">
            {opt.label}
          </option>
        ))}
      </select>

      {/* Done By Filter */}
      <select
        value={filters.doneBy}
        onChange={(e) => onFilterChange('doneBy', e.target.value)}
        className="px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
      >
        {doneByOptions.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-gray-700">
            {opt.label}
          </option>
        ))}
      </select>

      {/* Date Range Filter */}
      <input
        type="date"
        value={filters.dateFrom}
        onChange={(e) => onFilterChange('dateFrom', e.target.value)}
        placeholder="From Date"
        className="px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
      />
      <input
        type="date"
        value={filters.dateTo}
        onChange={(e) => onFilterChange('dateTo', e.target.value)}
        placeholder="To Date"
        className="px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
      />

      {/* Clear All Button */}
      {(filters.status || filters.issueType || filters.department || filters.confirmBy || filters.doneBy || filters.dateFrom || filters.dateTo) && (
        <button
          onClick={onClearAll}
          className="px-4 py-2 text-sm text-gray-300 hover:text-gray-100 hover:bg-gray-700 rounded-lg transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  );
}

export default KpiFilter;
