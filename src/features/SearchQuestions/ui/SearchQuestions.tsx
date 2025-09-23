import { Input } from '@/shared/ui';
import styles from './searchQuestions.module.scss';
import { magnifer } from '@/shared/assets';
import { useState, type ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '@/shared/hooks';

function SearchQuestions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('title') || '');
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const titleFromURL = searchParams.get('title') || '';
    if (titleFromURL !== value) {
      setValue(titleFromURL);
    }
  }, [searchParams.toString()]);

  useEffect(() => {
    const currentTitle = searchParams.get('title') || '';
    if (debouncedValue !== currentTitle) {
      const newParams = new URLSearchParams(searchParams.toString());
      if (debouncedValue) {
        newParams.set('title', debouncedValue);
        newParams.set('page', '1');
      } else {
        newParams.delete('title');
      }
      setSearchParams(newParams);
    }
  }, [debouncedValue]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <span>
        <img src={magnifer} alt="поиск" />
      </span>
      <Input
        type="text"
        onChange={onChange}
        value={value}
        placeHolder="Введите запрос..."
      />
    </div>
  );
}

export default SearchQuestions;
