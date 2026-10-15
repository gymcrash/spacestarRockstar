import React from 'react';
import styles from './ScreenComponent.module.scss';

export interface ScreenComponentProps {
  value: string;
}

export const ScreenComponent: React.FC<ScreenComponentProps> = ({ value }) => {
  return (
    <div className={styles.calculatorScreen}>
      <div className={styles.screenDisplay}>
        {value || <span className={styles.placeholder}>0</span>}
      </div>
    </div>
  );
};