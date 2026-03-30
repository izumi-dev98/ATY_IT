import { useState, useMemo } from 'react';
import { useTableTheme } from '../../contexts/TableThemeContext';
import { getAllPresets, applyPresets, mergeThemes } from '../../styles/tableCustomThemes';
import { tableThemes } from '../../styles/tableThemes';
import { fontFamilies, fontSizes, fontWeights, letterSpacing, lineHeights, textTransforms } from '../../styles/typography';
import { primaryColors, neutralColors, gradientPresets } from '../../styles/colorPalettes';

const PRESETS = getAllPresets();

// Tab definitions organized by category
const TAB_GROUPS = {
  layout: [
    { id: 'density', label: 'Density', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: 'contrast', label: 'Contrast', icon: 'M12 3v18M3 12h18' },
    { id: 'borders', label: 'Borders', icon: 'M4 4h16v16H4z' },
    { id: 'radius', label: 'Radius', icon: 'M4 4h4v4H4z' },
    { id: 'shadow', label: 'Shadow', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
  ],
  typography: [
    { id: 'fontFamily', label: 'Font Family', icon: 'M4 6h16M4 12h8m8 0h4M4 18h12' },
    { id: 'fontSize', label: 'Font Size', icon: 'M4 6h16M4 12h10M4 18h8' },
    { id: 'fontWeight', label: 'Font Weight', icon: 'M6 4h8a4 4 0 010 8H6V4zm0 8h10a4 4 0 010 8H6v-8z' },
    { id: 'textColor', label: 'Text Color', icon: 'M12 2L6 16h12L12 2z' },
    { id: 'textTransform', label: 'Transform', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: 'letterSpacing', label: 'Spacing', icon: 'M4 12h16M4 6h16M4 18h16' },
    { id: 'lineHeight', label: 'Line Height', icon: 'M4 6v12M8 6v12M12 6v12M16 6v12M20 6v12' },
  ],
  colors: [
    { id: 'accent', label: 'Accent Color', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z' },
    { id: 'headerColor', label: 'Header Colors', icon: 'M4 4h16v4H4z' },
    { id: 'rowColor', label: 'Row Colors', icon: 'M4 8h16v4H4z' },
    { id: 'gradient', label: 'Gradients', icon: 'M4 4h16v16H4z' },
  ],
  elements: [
    { id: 'header', label: 'Header', icon: 'M4 4h16v6H4z' },
    { id: 'hover', label: 'Hover Effect', icon: 'M12 4v16m-4-4l4 4 4-4' },
    { id: 'badge', label: 'Badges', icon: 'M4 8h16v4H4z' },
    { id: 'animation', label: 'Animation', icon: 'M12 8v8m-4-4h8' },
  ],
};

const ALL_TABS = [
  ...TAB_GROUPS.layout,
  ...TAB_GROUPS.typography,
  ...TAB_GROUPS.colors,
  ...TAB_GROUPS.elements,
];

function TableThemeCustomizer({ isOpen, onClose }) {
  const {
    currentTheme,
    currentThemeId,
    saveCustomTheme,
    updateCustomTheme,
    customThemes,
  } = useTableTheme();

  const [activeTab, setActiveTab] = useState('density');
  const [selectedPresets, setSelectedPresets] = useState({});
  const [customName, setCustomName] = useState('');
  const [customDescription, setCustomDescription] = useState('');
  const [showSaveForm, setShowSaveForm] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Generate live preview theme by applying selected presets
  const previewTheme = useMemo(() => {
    const presetList = Object.entries(selectedPresets).map(([type, value]) => ({
      type,
      value,
    }));
    const overrides = applyPresets(presetList);
    return mergeThemes(currentTheme, overrides);
  }, [currentTheme, selectedPresets]);

  const handlePresetSelect = (category, value) => {
    setSelectedPresets(prev => {
      if (prev[category] === value) {
        const updated = { ...prev };
        delete updated[category];
        return updated;
      }
      return { ...prev, [category]: value };
    });
  };

  const handleSave = async () => {
    if (!customName.trim()) {
      setSaveStatus({ type: 'error', message: 'Please enter a theme name' });
      return;
    }

    const presetList = Object.entries(selectedPresets).map(([type, value]) => ({
      type,
      value,
    }));
    const overrides = applyPresets(presetList);

    const isCustom = customThemes[currentThemeId];
    let result;

    if (isCustom) {
      result = await updateCustomTheme(currentThemeId, overrides);
    } else {
      result = await saveCustomTheme(
        currentThemeId,
        overrides,
        customName,
        customDescription
      );
    }

    if (result.success) {
      setSaveStatus({ type: 'success', message: 'Theme saved successfully!' });
      setTimeout(() => {
        setShowSaveForm(false);
        setSaveStatus(null);
        setCustomName('');
        setCustomDescription('');
        onClose();
      }, 1500);
    } else {
      setSaveStatus({ type: 'error', message: result.error });
    }
  };

  const handleApplyPresets = () => {
    // Presets are applied live, this just confirms
    setSaveStatus({ type: 'info', message: 'Preview updated. Click Save to persist.' });
  };

  // Filter tabs by search query
  const filteredTabs = useMemo(() => {
    if (!searchQuery.trim()) return ALL_TABS;
    const query = searchQuery.toLowerCase();
    return ALL_TABS.filter(tab =>
      tab.label.toLowerCase().includes(query) ||
      tab.id.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Get current tab group
  const currentTabGroup = TAB_GROUPS.layout.find(t => t.id === activeTab) ||
    TAB_GROUPS.typography.find(t => t.id === activeTab) ||
    TAB_GROUPS.colors.find(t => t.id === activeTab) ||
    TAB_GROUPS.elements.find(t => t.id === activeTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-800 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-100">Customize Table Theme</h2>
            <p className="text-sm text-gray-400 mt-1">
              Current base: {currentTheme.name}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel - Options */}
          <div className="w-1/2 overflow-y-auto border-r border-gray-700 flex flex-col">
            {/* Search */}
            <div className="p-4 border-b border-gray-700 sticky top-0 bg-gray-800 z-10">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search categories..."
                  className="w-full px-3 py-2 pl-9 text-sm bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Tabs - Grouped by category */}
            <div className="border-b border-gray-700 sticky top-14 bg-gray-800 z-10">
              {/* Group Headers */}
              <div className="flex flex-wrap gap-1 p-2">
                {['layout', 'typography', 'colors', 'elements'].map(groupId => {
                  const groupTabs = TAB_GROUPS[groupId];
                  const hasActiveInGroup = groupTabs.some(t => t.id === activeTab);
                  return (
                    <div key={groupId} className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase text-gray-500 px-2 font-semibold tracking-wider">
                        {groupId}
                      </span>
                      <div className="flex gap-1">
                        {groupTabs
                          .filter(tab => filteredTabs.find(t => t.id === tab.id))
                          .map(tab => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-2.5 py-1.5 text-xs font-medium rounded transition-colors flex items-center gap-1.5 ${
                              activeTab === tab.id
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700'
                            }`}
                            title={tab.label}
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
                            </svg>
                            <span className="hidden lg:inline">{tab.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Preset Options based on tab type */}
            <div className="p-4 space-y-4 flex-1">
              {/* Layout & Element tabs - use PRESETS */}
              {PRESETS[activeTab] && (
                <>
                  <p className="text-sm text-gray-400 mb-3">
                    Select {currentTabGroup?.label || activeTab} options:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {PRESETS[activeTab].map(preset => (
                      <button
                        key={preset.value}
                        onClick={() => handlePresetSelect(activeTab, preset.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedPresets[activeTab] === preset.value
                            ? 'bg-indigo-900/30 border-indigo-500 ring-2 ring-indigo-500/50'
                            : 'bg-gray-700/50 border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-100">{preset.label}</p>
                            <p className="text-sm text-gray-400">{preset.description}</p>
                          </div>
                          {selectedPresets[activeTab] === preset.value && (
                            <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Font Family */}
              {activeTab === 'fontFamily' && (
                <>
                  <p className="text-sm text-gray-400 mb-3">Select font family:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.values(fontFamilies).map(font => (
                      <button
                        key={font.id}
                        onClick={() => handlePresetSelect('fontFamily', font.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedPresets.fontFamily === font.id
                            ? 'bg-indigo-900/30 border-indigo-500 ring-2 ring-indigo-500/50'
                            : 'bg-gray-700/50 border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                        }`}
                      >
                        <p className="font-medium text-gray-100">{font.name}</p>
                        <p className="text-xs text-gray-400">{font.category}</p>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Font Size */}
              {activeTab === 'fontSize' && (
                <>
                  <p className="text-sm text-gray-400 mb-3">Select font size:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.values(fontSizes).map(size => (
                      <button
                        key={size.id}
                        onClick={() => handlePresetSelect('fontSize', size.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedPresets.fontSize === size.id
                            ? 'bg-indigo-900/30 border-indigo-500 ring-2 ring-indigo-500/50'
                            : 'bg-gray-700/50 border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                        }`}
                      >
                        <p className="font-medium text-gray-100">{size.name}</p>
                        <p className="text-xs text-gray-400">{size.px}px</p>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Font Weight */}
              {activeTab === 'fontWeight' && (
                <>
                  <p className="text-sm text-gray-400 mb-3">Select font weight:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.values(fontWeights).map(weight => (
                      <button
                        key={weight.id}
                        onClick={() => handlePresetSelect('fontWeight', weight.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedPresets.fontWeight === weight.id
                            ? 'bg-indigo-900/30 border-indigo-500 ring-2 ring-indigo-500/50'
                            : 'bg-gray-700/50 border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                        }`}
                      >
                        <p className="font-medium text-gray-100">{weight.name}</p>
                        <p className="text-xs text-gray-400">{weight.weight}</p>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Text Color */}
              {activeTab === 'textColor' && (
                <>
                  <p className="text-sm text-gray-400 mb-3">Select text color:</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-2">Primary Colors</p>
                      <div className="grid grid-cols-5 gap-2">
                        {Object.keys(primaryColors).slice(0, 10).map(colorId => (
                          <button
                            key={colorId}
                            onClick={() => handlePresetSelect('textColor', colorId)}
                            className={`w-full aspect-square rounded-lg transition-all capitalize ${
                              selectedPresets.textColor === colorId
                                ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-800 scale-105'
                                : 'hover:scale-105'
                            }`}
                            style={{ backgroundColor: primaryColors[colorId][500] }}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-2">More Colors</p>
                      <div className="grid grid-cols-5 gap-2">
                        {Object.keys(primaryColors).slice(10).map(colorId => (
                          <button
                            key={colorId}
                            onClick={() => handlePresetSelect('textColor', colorId)}
                            className={`w-full aspect-square rounded-lg transition-all capitalize ${
                              selectedPresets.textColor === colorId
                                ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-gray-800 scale-105'
                                : 'hover:scale-105'
                            }`}
                            style={{ backgroundColor: primaryColors[colorId][500] }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Text Transform */}
              {activeTab === 'textTransform' && (
                <>
                  <p className="text-sm text-gray-400 mb-3">Select text transform:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.values(textTransforms).map(transform => (
                      <button
                        key={transform.id}
                        onClick={() => handlePresetSelect('textTransform', transform.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedPresets.textTransform === transform.id
                            ? 'bg-indigo-900/30 border-indigo-500 ring-2 ring-indigo-500/50'
                            : 'bg-gray-700/50 border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                        }`}
                      >
                        <p className={`font-medium text-gray-100 ${transform.class}`}>
                          {transform.name}
                        </p>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Letter Spacing */}
              {activeTab === 'letterSpacing' && (
                <>
                  <p className="text-sm text-gray-400 mb-3">Select letter spacing:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.values(letterSpacing).map(spacing => (
                      <button
                        key={spacing.id}
                        onClick={() => handlePresetSelect('letterSpacing', spacing.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedPresets.letterSpacing === spacing.id
                            ? 'bg-indigo-900/30 border-indigo-500 ring-2 ring-indigo-500/50'
                            : 'bg-gray-700/50 border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                        }`}
                      >
                        <p className="font-medium text-gray-100">{spacing.name}</p>
                        <p className="text-xs text-gray-400">{spacing.value}</p>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Line Height */}
              {activeTab === 'lineHeight' && (
                <>
                  <p className="text-sm text-gray-400 mb-3">Select line height:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.values(lineHeights).map(height => (
                      <button
                        key={height.id}
                        onClick={() => handlePresetSelect('lineHeight', height.id)}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          selectedPresets.lineHeight === height.id
                            ? 'bg-indigo-900/30 border-indigo-500 ring-2 ring-indigo-500/50'
                            : 'bg-gray-700/50 border-gray-600 hover:border-gray-500 hover:bg-gray-700'
                        }`}
                      >
                        <p className="font-medium text-gray-100">{height.name}</p>
                        <p className="text-xs text-gray-400">{height.value}x</p>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Summary */}
            {Object.keys(selectedPresets).length > 0 && (
              <div className="px-6 py-4 border-t border-gray-700 bg-gray-750">
                <p className="text-sm font-medium text-gray-300 mb-2">Active Customizations:</p>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(selectedPresets).map(([category, value]) => {
                    const preset = PRESETS[category]?.find(p => p.value === value);
                    return (
                      <span
                        key={category}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-900/50 text-indigo-300 text-xs rounded"
                      >
                        {preset?.label || value}
                        <button
                          onClick={() => handlePresetSelect(category, value)}
                          className="hover:text-white"
                        >
                          ×
                        </button>
                      </span>
                    );
                  })}
                </div>
                <button
                  onClick={handleApplyPresets}
                  className="mt-3 text-sm text-indigo-400 hover:text-indigo-300"
                >
                  Apply to preview →
                </button>
              </div>
            )}
          </div>

          {/* Right Panel - Live Preview */}
          <div className="w-1/2 overflow-y-auto bg-gray-900 p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Live Preview</h3>

            {/* Mini Table Preview */}
            <div className={`rounded-lg overflow-hidden ${previewTheme.container}`}>
              <table className="min-w-full">
                <thead className={previewTheme.header.bg}>
                  <tr>
                    <th className={`px-4 py-2 text-left ${previewTheme.header.text}`}>
                      Column 1
                    </th>
                    <th className={`px-4 py-2 text-left ${previewTheme.header.text}`}>
                      Column 2
                    </th>
                    <th className={`px-4 py-2 text-left ${previewTheme.header.text}`}>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className={previewTheme.body.bg}>
                  {[1, 2, 3].map((i, idx) => (
                    <tr
                      key={i}
                      className={`${previewTheme.row.default} ${previewTheme.row.hover}`}
                    >
                      <td className={`px-4 py-2 ${previewTheme.cell.text} text-sm`}>
                        Sample data {i}
                      </td>
                      <td className={`px-4 py-2 ${previewTheme.cell.textSecondary} text-sm`}>
                        Description {i}
                      </td>
                      <td className="px-4 py-2">
                        <span className={`inline-flex px-2 py-1 text-xs rounded-full ${
                          idx === 0 ? previewTheme.statusBadge.active :
                          idx === 1 ? previewTheme.statusBadge.pending :
                          previewTheme.statusBadge.inactive
                        }`}>
                          {idx === 0 ? 'Active' : idx === 1 ? 'Pending' : 'Inactive'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Buttons Preview */}
            <div className="mt-4 flex items-center gap-3">
              <button className={`text-sm ${previewTheme.actions.edit}`}>
                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="ml-1">Edit</span>
              </button>
              <button className={`text-sm ${previewTheme.actions.delete}`}>
                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span className="ml-1">Delete</span>
              </button>
            </div>

            {/* Save Form */}
            {showSaveForm ? (
              <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
                <h4 className="font-medium text-gray-100 mb-3">Save Custom Theme</h4>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="Theme name"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100 text-sm mb-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
                <input
                  type="text"
                  value={customDescription}
                  onChange={(e) => setCustomDescription(e.target.value)}
                  placeholder="Description (optional)"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded text-gray-100 text-sm mb-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
                {saveStatus && (
                  <p className={`text-sm mb-3 ${
                    saveStatus.type === 'success' ? 'text-green-400' :
                    saveStatus.type === 'error' ? 'text-red-400' :
                    'text-gray-400'
                  }`}>
                    {saveStatus.message}
                  </p>
                )}
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors text-sm"
                  >
                    Confirm Save
                  </button>
                  <button
                    onClick={() => {
                      setShowSaveForm(false);
                      setSaveStatus(null);
                    }}
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowSaveForm(true)}
                  disabled={Object.keys(selectedPresets).length === 0}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                >
                  Save as Custom Theme
                </button>
                <button
                  onClick={() => setSelectedPresets({})}
                  className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors text-sm"
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableThemeCustomizer;
