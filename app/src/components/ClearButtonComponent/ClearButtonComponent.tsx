import React from 'react';
import { BaseButtonComponent } from '../BaseButtonComponent/BaseButtonComponent';
import styles from './ClearButtonComponent.module.scss';

export interface ClearButtonComponentProps {
  onClick: () => void;
}

export const ClearButtonComponent: React.FC<ClearButtonComponentProps> = ({ onClick }) => {
  return (
    <BaseButtonComponent onClick={onClick} className={styles.clearButton} keyboardKey={['Escape', 'c']}>
      C
    </BaseButtonComponent>
  );
};