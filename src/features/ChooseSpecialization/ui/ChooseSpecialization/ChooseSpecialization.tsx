import { Button, MoreDetailedButton } from '@/shared/ui';
import styles from './chooseSpecialization.module.scss';
import { useGetSpecializationQuery } from '@/entities/specialization';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ChooseSpecializationSkeleton from '../ChooseSpecializationSkeleton/ChooseSpecializationSkeleton';

function ChooseSpecialization() {
  const [searchParams, setSearchParams] = useSearchParams();
  const specializationId = searchParams.get('specialization') || '11';
  const [limit, setLimit] = useState(5);
  const {
    data: specializations,
    error,
    isLoading,
  } = useGetSpecializationQuery({ limit });
  useEffect(() => {
    if (specializationId) {
      localStorage.setItem('specializationId', specializationId);
    }
  }, [specializationId]);

  if (error) return <p>Ошибка при загрузке</p>;
  if (isLoading || !specializations) return <ChooseSpecializationSkeleton />;

  const handleMoreDetailed = () => {
    setLimit(limit === specializations.total ? 5 : specializations.total);
  };

  const handleSelectSpecialization = (id: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete('skills');
    newParams.set('specialization', String(id));
    setSearchParams(newParams);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Специализация</h4>
      <ul className={styles['list-items']}>
        {specializations.data.map((item) => (
          <li className={styles.item} key={item.id}>
            <Button
              title={item.title}
              onClick={() => handleSelectSpecialization(item.id)}
              isActive={Number(specializationId || 0) === item.id}
            />
          </li>
        ))}
      </ul>
      <MoreDetailedButton
        onClick={handleMoreDetailed}
        text={limit === specializations.total ? 'Скрыть' : 'Посмотреть все'}
        className={styles.moreDetail}
      />
    </div>
  );
}

export default ChooseSpecialization;
