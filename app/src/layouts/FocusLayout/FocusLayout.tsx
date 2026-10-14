import React from 'react';
import type { ReactNode } from 'react';
import styles from './FocusLayout.module.scss';

interface FocusLayoutProps {
  children: ReactNode;
  className?: string;
}

export const FocusLayout: React.FC<FocusLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.focusLayout} ${className}`}>
      <div className={styles.focusContent}>
        {children}
      </div>
    </div>
  );
};