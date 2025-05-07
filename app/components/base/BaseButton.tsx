import React from "react";

type BaseButtonProps = {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function BaseButton({
  children,
  iconLeft,
  iconRight,
  className = "",
  onClick,
}: BaseButtonProps) {
  return (
    <button
      className={`bg-primary hover:bg-primary-shade-1 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 ${className}`}
      onClick={onClick}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </button>
  );
}