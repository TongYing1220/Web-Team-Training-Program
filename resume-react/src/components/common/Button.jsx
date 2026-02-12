import React from 'react';

// 可复用按钮组件
const Button = ({ 
  children, 
  type = "button", 
  className = "", 
  onClick, 
  ariaLabel,
  disabled = false
}) => {
  // 基础样式 + 传入的自定义样式
  const baseClasses = `btn ${className}`;
  
  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;