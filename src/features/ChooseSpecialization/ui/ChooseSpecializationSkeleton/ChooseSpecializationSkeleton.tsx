// src/features/chooseSpecialization/ui/ChooseSpecializationSkeleton/ChooseSpecializationSkeleton.tsx
import { MoreDetailedButton } from '@/shared/ui';
import styles from './chooseSpecializationSkeleton.module.scss';

function ChooseSpecializationSkeleton() {
  // Пусть показываем 5 скелетонов кнопок
  const skeletonItems = Array.from({ length: 5 });

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Специализация</h4>
      <ul className={styles['list-items']}>
        {skeletonItems.map((_, index) => (
          <li className={styles.item} key={index}>
            <div className={styles.buttonSkeleton} />
          </li>
        ))}
      </ul>
      <MoreDetailedButton text="Посмотреть все" />
    </div>
  );
}

export default ChooseSpecializationSkeleton;
