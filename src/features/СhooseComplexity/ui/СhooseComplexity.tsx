import { Button } from '@/shared/ui';
import styles from './chooseComplexity.module.scss';
import { useSearchParams } from 'react-router-dom';

const complexityData = [
  { id: 1, value: [1, 2, 3], title: '1-3' },
  { id: 2, value: [4, 5, 6], title: '4-6' },
  { id: 3, value: [7, 8], title: '7-8' },
  { id: 4, value: [9, 10], title: '9-10' },
];

function ChooseComplexity() {
  const [searchParams, setSearchParams] = useSearchParams();
  const complexityParam = searchParams.get('complexity') || '';
  const complexity = complexityParam
    ? complexityParam.split(',').map(Number)
    : [];

  const handleComplexityClick = (itemValue: number[]) => {
    const isSelected = itemValue.some((v) => complexity.includes(v));
    const newComplexity = isSelected
      ? complexity.filter((v) => !itemValue.includes(v))
      : [...complexity, ...itemValue];

    const newParams = new URLSearchParams(searchParams.toString());
    if (newComplexity.length > 0) {
      newParams.set('complexity', newComplexity.join(','));
    } else {
      newParams.delete('complexity');
    }

    setSearchParams(newParams);
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Сложность вопросов</h4>
      <ul className={styles['list-items']}>
        {complexityData.map((item) => (
          <li className={styles.item} key={item.id}>
            <Button
              title={item.title}
              onClick={() => handleComplexityClick(item.value)}
              isActive={item.value.some((v) => complexity.includes(v))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChooseComplexity;
