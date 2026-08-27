import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderAccent?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  borderAccent = false,
}) => {
  return (
    <div
      className={`${styles.card} ${hoverEffect ? styles.hover : ''} ${
        borderAccent ? styles.accent : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
