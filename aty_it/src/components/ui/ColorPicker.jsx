/**
 * ColorPicker Component
 *
 * Visual color selection UI for table theme customization.
 * Supports picking from primary colors, neutral scales, and gradient presets.
 */

import React from 'react';
import { primaryColors, neutralColors, gradientPresets, getColorClass, getGradientClass } from '../../styles/colorPalettes';

/**
 * ColorPicker Component Props:
 * @param {string} selectedColor - Currently selected color ID
 * @param {function} onColorSelect - Callback when color is selected
 * @param {string} category - Category of colors to show ('primary', 'neutral', 'gradient', 'all')
 * @param {string} shade - Specific shade to highlight (50-950)
 * @param {boolean} showPreview - Whether to show color preview swatches
 */
export default function ColorPicker({
  selectedColor,
  onColorSelect,
  category = 'all',
  shade = 500,
  showPreview = true,
}) {
  const [activeTab, setActiveTab] = React.useState(category);
  const [selectedShade, setSelectedShade] = React.useState(shade);

  const handleColorSelect = (colorId) => {
    onColorSelect(colorId);
  };

  const renderColorSwatch = (colorId, colorValue, isGradient = false) => {
    const isSelected = selectedColor === colorId;
    const className = isGradient
      ? getGradientClass(colorId)
      : getColorClass(colorId, selectedShade);

    return (
      <button
        key={colorId}
        type="button"
        onClick={() => handleColorSelect(colorId)}
        className={`
          relative w-10 h-10 rounded-lg cursor-pointer
          transition-all duration-200
          ${isSelected ? 'ring-2 ring-offset-2 ring-indigo-500 scale-110' : 'hover:scale-105'}
          ${className}
        `}
        title={colorId}
      >
        {isSelected && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg className="w-5 h-5 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        )}
      </button>
    );
  };

  const renderShadeSelector = (colorId) => {
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
    const colorData = primaryColors[colorId] || neutralColors[colorId];

    if (!colorData) return null;

    return (
      <div className="mt-3">
        <p className="text-xs text-gray-400 mb-2">Select shade:</p>
        <div className="flex gap-1 flex-wrap">
          {shades.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSelectedShade(s)}
              className={`
                w-6 h-6 rounded transition-all
                ${selectedShade === s ? 'ring-2 ring-offset-1 ring-white scale-110' : 'hover:scale-105'}
              `}
              style={{ backgroundColor: colorData[s] }}
              title={`Shade ${s}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* Tab Selection */}
      <div className="flex gap-2 mb-4 border-b border-gray-700 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab('primary')}
          className={`px-3 py-1.5 text-sm rounded-t transition-colors ${
            activeTab === 'primary'
              ? 'bg-gray-800 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Primary Colors
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('neutral')}
          className={`px-3 py-1.5 text-sm rounded-t transition-colors ${
            activeTab === 'neutral'
              ? 'bg-gray-800 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Neutral Scales
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('gradient')}
          className={`px-3 py-1.5 text-sm rounded-t transition-colors ${
            activeTab === 'gradient'
              ? 'bg-gray-800 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Gradients
        </button>
      </div>

      {/* Color Grid */}
      <div className="space-y-4">
        {/* Primary Colors */}
        {(activeTab === 'primary' || activeTab === 'all') && (
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">Primary Colors</h4>
            <div className="grid grid-cols-5 gap-2">
              {Object.entries(primaryColors).map(([colorId, shades]) => (
                <div key={colorId} className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleColorSelect(colorId)}
                    className={`
                      w-full aspect-square rounded-lg transition-all duration-200
                      ${selectedColor === colorId ? 'ring-2 ring-offset-2 ring-indigo-500 scale-105' : 'hover:scale-105'}
                    `}
                    style={{ backgroundColor: shades[selectedShade] }}
                    title={colorId}
                  >
                    {selectedColor === colorId && (
                      <span className="sr-only">Selected: {colorId}</span>
                    )}
                  </button>
                  <span className="text-xs text-gray-400 capitalize">{colorId}</span>
                </div>
              ))}
            </div>
            {selectedColor && primaryColors[selectedColor] && (
              <div className="mt-4 p-3 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-300 mb-2 capitalize">{selectedColor} - Shade Palette</p>
                <div className="flex gap-1">
                  {Object.entries(primaryColors[selectedColor]).map(([shadeNum, hex]) => (
                    <button
                      key={shadeNum}
                      type="button"
                      onClick={() => setSelectedShade(Number(shadeNum))}
                      className={`
                        flex-1 h-8 rounded transition-all
                        ${selectedShade === Number(shadeNum) ? 'ring-2 ring-offset-1 ring-white scale-110' : 'hover:scale-105'}
                      `}
                      style={{ backgroundColor: hex }}
                      title={`${shadeNum}: ${hex}`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Selected: {selectedColor}-{selectedShade} = {primaryColors[selectedColor][selectedShade]}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Neutral Colors */}
        {(activeTab === 'neutral' || activeTab === 'all') && (
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">Neutral Scales</h4>
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(neutralColors).map(([colorId, shades]) => (
                <div key={colorId} className="flex flex-col gap-1">
                  <span className="text-xs text-gray-400 capitalize mb-1">{colorId}</span>
                  <div className="flex gap-0.5">
                    {Object.entries(shades).slice(0, 6).map(([shadeNum, hex]) => (
                      <button
                        key={shadeNum}
                        type="button"
                        onClick={() => {
                          handleColorSelect(colorId);
                          setSelectedShade(Number(shadeNum));
                        }}
                        className={`
                          flex-1 h-6 rounded transition-all
                          ${selectedColor === colorId && selectedShade === Number(shadeNum) ? 'ring-2 ring-offset-1 ring-white' : ''}
                        `}
                        style={{ backgroundColor: hex }}
                        title={`${shadeNum}: ${hex}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gradient Presets */}
        {(activeTab === 'gradient' || activeTab === 'all') && (
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">Gradient Presets</h4>
            <div className="grid grid-cols-4 gap-3">
              {Object.entries(gradientPresets).map(([gradientId, gradient]) => (
                <button
                  key={gradientId}
                  type="button"
                  onClick={() => handleColorSelect(gradientId)}
                  className={`
                    relative h-16 rounded-lg transition-all duration-200
                    ${selectedColor === gradientId ? 'ring-2 ring-offset-2 ring-indigo-500 scale-105' : 'hover:scale-105'}
                    ${gradient.class}
                  `}
                >
                  <span className="absolute bottom-1 left-1 text-xs text-white drop-shadow-lg font-medium">
                    {gradient.name}
                  </span>
                  {selectedColor === gradientId && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Selected Color Info */}
      {selectedColor && (
        <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-lg ${
                gradientPresets[selectedColor]
                  ? getGradientClass(selectedColor)
                  : getColorClass(selectedColor, selectedShade)
              }`}
            />
            <div className="flex-1">
              <p className="text-sm font-medium text-white capitalize">{selectedColor}</p>
              {!gradientPresets[selectedColor] && (
                <p className="text-xs text-gray-400">
                  Shade {selectedShade}
                </p>
              )}
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 font-mono">
                {gradientPresets[selectedColor]
                  ? 'Gradient'
                  : (primaryColors[selectedColor]?.[selectedShade] || neutralColors[selectedColor]?.[selectedShade] || '')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
