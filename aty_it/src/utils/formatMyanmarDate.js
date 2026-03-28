/**
 * Format a date string to Myanmar locale format
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date in Myanmar locale
 */
export const formatMyanmarDateTime = (dateString) => {
  if (!dateString) return '';

  try {
    return new Intl.DateTimeFormat('my-MM', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date(dateString));
  } catch {
    // Fallback if Myanmar locale is not supported
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  }
};

/**
 * Format date only (no time)
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date in Myanmar locale
 */
export const formatMyanmarDate = (dateString) => {
  if (!dateString) return '';

  try {
    return new Intl.DateTimeFormat('my-MM', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(dateString));
  } catch {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
};

/**
 * Format time only (no date)
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted time
 */
export const formatMyanmarTime = (dateString) => {
  if (!dateString) return '';

  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};
