import React from "react";

type BaseButtonProps = {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  textColor?: string;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  bgColor?: 'primary' | 'gray' | 'custom';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const colSpanClasses = {
  1: 'w-1/12',
  2: 'w-2/12',
  3: 'w-3/12',
  4: 'w-4/12',
  5: 'w-5/12',
  6: 'w-6/12',
  7: 'w-7/12',
  8: 'w-8/12',
  9: 'w-9/12',
  10: 'w-10/12',
  11: 'w-11/12',
  12: 'w-full',
} as const;

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
} as const;

export default function BaseButton({
  children,
  iconLeft,
  iconRight,
  className = "",
  onClick,
  textColor = "text-white",
  colSpan = 12,
  bgColor = 'primary',
  disabled = false,
  size = 'md',
}: BaseButtonProps) {
  const widthClass = colSpanClasses[colSpan];
  const sizeClass = sizeClasses[size];

  const bgClass =
    bgColor === 'primary' ? (disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-primary hover:bg-primary-shade-1')
      : bgColor === 'gray'
        ? 'bg-gray-200'
        : '';

  // Adjust text color when disabled
  const finalTextColor = disabled ? 'text-gray-500' : textColor;

  return (
    <button
      className={`${bgClass} ${sizeClass} ${widthClass}px-4 rounded-lg flex items-center justify-center gap-2 ${textColor} ${widthClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </button>
  );
}