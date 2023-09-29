// import styles from './TopFilms.module.css';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchTopFilms } from "../../../store/slices/TopFilmsSlice/topFilmsSlice";

import Container from "../../Layouts/Container/Container";
import Slider from "../../Slider/Slider";
import AdvertisingBlock from "../../AdvertisingBlock/AdvertisingBlock";
import Title from "../../Title/Title";
import FilmsList from "../../FilmsList/FilmsList";
import FilmItem from "../../FilmItem/FilmItem";
import EmptySearchFilm from "../../EmptySearchFilm/EmptySearchFilm";
import Button from "../../Button/Button";

const TopFilms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { films, error, status } = useSelector((state) => state.topFilms);
  const topFilms = films.films ?? films;

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchTopFilms());
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
        <Title text="Топ фильмов"></Title>
        {status === "loading" && <h3>Идет загрузка...</h3>}
        {status === "rejected" && <h3>Загрузка не выполнена!</h3>}
        {error && <h3>Ошибка: {error}</h3>}
        {topFilms.length ? (
          <FilmsList>
            {topFilms.map((film) => (
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

export default TopFilms;
