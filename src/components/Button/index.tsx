import React from 'react';

interface ButtonProps {
  children: React.ReactChild;
  className?: string;
  buttonVariant?: string;
}

const Button = ({ children, className, buttonVariant }: ButtonProps) => {
  return (
    <span
      className={`button ${className ? className : ''} ${
        buttonVariant ? buttonVariant : ''
      }`}
    >
      {children}
    </span>
  );
};
export default Button;
