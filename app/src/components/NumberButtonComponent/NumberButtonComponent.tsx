import React from 'react';
import { BaseButtonComponent } from '../BaseButtonComponent/BaseButtonComponent';

export interface NumberButtonComponentProps {
  digit: string;
  onClick: (digit: string) => void;
}

export const NumberButtonComponent: React.FC<NumberButtonComponentProps> = ({
  digit,
  onClick,
}) => {
  return (
    <BaseButtonComponent onClick={() => onClick(digit)} keyboardKey={digit}>
      {digit}
    </BaseButtonComponent>
  );
};