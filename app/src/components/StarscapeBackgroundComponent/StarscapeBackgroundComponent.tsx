import React from "react";
import styles from "./StarscapeBackgroundComponent.module.scss";

export const StarscapeBackgroundComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.halftone}></div>
      <div className={styles.halftone2}></div>
      <div className={styles.halftone3}></div>
      <div className={styles.hyperspace2}></div>
      <div className={styles.hyperspace1}></div>
    </div>
  );
};
