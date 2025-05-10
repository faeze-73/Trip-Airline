import React, { forwardRef, InputHTMLAttributes } from 'react';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ className = '', ...props }, ref) => (
    <input
      ref={ref}
      className={`flex-1 min-w-[120px] p-3 border rounded-lg text-sm ${className}`}
      {...props}
    />
  )
);

BaseInput.displayName = 'BaseInput';

export default BaseInput; 