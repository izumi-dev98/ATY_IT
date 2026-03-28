import { useForm, useWatch } from 'react-hook-form';
import { useEffect } from 'react';

function KpiForm({ initialData, onSubmit, onCancel, isSubmitting }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: initialData || {
      date: new Date().toISOString().split('T')[0],
      issueType: '',
      department: '',
      description: '',
      confirmBy: '',
      status: 'Not Strated',
      startDateTime: '',
      endDateTime: '',
      duration: '',
      doneBy: '',
      check: 'Not yet',
      solution: '',
    },
  });

  // Auto-calculate duration when startDateTime or endDateTime changes
  const startDateTime = useWatch({ control, name: 'startDateTime' });
  const endDateTime = useWatch({ control, name: 'endDateTime' });

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
      } else {
        // End time is before start time
        setValue('duration', 'Invalid: End time before start time');
      }
    }
  }, [startDateTime, endDateTime, setValue]);

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

  const confirmByOptions = [
    'Chit Ko Ko',
    'Nay Myo Maung',
    'It Teams',
  ];

  const doneByOptions = [
    'Chit Ko Ko',
    'Nay Myo Maung',
    'It Teams',
  ];

  const checkOptions = [
    'Not yet',
    'Checked',
  ];

  const statusOptions = [
    'Not Strated',
    'Completed',
  ];

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

        {/* Issue Type */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Issue Type <span className="text-red-500">*</span>
          </label>
          <select
            {...register('issueType', { required: 'Issue Type is required' })}
            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100 ${
              errors.issueType ? 'border-red-500' : 'border-gray-600'
            }`}
          >
            <option value="" className="bg-gray-700">Select Issue Type</option>
            {issueTypes.map((type) => (
              <option key={type} value={type} className="bg-gray-700">
                {type}
              </option>
            ))}
          </select>
          {errors.issueType && (
            <p className="mt-1 text-sm text-red-500">{errors.issueType.message}</p>
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

        {/* Confirm By */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Confirm By
          </label>
          <select
            {...register('confirmBy')}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
          >
            <option value="" className="bg-gray-700">Select Person</option>
            {confirmByOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-gray-700">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Done By */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Done By
          </label>
          <select
            {...register('doneBy')}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
          >
            <option value="" className="bg-gray-700">Select Person</option>
            {doneByOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-gray-700">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Start Date & Time */}
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

        {/* End Date & Time */}
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
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          rows={3}
          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none bg-gray-700 text-gray-100 ${
            errors.description ? 'border-red-500' : 'border-gray-600'
          }`}
          placeholder="Describe the issue..."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      {/* Duration (Auto-calculated) */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Duration (Auto-calculated)
        </label>
        <input
          type="text"
          {...register('duration')}
          readOnly
          className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-400 cursor-not-allowed"
          placeholder="Select start and end time to calculate"
        />
      </div>

      {/* Check */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Check
        </label>
        <select
          {...register('check')}
          className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-gray-700 text-gray-100"
        >
          {checkOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-gray-700">
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Solution */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Solution
        </label>
        <textarea
          {...register('solution')}
          rows={2}
          className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none bg-gray-700 text-gray-100"
          placeholder="Describe the solution applied..."
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

export default KpiForm;
