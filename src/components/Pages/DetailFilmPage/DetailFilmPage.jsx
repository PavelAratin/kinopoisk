/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./DetailFilmPage.module.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetailFilm } from "../../../store/slices/detailFilmSlice/detailFilmSlice";
import Container from "../../Layouts/Container/Container";
import Button from "../../Button/Button";
import { addFavoriteFilmActions } from "../../../store/slices/toggleFavoteFilmsSlice/toggleFavoriteFilmsSlice";

const DetailFilmPage = () => {
  const [isFavoriteFilm, setIsFavoriteFilm] = useState(false);
  const singleFilm = useSelector((store) => store.detailFilm.films);
  const storefavoriteFilms = useSelector((store) => store.favoriteFilms);
  // setIsFavoriteFilm(
  //   store.some((item) => item.kinopoiskId === singleFilm.kinopoiskId)
  // );
  // console.log(singleFilm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const addToFavoriteHandler = () => {
    dispatch(addFavoriteFilmActions(singleFilm));
  };

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchDetailFilm(id));
    setIsFavoriteFilm(
      storefavoriteFilms.some(
        (item) => item.kinopoiskId === singleFilm.kinopoiskId
      )
    );
  }, [dispatch, id, isFavoriteFilm, storefavoriteFilms]);
  return (
    <React.Fragment>
      <section className={styles.detail}>
        <Container>
          <Button
            text={"Назад"}
            goBack={goBack}
            title="Переместиться на шаг назад"></Button>
        </Container>
        <Container ContainerClass={styles.detail__container}>
          <div className={styles.detail__left}>
            <div className={styles.detail__imgbox}>
              <img
                className={styles.detail__img}
                src={singleFilm.posterUrl}
                alt={singleFilm.nameRu ?? singleFilm.nameEn}
              />
            </div>
          </div>
          <div className={styles.detail__right}>
            <div className={styles.title}>
              <h1 className={styles.detail__title}>{singleFilm.nameRu}</h1>
              <div className={styles.detail__year}>
                Год выхода: {singleFilm.year}
              </div>
            </div>
            {singleFilm.description && (
              <p className={styles.detail__description}>
                {singleFilm.description}
              </p>
            )}
            {singleFilm.genres && (
              <div className={styles.genres}>
                <h3 className={styles.genres__title}>Жанр: </h3>
                <ul>
                  {singleFilm.genres.map((genre, index) => (
                    <li key={index}>{genre.genre}</li>
                  ))}
                </ul>
              </div>
            )}
            {singleFilm.ratingKinopoisk && (
              <p className={styles.rating}>
                Рейтинг кинопоиска: <span>{singleFilm.ratingKinopoisk}</span>
              </p>
            )}
            {singleFilm.ratingImdb && (
              <p className={styles.rating}>
                Рейтинг IMDB: <span>{singleFilm.ratingImdb}</span>
              </p>
            )}
            {singleFilm.countries && (
              <div className={styles.genres}>
                <h3 className={styles.genres__title}>Страна производства: </h3>
                <ul>
                  {singleFilm.countries.map((country, index) => (
                    <li key={index}>{country.country}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className={styles.favorites}
              onClick={addToFavoriteHandler}
              title="Добавить в избранное"
              disabled={isFavoriteFilm}>
              <svg viewBox="0 0 128 128" width="40px" height="40px">
                <path
                  fill={`${isFavoriteFilm ? "#ff6347" : "#ffffff"}`}
                  d="M23.67,114.59c1.74,0.78,3.57,1.17,5.37,1.17c3.1,0,6.14-1.13,8.59-3.31l21.71-19.3c2.65-2.36,6.65-2.36,9.3,0l21.71,19.3 c3.88,3.45,9.23,4.27,13.96,2.14c4.73-2.13,7.67-6.67,7.67-11.86V24c0-7.17-5.83-13-13-13H29c-7.17,0-13,5.83-13,13v78.73 C16,107.92,18.94,112.47,23.67,114.59z M22,24c0-3.86,3.14-7,7-7h70c3.86,0,7,3.14,7,7v78.73c0,2.84-1.54,5.22-4.13,6.39 c-2.59,1.16-5.4,0.73-7.52-1.15l-21.71-19.3c-2.46-2.19-5.55-3.28-8.64-3.28s-6.17,1.09-8.64,3.28l-21.71,19.3 c-2.12,1.88-4.93,2.32-7.52,1.15c-2.59-1.16-4.13-3.55-4.13-6.39V24z"
                />
              </svg>
            </button>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default DetailFilmPage;
