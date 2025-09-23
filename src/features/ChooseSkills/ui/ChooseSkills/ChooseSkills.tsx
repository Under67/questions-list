import { Button } from '@/shared/ui';
import styles from './chooseSkills.module.scss';
import { MoreDetailedButton } from '@/shared/ui';
import { useState } from 'react';
import { useGetSkillQuery } from '@/entities/skill';
import { useSearchParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query/react';
import ChooseSkillsSkeleton from '../ChooseSkillsSkeleton/ChooseSkillsSkeleton';

function ChooseSkills() {
  const [searchParams, setSearchParams] = useSearchParams();
  const skillsParam = searchParams.get('skills') || '';
  const specializationParam = searchParams.get('specialization') || '11';

  const specializations = specializationParam
    ? specializationParam.split(',').map(Number)
    : [];
  const selectedSkills = skillsParam ? skillsParam.split(',').map(Number) : [];
  const [limit, setLimit] = useState(5);

  const {
    data: skillsData,
    error,
    isLoading,
  } = useGetSkillQuery(
    specializations.length > 0 ? { limit, specializations } : skipToken,
  );

  if (error) return <p>Ошибка при загрузке</p>;
  if (isLoading || !skillsData) return <ChooseSkillsSkeleton />;

  const handleMoreDetailed = () => {
    setLimit(limit === skillsData.total ? 5 : skillsData.total);
  };

  const handleSkillClick = (id: number) => {
    let newSkills: number[];
    if (selectedSkills.includes(id)) {
      newSkills = selectedSkills.filter((s) => s !== id);
    } else {
      newSkills = [...selectedSkills, id];
    }

    const newParams = new URLSearchParams(searchParams.toString());
    if (newSkills.length === 0) {
      newParams.delete('skills');
    } else {
      newParams.set('skills', newSkills.join(','));
    }

    setSearchParams(newParams);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Навыки</h4>
      <ul className={styles['list-items']}>
        {skillsData.data.map((item) => (
          <li className={styles.item} key={item.id}>
            <Button
              title={item.title}
              onClick={() => handleSkillClick(item.id)}
              isActive={selectedSkills.includes(item.id)}
            />
          </li>
        ))}
      </ul>
      <MoreDetailedButton
        onClick={handleMoreDetailed}
        text={limit === skillsData.total ? 'Скрыть' : 'Посмотреть все'}
        className={styles.moreDetail}
      />
    </div>
  );
}

export default ChooseSkills;
