import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`glass-card rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}