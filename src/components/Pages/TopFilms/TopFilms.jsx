// import styles from './TopFilms.module.css';

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTopFilms } from "../../../store/slices/TopFilmsSlice/topFilmsSlice";

import Container from "../../Layouts/Container/Container";
import Slider from "../../Slider/Slider";
import AdvertisingBlock from "../../AdvertisingBlock/AdvertisingBlock";
import Title from "../../Title/Title";
import FilmsList from "../../FilmsList/FilmsList";
import FilmItem from "../../FilmItem/FilmItem";

const TopFilms = () => {
  const dispatch = useDispatch();
  const { films, error, status } = useSelector((state) => state.topFilms);
  const topFilms = films.films;
  useEffect(() => {
    dispatch(fetchTopFilms());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container>
        <Slider></Slider>
        <AdvertisingBlock></AdvertisingBlock>
        <Title text="Топ фильмов"></Title>
        {status === "loading" && <h3>Идет загрузка...</h3>}
        {status === "rejected" && <h3>Загрузка не выполнена!</h3>}
        {error && <h3>Ошибка: {error}</h3>}
        <FilmsList>
          {topFilms &&
            topFilms.map((film) => (
              <FilmItem
                key={film.kinopoiskId ?? film.filmId}
                film={film}></FilmItem>
            ))}
        </FilmsList>
      </Container>
    </React.Fragment>
  );
};

export default TopFilms;
