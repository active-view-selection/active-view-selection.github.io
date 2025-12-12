import React, { useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  hoverText?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon,
  className = '',
  hoverText,
  href,
  target,
  rel,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const baseStyles = "inline-flex items-center px-4 py-2 rounded-full font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 font-google-sans relative group min-w-[100px] justify-center";

  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500"
  };

  const content = (
    <>
      {hoverText && isHovered ? (
        <span>{hoverText}</span>
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </>
  );

  const commonProps = {
    className: `${baseStyles} ${variants[variant]} ${className}`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        {...commonProps as any}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      {...props}
    >
      {content}
    </button>
  );
};