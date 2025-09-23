import { QuestionCard } from '@/entities/question';
import styles from './questionList.module.scss';
import type { TQuestion } from '@/entities/question';

interface QuestionListProps {
  questions: TQuestion[];
}

function QuestionList({ questions }: QuestionListProps) {
  return (
    <ul className={styles.list}>
      {questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
      ))}
    </ul>
  );
}

export default QuestionList;
