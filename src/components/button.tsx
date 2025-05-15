// components/Button.tsx

import React from 'react';
import classNames from 'classnames';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        'bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
