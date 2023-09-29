// import styles from './PremierFilms.module.css';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPremierFilms } from "../../../store/slices/premierFilmsSlice/premierFilmsSlice";

import Container from "../../Layouts/Container/Container";
import Slider from "../../Slider/Slider";
import AdvertisingBlock from "../../AdvertisingBlock/AdvertisingBlock";
import Title from "../../Title/Title";
import FilmsList from "../../FilmsList/FilmsList";
import FilmItem from "../../FilmItem/FilmItem";
import EmptySearchFilm from "../../EmptySearchFilm/EmptySearchFilm";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";

const PremierFilms = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, films, status } = useSelector((state) => state.premierFilms);
  const premierFilms = films.items ?? films;

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchPremierFilms());
  }, [dispatch, error]);
  return (
    <React.Fragment>
      <Container>
        <Button
          text={"Назад"}
          goBack={goBack}
          title="Переместиться на шаг назад"></Button>
        <Slider></Slider>
        <AdvertisingBlock></AdvertisingBlock>
        <Title text="Премьеры фильмов"></Title>
        {status === "loading" && <h3>Идет загрузка...</h3>}
        {status === "rejected" && <h3>Загрузка не выполнена!</h3>}
        {error && <h3>Ошибка: {error}</h3>}
        {premierFilms.length ? (
          <FilmsList>
            {premierFilms.map((film) => (
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

export default PremierFilms;
