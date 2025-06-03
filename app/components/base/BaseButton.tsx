import React from "react";

type BaseButtonProps = {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  textColor?: string;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

export default function BaseButton({
  children,
  iconLeft,
  iconRight,
  className = "",
  onClick,
  textColor = "text-white",
  colSpan = 12,
}: BaseButtonProps) {
  const widthClass = `w-${colSpan}/12`;

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