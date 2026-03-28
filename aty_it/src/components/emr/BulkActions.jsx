function BulkActions({ selectedCount, onBulkDelete, onClearSelection }) {
  if (selectedCount === 0) return null;

  return (
    <div className="bg-indigo-900/30 border border-indigo-700 rounded-lg px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-sm text-indigo-300">
          <span className="font-semibold text-white">{selectedCount}</span> {selectedCount === 1 ? 'row' : 'rows'} selected
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onClearSelection}
          className="px-3 py-1.5 text-sm text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
        >
          Clear Selection
        </button>
        <button
          onClick={onBulkDelete}
          className="px-3 py-1.5 text-sm text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
        >
          Delete Selected
        </button>
      </div>
    </div>
  );
}

export default BulkActions;
