/**
 * AnimationPreview Component
 *
 * Visual preview of animation effects with speed control.
 * Supports hover animations, loading animations, entry animations, and sort animations.
 */

import React, { useState, useEffect } from 'react';
import {
  hoverAnimations,
  loadingAnimations,
  entryAnimations,
  sortAnimations,
  animationSpeeds,
  getHoverAnimation,
  getLoadingAnimation,
  getEntryAnimation,
  getSortAnimation,
  getAnimationSpeed,
} from '../../styles/animations';

/**
 * AnimationPreview Component Props:
 * @param {string} selectedAnimation - Currently selected animation ID
 * @param {string} animationType - Type of animation ('hover', 'loading', 'entry', 'sort')
 * @param {function} onAnimationSelect - Callback when animation is selected
 * @param {string} speed - Animation speed ('fast', 'normal', 'slow')
 */
export default function AnimationPreview({
  selectedAnimation,
  animationType = 'hover',
  onAnimationSelect,
  speed = 'normal',
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [previewKey, setPreviewKey] = useState(0);

  const getAnimationObject = () => {
    switch (animationType) {
      case 'hover':
        return getHoverAnimation(selectedAnimation);
      case 'loading':
        return getLoadingAnimation(selectedAnimation);
      case 'entry':
        return getEntryAnimation(selectedAnimation);
      case 'sort':
        return getSortAnimation(selectedAnimation);
      default:
        return getHoverAnimation(selectedAnimation);
    }
  };

  const speedObj = getAnimationSpeed(speed);
  const animation = getAnimationObject();

  const triggerPreview = () => {
    setIsPlaying(true);
    setPreviewKey((k) => k + 1);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  useEffect(() => {
    triggerPreview();
  }, [selectedAnimation, animationType]);

  const renderHoverPreview = () => {
    const baseClasses = 'w-full h-20 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer';
    const animClass = animation.class || '';

    return (
      <div className={baseClasses + ' ' + animClass}>
        <span className="text-white text-sm">Hover me</span>
      </div>
    );
  };

  const renderLoadingPreview = () => {
    const baseClasses = 'w-full h-20 bg-gray-700 rounded-lg flex items-center justify-center';
    const animClass = animation.class || '';

    return (
      <div className={baseClasses}>
        <div className={animClass}>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-indigo-500 rounded-full"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderEntryPreview = () => {
    const baseClasses = 'w-full h-20 bg-gray-700 rounded-lg flex items-center justify-center';
    const animClass = animation.class || '';

    return (
      <div key={previewKey} className={baseClasses}>
        {isPlaying ? (
          <div className={animClass}>
            <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">Entry</span>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={triggerPreview}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700"
          >
            Replay
          </button>
        )}
      </div>
    );
  };

  const renderSortPreview = () => {
    const baseClasses = 'w-full h-20 bg-gray-700 rounded-lg flex items-center justify-center gap-4';
    const animClass = animation.class || '';

    return (
      <div className={baseClasses}>
        <span className="text-gray-300 text-sm">Sort</span>
        <div className={animClass}>
          <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" />
            <path fillRule="evenodd" d="M9.293 5.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414V13a1 1 0 11-2 0V7.414L5.707 9.707a1 1 0 01-1.414-1.414l3-3a1 1 0 010-.707z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    );
  };

  const getAnimationsForType = () => {
    switch (animationType) {
      case 'hover':
        return hoverAnimations;
      case 'loading':
        return loadingAnimations;
      case 'entry':
        return entryAnimations;
      case 'sort':
        return sortAnimations;
      default:
        return hoverAnimations;
    }
  };

  const animations = getAnimationsForType();

  return (
    <div className="w-full space-y-4">
      {/* Animation Type Tabs */}
      <div className="flex gap-2 flex-wrap">
        {['hover', 'loading', 'entry', 'sort'].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => {
              onAnimationSelect(Object.values(getAnimationsForType())[0]?.id || 'none');
            }}
            className={`px-3 py-1.5 text-sm rounded transition-colors capitalize ${
              animationType === type
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Speed Selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400">Speed:</span>
        <div className="flex gap-1">
          {Object.values(animationSpeeds).map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {}}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                speed === s.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Preview Area */}
      <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-medium text-white">
            {animations[selectedAnimation]?.name || 'Select Animation'}
          </h4>
          <button
            type="button"
            onClick={triggerPreview}
            className="px-3 py-1 text-xs bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Replay
          </button>
        </div>

        {/* Animation Preview */}
        <div className="mb-4">
          {animationType === 'hover' && renderHoverPreview()}
          {animationType === 'loading' && renderLoadingPreview()}
          {animationType === 'entry' && renderEntryPreview()}
          {animationType === 'sort' && renderSortPreview()}
        </div>

        {/* Description */}
        {animation.description && (
          <p className="text-xs text-gray-400">{animation.description}</p>
        )}

        {/* CSS Class */}
        {animation.class && (
          <div className="mt-2 p-2 bg-gray-900 rounded text-xs font-mono text-gray-300 overflow-x-auto">
            {animation.class}
          </div>
        )}
      </div>

      {/* Animation Selection Grid */}
      <div>
        <h4 className="text-sm font-medium text-gray-300 mb-3">Available Animations</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Object.entries(animations).map(([id, anim]) => (
            <button
              key={id}
              type="button"
              onClick={() => onAnimationSelect(id)}
              className={`
                p-3 rounded-lg text-left transition-all
                ${selectedAnimation === id
                  ? 'bg-indigo-600 text-white ring-2 ring-indigo-400'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
              `}
            >
              <p className="text-sm font-medium capitalize">{anim.name}</p>
              <p className="text-xs opacity-75 mt-1">{anim.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
