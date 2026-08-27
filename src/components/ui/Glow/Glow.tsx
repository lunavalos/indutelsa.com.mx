import React from 'react';
import styles from './Glow.module.css';

interface GlowProps {
  variant?: 'top' | 'above' | 'bottom' | 'below' | 'center';
  className?: string;
}

export const Glow = React.forwardRef<HTMLDivElement, GlowProps>(
  ({ variant = 'top', className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.glowContainer} ${styles[variant]} ${className}`}
      >
        <div className={styles.ellipseOuter} />
        <div className={styles.ellipseInner} />
      </div>
    );
  }
);

Glow.displayName = 'Glow';
