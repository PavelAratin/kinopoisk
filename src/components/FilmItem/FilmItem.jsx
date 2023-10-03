/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

import styles from "./FilmItem.module.css";
import { useDispatch } from "react-redux";
import { removeFavoriteFilmActions } from "../../store/slices/toggleFavoteFilmsSlice/toggleFavoriteFilmsSlice";

const FilmItem = ({ film, isFavorites }) => {
  const dispatch = useDispatch();
  const removeFavoriteHandler = () => {
    dispatch(removeFavoriteFilmActions(film));
  };
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
        {isFavorites && (
          <button
            className={styles.favorites}
            title="Удалить из избранного"
            onClick={removeFavoriteHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="40px"
              height="40px">
              <path
                fill="#ffffff"
                d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 16.140625 6 C 14.303372 6 12.582924 6.9194511 11.564453 8.4492188 L 9.1972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 9.7636719 15 A 1.50015 1.50015 0 0 0 10.208984 15 L 36.330078 15 L 34.757812 29.679688 A 1.50015 1.50015 0 1 0 37.740234 29.998047 L 39.347656 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 38.802734 12 L 36.435547 8.4492188 C 35.416254 6.9202798 33.696001 6 31.859375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 16.140625 9 L 31.859375 9 C 32.696749 9 33.474746 9.4162203 33.939453 10.113281 L 35.197266 12 L 12.802734 12 L 14.060547 10.113281 A 1.50015 1.50015 0 0 0 14.0625 10.111328 C 14.525982 9.4151428 15.301878 9 16.140625 9 z M 10.572266 17.650391 A 1.50015 1.50015 0 0 0 9.1171875 19.330078 L 11.125 38.085938 C 11.423352 40.868277 13.795836 43 16.59375 43 L 31.404297 43 C 34.202211 43 36.574695 40.868277 36.873047 38.085938 L 37.246094 34.605469 A 1.50015 1.50015 0 1 0 34.263672 34.287109 L 33.890625 37.765625 C 33.752977 39.049286 32.694383 40 31.404297 40 L 16.59375 40 C 15.303664 40 14.247023 39.049286 14.109375 37.765625 L 12.099609 19.011719 A 1.50015 1.50015 0 0 0 10.572266 17.650391 z"
              />
            </svg>
          </button>
        )}
      </div>
    </li>
  );
};

export default FilmItem;
