import type { ChangeEvent } from 'react';
import styles from './input.module.scss';

interface InputProps {
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  type: string;
  value: string;
}

function Input({ className, onChange, placeHolder, type, value }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
      className={`${styles.input}${className ? className : ''}`}
      value={value}
    />
  );
}

export default Input;
