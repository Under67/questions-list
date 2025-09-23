import styles from './questionCardSkeleton.module.scss';

function QuestionCardSkeleton() {
  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <div className={`${styles.title} ${styles.skeleton}`}></div>
        <div className={`${styles.arrow} ${styles.skeleton}`}></div>
      </div>
    </li>
  );
}

export default QuestionCardSkeleton;
