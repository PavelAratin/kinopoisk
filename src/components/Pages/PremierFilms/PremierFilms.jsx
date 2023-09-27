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

const PremierFilms = () => {
  const dispatch = useDispatch();
  const { error, films, status } = useSelector((state) => state.premierFilms);
  const premierFilms = films.items;
  useEffect(() => {
    dispatch(fetchPremierFilms());
  }, [dispatch, error]);
  return (
    <React.Fragment>
      <Container>
        <Slider></Slider>
        <AdvertisingBlock></AdvertisingBlock>
        <Title text="Премьеры фильмов"></Title>
        {status === "loading" && <h3>Идет загрузка...</h3>}
        {status === "rejected" && <h3>Загрузка не выполнена!</h3>}
        {error && <h3>Ошибка: {error}</h3>}
        <FilmsList>
          {premierFilms &&
            premierFilms.map((film) => (
              <FilmItem
                key={film.kinopoiskId ?? film.filmId}
                film={film}></FilmItem>
            ))}
        </FilmsList>
      </Container>
    </React.Fragment>
  );
};

export default PremierFilms;
