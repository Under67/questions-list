import { useEffect } from 'react';
import {
  QuestionCardSkeleton,
  useGetQuestionsQuery,
} from '@/entities/question';
import styles from './QuestionContent.module.scss';
import QuestionList from '../QuestionList/QuestionList';
import { PaginationQuestions } from '@/features/PaginationQuestions';
import { useSearchParams } from 'react-router-dom';
import { useGetSpecializationQuery } from '@/entities/specialization';

function QuestionContent() {
  const [searchParams, setSearchParams] = useSearchParams();

  let defaultSpecialization = Number(localStorage.getItem('specializationId'));
  if (!defaultSpecialization) {
    defaultSpecialization = 11;
    localStorage.setItem('specializationId', String(defaultSpecialization));
  }

  useEffect(() => {
    let needUpdate = false;
    const newParams = new URLSearchParams(searchParams.toString());

    if (!searchParams.get('page')) {
      newParams.set('page', '1');
      needUpdate = true;
    }
    if (!searchParams.get('status')) {
      newParams.set('status', 'all');
      needUpdate = true;
    }
    if (!searchParams.get('specialization')) {
      newParams.set('specialization', String(defaultSpecialization));
      needUpdate = true;
    }

    if (needUpdate) {
      setSearchParams(newParams);
    }
  }, [searchParams, setSearchParams, defaultSpecialization]);

  const page = Number(searchParams.get('page') || '1');
  const title = searchParams.get('title') || '';
  const specialization = Number(
    searchParams.get('specialization') || defaultSpecialization,
  );

  const skillsParam = searchParams.get('skills');
  const skills = skillsParam ? skillsParam.split(',') : undefined;

  const complexityParam = searchParams.get('complexity');
  const complexity = complexityParam
    ? complexityParam.split(',').map(Number)
    : undefined;

  const rateParam = searchParams.get('rate');
  const rate = rateParam ? rateParam.split(',').map(Number) : undefined;

  const { data: specializations } = useGetSpecializationQuery({});

  const titleSpecializations =
    specializations &&
    specializations.data.find((item) => item.id === specialization);

  const {
    data: questions,
    error,
    isLoading,
  } = useGetQuestionsQuery({
    page,
    title,
    specialization,
    skills,
    complexity,
    rate,
  });

  const handleResetFilters = () => {
    const newParams = new URLSearchParams();
    newParams.set('page', '1');
    newParams.set('title', '');
    newParams.set('specialization', String(defaultSpecialization));
    newParams.set('status', 'all');
    newParams.delete('skills');
    newParams.delete('complexity');
    newParams.delete('rate');
    setSearchParams(newParams);
  };

  if (isLoading) {
    return (
      <ul className={styles.list}>
        {Array.from({ length: 10 }).map((_, i) => (
          <QuestionCardSkeleton key={i} />
        ))}
      </ul>
    );
  }

  if (error) return <p>Ошибка при загрузке</p>;
  if (!questions) return null;

  return (
    <>
      <h1 className={styles.title}>Вопросы {titleSpecializations?.title}</h1>
      {questions.data.length ? (
        <>
          <QuestionList questions={questions.data} />
          <PaginationQuestions
            total={questions.total}
            limit={questions.limit}
          />
        </>
      ) : (
        <>
          <div>
            К сожалению, по запросу {title && `"${title}" `}ничего не найдено.
            Попробуйте изменить запрос или воспользуйтесь нашими категориями
          </div>
          <button
            className={styles['reset-button']}
            onClick={handleResetFilters}
          >
            Cбросить фильтр
          </button>
        </>
      )}
    </>
  );
}

export default QuestionContent;
