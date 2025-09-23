import styles from './chooseRate.module.scss';
import { Button } from '@/shared/ui';
import { useSearchParams } from 'react-router-dom';

const rateData = [1, 2, 3, 4, 5];

function ChooseRate() {
  const [searchParams, setSearchParams] = useSearchParams();
  const rateParam = searchParams.get('rate') || '';
  const rate = rateParam ? rateParam.split(',').map(Number) : [];

  const handleRateClick = (value: number) => {
    const newRate = rate.includes(value)
      ? rate.filter((v) => v !== value)
      : [...rate, value];

    const newParams = new URLSearchParams(searchParams.toString());
    if (newRate.length > 0) {
      newParams.set('rate', newRate.join(','));
    } else {
      newParams.delete('rate');
    }
    setSearchParams(newParams);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Рейтинг вопроса</h4>
      <ul className={styles['list-items']}>
        {rateData.map((item) => (
          <li className={styles.item} key={item}>
            <Button
              title={String(item)}
              onClick={() => handleRateClick(item)}
              isActive={rate.includes(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseRate;
