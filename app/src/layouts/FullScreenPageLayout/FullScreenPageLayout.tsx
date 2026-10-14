import React from 'react';
import type { ReactNode } from 'react';
import styles from './FullScreenPageLayout.module.scss'; // Import as an object named 'styles'

interface FullScreenPageProps {
  children: ReactNode;
  className?: string;
}

export const FullScreenPage: React.FC<FullScreenPageProps> = ({ children, className = '' }) => {
  return (
    // Access the camelCase class name from the styles object
    <main className={`${styles.fullScreenPage} ${className}`}>
      {children}
    </main>
  );
};