import { useEffect, useRef } from 'react';
import { formatMyanmarDate, formatMyanmarTime } from '../../utils/formatMyanmarDate';
import { useTableTheme } from '../../contexts/TableThemeContext';

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
  const theme = useTableTheme().currentTheme;

  const columns = [
    { key: 'date', label: 'Date', sortable: true, width: '100px' },
    { key: 'issueType', label: 'Issue Type', sortable: true, width: '120px' },
    { key: 'department', label: 'Department', sortable: true, width: '100px' },
    { key: 'description', label: 'Description', sortable: true, width: '200px' },
    { key: 'confirmBy', label: 'Confirm By', sortable: true, width: '100px' },
    { key: 'status', label: 'Status', sortable: true, width: '90px' },
    { key: 'startTime', label: 'Start Time', sortable: true, width: '100px' },
    { key: 'endTime', label: 'End Time', sortable: true, width: '100px' },
    { key: 'duration', label: 'Duration', sortable: false, width: '90px' },
    { key: 'doneBy', label: 'Done By', sortable: true, width: '100px' },
    { key: 'check', label: 'Check', sortable: false, width: '80px' },
    { key: 'solution', label: 'Solution', sortable: false, width: '200px' },
  ];

  const handleSort = (key) => {
    onSort(key);
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return theme.sortIcon.default;
    return theme.sortIcon.active;
  };

  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return '↑↓';
    return sortConfig.direction === 'asc' ? '↑' : '↓';
  };

  const getStatusBadgeClass = (status) => {
    if (status === 'Completed') return theme.statusBadge.completed;
    return theme.statusBadge.pending;
  };

  const tableRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Scroll to top when data changes (pagination, sorting, filtering)
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      scrollContainerRef.current.scrollLeft = 0;
    }
    if (tableRef.current && !loading) {
      tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [data, currentPage]);

  if (loading) {
    return (
      <div className={`${theme.loading.container}`}>
        <div className="animate-pulse p-4 space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-12 ${theme.loading.skeleton}`} />
          ))}
        </div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className={theme.emptyState.container}>
        <svg
          className={`mx-auto h-12 w-12 ${theme.emptyState.icon}`}
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
        <h3 className={`mt-4 ${theme.emptyState.title}`}>No records found</h3>
        <p className={`mt-2 ${theme.emptyState.description}`}>Get started by creating a new KPI record.</p>
      </div>
    );
  }

  return (
    <div ref={tableRef} className={theme.container}>
      <div ref={scrollContainerRef} className="overflow-x-auto">
        <table className={`min-w-full ${theme.body.border}`} style={{ tableLayout: 'fixed' }}>
          <thead className={theme.header.bg}>
            <tr>
              <th className={`px-4 py-3 text-left ${theme.header.border}`} style={{ width: '50px' }}>
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length && data.length > 0}
                  onChange={(e) => onSelectAll(e.target.checked)}
                  className={`w-4 h-4 ${theme.checkbox}`}
                />
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => col.sortable && handleSort(col.key)}
                  className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme.header.text} ${
                    col.sortable ? `cursor-pointer ${theme.headerHover}` : ''
                  }`}
                  style={{ width: col.width }}
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
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${theme.header.text}`} style={{ width: '80px' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={theme.body.bg}>
            {data.map((row) => (
              <tr
                key={row.id}
                className={`${theme.row.default} ${theme.row.hover} ${
                  selectedRows.includes(row.id) ? theme.row.selected : ''
                }`}
              >
                <td className={theme.cell.padding}>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={(e) => onRowSelect(row.id, e.target.checked)}
                    className={`w-4 h-4 ${theme.checkbox}`}
                  />
                </td>
                <td className={`text-sm whitespace-nowrap truncate ${theme.cell.text}`}>
                  {formatMyanmarDate(row.date)}
                </td>
                <td className={`text-sm whitespace-nowrap truncate ${theme.cell.text}`}>
                  {row.issueType}
                </td>
                <td className={`text-sm whitespace-nowrap truncate ${theme.cell.text}`}>
                  {row.department}
                </td>
                <td className={`text-sm truncate ${theme.cell.text}`} title={row.description}>
                  {row.description}
                </td>
                <td className={`text-sm whitespace-nowrap truncate ${theme.cell.text}`}>
                  {row.confirmBy || '-'}
                </td>
                <td className="whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeClass(row.status)}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className={`text-sm whitespace-nowrap truncate ${theme.cell.text}`}>
                  {row.startTime ? formatMyanmarTime(row.startTime) : '-'}
                </td>
                <td className={`text-sm whitespace-nowrap truncate ${theme.cell.text}`}>
                  {row.endTime ? formatMyanmarTime(row.endTime) : '-'}
                </td>
                <td className={`text-sm whitespace-nowrap truncate ${theme.cell.text}`}>
                  {row.duration || '-'}
                </td>
                <td className={`text-sm whitespace-nowrap truncate ${theme.cell.text}`}>
                  {row.doneBy || '-'}
                </td>
                <td className={`text-sm whitespace-nowrap truncate ${theme.cell.text}`}>
                  {row.check || '-'}
                </td>
                <td className={`text-sm truncate ${theme.cell.text}`} title={row.solution}>
                  {row.solution || '-'}
                </td>
                <td className={theme.cell.padding}>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onEdit(row)}
                      className={`${theme.actions.edit} transition-colors`}
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
                      className={`${theme.actions.delete} transition-colors`}
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
      <div className={`${theme.pagination.container} px-4 py-3 flex items-center justify-between`}>
        <div className={`text-sm ${theme.pagination.text}`}>
          Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
          {Math.min(currentPage * itemsPerPage, data.length)} of {data.length} entries
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-1.5 text-sm ${theme.pagination.button}`}
          >
            Previous
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-1.5 text-sm ${theme.pagination.button}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default KpiTable;
