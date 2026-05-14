'use client';

import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'default',
  className = '',
}) => {
  const baseStyles = 'px-4 py-3 text-xl font-medium rounded-lg transition-colors duration-200';
  
  const variants = {
    default: 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white',
    primary: 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20',
    secondary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white',
    accent: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
