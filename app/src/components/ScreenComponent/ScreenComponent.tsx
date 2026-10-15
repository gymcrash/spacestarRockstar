import React, { useEffect, useRef, useState } from 'react';
import { PopoutEffectComponent } from '../PopoutEffectComponent/PopoutEffectComponent';
import styles from './ScreenComponent.module.scss';

export interface ScreenComponentProps {
  value: string;
}

interface PopoutConfig {
  key: number;
  content: string;
  variant: 'addition' | 'deletion';
}

export const ScreenComponent: React.FC<ScreenComponentProps> = ({ value }) => {
  const [popoutConfig, setPopoutConfig] = useState<PopoutConfig | null>(null);
  const prevValueRef = useRef<string>(value);

  useEffect(() => {
    const prevValue = prevValueRef.current;

    if (value.length === 0 && prevValue.length > 0) {
      triggerPopout(prevValue, 'deletion');
    } else if (value.length > prevValue.length) {
      const addedChar = value.slice(-1);
      triggerPopout(addedChar, 'addition');
    } else if (value.length < prevValue.length) {
      const removedChar = prevValue.slice(-1);
      triggerPopout(removedChar, 'deletion');
    }

    prevValueRef.current = value;
  }, [value]);

  const triggerPopout = (content: string, variant: 'addition' | 'deletion') => {
    setPopoutConfig({
      key: Date.now(),
      content,
      variant,
    });
  };

  return (
    <div className={styles.calculatorScreen}>
      <div className={styles.screenDisplay}>
        <div className={styles.textWrapper}>
          {value || <span className={styles.placeholder}>0</span>}
          <PopoutEffectComponent
            triggerKey={popoutConfig?.key ?? null}
            content={popoutConfig?.content ?? ''}
            variant={popoutConfig?.variant}
          />
        </div>
      </div>
    </div>
  );
};