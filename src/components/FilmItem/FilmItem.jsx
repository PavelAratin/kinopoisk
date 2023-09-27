/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import styles from "./FilmItem.module.css";

const FilmItem = ({ film }) => {
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
          {film.kinopoiskId ? (
            <Link to={`/films/${film.kinopoiskId}`}>
              <h2 className={styles["film-cart__title"]}>
                {film.nameRu ?? film.nameRu ?? film.nameOriginal}
              </h2>
            </Link>
          ) : (
            <Link to={`/films/${film.filmId}`}>
              <h2 className={styles["film-cart__title"]}>
                {film.nameRu ?? film.nameRu ?? film.nameOriginal}
              </h2>
            </Link>
          )}
          <ul className={styles["film-cart__list"]}>
            <div className="film-cart__item">
              <span>Год выпуска: </span>
              {film.year}
            </div>
            {film.ratingKinopoisk ?? film.rating ? (
              <div className="film-cart__item">
                <span>Рейтинг Кинопоиска: </span>
                <span className={styles["film-cart__backlay"]}>
                  {film.ratingKinopoisk ?? film.rating}
                </span>
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default FilmItem;
