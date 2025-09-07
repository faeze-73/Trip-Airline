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

};

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
}: BaseButtonProps) {
  const widthClass = `w-${colSpan}/12`;

  const bgClass = {
    primary: disabled
      ? 'bg-gray-200'
      : 'bg-primary hover:bg-primary-shade-1',
    gray: 'bg-gray-200',
    custom: '',
  }[bgColor];

  return (
    <button
      className={`bg-primary hover:bg-primary-shade-1 px-4 py-2 rounded-lg flex items-center justify-center gap-2 ${textColor} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </button>
  );
}