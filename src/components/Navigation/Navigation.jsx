/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/top">
            Топ фильмов
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/premiers">
            Кинопремьеры
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link className={styles.nav__link} to="/digitalRelease">
            Цифровые релизы
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
