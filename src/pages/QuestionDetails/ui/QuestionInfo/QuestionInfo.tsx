import { Button, ScoreBadge } from '@/shared/ui';
import styles from './questionInfo.module.scss';

interface QuestionDescription {
  complexity: number;
  rate: number;
  questionSkills: { title: string; id: number }[];
  keywords: string[];
}

interface QuestionDescriptionProps {
  question: QuestionDescription;
}

function QuestionInfo({ question }: QuestionDescriptionProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.block}>
          <h4 className={styles.title}>Уровень:</h4>
          <div className={styles.info}>
            <ScoreBadge text="Сложность" score={question.complexity} />
            <ScoreBadge text="Рейтинг" score={question.rate} />
          </div>
        </div>
        <div className={styles.block}>
          <h4 className={styles.title}>Навыки:</h4>
          <div className={styles.info}>
            {question.questionSkills.map((skill) => (
              <Button key={skill.id} title={skill.title} />
            ))}
          </div>
        </div>
        <div className={styles.block}>
          <h4 className={styles.title}>Ключевые слова:</h4>
          <div className={styles.info}>
            {question.keywords.map((item, index) => (
              <p key={index} className={styles.text}>
                #{item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.author}>
        Автор: <span className={styles.text}>Евгений Крыжановский</span>
      </div>
    </>
  );
}

export default QuestionInfo;
