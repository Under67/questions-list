import styles from './questionsPage.module.scss';
import QuestionContent from '../QuestionContent/QuestionContent';
import { SideBarFilters } from '@/widgets/SidebarFilters';

function QuestionsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <QuestionContent />
        </div>
        <div className={styles.right}>
          <SideBarFilters />
        </div>
      </div>
    </div>
  );
}

export default QuestionsPage;
