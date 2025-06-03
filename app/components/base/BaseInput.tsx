import React, { forwardRef, InputHTMLAttributes, useState } from 'react';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className = '', label, value, onChange, colSpan = 12, ...props }, ref) => {
    // For uncontrolled inputs, track value for floating label
    const [internalValue, setInternalValue] = useState('');
    const isControlled = value !== undefined;
    const inputValue = isControlled ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(e.target.value);
      if (onChange) onChange(e);
    };

    const widthClass = `w-${colSpan}/12`;

    return (
      <div className={`relative ${widthClass}`}>
        <input
          ref={ref}
          value={inputValue}
          onChange={handleChange}
          className={`
            block w-full rounded-lg border-2 border-primary bg-transparent px-4 pt-4 pb-2 text-sm
            focus:outline-none focus:border-primary transition-all
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
              ${inputValue || props.placeholder ? '' : 'opacity-0'}
            `}
          >
            {label}
          </span>
        )}
      </div>
    );
  }
);

BaseInput.displayName = 'BaseInput';

export default BaseInput; 