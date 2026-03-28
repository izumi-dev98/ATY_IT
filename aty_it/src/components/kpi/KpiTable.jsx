import { formatMyanmarDate, formatMyanmarTime } from '../../utils/formatMyanmarDate';

function KpiTable({
  data,
  sortConfig,
  onSort,
  selectedRows,
  onRowSelect,
  onSelectAll,
  onEdit,
  onDelete,
  loading,
  currentPage,
  itemsPerPage,
  totalPages,
  onPageChange,
}) {
  const columns = [
    { key: 'date', label: 'Date', sortable: true },
    { key: 'issueType', label: 'Issue Type', sortable: true },
    { key: 'department', label: 'Department', sortable: true },
    { key: 'description', label: 'Description', sortable: true },
    { key: 'confirmBy', label: 'Confirm By', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'startTime', label: 'Start Time', sortable: true },
    { key: 'endTime', label: 'End Time', sortable: true },
    { key: 'duration', label: 'Duration', sortable: false },
    { key: 'doneBy', label: 'Done By', sortable: true },
    { key: 'check', label: 'Check', sortable: false },
    { key: 'solution', label: 'Solution', sortable: false },
  ];

  const handleSort = (key) => {
    onSort(key);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return 'text-gray-300';
    return sortConfig.direction === 'asc' ? 'text-indigo-600' : 'text-indigo-600';
  };

  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return '↑↓';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="animate-pulse p-4 space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-700 rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg shadow p-12 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-100">No records found</h3>
        <p className="mt-2 text-gray-400">Get started by creating a new KPI record.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length && data.length > 0}
                  onChange={(e) => onSelectAll(e.target.checked)}
                  className="w-4 h-4 text-indigo-600 border-gray-600 rounded focus:ring-indigo-500 bg-gray-700"
                />
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => col.sortable && handleSort(col.key)}
                  className={`px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider ${
                    col.sortable ? 'cursor-pointer hover:bg-gray-700' : ''
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {col.label}
                    {col.sortable && (
                      <span className={`text-xs ${getSortIcon(col.key)}`}>
                        {getSortArrow(col.key)}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {data.map((row) => (
              <tr
                key={row.id}
                className={`hover:bg-gray-800 transition-colors ${
                  selectedRows.includes(row.id) ? 'bg-indigo-900/50' : ''
                }`}
              >
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={(e) => onRowSelect(row.id, e.target.checked)}
                    className="w-4 h-4 text-indigo-600 border-gray-600 rounded focus:ring-indigo-500 bg-gray-700"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-100 whitespace-nowrap">
                  {formatMyanmarDate(row.date)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-100">{row.issueType}</td>
                <td className="px-4 py-3 text-sm text-gray-100">{row.department}</td>
                <td className="px-4 py-3 text-sm text-gray-100 max-w-xs truncate" title={row.description}>
                  {row.description}
                </td>
                <td className="px-4 py-3 text-sm text-gray-100">{row.confirmBy || '-'}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      row.status === 'Completed'
                        ? 'bg-green-900/50 text-green-400'
                        : 'bg-yellow-900/50 text-yellow-400'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-100 whitespace-nowrap">
                  {row.startTime ? formatMyanmarTime(row.startTime) : '-'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-100 whitespace-nowrap">
                  {row.endTime ? formatMyanmarTime(row.endTime) : '-'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-100">{row.duration || '-'}</td>
                <td className="px-4 py-3 text-sm text-gray-100">{row.doneBy || '-'}</td>
                <td className="px-4 py-3 text-sm text-gray-100">{row.check || '-'}</td>
                <td className="px-4 py-3 text-sm text-gray-100 max-w-xs truncate" title={row.solution}>
                  {row.solution || '-'}
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit(row)}
                      className="text-indigo-400 hover:text-indigo-300 transition-colors"
                      aria-label="Edit row"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => onDelete(row.id)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                      aria-label="Delete row"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-gray-800 px-4 py-3 border-t border-gray-700 flex items-center justify-between">
        <div className="text-sm text-gray-300">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
          {Math.min(currentPage * itemsPerPage, data.length)} of {data.length} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border border-gray-600 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-300"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => onPageChange(i + 1)}
              className={`px-3 py-1 text-sm border rounded-md transition-colors ${
                currentPage === i + 1
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'border-gray-600 hover:bg-gray-700 text-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm border border-gray-600 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default KpiTable;
