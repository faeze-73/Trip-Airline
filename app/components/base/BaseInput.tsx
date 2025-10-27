import React, { forwardRef, InputHTMLAttributes } from 'react';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className = '', label, error, colSpan = 12, ...props }, ref) => {

    const widthClass = `w-${colSpan}/12`;

    const borderColor = error 
      ? 'border-warning' 
      : 'border-primary';

    return (
      <div className={`relative ${widthClass}`}>
        <input
          ref={ref}
          className={`
            block w-full rounded-lg border-2 bg-transparent px-4 pt-4 pb-2 text-sm
            focus:outline-none focus:border-primary transition-all
            ${borderColor}
            ${className}
          `}
          {...props}
        />
        {label && (
          <span
            className={`
              absolute left-4
              -top-2
              px-1
              bg-white
              text-primary
              text-xs
              transition-all
              duration-200
              pointer-events-none
            `}
          >
            {label}
          </span>
        )}

        {error && (
          <p className="mt-1 text-xs text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

BaseInput.displayName = 'BaseInput';

export default BaseInput; 