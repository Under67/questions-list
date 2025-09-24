import styles from './questionDetailsSkeleton.module.scss';

function QuestionDetailsSkeleton() {
  return (
    <div className={styles.wrapper}>
      {/* Кнопка навигации */}
      <div className={`${styles.navigation} ${styles.buttonSkeleton}`} />

      <div className={styles.container}>
        {/* Левая колонка: QuestionDescription */}
        <div className={styles.left}>
          <div className={`${styles.blockSkeleton} ${styles.descriptionSkeleton}`} />
          <div className={styles.blockSkeleton} />
          <div className={styles.blockSkeleton} />
        </div>

        {/* Правая колонка: QuestionInfo */}
        <div className={styles.right}>
          <div className={styles.blockSkeleton} />
          <div className={styles.blockSkeleton} />
          <div className={styles.blockSkeleton} />
        </div>
      </div>
    </div>
  );
}

export default QuestionDetailsSkeleton;
