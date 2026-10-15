import React, { useState, useEffect, useCallback } from 'react';
import { ScreenComponent } from '../ScreenComponent/ScreenComponent';
import { NumberButtonComponent } from '../NumberButtonComponent/NumberButtonComponent';
import { OkButtonComponent } from '../OkButtonComponent/OkButtonComponent';
import { DeleteButtonComponent } from '../DeleteButtonComponent/DeleteButtonComponent';
import { ClearButtonComponent } from '../ClearButtonComponent/ClearButtonComponent';
import styles from './CalculatorComponent.module.scss';

export interface CalculatorComponentProps {
  onOk?: (value: string) => void;
}

export const CalculatorComponent: React.FC<CalculatorComponentProps> = ({ onOk }) => {
  const [displayValue, setDisplayValue] = useState<string>('');
  const MAX_LENGTH = 8;

  const handleDigitPress = useCallback((digit: string) => {
    setDisplayValue((prev) => {
      if (prev.length >= MAX_LENGTH) return prev;
      return prev + digit;
    });
  }, []);

  const handleDeletePress = useCallback(() => {
    setDisplayValue((prev) => prev.slice(0, -1));
  }, []);

  const handleClearPress = useCallback(() => {
    setDisplayValue('');
  }, []);

  const handleOkPress = useCallback(() => {
    if (onOk) {
      onOk(displayValue);
    }
  }, [onOk, displayValue]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        handleDigitPress(e.key);
      } else if (e.key === 'Enter') {
        handleOkPress();
      } else if (e.key === 'Backspace') {
        handleDeletePress();
      } else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        handleClearPress();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDigitPress, handleOkPress, handleDeletePress, handleClearPress]);

  return (
    <div className={styles.calculatorContainer}>
      <ScreenComponent value={displayValue} />

      <div className={styles.calculatorKeypad}>
        <div className={styles.numberGrid}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
            <NumberButtonComponent
              key={digit}
              digit={digit}
              onClick={handleDigitPress}
            />
          ))}
        </div>

        <div className={styles.actionRow}>
          <NumberButtonComponent digit="0" onClick={handleDigitPress} />
          <ClearButtonComponent onClick={handleClearPress} />
          <DeleteButtonComponent onClick={handleDeletePress} />
        </div>

        <div className={styles.okRow}>
          <OkButtonComponent onClick={handleOkPress} />
        </div>
      </div>
    </div>
  );
};