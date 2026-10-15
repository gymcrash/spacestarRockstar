import React from 'react';
import styles from './QuestionComponent.module.scss';

export interface QuestionComponentProps {
  questionText: string;
  status?: 'idle' | 'correct' | 'incorrect';
}

export const QuestionComponent: React.FC<QuestionComponentProps> = ({
  questionText,
  status = 'idle',
}) => {
  let containerStatusClass = '';
  if (status === 'correct') containerStatusClass = styles.correct;
  if (status === 'incorrect') containerStatusClass = styles.incorrect;

  return (
    <div className={`${styles.questionContainer} ${containerStatusClass}`}>
      <div className={styles.label}>Question</div>
      <div className={styles.questionText}>{questionText}</div>
    </div>
  );
};