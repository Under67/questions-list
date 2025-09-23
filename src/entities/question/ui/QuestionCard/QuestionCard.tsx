import { useRef, type MouseEvent } from 'react';
import type { TQuestion } from '../../model/type';
import styles from './questionCard.module.scss';
import { useToggle } from '@/shared/hooks';
import { arrowUp } from '@/shared/assets';
import { arrowRight } from '@/shared/assets';
import { ScoreBadge } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { MoreDetailedButton } from '@/shared/ui';

export interface QuestionCardProps {
  question: TQuestion;
}

function QuestionCard({ question }: QuestionCardProps) {
  const [isToggled, toggle] = useToggle(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleNavigation = (e: MouseEvent) => {
    e.preventDefault();
    navigate(`/questions/${question.id}`);
  };
  return (
    <li className={styles.item}>
      <div
        className={`${styles.container} ${isToggled ? styles.toggled : ''}`}
        onClick={toggle}
      >
        <div className={styles.titleContainer}>
          <span className={styles.bullet} />
          <h3 className={styles.title}>{question.title}</h3>
        </div>

        <img
          src={arrowUp}
          alt="toggle arrow"
          className={`${styles.arrow} ${isToggled ? styles.rotated : ''}`}
        />
      </div>
      <div
        ref={contentRef}
        className={styles.content}
        style={{
          height: isToggled ? contentRef.current?.scrollHeight : 0,
          opacity: isToggled ? 1 : 0,
        }}
      >
        <div className={styles.score}>
          <ScoreBadge score={question.rate} text={'Рейтинг'} />
          <ScoreBadge score={question.complexity} text={'Сложность'} />
        </div>
        <div
          className={styles.shortAnswer}
          dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
        />
        <MoreDetailedButton
          onClick={handleNavigation}
          text={'Подробнее'}
          img={arrowRight}
          className={styles.navigation}
        />
      </div>
    </li>
  );
}

export default QuestionCard;
