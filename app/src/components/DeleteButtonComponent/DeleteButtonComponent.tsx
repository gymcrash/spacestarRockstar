import React from 'react';
import { BaseButtonComponent } from '../BaseButtonComponent/BaseButtonComponent';
import styles from './DeleteButtonComponent.module.scss';

export interface DeleteButtonComponentProps {
  onClick: () => void;
}

export const DeleteButtonComponent: React.FC<DeleteButtonComponentProps> = ({ onClick }) => {
  return (
    <BaseButtonComponent onClick={onClick} className={styles.deleteButton} keyboardKey="Backspace">
      ⌫
    </BaseButtonComponent>
  );
};