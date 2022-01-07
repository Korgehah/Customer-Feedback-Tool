import React from 'react';

interface ButtonProps {
  children: React.ReactChild;
  className: string;
}

const Button = ({ children, className }:ButtonProps) => {
  return <span className={`button ${className}`}>{children}</span>;
};
export default Button;