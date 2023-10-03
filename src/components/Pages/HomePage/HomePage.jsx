// import styles from "./HomePage.module.css";
import React, { useEffect } from "react";
import Container from "../../Layouts/Container/Container";
import Slider from "../../Slider/Slider";
import AdvertisingBlock from "../../AdvertisingBlock/AdvertisingBlock";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilms } from "../../../store/slices/allFilmsSlice/allFilmsSlice";
import FilmsList from "../../FilmsList/FilmsList";
import FilmItem from "../../FilmItem/FilmItem";
import Title from "../../Title/Title";
import EmptySearchFilm from "../../EmptySearchFilm/EmptySearchFilm";
import Error from "../../Error/Error";

const HomePage = () => {
  const dispatch = useDispatch();
  const { error, films, status } = useSelector((state) => state.allFilms);
  const allFilms = films.items ?? films;
  useEffect(() => {
    dispatch(fetchAllFilms());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container>
        <Slider></Slider>
        <AdvertisingBlock></AdvertisingBlock>
        <Title text="Смотрят сейчас"></Title>
        <Error error={error} status={status}></Error>
        {allFilms.length ? (
          <FilmsList>
            {allFilms.map((film) => (
              <FilmItem key={film.kinopoiskId} film={film}></FilmItem>
            ))}
          </FilmsList>
        ) : (
          <EmptySearchFilm></EmptySearchFilm>
        )}
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
