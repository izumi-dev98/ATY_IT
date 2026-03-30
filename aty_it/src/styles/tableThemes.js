// Table Theme Definitions
// Each theme contains class mappings for all table elements

export const tableThemes = {
  dark: {
    id: 'dark',
    name: 'Dark',
    description: 'Default dark theme with indigo accents',
    container: 'bg-gray-900 rounded-lg shadow overflow-hidden',
    header: {
      bg: 'bg-gray-800',
      text: 'text-xs font-medium text-gray-300 uppercase tracking-wider',
      border: 'divide-y divide-gray-700',
    },
    body: {
      bg: 'bg-gray-900',
      border: 'divide-y divide-gray-700',
    },
    row: {
      default: '',
      hover: 'hover:bg-gray-800 transition-colors',
      selected: 'bg-indigo-900/50',
    },
    cell: {
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      padding: 'px-4 py-3',
    },
    border: {
      outer: '',
      inner: 'divide-y divide-gray-700',
      top: 'border-t border-gray-700',
    },
    actions: {
      edit: 'text-indigo-400 hover:text-indigo-300',
      delete: 'text-red-400 hover:text-red-300',
    },
    checkbox: 'text-indigo-600 border-gray-600 focus:ring-indigo-500 bg-gray-700',
    sortIcon: {
      default: 'text-gray-300',
      active: 'text-indigo-600',
    },
    headerHover: 'hover:bg-gray-700',
    pagination: {
      container: 'bg-gray-800 border-t border-gray-700',
      text: 'text-gray-300',
      button: 'border border-gray-600 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-300',
    },
    statusBadge: {
      active: 'bg-green-900/50 text-green-400',
      inactive: 'bg-gray-700 text-gray-400',
      completed: 'bg-green-900/50 text-green-400',
      pending: 'bg-yellow-900/50 text-yellow-400',
    },
    emptyState: {
      container: 'bg-gray-800 rounded-lg shadow p-12 text-center',
      icon: 'text-gray-500',
      title: 'text-lg font-medium text-gray-100',
      description: 'text-gray-400',
    },
    loading: {
      container: 'bg-gray-800 rounded-lg shadow overflow-hidden',
      skeleton: 'bg-gray-700 rounded',
    },
  },
  light: {
    id: 'light',
    name: 'Light',
    description: 'Clean light theme with subtle borders',
    container: 'bg-white rounded-lg shadow overflow-hidden border border-gray-200',
    header: {
      bg: 'bg-gray-50',
      text: 'text-xs font-medium text-gray-600 uppercase tracking-wider',
      border: 'divide-y divide-gray-200',
    },
    body: {
      bg: 'bg-white',
      border: 'divide-y divide-gray-200',
    },
    row: {
      default: '',
      hover: 'hover:bg-gray-50 transition-colors',
      selected: 'bg-blue-50',
    },
    cell: {
      text: 'text-gray-900',
      textSecondary: 'text-gray-500',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border border-gray-200',
      inner: 'divide-y divide-gray-200',
      top: 'border-t border-gray-200',
    },
    actions: {
      edit: 'text-blue-600 hover:text-blue-800',
      delete: 'text-red-600 hover:text-red-800',
    },
    checkbox: 'text-blue-600 border-gray-300 focus:ring-blue-500 bg-white',
    sortIcon: {
      default: 'text-gray-400',
      active: 'text-blue-600',
    },
    headerHover: 'hover:bg-gray-100',
    pagination: {
      container: 'bg-white border-t border-gray-200',
      text: 'text-gray-600',
      button: 'border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-600',
    },
    statusBadge: {
      active: 'bg-green-100 text-green-700',
      inactive: 'bg-gray-100 text-gray-500',
      completed: 'bg-green-100 text-green-700',
      pending: 'bg-yellow-100 text-yellow-700',
    },
    emptyState: {
      container: 'bg-white rounded-lg shadow border border-gray-200 p-12 text-center',
      icon: 'text-gray-400',
      title: 'text-lg font-medium text-gray-900',
      description: 'text-gray-500',
    },
    loading: {
      container: 'bg-white rounded-lg shadow overflow-hidden border border-gray-200',
      skeleton: 'bg-gray-100 rounded',
    },
  },
  blue: {
    id: 'blue',
    name: 'Blue',
    description: 'Dark theme with blue accent colors',
    container: 'bg-slate-900 rounded-lg shadow overflow-hidden',
    header: {
      bg: 'bg-slate-800',
      text: 'text-xs font-medium text-slate-300 uppercase tracking-wider',
      border: 'divide-y divide-slate-700',
    },
    body: {
      bg: 'bg-slate-900',
      border: 'divide-y divide-slate-700',
    },
    row: {
      default: '',
      hover: 'hover:bg-slate-800 transition-colors',
      selected: 'bg-blue-900/50',
    },
    cell: {
      text: 'text-slate-100',
      textSecondary: 'text-slate-300',
      padding: 'px-4 py-3',
    },
    border: {
      outer: '',
      inner: 'divide-y divide-slate-700',
      top: 'border-t border-slate-700',
    },
    actions: {
      edit: 'text-blue-400 hover:text-blue-300',
      delete: 'text-red-400 hover:text-red-300',
    },
    checkbox: 'text-blue-600 border-slate-600 focus:ring-blue-500 bg-slate-700',
    sortIcon: {
      default: 'text-slate-300',
      active: 'text-blue-500',
    },
    headerHover: 'hover:bg-slate-700',
    pagination: {
      container: 'bg-slate-800 border-t border-slate-700',
      text: 'text-slate-300',
      button: 'border border-slate-600 rounded-md hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-300',
    },
    statusBadge: {
      active: 'bg-emerald-900/50 text-emerald-400',
      inactive: 'bg-slate-700 text-slate-400',
      completed: 'bg-emerald-900/50 text-emerald-400',
      pending: 'bg-amber-900/50 text-amber-400',
    },
    emptyState: {
      container: 'bg-slate-800 rounded-lg shadow p-12 text-center',
      icon: 'text-slate-500',
      title: 'text-lg font-medium text-slate-100',
      description: 'text-slate-400',
    },
    loading: {
      container: 'bg-slate-800 rounded-lg shadow overflow-hidden',
      skeleton: 'bg-slate-700 rounded',
    },
  },
  compact: {
    id: 'compact',
    name: 'Compact',
    description: 'Dense layout with reduced padding',
    container: 'bg-gray-900 rounded-lg shadow overflow-hidden',
    header: {
      bg: 'bg-gray-800',
      text: 'text-xs font-medium text-gray-300 uppercase tracking-wider',
      border: 'divide-y divide-gray-700',
    },
    body: {
      bg: 'bg-gray-900',
      border: 'divide-y divide-gray-700',
    },
    row: {
      default: '',
      hover: 'hover:bg-gray-800 transition-colors',
      selected: 'bg-indigo-900/50',
    },
    cell: {
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      padding: 'px-3 py-2',
    },
    border: {
      outer: '',
      inner: 'divide-y divide-gray-700',
      top: 'border-t border-gray-700',
    },
    actions: {
      edit: 'text-indigo-400 hover:text-indigo-300',
      delete: 'text-red-400 hover:text-red-300',
    },
    checkbox: 'w-3 h-3 text-indigo-600 border-gray-600 focus:ring-indigo-500 bg-gray-700',
    sortIcon: {
      default: 'text-gray-300',
      active: 'text-indigo-600',
    },
    headerHover: 'hover:bg-gray-700',
    pagination: {
      container: 'bg-gray-800 border-t border-gray-700',
      text: 'text-gray-300 text-sm',
      button: 'px-3 py-1 text-sm border border-gray-600 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-300',
    },
    statusBadge: {
      active: 'bg-green-900/50 text-green-400 text-xs',
      inactive: 'bg-gray-700 text-gray-400 text-xs',
      completed: 'bg-green-900/50 text-green-400 text-xs',
      pending: 'bg-yellow-900/50 text-yellow-400 text-xs',
    },
    emptyState: {
      container: 'bg-gray-800 rounded-lg shadow p-8 text-center',
      icon: 'text-gray-500',
      title: 'text-base font-medium text-gray-100',
      description: 'text-gray-400',
    },
    loading: {
      container: 'bg-gray-800 rounded-lg shadow overflow-hidden',
      skeleton: 'bg-gray-700 rounded',
    },
  },
  bordered: {
    id: 'bordered',
    name: 'Bordered',
    description: 'Prominent cell borders for clarity',
    container: 'bg-gray-900 rounded-lg shadow overflow-hidden border-2 border-gray-600',
    header: {
      bg: 'bg-gray-800',
      text: 'text-xs font-medium text-gray-300 uppercase tracking-wider',
      border: 'divide-y divide-gray-600',
    },
    body: {
      bg: 'bg-gray-900',
      border: 'divide-y divide-gray-600',
    },
    row: {
      default: 'border border-gray-700',
      hover: 'hover:bg-gray-800 transition-colors border border-gray-600',
      selected: 'bg-indigo-900/50 border border-indigo-600',
    },
    cell: {
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      padding: 'px-4 py-3 border-r border-gray-700 last:border-r-0',
    },
    border: {
      outer: 'border-2 border-gray-600',
      inner: 'divide-y divide-gray-600',
      top: 'border-t border-gray-600',
    },
    actions: {
      edit: 'text-indigo-400 hover:text-indigo-300',
      delete: 'text-red-400 hover:text-red-300',
    },
    checkbox: 'text-indigo-600 border-gray-500 focus:ring-indigo-500 bg-gray-700',
    sortIcon: {
      default: 'text-gray-300',
      active: 'text-indigo-600',
    },
    headerHover: 'hover:bg-gray-700',
    pagination: {
      container: 'bg-gray-800 border-t-2 border-gray-600',
      text: 'text-gray-300',
      button: 'border-2 border-gray-600 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-300',
    },
    statusBadge: {
      active: 'bg-green-900/50 text-green-400 border border-green-700',
      inactive: 'bg-gray-700 text-gray-400 border border-gray-600',
      completed: 'bg-green-900/50 text-green-400 border border-green-700',
      pending: 'bg-yellow-900/50 text-yellow-400 border border-yellow-700',
    },
    emptyState: {
      container: 'bg-gray-800 rounded-lg shadow p-12 text-center border border-gray-600',
      icon: 'text-gray-500',
      title: 'text-lg font-medium text-gray-100',
      description: 'text-gray-400',
    },
    loading: {
      container: 'bg-gray-800 rounded-lg shadow overflow-hidden border-2 border-gray-600',
      skeleton: 'bg-gray-700 rounded border border-gray-600',
    },
  },
  striped: {
    id: 'striped',
    name: 'Striped',
    description: 'Alternating row backgrounds for readability',
    container: 'bg-gray-900 rounded-lg shadow overflow-hidden',
    header: {
      bg: 'bg-gray-800',
      text: 'text-xs font-medium text-gray-300 uppercase tracking-wider',
      border: 'divide-y divide-gray-700',
    },
    body: {
      bg: 'bg-gray-900',
      border: 'divide-y divide-gray-700',
    },
    row: {
      default: 'even:bg-gray-900 odd:bg-gray-800/50',
      hover: 'hover:bg-gray-700 transition-colors',
      selected: 'bg-indigo-900/50',
    },
    cell: {
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      padding: 'px-4 py-3',
    },
    border: {
      outer: '',
      inner: 'divide-y divide-gray-700',
      top: 'border-t border-gray-700',
    },
    actions: {
      edit: 'text-indigo-400 hover:text-indigo-300',
      delete: 'text-red-400 hover:text-red-300',
    },
    checkbox: 'text-indigo-600 border-gray-600 focus:ring-indigo-500 bg-gray-700',
    sortIcon: {
      default: 'text-gray-300',
      active: 'text-indigo-600',
    },
    headerHover: 'hover:bg-gray-700',
    pagination: {
      container: 'bg-gray-800 border-t border-gray-700',
      text: 'text-gray-300',
      button: 'border border-gray-600 rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-300',
    },
    statusBadge: {
      active: 'bg-green-900/50 text-green-400',
      inactive: 'bg-gray-700 text-gray-400',
      completed: 'bg-green-900/50 text-green-400',
      pending: 'bg-yellow-900/50 text-yellow-400',
    },
    emptyState: {
      container: 'bg-gray-800 rounded-lg shadow p-12 text-center',
      icon: 'text-gray-500',
      title: 'text-lg font-medium text-gray-100',
      description: 'text-gray-400',
    },
    loading: {
      container: 'bg-gray-800 rounded-lg shadow overflow-hidden',
      skeleton: 'bg-gray-700 rounded',
    },
  },
  modern: {
    id: 'modern',
    name: 'Modern',
    description: 'Minimal design with subtle shadows and gradients',
    container: 'bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden',
    header: {
      bg: 'bg-gradient-to-r from-gray-800 to-gray-750',
      text: 'text-xs font-medium text-gray-200 uppercase tracking-wider',
      border: 'divide-y divide-gray-600',
    },
    body: {
      bg: 'bg-gray-900',
      border: 'divide-y divide-gray-700',
    },
    row: {
      default: '',
      hover: 'hover:bg-gray-800/70 transition-all shadow-sm',
      selected: 'bg-indigo-900/40 shadow-inner',
    },
    cell: {
      text: 'text-gray-100',
      textSecondary: 'text-gray-400',
      padding: 'px-5 py-4',
    },
    border: {
      outer: '',
      inner: 'divide-y divide-gray-700',
      top: 'border-t border-gray-700',
    },
    actions: {
      edit: 'text-indigo-300 hover:text-indigo-200',
      delete: 'text-rose-400 hover:text-rose-300',
    },
    checkbox: 'text-indigo-500 border-gray-500 focus:ring-indigo-400 bg-gray-800',
    sortIcon: {
      default: 'text-gray-400',
      active: 'text-indigo-400',
    },
    headerHover: 'hover:bg-gray-700/50',
    pagination: {
      container: 'bg-gray-800/50 border-t border-gray-600',
      text: 'text-gray-300',
      button: 'border border-gray-500 rounded-lg hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-gray-300',
    },
    statusBadge: {
      active: 'bg-gradient-to-r from-emerald-900/60 to-emerald-800/40 text-emerald-300',
      inactive: 'bg-gray-700/50 text-gray-400',
      completed: 'bg-gradient-to-r from-emerald-900/60 to-emerald-800/40 text-emerald-300',
      pending: 'bg-gradient-to-r from-amber-900/60 to-amber-800/40 text-amber-300',
    },
    emptyState: {
      container: 'bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg p-12 text-center',
      icon: 'text-gray-500',
      title: 'text-xl font-semibold text-gray-100',
      description: 'text-gray-400',
    },
    loading: {
      container: 'bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden',
      skeleton: 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded animate-pulse',
    },
  },
  highContrast: {
    id: 'highContrast',
    name: 'High Contrast',
    description: 'Maximum contrast for accessibility',
    container: 'bg-black rounded-lg shadow-xl overflow-hidden border-2 border-white',
    header: {
      bg: 'bg-white',
      text: 'text-sm font-bold text-black uppercase tracking-wider',
      border: 'divide-y divide-white',
    },
    body: {
      bg: 'bg-black',
      border: 'divide-y divide-white',
    },
    row: {
      default: '',
      hover: 'hover:bg-gray-900 transition-colors',
      selected: 'bg-yellow-900/60 border-2 border-yellow-500',
    },
    cell: {
      text: 'text-white',
      textSecondary: 'text-gray-300',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border-2 border-white',
      inner: 'divide-y divide-white',
      top: 'border-t-2 border-white',
    },
    actions: {
      edit: 'text-cyan-300 hover:text-cyan-200 font-semibold',
      delete: 'text-orange-400 hover:text-orange-300 font-semibold',
    },
    checkbox: 'text-yellow-500 border-white focus:ring-yellow-400 bg-black',
    sortIcon: {
      default: 'text-gray-400',
      active: 'text-yellow-400',
    },
    headerHover: 'hover:bg-gray-200',
    pagination: {
      container: 'bg-black border-t-2 border-white',
      text: 'text-white font-medium',
      button: 'border-2 border-white rounded-md hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white font-semibold',
    },
    statusBadge: {
      active: 'bg-green-600 text-white font-bold',
      inactive: 'bg-gray-600 text-white font-bold',
      completed: 'bg-green-600 text-white font-bold',
      pending: 'bg-yellow-600 text-black font-bold',
    },
    emptyState: {
      container: 'bg-black rounded-lg shadow-xl border-2 border-white p-12 text-center',
      icon: 'text-white',
      title: 'text-xl font-bold text-white',
      description: 'text-gray-300 font-medium',
    },
    loading: {
      container: 'bg-black rounded-lg shadow-xl overflow-hidden border-2 border-white',
      skeleton: 'bg-gray-700 rounded border border-gray-500',
    },
  },
  gradient: {
    id: 'gradient',
    name: 'Gradient',
    description: 'Colorful gradient backgrounds throughout',
    container: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-xl shadow-xl overflow-hidden',
    header: {
      bg: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      text: 'text-xs font-bold text-white uppercase tracking-wider',
      border: 'divide-y divide-white/20',
    },
    body: {
      bg: 'bg-white/5 backdrop-blur-sm',
      border: 'divide-y divide-white/10',
    },
    row: {
      default: '',
      hover: 'hover:bg-white/10 transition-all',
      selected: 'bg-indigo-500/30 backdrop-blur-sm',
    },
    cell: {
      text: 'text-white',
      textSecondary: 'text-purple-200',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border border-white/20',
      inner: 'divide-y divide-white/10',
      top: 'border-t border-white/20',
    },
    actions: {
      edit: 'text-cyan-300 hover:text-cyan-200',
      delete: 'text-pink-400 hover:text-pink-300',
    },
    checkbox: 'text-purple-400 border-purple-500 focus:ring-purple-400 bg-purple-900/50',
    sortIcon: {
      default: 'text-purple-300',
      active: 'text-cyan-400',
    },
    headerHover: 'hover:from-indigo-500 hover:to-purple-500',
    pagination: {
      container: 'bg-white/5 border-t border-white/20',
      text: 'text-purple-200',
      button: 'border border-purple-500 rounded-lg hover:bg-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-purple-200',
    },
    statusBadge: {
      active: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white',
      inactive: 'bg-white/10 text-gray-300',
      completed: 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white',
      pending: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white',
    },
    emptyState: {
      container: 'bg-white/5 backdrop-blur-sm rounded-xl shadow-xl p-12 text-center border border-white/20',
      icon: 'text-purple-400',
      title: 'text-xl font-bold text-white',
      description: 'text-purple-200',
    },
    loading: {
      container: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-xl shadow-xl overflow-hidden',
      skeleton: 'bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-700 rounded animate-pulse',
    },
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal',
    description: 'Ultra-clean, barely-there styling',
    container: 'bg-white rounded-lg overflow-hidden',
    header: {
      bg: 'bg-white',
      text: 'text-xs font-medium text-gray-500 uppercase tracking-wider',
      border: 'divide-y divide-gray-100',
    },
    body: {
      bg: 'bg-white',
      border: 'divide-y divide-gray-50',
    },
    row: {
      default: '',
      hover: 'hover:bg-gray-50/50 transition-colors',
      selected: 'bg-gray-100/50',
    },
    cell: {
      text: 'text-gray-700',
      textSecondary: 'text-gray-400',
      padding: 'px-3 py-2.5',
    },
    border: {
      outer: '',
      inner: 'divide-y divide-gray-50',
      top: '',
    },
    actions: {
      edit: 'text-gray-400 hover:text-gray-600',
      delete: 'text-gray-400 hover:text-red-400',
    },
    checkbox: 'text-gray-500 border-gray-300 focus:ring-gray-400',
    sortIcon: {
      default: 'text-gray-300',
      active: 'text-gray-500',
    },
    headerHover: 'hover:bg-gray-50/50',
    pagination: {
      container: 'bg-white',
      text: 'text-gray-500',
      button: 'border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-500 text-sm',
    },
    statusBadge: {
      active: 'bg-gray-100 text-gray-700',
      inactive: 'bg-gray-50 text-gray-400',
      completed: 'bg-gray-100 text-gray-700',
      pending: 'bg-gray-100 text-gray-600',
    },
    emptyState: {
      container: 'bg-white rounded-lg p-12 text-center',
      icon: 'text-gray-200',
      title: 'text-base font-medium text-gray-600',
      description: 'text-gray-400',
    },
    loading: {
      container: 'bg-white rounded-lg overflow-hidden',
      skeleton: 'bg-gray-50 rounded',
    },
  },
  bold: {
    id: 'bold',
    name: 'Bold',
    description: 'Heavy borders, strong colors, prominent UI',
    container: 'bg-gray-900 rounded-lg shadow-2xl overflow-hidden border-4 border-gray-500',
    header: {
      bg: 'bg-gray-700',
      text: 'text-sm font-black text-white uppercase tracking-widest',
      border: 'divide-y-2 divide-gray-500',
    },
    body: {
      bg: 'bg-gray-900',
      border: 'divide-y-2 divide-gray-600',
    },
    row: {
      default: 'border-2 border-gray-700',
      hover: 'hover:bg-gray-800 hover:border-gray-500 transition-all',
      selected: 'bg-indigo-800 border-indigo-500',
    },
    cell: {
      text: 'text-white font-medium',
      textSecondary: 'text-gray-300 font-medium',
      padding: 'px-5 py-4',
    },
    border: {
      outer: 'border-4 border-gray-500',
      inner: 'divide-y-2 divide-gray-600',
      top: 'border-t-4 border-gray-500',
    },
    actions: {
      edit: 'text-indigo-300 hover:text-indigo-200 font-bold',
      delete: 'text-red-400 hover:text-red-300 font-bold',
    },
    checkbox: 'w-5 h-5 text-indigo-500 border-gray-400 focus:ring-indigo-400 bg-gray-800',
    sortIcon: {
      default: 'text-gray-400',
      active: 'text-indigo-400',
    },
    headerHover: 'hover:bg-gray-600',
    pagination: {
      container: 'bg-gray-800 border-t-4 border-gray-500',
      text: 'text-white font-bold',
      button: 'border-2 border-gray-400 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-white font-bold px-5 py-2',
    },
    statusBadge: {
      active: 'bg-green-600 text-white font-bold px-3 py-1.5',
      inactive: 'bg-gray-600 text-white font-bold px-3 py-1.5',
      completed: 'bg-green-600 text-white font-bold px-3 py-1.5',
      pending: 'bg-yellow-600 text-white font-bold px-3 py-1.5',
    },
    emptyState: {
      container: 'bg-gray-900 rounded-lg shadow-2xl p-12 text-center border-4 border-gray-500',
      icon: 'text-gray-500',
      title: 'text-2xl font-black text-white',
      description: 'text-gray-400 font-bold',
    },
    loading: {
      container: 'bg-gray-900 rounded-lg shadow-2xl overflow-hidden border-4 border-gray-500',
      skeleton: 'bg-gray-700 rounded border-2 border-gray-600',
    },
  },
  pastel: {
    id: 'pastel',
    name: 'Pastel',
    description: 'Soft, muted colors for gentle appearance',
    container: 'bg-rose-50 rounded-xl shadow overflow-hidden border border-rose-100',
    header: {
      bg: 'bg-rose-100/80',
      text: 'text-xs font-medium text-rose-700 uppercase tracking-wider',
      border: 'divide-y divide-rose-200',
    },
    body: {
      bg: 'bg-rose-50/50',
      border: 'divide-y divide-rose-100',
    },
    row: {
      default: '',
      hover: 'hover:bg-rose-100/40 transition-colors',
      selected: 'bg-sky-100/50',
    },
    cell: {
      text: 'text-rose-900',
      textSecondary: 'text-rose-600',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border border-rose-100',
      inner: 'divide-y divide-rose-100',
      top: 'border-t border-rose-100',
    },
    actions: {
      edit: 'text-sky-500 hover:text-sky-600',
      delete: 'text-rose-400 hover:text-rose-500',
    },
    checkbox: 'text-sky-400 border-rose-300 focus:ring-sky-400 bg-white',
    sortIcon: {
      default: 'text-rose-300',
      active: 'text-sky-500',
    },
    headerHover: 'hover:bg-rose-100/60',
    pagination: {
      container: 'bg-rose-100/50 border-t border-rose-200',
      text: 'text-rose-700',
      button: 'border border-rose-300 rounded-lg hover:bg-rose-100/60 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-rose-700',
    },
    statusBadge: {
      active: 'bg-emerald-100 text-emerald-700',
      inactive: 'bg-gray-100 text-gray-500',
      completed: 'bg-emerald-100 text-emerald-700',
      pending: 'bg-amber-100 text-amber-700',
    },
    emptyState: {
      container: 'bg-rose-50 rounded-xl shadow p-12 text-center border border-rose-100',
      icon: 'text-rose-300',
      title: 'text-lg font-medium text-rose-800',
      description: 'text-rose-500',
    },
    loading: {
      container: 'bg-rose-50 rounded-xl shadow overflow-hidden border border-rose-100',
      skeleton: 'bg-rose-100 rounded',
    },
  },
  neon: {
    id: 'neon',
    name: 'Neon',
    description: 'Vibrant, glowing colors for dark mode',
    container: 'bg-gray-950 rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.3)] overflow-hidden border border-purple-500/50',
    header: {
      bg: 'bg-gradient-to-r from-purple-600 to-pink-600',
      text: 'text-xs font-bold text-white uppercase tracking-wider',
      border: 'divide-y divide-purple-400/30',
    },
    body: {
      bg: 'bg-gray-950',
      border: 'divide-y divide-purple-500/20',
    },
    row: {
      default: '',
      hover: 'hover:bg-purple-900/20 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all',
      selected: 'bg-pink-900/30 shadow-[0_0_20px_rgba(236,72,153,0.5)]',
    },
    cell: {
      text: 'text-cyan-300',
      textSecondary: 'text-purple-300',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border border-purple-500/50',
      inner: 'divide-y divide-purple-500/20',
      top: 'border-t border-purple-500/50',
    },
    actions: {
      edit: 'text-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.6)]',
      delete: 'text-pink-500 hover:text-pink-400 hover:shadow-[0_0_10px_rgba(236,72,153,0.6)]',
    },
    checkbox: 'text-pink-500 border-purple-500 focus:ring-pink-400 bg-purple-900/30',
    sortIcon: {
      default: 'text-purple-400',
      active: 'text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]',
    },
    headerHover: 'hover:from-purple-500 hover:to-pink-500',
    pagination: {
      container: 'bg-gray-950 border-t border-purple-500/50',
      text: 'text-purple-300',
      button: 'border border-purple-500 rounded-lg hover:bg-purple-900/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] disabled:opacity-50 disabled:cursor-not-allowed transition-all text-cyan-400',
    },
    statusBadge: {
      active: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.4)]',
      inactive: 'bg-gray-800/50 text-gray-400 border border-gray-700',
      completed: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.4)]',
      pending: 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-[0_0_10px_rgba(245,158,11,0.4)]',
    },
    emptyState: {
      container: 'bg-gray-950 rounded-xl shadow-[0_0_30px_rgba(168,85,246,0.2)] p-12 text-center border border-purple-500/50',
      icon: 'text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,246,0.8)]',
      title: 'text-xl font-bold text-cyan-300',
      description: 'text-purple-300',
    },
    loading: {
      container: 'bg-gray-950 rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.3)] overflow-hidden border border-purple-500/50',
      skeleton: 'bg-gradient-to-r from-purple-800 via-pink-800 to-purple-800 rounded animate-pulse',
    },
  },
  corporate: {
    id: 'corporate',
    name: 'Corporate',
    description: 'Professional, conservative styling',
    container: 'bg-white rounded-lg shadow overflow-hidden border border-gray-200',
    header: {
      bg: 'bg-slate-800',
      text: 'text-xs font-semibold text-white uppercase tracking-wider',
      border: 'divide-y divide-slate-700',
    },
    body: {
      bg: 'bg-white',
      border: 'divide-y divide-gray-200',
    },
    row: {
      default: '',
      hover: 'hover:bg-slate-50 transition-colors',
      selected: 'bg-blue-50',
    },
    cell: {
      text: 'text-slate-800',
      textSecondary: 'text-slate-500',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border border-gray-200',
      inner: 'divide-y divide-gray-200',
      top: 'border-t border-gray-200',
    },
    actions: {
      edit: 'text-blue-600 hover:text-blue-700',
      delete: 'text-red-600 hover:text-red-700',
    },
    checkbox: 'text-blue-700 border-slate-400 focus:ring-blue-600 bg-white',
    sortIcon: {
      default: 'text-slate-400',
      active: 'text-blue-700',
    },
    headerHover: 'hover:bg-slate-700',
    pagination: {
      container: 'bg-white border-t border-gray-200',
      text: 'text-slate-600',
      button: 'border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-slate-600',
    },
    statusBadge: {
      active: 'bg-blue-100 text-blue-800 font-medium',
      inactive: 'bg-slate-100 text-slate-600 font-medium',
      completed: 'bg-blue-100 text-blue-800 font-medium',
      pending: 'bg-amber-100 text-amber-800 font-medium',
    },
    emptyState: {
      container: 'bg-white rounded-lg shadow p-12 text-center border border-gray-200',
      icon: 'text-slate-300',
      title: 'text-lg font-semibold text-slate-700',
      description: 'text-slate-500',
    },
    loading: {
      container: 'bg-white rounded-lg shadow overflow-hidden border border-gray-200',
      skeleton: 'bg-slate-100 rounded',
    },
  },
  playful: {
    id: 'playful',
    name: 'Playful',
    description: 'Rounded, colorful, fun appearance',
    container: 'bg-gradient-to-br from-sky-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden border-2 border-sky-200',
    header: {
      bg: 'bg-gradient-to-r from-sky-400 to-indigo-400',
      text: 'text-xs font-bold text-white uppercase tracking-wider',
      border: 'divide-y divide-white/30',
    },
    body: {
      bg: 'bg-white/80 backdrop-blur-sm',
      border: 'divide-y divide-sky-100',
    },
    row: {
      default: 'rounded-lg',
      hover: 'hover:bg-sky-50 hover:scale-[1.01] transition-all',
      selected: 'bg-pink-100',
    },
    cell: {
      text: 'text-slate-700',
      textSecondary: 'text-slate-500',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border-2 border-sky-200',
      inner: 'divide-y divide-sky-100',
      top: 'border-t-2 border-sky-200',
    },
    actions: {
      edit: 'text-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full p-1',
      delete: 'text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-full p-1',
    },
    checkbox: 'text-pink-500 border-pink-300 focus:ring-pink-400 bg-white rounded-full',
    sortIcon: {
      default: 'text-indigo-300',
      active: 'text-pink-500',
    },
    headerHover: 'hover:from-sky-300 hover:to-indigo-300',
    pagination: {
      container: 'bg-white/80 border-t-2 border-sky-200',
      text: 'text-slate-600',
      button: 'border-2 border-sky-300 rounded-full hover:bg-sky-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sky-600 font-medium',
    },
    statusBadge: {
      active: 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-bold rounded-full px-3 py-1',
      inactive: 'bg-slate-200 text-slate-600 rounded-full px-3 py-1',
      completed: 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white font-bold rounded-full px-3 py-1',
      pending: 'bg-gradient-to-r from-amber-400 to-orange-400 text-white font-bold rounded-full px-3 py-1',
    },
    emptyState: {
      container: 'bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-12 text-center border-2 border-sky-200',
      icon: 'text-sky-300',
      title: 'text-xl font-bold text-slate-700',
      description: 'text-slate-500',
    },
    loading: {
      container: 'bg-gradient-to-br from-sky-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden border-2 border-sky-200',
      skeleton: 'bg-gradient-to-r from-sky-100 via-pink-100 to-sky-100 rounded-full animate-pulse',
    },
  },
  midnight: {
    id: 'midnight',
    name: 'Midnight',
    description: 'Deep navy/purple dark theme with subtle gradients',
    container: 'bg-gradient-to-br from-gray-950 via-slate-900 to-purple-950 rounded-xl shadow-2xl overflow-hidden border border-purple-800/30',
    header: {
      bg: 'bg-gradient-to-r from-purple-600 to-indigo-600',
      text: 'text-xs font-semibold text-white uppercase tracking-wider',
      border: 'divide-y divide-white/20',
    },
    body: {
      bg: 'bg-gray-950/80 backdrop-blur-sm',
      border: 'divide-y divide-purple-800/30',
    },
    row: {
      default: '',
      hover: 'hover:bg-purple-900/30 transition-all duration-300',
      selected: 'bg-indigo-900/40',
    },
    cell: {
      text: 'text-gray-100',
      textSecondary: 'text-purple-200/60',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border border-purple-800/30',
      inner: 'divide-y divide-purple-800/30',
      top: 'border-t border-purple-800/30',
    },
    actions: {
      edit: 'text-purple-400 hover:text-purple-300',
      delete: 'text-rose-400 hover:text-rose-300',
    },
    checkbox: 'text-purple-500 border-purple-600 focus:ring-purple-400 bg-purple-900/50',
    sortIcon: {
      default: 'text-purple-300/50',
      active: 'text-purple-400',
    },
    headerHover: 'hover:from-purple-500 hover:to-indigo-500',
    pagination: {
      container: 'bg-purple-950/50 border-t border-purple-800/30',
      text: 'text-purple-200',
      button: 'border border-purple-600 rounded-lg hover:bg-purple-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-purple-300',
    },
    statusBadge: {
      active: 'bg-emerald-900/50 text-emerald-400 border border-emerald-700/50',
      inactive: 'bg-gray-800/50 text-gray-400 border border-gray-700/50',
      completed: 'bg-green-900/50 text-green-400 border border-green-700/50',
      pending: 'bg-amber-900/50 text-amber-400 border border-amber-700/50',
    },
    emptyState: {
      container: 'bg-gray-950/80 backdrop-blur-sm rounded-xl shadow-xl p-12 text-center border border-purple-800/30',
      icon: 'text-purple-500/50',
      title: 'text-lg font-semibold text-gray-100',
      description: 'text-purple-200/50',
    },
    loading: {
      container: 'bg-gradient-to-br from-gray-950 via-slate-900 to-purple-950 rounded-xl shadow-2xl overflow-hidden border border-purple-800/30',
      skeleton: 'bg-gradient-to-r from-purple-900/50 via-purple-800/50 to-purple-900/50 rounded animate-pulse',
    },
  },
  forest: {
    id: 'forest',
    name: 'Forest',
    description: 'Green-tinted theme with nature-inspired colors',
    container: 'bg-emerald-950/30 rounded-xl shadow-xl overflow-hidden border border-emerald-700/30',
    header: {
      bg: 'bg-gradient-to-r from-emerald-600 to-teal-600',
      text: 'text-xs font-semibold text-white uppercase tracking-wider',
      border: 'divide-y divide-white/20',
    },
    body: {
      bg: 'bg-emerald-950/50 backdrop-blur-sm',
      border: 'divide-y divide-emerald-800/30',
    },
    row: {
      default: '',
      hover: 'hover:bg-emerald-800/30 transition-colors',
      selected: 'bg-teal-900/40',
    },
    cell: {
      text: 'text-emerald-50',
      textSecondary: 'text-emerald-300/70',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border border-emerald-700/30',
      inner: 'divide-y divide-emerald-800/30',
      top: 'border-t border-emerald-700/30',
    },
    actions: {
      edit: 'text-teal-400 hover:text-teal-300',
      delete: 'text-rose-400 hover:text-rose-300',
    },
    checkbox: 'text-emerald-500 border-emerald-600 focus:ring-emerald-400 bg-emerald-900/50',
    sortIcon: {
      default: 'text-emerald-400/50',
      active: 'text-teal-400',
    },
    headerHover: 'hover:from-emerald-500 hover:to-teal-500',
    pagination: {
      container: 'bg-emerald-950/50 border-t border-emerald-700/30',
      text: 'text-emerald-200',
      button: 'border border-emerald-600 rounded-lg hover:bg-emerald-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-emerald-300',
    },
    statusBadge: {
      active: 'bg-green-900/50 text-green-400 border border-green-700/50',
      inactive: 'bg-emerald-900/30 text-emerald-400/70 border border-emerald-700/50',
      completed: 'bg-teal-900/50 text-teal-400 border border-teal-700/50',
      pending: 'bg-lime-900/50 text-lime-400 border border-lime-700/50',
    },
    emptyState: {
      container: 'bg-emerald-950/50 backdrop-blur-sm rounded-xl shadow-xl p-12 text-center border border-emerald-700/30',
      icon: 'text-emerald-500/50',
      title: 'text-lg font-semibold text-emerald-100',
      description: 'text-emerald-300/60',
    },
    loading: {
      container: 'bg-emerald-950/30 rounded-xl shadow-xl overflow-hidden border border-emerald-700/30',
      skeleton: 'bg-gradient-to-r from-emerald-800/30 via-teal-800/30 to-emerald-800/30 rounded animate-pulse',
    },
  },
  ocean: {
    id: 'ocean',
    name: 'Ocean',
    description: 'Blue-teal gradient theme with wave-like styling',
    container: 'bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950 rounded-xl shadow-2xl overflow-hidden border border-cyan-700/30',
    header: {
      bg: 'bg-gradient-to-r from-cyan-500 to-blue-600',
      text: 'text-xs font-semibold text-white uppercase tracking-wider',
      border: 'divide-y divide-white/20',
    },
    body: {
      bg: 'bg-blue-950/60 backdrop-blur-sm',
      border: 'divide-y divide-cyan-800/20',
    },
    row: {
      default: '',
      hover: 'hover:bg-cyan-900/20 transition-all duration-300',
      selected: 'bg-blue-800/40',
    },
    cell: {
      text: 'text-cyan-50',
      textSecondary: 'text-cyan-300/60',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border border-cyan-700/30',
      inner: 'divide-y divide-cyan-800/20',
      top: 'border-t border-cyan-700/30',
    },
    actions: {
      edit: 'text-cyan-400 hover:text-cyan-300',
      delete: 'text-rose-400 hover:text-rose-300',
    },
    checkbox: 'text-cyan-500 border-cyan-600 focus:ring-cyan-400 bg-cyan-900/50',
    sortIcon: {
      default: 'text-cyan-400/50',
      active: 'text-cyan-300',
    },
    headerHover: 'hover:from-cyan-400 hover:to-blue-400',
    pagination: {
      container: 'bg-blue-950/50 border-t border-cyan-700/30',
      text: 'text-cyan-200',
      button: 'border border-cyan-600 rounded-lg hover:bg-cyan-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-cyan-300',
    },
    statusBadge: {
      active: 'bg-teal-900/50 text-teal-400 border border-teal-700/50',
      inactive: 'bg-blue-900/30 text-blue-400/70 border border-blue-700/50',
      completed: 'bg-cyan-900/50 text-cyan-400 border border-cyan-700/50',
      pending: 'bg-sky-900/50 text-sky-400 border border-sky-700/50',
    },
    emptyState: {
      container: 'bg-blue-950/60 backdrop-blur-sm rounded-xl shadow-2xl p-12 text-center border border-cyan-700/30',
      icon: 'text-cyan-500/50',
      title: 'text-lg font-semibold text-cyan-100',
      description: 'text-cyan-300/60',
    },
    loading: {
      container: 'bg-gradient-to-br from-cyan-950 via-blue-950 to-indigo-950 rounded-xl shadow-2xl overflow-hidden border border-cyan-700/30',
      skeleton: 'bg-gradient-to-r from-cyan-800/40 via-blue-800/40 to-cyan-800/40 rounded animate-pulse',
    },
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset',
    description: 'Warm orange-pink gradient theme',
    container: 'bg-gradient-to-br from-orange-950 via-red-950 to-pink-950 rounded-xl shadow-2xl overflow-hidden border border-orange-700/30',
    header: {
      bg: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500',
      text: 'text-xs font-semibold text-white uppercase tracking-wider',
      border: 'divide-y divide-white/20',
    },
    body: {
      bg: 'bg-red-950/60 backdrop-blur-sm',
      border: 'divide-y divide-orange-800/20',
    },
    row: {
      default: '',
      hover: 'hover:bg-orange-900/20 transition-all duration-300',
      selected: 'bg-red-800/40',
    },
    cell: {
      text: 'text-orange-50',
      textSecondary: 'text-orange-300/60',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border border-orange-700/30',
      inner: 'divide-y divide-orange-800/20',
      top: 'border-t border-orange-700/30',
    },
    actions: {
      edit: 'text-orange-400 hover:text-orange-300',
      delete: 'text-rose-400 hover:text-rose-300',
    },
    checkbox: 'text-orange-500 border-orange-600 focus:ring-orange-400 bg-orange-900/50',
    sortIcon: {
      default: 'text-orange-400/50',
      active: 'text-orange-300',
    },
    headerHover: 'hover:from-orange-400 hover:via-red-400 hover:to-pink-400',
    pagination: {
      container: 'bg-red-950/50 border-t border-orange-700/30',
      text: 'text-orange-200',
      button: 'border border-orange-600 rounded-lg hover:bg-orange-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-orange-300',
    },
    statusBadge: {
      active: 'bg-green-900/50 text-green-400 border border-green-700/50',
      inactive: 'bg-red-900/30 text-red-400/70 border border-red-700/50',
      completed: 'bg-emerald-900/50 text-emerald-400 border border-emerald-700/50',
      pending: 'bg-amber-900/50 text-amber-400 border border-amber-700/50',
    },
    emptyState: {
      container: 'bg-red-950/60 backdrop-blur-sm rounded-xl shadow-2xl p-12 text-center border border-orange-700/30',
      icon: 'text-orange-500/50',
      title: 'text-lg font-semibold text-orange-100',
      description: 'text-orange-300/60',
    },
    loading: {
      container: 'bg-gradient-to-br from-orange-950 via-red-950 to-pink-950 rounded-xl shadow-2xl overflow-hidden border border-orange-700/30',
      skeleton: 'bg-gradient-to-r from-orange-800/40 via-red-800/40 to-pink-800/40 rounded animate-pulse',
    },
  },
  monochrome: {
    id: 'monochrome',
    name: 'Monochrome',
    description: 'Pure black-white-gray with single accent color',
    container: 'bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700',
    header: {
      bg: 'bg-gray-800',
      text: 'text-xs font-bold text-white uppercase tracking-wider',
      border: 'divide-y divide-gray-600',
    },
    body: {
      bg: 'bg-gray-900',
      border: 'divide-y divide-gray-700',
    },
    row: {
      default: '',
      hover: 'hover:bg-gray-800 transition-colors',
      selected: 'bg-gray-700',
    },
    cell: {
      text: 'text-gray-100',
      textSecondary: 'text-gray-400',
      padding: 'px-4 py-3',
    },
    border: {
      outer: 'border border-gray-700',
      inner: 'divide-y divide-gray-700',
      top: 'border-t border-gray-700',
    },
    actions: {
      edit: 'text-indigo-400 hover:text-indigo-300',
      delete: 'text-red-400 hover:text-red-300',
    },
    checkbox: 'text-indigo-500 border-gray-600 focus:ring-indigo-500 bg-gray-800',
    sortIcon: {
      default: 'text-gray-500',
      active: 'text-white',
    },
    headerHover: 'hover:bg-gray-700',
    pagination: {
      container: 'bg-gray-800 border-t border-gray-700',
      text: 'text-gray-300',
      button: 'border border-gray-600 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-gray-300',
    },
    statusBadge: {
      active: 'bg-gray-700 text-white border border-gray-600',
      inactive: 'bg-gray-800 text-gray-400 border border-gray-700',
      completed: 'bg-gray-700 text-white border border-gray-600',
      pending: 'bg-gray-800 text-amber-400 border border-gray-700',
    },
    emptyState: {
      container: 'bg-gray-800 rounded-lg shadow p-12 text-center border border-gray-700',
      icon: 'text-gray-600',
      title: 'text-lg font-bold text-gray-100',
      description: 'text-gray-400',
    },
    loading: {
      container: 'bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700',
      skeleton: 'bg-gray-800 rounded animate-pulse',
    },
  },
};

// Export individual themes for convenience
export const darkTheme = tableThemes.dark;
export const lightTheme = tableThemes.light;
export const blueTheme = tableThemes.blue;
export const compactTheme = tableThemes.compact;
export const borderedTheme = tableThemes.bordered;
export const stripedTheme = tableThemes.striped;
export const modernTheme = tableThemes.modern;
export const highContrastTheme = tableThemes.highContrast;
export const gradientTheme = tableThemes.gradient;
export const minimalTheme = tableThemes.minimal;
export const boldTheme = tableThemes.bold;
export const pastelTheme = tableThemes.pastel;
export const neonTheme = tableThemes.neon;
export const corporateTheme = tableThemes.corporate;
export const playfulTheme = tableThemes.playful;
export const midnightTheme = tableThemes.midnight;
export const forestTheme = tableThemes.forest;
export const oceanTheme = tableThemes.ocean;
export const sunsetTheme = tableThemes.sunset;
export const monochromeTheme = tableThemes.monochrome;

// Export theme list for dropdowns
export const themeList = [
  { id: 'dark', name: 'Dark', description: 'Default dark theme' },
  { id: 'light', name: 'Light', description: 'Clean light theme' },
  { id: 'blue', name: 'Blue', description: 'Dark with blue accents' },
  { id: 'compact', name: 'Compact', description: 'Dense layout' },
  { id: 'bordered', name: 'Bordered', description: 'Prominent borders' },
  { id: 'striped', name: 'Striped', description: 'Alternating rows' },
  { id: 'modern', name: 'Modern', description: 'Minimal with gradients' },
  { id: 'highContrast', name: 'High Contrast', description: 'Maximum accessibility' },
  { id: 'gradient', name: 'Gradient', description: 'Colorful gradients' },
  { id: 'minimal', name: 'Minimal', description: 'Ultra-clean styling' },
  { id: 'bold', name: 'Bold', description: 'Heavy borders, strong colors' },
  { id: 'pastel', name: 'Pastel', description: 'Soft, muted colors' },
  { id: 'neon', name: 'Neon', description: 'Vibrant, glowing colors' },
  { id: 'corporate', name: 'Corporate', description: 'Professional styling' },
  { id: 'playful', name: 'Playful', description: 'Rounded, colorful, fun' },
  { id: 'midnight', name: 'Midnight', description: 'Deep navy/purple with gradients' },
  { id: 'forest', name: 'Forest', description: 'Green-tinted, nature-inspired' },
  { id: 'ocean', name: 'Ocean', description: 'Blue-teal wave-like styling' },
  { id: 'sunset', name: 'Sunset', description: 'Warm orange-pink gradient' },
  { id: 'monochrome', name: 'Monochrome', description: 'Black-white-gray with accent' },
];

export default tableThemes;
