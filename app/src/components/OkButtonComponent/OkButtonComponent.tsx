import React from 'react';
import { BaseButtonComponent } from '../BaseButtonComponent/BaseButtonComponent';
import styles from './OkButtonComponent.module.scss';

export interface OkButtonComponentProps {
  onClick: () => void;
}

export const OkButtonComponent: React.FC<OkButtonComponentProps> = ({ onClick }) => {
  return (
    <BaseButtonComponent onClick={onClick} className={styles.okButton} keyboardKey="Enter">
      OK
    </BaseButtonComponent>
  );
};