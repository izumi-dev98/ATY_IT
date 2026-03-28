import { useState, useEffect, useCallback } from 'react';
import Swal from 'sweetalert2';
import { supabase } from '../lib/supabaseClient';
import KpiSearch from '../components/kpi/KpiSearch';
import KpiFilter from '../components/kpi/KpiFilter';
import KpiTable from '../components/kpi/KpiTable';
import KpiModal from '../components/kpi/KpiModal';
import BulkActions from '../components/kpi/BulkActions';

function KpiDetails() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    issueType: '',
    department: '',
    confirmBy: '',
    doneBy: '',
    dateFrom: '',
    dateTo: '',
  });
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [groupedByDate, setGroupedByDate] = useState(true);
  const [expandedDates, setExpandedDates] = useState(new Set());

  // Fetch data from Supabase
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('Kpi Details')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setData(data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to fetch data: ' + error.message,
      });
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Filter and search data
  const filteredData = data.filter((row) => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        row.description?.toLowerCase().includes(query) ||
        row.department?.toLowerCase().includes(query) ||
        row.issueType?.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Status filter
    if (filters.status && row.status !== filters.status) return false;

    // Issue type filter
    if (filters.issueType && row.issueType !== filters.issueType) return false;

    // Department filter
    if (filters.department && row.department !== filters.department) return false;

    // Date range filter
    if (filters.dateFrom && row.date < filters.dateFrom) return false;
    if (filters.dateTo && row.date > filters.dateTo) return false;

    // Confirm By filter
    if (filters.confirmBy && row.confirmBy !== filters.confirmBy) return false;

    // Done By filter
    if (filters.doneBy && row.doneBy !== filters.doneBy) return false;

    return true;
  });

  // Sort data
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key] || '';
    const bValue = b[sortConfig.key] || '';

    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setFilters({
      status: '',
      issueType: '',
      department: '',
      confirmBy: '',
      doneBy: '',
      dateFrom: '',
      dateTo: '',
    });
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleRowSelect = (id, checked) => {
    if (checked) {
      setSelectedRows((prev) => [...prev, id]);
    } else {
      setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
    }
  };

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(paginatedData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleClearSelection = () => {
    setSelectedRows([]);
  };

  // Group data by date
  const groupDataByDate = (dataArray) => {
    const groups = {};
    dataArray.forEach((row) => {
      const date = row.date || 'No Date';
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(row);
    });
    // Sort dates in descending order
    return Object.entries(groups).sort((a, b) => {
      if (a[0] === 'No Date') return 1;
      if (b[0] === 'No Date') return -1;
      return b[0].localeCompare(a[0]);
    });
  };

  // Toggle date group expand/collapse
  const toggleDateGroup = (date) => {
    setExpandedDates((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(date)) {
        newSet.delete(date);
      } else {
        newSet.add(date);
      }
      return newSet;
    });
  };

  // Expand/collapse all groups
  const expandAllGroups = () => {
    const allDates = new Set(sortedData.map((row) => row.date || 'No Date'));
    setExpandedDates(allDates);
  };

  const collapseAllGroups = () => {
    setExpandedDates(new Set());
  };

  const handleOpenModal = (record = null) => {
    // Convert ISO datetime strings to datetime-local format for editing
    if (record) {
      const editData = { ...record };
      if (record.startTime) {
        // Convert ISO string to datetime-local format (YYYY-MM-DDTHH:mm)
        editData.startDateTime = new Date(record.startTime).toISOString().slice(0, 16);
      }
      if (record.endTime) {
        editData.endDateTime = new Date(record.endTime).toISOString().slice(0, 16);
      }
      setEditingRecord(editData);
    } else {
      setEditingRecord(record);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingRecord(null);
  };

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      // Convert datetime-local values to ISO strings for storage
      const dataToSave = { ...formData };

      // Convert startDateTime to startTime (ISO string)
      if (formData.startDateTime) {
        dataToSave.startTime = new Date(formData.startDateTime).toISOString();
        delete dataToSave.startDateTime;
      } else {
        dataToSave.startTime = null;
        delete dataToSave.startDateTime;
      }

      // Convert endDateTime to endTime (ISO string)
      if (formData.endDateTime) {
        dataToSave.endTime = new Date(formData.endDateTime).toISOString();
        delete dataToSave.endDateTime;
      } else {
        dataToSave.endTime = null;
        delete dataToSave.endDateTime;
      }

      if (editingRecord) {
        // Update existing record
        const { error } = await supabase
          .from('Kpi Details')
          .update(dataToSave)
          .eq('id', editingRecord.id);

        if (error) throw error;

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Record updated successfully!',
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        // Create new record
        const { error } = await supabase.from('Kpi Details').insert([
          {
            ...dataToSave,
            created_at: new Date().toISOString(),
          },
        ]);

        if (error) throw error;

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Record created successfully!',
          timer: 2000,
          showConfirmButton: false,
        });
      }

      handleCloseModal();
      fetchData();
    } catch (error) {
      console.error('Error saving record:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to save record: ' + error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        const { error } = await supabase.from('Kpi Details').delete().eq('id', id);

        if (error) throw error;

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Record has been deleted.',
          timer: 2000,
          showConfirmButton: false,
        });

        fetchData();
      } catch (error) {
        console.error('Error deleting record:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete record: ' + error.message,
        });
      }
    }
  };

  const handleBulkDelete = async () => {
    const result = await Swal.fire({
      title: `Delete ${selectedRows.length} records?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, delete all!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        const { error } = await supabase
          .from('Kpi Details')
          .delete()
          .in('id', selectedRows);

        if (error) throw error;

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${selectedRows.length} records have been deleted.`,
          timer: 2000,
          showConfirmButton: false,
        });

        setSelectedRows([]);
        fetchData();
      } catch (error) {
        console.error('Error bulk deleting records:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete records: ' + error.message,
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-100">KPI Details</h1>
        <p className="mt-1 text-gray-400">Manage and track key performance indicators</p>
      </div>

      {/* Action Bar */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <KpiSearch
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onClear={() => setSearchQuery('')}
          />
          <button
            onClick={() => handleOpenModal()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Record
          </button>
        </div>

        <KpiFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearAll={handleClearFilters}
        />

        <BulkActions
          selectedCount={selectedRows.length}
          onBulkDelete={handleBulkDelete}
          onClearSelection={handleClearSelection}
        />
      </div>

      {/* Table */}
      <KpiTable
        data={paginatedData}
        groupedData={groupDataByDate(sortedData)}
        groupedByDate={groupedByDate}
        onToggleGroupedByDate={(value) => {
          setGroupedByDate(value);
          setCurrentPage(1);
        }}
        expandedDates={expandedDates}
        onToggleDateGroup={toggleDateGroup}
        onExpandAllGroups={expandAllGroups}
        onCollapseAllGroups={collapseAllGroups}
        sortConfig={sortConfig}
        onSort={handleSort}
        selectedRows={selectedRows}
        onRowSelect={handleRowSelect}
        onSelectAll={handleSelectAll}
        onEdit={handleOpenModal}
        onDelete={handleDelete}
        loading={loading}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Modal */}
      <KpiModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        editingRecord={editingRecord}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default KpiDetails;
