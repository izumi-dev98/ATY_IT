import { useForm } from 'react-hook-form';

function EmrForm({ initialData, onSubmit, onCancel, isSubmitting }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData || {
      date: new Date().toISOString().split('T')[0],
      userId: '',
      firstName: '',
      lastName: '',
      position: '',
      department: '',
      createdBy: '',
      status: 'Active',
      remark: '',
    },
  });

  const positions = [
    'Doctor',
    'Nurse',
    'Pharmacist',
    'Lab Technician',
    'Admin',
    'Receptionist',
    'Manager',
  ];

  const departments = [
    'IT',
    'Reception',
    'Cashier',
    'Pharmacy',
    'Lab',
    'Imaging',
    'Ememgery',
    'IPD',
    'OPD',
    'OT',
    'HK',
    'M&E',
    'MMD',
    'F&B',
    'Mini Mark',
    'Other',
  ];

  const createdByOptions = [
    
    'Chit Ko Ko',
    'Nay Myo Maung',
    'It Teams',
  ];

  const statusOptions = ['Active', 'Inactive'];

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register('date', { required: 'Date is required' })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100 ${
              errors.date ? 'border-red-500' : 'border-gray-600'
            }`}
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            {...register('status', { required: 'Status is required' })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100 ${
              errors.status ? 'border-red-500' : 'border-gray-600'
            }`}
          >
            {statusOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-gray-700">
                {opt}
              </option>
            ))}
          </select>
          {errors.status && (
            <p className="mt-1 text-sm text-red-500">{errors.status.message}</p>
          )}
        </div>

        {/* UserID */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            UserID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('userId', { required: 'UserID is required' })}
            placeholder="e.g., USR001"
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100 ${
              errors.userId ? 'border-red-500' : 'border-gray-600'
            }`}
          />
          {errors.userId && (
            <p className="mt-1 text-sm text-red-500">{errors.userId.message}</p>
          )}
        </div>

        {/* Position */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Position <span className="text-red-500">*</span>
          </label>
          <select
            {...register('position', { required: 'Position is required' })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100 ${
              errors.position ? 'border-red-500' : 'border-gray-600'
            }`}
          >
            <option value="" className="bg-gray-700">Select Position</option>
            {positions.map((pos) => (
              <option key={pos} value={pos} className="bg-gray-700">
                {pos}
              </option>
            ))}
          </select>
          {errors.position && (
            <p className="mt-1 text-sm text-red-500">{errors.position.message}</p>
          )}
        </div>

        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('firstName', { required: 'First Name is required' })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100 ${
              errors.firstName ? 'border-red-500' : 'border-gray-600'
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register('lastName', { required: 'Last Name is required' })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100 ${
              errors.lastName ? 'border-red-500' : 'border-gray-600'
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Department <span className="text-red-500">*</span>
          </label>
          <select
            {...register('department', { required: 'Department is required' })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100 ${
              errors.department ? 'border-red-500' : 'border-gray-600'
            }`}
          >
            <option value="" className="bg-gray-700">Select Department</option>
            {departments.map((dept) => (
              <option key={dept} value={dept} className="bg-gray-700">
                {dept}
              </option>
            ))}
          </select>
          {errors.department && (
            <p className="mt-1 text-sm text-red-500">{errors.department.message}</p>
          )}
        </div>

        {/* Created By */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Created By
          </label>
          <select
            {...register('createdBy')}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
          >
            <option value="" className="bg-gray-700">Select Person</option>
            {createdByOptions.map((opt) => (
              
              <option key={opt} value={opt} className="bg-gray-700">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Remark */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Remark
        </label>
        <textarea
          {...register('remark')}
          rows={3}
          className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none bg-gray-700 text-gray-100"
          placeholder="Additional notes..."
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-700">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Saving...' : initialData ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
}

export default EmrForm;
