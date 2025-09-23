import type { MouseEvent } from 'react';
import styles from './moreDetailedButton.module.scss';

interface MoreDetailedButtonProps {
  text: string;
  imgLeft?: string;
  img?: string;
  onClick?: (e: MouseEvent) => void;
  className?: string;
  fontSize?: string;
}

function MoreDetailedButton({
  text,
  img,
  onClick,
  className,
  imgLeft,
  fontSize,
}: MoreDetailedButtonProps) {
  return (
    <button
      className={`${styles.container} ${className ? className : ''}`}
      onClick={onClick}
    >
      {imgLeft && <img src={imgLeft} alt={text} />}
      <span className={`${styles.text} ${fontSize ? fontSize : ''}`}>
        {text}
      </span>
      {img && <img src={img} alt={text} />}
    </button>
  );
}

export default MoreDetailedButton;
