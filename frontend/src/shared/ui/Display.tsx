'use client';

import React from 'react';

interface DisplayProps {
  value: string;
  onClear: () => void;
  onDelete: () => void;
}

const Display: React.FC<DisplayProps> = ({ value, onClear, onDelete }) => {
  const displayValue = value.length > 12 ? value.slice(0, 12) : value;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-4 shadow-inner border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Display
        </span>
        <div className="flex gap-1">
          <button
            onClick={onClear}
            className="px-3 py-1 text-xs font-medium bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
          >
            AC
          </button>
          <button
            onClick={onDelete}
            className="px-3 py-1 text-xs font-medium bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded transition-colors"
          >
            DEL
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <input
          type="text"
          value={displayValue}
          readOnly
          className="w-full text-right bg-transparent border-none focus:ring-0 text-4xl font-mono text-gray-900 dark:text-white"
        />
      </div>
    </div>
  );
};

export default Display;
