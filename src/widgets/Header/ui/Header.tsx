import styles from './Header.module.scss';
import { logo } from '@/shared/assets';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <NavLink
            to="/questions"
            className={({ isActive }) =>
              `${styles.header__link} ${isActive ? styles['header__link--disabled'] : ''}`
            }
            end={true}
          >
            <img src={logo} alt="Логотип" className={styles.header__logo} />
          </NavLink>
          <nav className={styles.header__nav}>
            <NavLink
              to="/questions"
              className={({ isActive }) =>
                `${styles.header__link} ${isActive ? styles['header__link--disabled'] : ''}`
              }
              end={true}
            >
              База Вопросов
            </NavLink>

            <NavLink
              to="/trainer"
              className={({ isActive }) =>
                `${styles.header__link} ${isActive ? styles['header__link--disabled'] : ''}`
              }
            >
              Тренажер
            </NavLink>
          </nav>
        </div>
        <div className={styles.header__right}>
          <button
            className={`${styles.header__button} ${styles['header__button-login']}`}
            disabled={false} // оставляем как обычная кнопка
          >
            Вход
          </button>
          <button
            className={`${styles.header__button} ${styles['header__button-registration']}`}
          >
            Регистрация
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
