import React, { useState, useEffect } from 'react';
import { PopoutEffectComponent } from '../PopoutEffectComponent/PopoutEffectComponent';
import styles from './BaseButtonComponent.module.scss';

export interface BaseButtonComponentProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  keyboardKey?: string | string[];
}

export const BaseButtonComponent: React.FC<BaseButtonComponentProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  keyboardKey,
}) => {
  const [animTrigger, setAnimTrigger] = useState<number>(0);

  const triggerAction = () => {
    if (disabled) return;
    setAnimTrigger((prev) => prev + 1);
    onClick();
  };

  useEffect(() => {
    if (!keyboardKey) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = Array.isArray(keyboardKey) ? keyboardKey : [keyboardKey];
      const matched = keys.some(
        (k) => e.key === k || e.key.toLowerCase() === k.toLowerCase()
      );

      if (matched) {
        triggerAction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyboardKey, disabled, children]);

  return (
    <button
      className={`${styles.baseButton} ${className}`}
      onClick={triggerAction}
      disabled={disabled}
    >
      <span className={styles.labelContainer}>
        {children}
        <PopoutEffectComponent triggerKey={animTrigger} content={children} variant="default" />
      </span>
    </button>
  );
};