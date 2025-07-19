// components/Button.tsx
import React from "react";

interface ButtonProps {
  title: string;
  styles?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  styles = "",
  onClick,
  disabled = false,
}) => {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    bg-blue-600 hover:bg-blue-700 text-white
  `;

  return (
    <button
      className={`${baseStyles} ${styles}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
