import React from 'react';
import '../styles/buttons.css';

const Button = ({ 
  children, 
  onClick, 
  type = 'primary', 
  size = 'md', 
  block = false, 
  disabled = false,
  className = '' 
}) => {
  const buttonClasses = [
    'btn',
    `btn-${type}`,
    size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '',
    block ? 'btn-block' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;