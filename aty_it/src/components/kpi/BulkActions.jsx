function BulkActions({ selectedCount, onBulkDelete, onClearSelection }) {
  if (selectedCount === 0) return null;

  return (
    <div className="flex items-center gap-3 bg-indigo-900/30 border border-indigo-700 rounded-lg px-4 py-2">
      <span className="text-sm text-indigo-300 font-medium">
        {selectedCount} row{selectedCount > 1 ? 's' : ''} selected
      </span>
      <button
        onClick={onBulkDelete}
        className="px-3 py-1.5 text-sm bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        Delete Selected
      </button>
      <button
        onClick={onClearSelection}
        className="px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-700 rounded-md transition-colors"
      >
        Clear Selection
      </button>
    </div>
  );
}

export default BulkActions;
