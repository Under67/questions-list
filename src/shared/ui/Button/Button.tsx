import type { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: string;
  isActive?: boolean;
  title: string;
  descriptionImg?: string;
}

const Button = ({
  icon,
  isActive = false,
  title,
  descriptionImg,
  ...props
}: ButtonProps) => {
  const className = `${styles.btn} ${isActive ? styles['btn-active'] : ''}`;
  return (
    <button className={className} {...props}>
      {icon && (
        <img src={icon} alt={descriptionImg} className={styles['btn-icon']} />
      )}
      <p className={styles['btn-text']}>{title}</p>
    </button>
  );
};

export default Button;
