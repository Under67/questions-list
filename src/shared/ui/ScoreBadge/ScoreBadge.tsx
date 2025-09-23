import styles from './scoreBadge.module.scss';

interface ScoreBadgeProps {
  text: string;
  score: number;
}

function ScoreBadge({ text, score }: ScoreBadgeProps) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{text}:&nbsp;</span>
      <span className={styles.value}>{score}</span>
    </div>
  );
}

export default ScoreBadge;
