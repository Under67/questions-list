import { useNavigate, useParams } from 'react-router-dom';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import styles from './questionDetails.module.scss';
import { useGetQuestionByIdQuery } from '@/entities/question';
import QuestionInfo from '../QuestionInfo/QuestionInfo';
import { MoreDetailedButton } from '@/shared/ui';
import { arrowLeft } from '@/shared/assets';

function QuestionDetails() {
  const { id } = useParams();
  const {
    data: question,
    error,
    isLoading,
  } = useGetQuestionByIdQuery(Number(id));
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <div className={styles.wrapper}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.wrapper}>Ошибка при загрузке вопроса</div>;
  }

  if (!question) {
    return <div className={styles.wrapper}>Вопрос не найден</div>;
  }

  return (
    <div className={styles.wrapper}>
      <MoreDetailedButton
        text="Поиск"
        onClick={handleNavigation}
        className={styles.navigation}
        fontSize={styles.largeText}
        imgLeft={arrowLeft}
      />
      <div className={styles.container}>
        <div className={styles.left}>
          <QuestionDescription question={question} />
        </div>
        <div className={styles.right}>
          <QuestionInfo question={question} />
        </div>
      </div>
    </div>
  );
}

export default QuestionDetails;
