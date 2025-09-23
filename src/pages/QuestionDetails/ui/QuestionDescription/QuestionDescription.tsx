import styles from './questionDescription.module.scss';
import { questionImg } from '@/shared/assets';

interface QuestionDescription {
  img?: string;
  title?: string;
  description?: string;
  shortAnswer: string;
  longAnswer: string;
}

interface QuestionDescriptionProps {
  question: QuestionDescription;
}

function QuestionDescription({ question }: QuestionDescriptionProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.description} ${styles.block}`}>
        <img
          src={question.img ? question.img : questionImg}
          alt="картинка вопроса"
        />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{question.title}</h1>
          <p className={styles.text}>{question.description}</p>
        </div>
      </div>
      <div className={styles.block}>
        <h3 className={styles.title}>Крайткий ответ</h3>
        <div
          className={styles.shortAnswer}
          dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
        />
      </div>
      <div className={styles.block}>
        <h3 className={styles.title}>Развёрнутый ответ</h3>
        <div
          className={styles.shortAnswer}
          dangerouslySetInnerHTML={{ __html: question.longAnswer }}
        />
      </div>
    </div>
  );
}

export default QuestionDescription;
