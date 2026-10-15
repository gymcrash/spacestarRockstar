import React, { useState, useEffect } from 'react';
import styles from './BaseButtonComponent.module.scss';

export interface BaseButtonComponentProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  keyboardKey?: string | string[]; // Can accept single key or array of keys (e.g. ['Escape', 'c'])
}

export const BaseButtonComponent: React.FC<BaseButtonComponentProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  keyboardKey,
}) => {
  const [animKey, setAnimKey] = useState<number>(0);

  const triggerAction = () => {
    if (disabled) return;
    setAnimKey((prev) => prev + 1);
    onClick();
  };

  useEffect(() => {
    if (!keyboardKey) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = Array.isArray(keyboardKey) ? keyboardKey : [keyboardKey];
      
      // Match key (case-insensitive for letters like 'c')
      const matched = keys.some(
        (k) => e.key === k || e.key.toLowerCase() === k.toLowerCase()
      );

      if (matched) {
        // Prevent default browser behavior for keys like Enter, Backspace, Space, etc. if needed
        triggerAction();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyboardKey, disabled, onClick]);

  return (
    <button
      className={`${styles.baseButton} ${className}`}
      onClick={triggerAction}
      disabled={disabled}
    >
      <span className={styles.labelContainer}>{children}</span>
      <span key={animKey} className={styles.popCopy} aria-hidden="true">
        {children}
      </span>
    </button>
  );
};