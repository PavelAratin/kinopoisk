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
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import Error from "../../Error/Error";

const DigitalReleasFilms = () => {
  const { error, status, films } = useSelector((state) => state.releasesFilms);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const digitalreleaseFilm = films.releases ?? films;
  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchReleasesFilms());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container>
        <Button
          text={"Назад"}
          goBack={goBack}
          title="Переместиться на шаг назад"></Button>
        <Slider></Slider>
        <AdvertisingBlock></AdvertisingBlock>
        <Title text="Цифровые релизы"></Title>
        <Error error={error} status={status}></Error>
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
