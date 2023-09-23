/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">
            Топ фильмов
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">
            Кинопремьеры
          </a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">
            Цифровые релизы
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
