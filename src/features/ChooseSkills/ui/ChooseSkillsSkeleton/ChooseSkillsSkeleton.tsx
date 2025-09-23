import { MoreDetailedButton } from '@/shared/ui';
import styles from './chooseSkillsSkeleton.module.scss';

function ChooseSkillsSkeleton() {
  const skeletonItems = Array.from({ length: 5 });

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Навыки</h4>
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

export default ChooseSkillsSkeleton;
