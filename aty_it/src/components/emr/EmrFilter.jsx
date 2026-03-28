function EmrFilter({ filters, onFilterChange, onClearAll }) {
  const statusOptions = ['Active', 'Inactive'];

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

  const createdByOptions = [
    'Chit Ko Ko',
    'Nay Myo Maung',
    'It Teams',
  ];

  const hasActiveFilters =
    filters.status || filters.department || filters.createdBy || filters.dateFrom || filters.dateTo;

  return (
    <div className="bg-gray-800 rounded-lg p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Status
          </label>
          <select
            value={filters.status}
            onChange={(e) => onFilterChange('status', e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
          >
            <option value="">All Status</option>
            {statusOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-gray-700">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Department Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Department
          </label>
          <select
            value={filters.department}
            onChange={(e) => onFilterChange('department', e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept} className="bg-gray-700">
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Created By Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Created By
          </label>
          <select
            value={filters.createdBy}
            onChange={(e) => onFilterChange('createdBy', e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
          >
            <option value="">All Users</option>
            {createdByOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-gray-700">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Date Range Filter */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Date From
            </label>
            <input
              type="date"
              value={filters.dateFrom}
              onChange={(e) => onFilterChange('dateFrom', e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Date To
            </label>
            <input
              type="date"
              value={filters.dateTo}
              onChange={(e) => onFilterChange('dateTo', e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
            />
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex justify-end">
          <button
            onClick={onClearAll}
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default EmrFilter;
