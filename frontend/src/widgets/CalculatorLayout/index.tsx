'use client';

import React, { useState } from 'react';
import Display from '@/shared/ui/Display';
import Button from '@/shared/ui/Button';
import { useCalculatorStore } from '@/features/calculator/store';

const CalculatorLayout: React.FC = () => {
  const { 
    display, 
    history,
    clear, 
    deleteLast, 
    addToInput, 
    calculate,
    loadFromHistory
  } = useCalculatorStore();

  const [showHistory, setShowHistory] = useState(true);

  const numberButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];
  const operatorButtons = ['+', '-', '*', '/'];
  const specialButtons = ['.', '=', 'C'];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="flex gap-6 max-w-5xl w-full">
        {/* Calculator */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 max-w-md mx-auto w-full">
          <Display 
            value={display} 
            onClear={clear}
            onDelete={deleteLast}
          />

          <div className="grid grid-cols-3 gap-3">
            {numberButtons.map((num) => (
              <Button
                key={num}
                label={num}
                onClick={() => addToInput(num)}
                variant="secondary"
              />
            ))}

            {operatorButtons.map((op) => (
              <Button
                key={op}
                label={op}
                onClick={() => addToInput(op)}
                variant="primary"
              />
            ))}

            <Button
              label="."
              onClick={() => addToInput('.')}
              variant="secondary"
            />

            <Button
              label="00"
              onClick={() => addToInput('00')}
              variant="secondary"
            />

            <Button
              label={specialButtons[2]}
              onClick={() => clear()}
              variant="accent"
            />

            <Button
              label={specialButtons[1]}
              onClick={() => calculate()}
              variant="accent"
            />
          </div>
        </div>

        {/* History Sidebar */}
        {showHistory && (
          <div className="w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                History
              </h2>
              <button
                onClick={() => setShowHistory(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-2">
              {history.length === 0 ? (
                <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                  No history yet
                </div>
              ) : (
                [...history].reverse().map((calc, index) => (
                  <div
                    key={index}
                    onClick={() => loadFromHistory(history.length - 1 - index)}
                    className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 cursor-pointer transition-colors group"
                  >
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-1 font-mono">
                      {calc.expression}
                    </div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      = {calc.result.toFixed(4).replace(/\.?0+$/, '')}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {new Date(calc.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Click on history items to restore
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile History Toggle */}
      <button
        onClick={() => setShowHistory(!showHistory)}
        className="fixed bottom-4 right-4 md:hidden bg-blue-500 text-white p-3 rounded-full shadow-lg z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default CalculatorLayout;
