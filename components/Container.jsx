import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    // Apply the consistent container styles here
    // 'max-w-site-max' comes from your tailwind.config.js (1400px)
    // 'px-6' for consistent horizontal padding
    // 'mx-auto' to center the container
    <div className={`max-w-site-max mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;