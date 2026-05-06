import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button 
      className={`px-6 py-2.5 bg-primary text-white rounded-full font-medium transition-all hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
