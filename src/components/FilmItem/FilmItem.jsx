/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./FilmItem.module.css";

const FilmItem = ({ film }) => {
  console.log(film);
  return (
    <li className={styles["film-list__item"]}>
      <div className={styles["film-cart"]}>
        <div className={styles["film-cart__imgbox"]}>
          <img
            className={styles["film-cart__img"]}
            src={film.posterUrl}
            alt={film.nameRu ?? film.nameRu ?? film.nameOriginal}
          />
        </div>
        <div className={styles["film-cart__body"]}>
          <a href="#">
            <h2 className={styles["film-cart__title"]}>
              {film.nameRu ?? film.nameRu ?? film.nameOriginal}
            </h2>
          </a>
          <ul className={styles["film-cart__list"]}>
            <div className="film-cart__item">
              <span>Год выпуска: </span>
              {film.year}
            </div>
            <div className="film-cart__item">
              {" "}
              <span>Рейтинг Кинопоиска: </span>
              <span className={styles["film-cart__backlay"]}>
                {film.ratingKinopoisk}
              </span>
            </div>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default FilmItem;
