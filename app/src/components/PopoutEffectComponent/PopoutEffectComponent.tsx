import React, { useState, useEffect, useRef } from 'react';
import styles from './PopoutEffectComponent.module.scss';

export interface PopoutEffectComponentProps {
  triggerKey: number | string | null;
  content: React.ReactNode;
  variant?: 'default' | 'addition' | 'deletion';
}

interface ActivePopout {
  id: number;
  content: React.ReactNode;
  variant: 'default' | 'addition' | 'deletion';
}

const MAX_ACTIVE_POPOUTS = 3;

export const PopoutEffectComponent: React.FC<PopoutEffectComponentProps> = ({
  triggerKey,
  content,
  variant = 'default',
}) => {
  const [popouts, setPopouts] = useState<ActivePopout[]>([]);
  const nextIdRef = useRef<number>(0);

  useEffect(() => {
    if (triggerKey === null || triggerKey === undefined) return;

    const id = nextIdRef.current++;
    const newItem: ActivePopout = { id, content, variant };

    setPopouts((prev) => {
      // Append new item and strictly cap the list at MAX_ACTIVE_POPOUTS (3)
      const updated = [...prev, newItem];
      if (updated.length > MAX_ACTIVE_POPOUTS) {
        return updated.slice(updated.length - MAX_ACTIVE_POPOUTS);
      }
      return updated;
    });

    // Automatically remove this specific popout after 500ms animation finishes
    const timer = setTimeout(() => {
      setPopouts((prev) => prev.filter((item) => item.id !== id));
    }, 500);

    return () => clearTimeout(timer);
  }, [triggerKey]);

  if (popouts.length === 0) return null;

  return (
    <>
      {popouts.map((item) => {
        let variantClass = styles.defaultVariant;
        if (item.variant === 'addition') variantClass = styles.addition;
        if (item.variant === 'deletion') variantClass = styles.deletion;

        return (
          <span
            key={item.id}
            className={`${styles.popoutNode} ${variantClass}`}
            aria-hidden="true"
          >
            {item.content}
          </span>
        );
      })}
    </>
  );
};