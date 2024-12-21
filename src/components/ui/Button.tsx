import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'disabled';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className, disabled, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded transition-colors',
        {
          'bg-orange-600 text-white hover:bg-orange-700': variant === 'primary' && !disabled,
          'bg-gray-200 text-gray-700 hover:bg-gray-300': variant === 'secondary' && !disabled,
          'bg-gray-400 text-white cursor-not-allowed': disabled || variant === 'disabled',
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}