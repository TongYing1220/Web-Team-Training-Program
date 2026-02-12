import React from 'react';

// 可复用卡片组件
const Card = ({ 
  children, 
  className = "", 
  style = {},
  lazyLoad = false,
  delay = 0
}) => {
  // 基础样式类
  const baseClasses = `card ${className} ${lazyLoad ? 'lazy-load' : ''}`;
  
  return (
    <div 
      className={baseClasses} 
      style={style}
      data-delay={delay}
    >
      {children}
    </div>
  );
};

export default Card;