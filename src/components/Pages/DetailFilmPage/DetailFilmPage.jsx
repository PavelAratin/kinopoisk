import styles from "./DetailFilmPage.module.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailFilm } from "../../../store/slices/detailFilmSlice/detailFilmSlice";
import Container from "../../Layouts/Container/Container";

const DetailFilmPage = () => {
  const { detailFilm } = useSelector((store) => store);
  const singleFilm = detailFilm.films;
  console.log(singleFilm);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailFilm(id));
  }, [dispatch, id]);
  return (
    <React.Fragment>
      <section className={styles.detail}>
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
                  {singleFilm.genres.map((genre) => (
                    <li>{genre.genre}</li>
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
                  {singleFilm.countries.map((country) => (
                    <li>{country.country}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default DetailFilmPage;