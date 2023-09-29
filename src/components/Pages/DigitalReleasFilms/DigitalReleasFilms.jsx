// import styles from "./DigitalReleasFilms.module.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReleasesFilms } from "../../../store/slices/releasesFilmsSlice/releasesFilmsSlice";
import Container from "../../Layouts/Container/Container";
import Slider from "../../Slider/Slider";
import AdvertisingBlock from "../../AdvertisingBlock/AdvertisingBlock";
import Title from "../../Title/Title";
import FilmsList from "../../FilmsList/FilmsList";
import FilmItem from "../../FilmItem/FilmItem";
import EmptySearchFilm from "../../EmptySearchFilm/EmptySearchFilm";

const DigitalReleasFilms = () => {
  const dispatch = useDispatch();
  const { error, status, films } = useSelector((state) => state.releasesFilms);
  const digitalreleaseFilm = films.releases ?? films;
  useEffect(() => {
    dispatch(fetchReleasesFilms());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container>
        <Slider></Slider>
        <AdvertisingBlock></AdvertisingBlock>
        <Title text="Цифровые релизы"></Title>
        {status === "loading" && <h3>Идет загрузка...</h3>}
        {status === "rejected" && <h3>Загрузка не выполнена!</h3>}
        {error && <h3>Ошибка: {error}</h3>}
        {digitalreleaseFilm.length ? (
          <FilmsList>
            {digitalreleaseFilm.map((film) => (
              <FilmItem
                key={film.kinopoiskId ?? film.filmId}
                film={film}></FilmItem>
            ))}
          </FilmsList>
        ) : (
          <EmptySearchFilm></EmptySearchFilm>
        )}
      </Container>
    </React.Fragment>
  );
};

export default DigitalReleasFilms;
