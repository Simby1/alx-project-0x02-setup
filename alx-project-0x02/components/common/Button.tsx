import React from 'react';
import { type ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  size = 'medium', 
  shape = 'rounded-md', 
  onClick, 
  type = 'button',
  className = ''
}) => {
  // Base styling
  let baseClasses = 'font-bold text-white transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-500 hover:bg-blue-600 focus:ring-blue-500';

  // Size classes
  let sizeClasses = '';
  switch (size) {
    case 'small':
      sizeClasses = 'py-1 px-2 text-sm';
      break;
    case 'large':
      sizeClasses = 'py-4 px-8 text-lg';
      break;
    case 'medium':
    default:
      sizeClasses = 'py-2 px-4';
      break;
  }
  const finalClasses = `${baseClasses} ${sizeClasses} ${shape} ${className}`;

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={finalClasses}
    >
      {children}
    </button>
  );
};

export default Button;