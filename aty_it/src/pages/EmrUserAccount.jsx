import { useState, useEffect, useCallback } from 'react';
import Swal from 'sweetalert2';
import { supabase } from '../lib/supabaseClient';
import EmrSearch from '../components/emr/EmrSearch';
import EmrFilter from '../components/emr/EmrFilter';
import EmrTable from '../components/emr/EmrTable';
import EmrModal from '../components/emr/EmrModal';
import BulkActions from '../components/emr/BulkActions';

function EmrUserAccount() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    department: '',
    createdBy: '',
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

  // Fetch data from Supabase
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('EMR User Account')
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
        row.first_name?.toLowerCase().includes(query) ||
        row.last_name?.toLowerCase().includes(query) ||
        row.user_id?.toLowerCase().includes(query) ||
        row.department?.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Status filter
    if (filters.status && row.status !== filters.status) return false;

    // Department filter
    if (filters.department && row.department !== filters.department) return false;

    // Created By filter
    if (filters.createdBy && row.created_by !== filters.createdBy) return false;

    // Date range filter
    if (filters.dateFrom && row.date < filters.dateFrom) return false;
    if (filters.dateTo && row.date > filters.dateTo) return false;

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
      department: '',
      createdBy: '',
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

  const handleOpenModal = (record = null) => {
    if (record) {
      setEditingRecord({
        ...record,
        userId: record.user_id,
        firstName: record.first_name,
        lastName: record.last_name,
        createdBy: record.created_by,
      });
    } else {
      setEditingRecord(null);
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
      const dataToSave = {
        date: formData.date,
        user_id: formData.userId,
        first_name: formData.firstName,
        last_name: formData.lastName,
        position: formData.position,
        department: formData.department,
        created_by: formData.createdBy,
        status: formData.status,
        remark: formData.remark,
      };

      if (editingRecord) {
        // Update existing record
        const { error } = await supabase
          .from('EMR User Account')
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
        const { error } = await supabase.from('EMR User Account').insert([
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
        const { error } = await supabase.from('EMR User Account').delete().eq('id', id);

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
          .from('EMR User Account')
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
        <h1 className="text-2xl font-bold text-gray-100">EMR User Account</h1>
        <p className="mt-1 text-gray-400">Manage EMR system user accounts</p>
      </div>

      {/* Action Bar */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <EmrSearch
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

        <EmrFilter
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
      <EmrTable
        data={paginatedData}
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
      <EmrModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        editingRecord={editingRecord}
        isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default EmrUserAccount;
