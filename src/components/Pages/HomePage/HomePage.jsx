// import styles from "./HomePage.module.css";
import React, { useEffect } from "react";
import Container from "../../Layouts/Container/Container";
import Slider from "../../Slider/Slider";
import AdvertisingBlock from "../../AdvertisingBlock/AdvertisingBlock";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilms } from "../../../store/slices/filmsSlice/filmsSlice";
import FilmsList from "../../FilmsList/FilmsList";
import FilmItem from "../../FilmItem/FilmItem";
import Title from "../../Title/Title";

const HomePage = () => {
  const dispatch = useDispatch();
  const { error, films, status } = useSelector((state) => state.allFilms);
  const allFilms = films.items;
  useEffect(() => {
    dispatch(fetchAllFilms());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container>
        <Slider></Slider>
        <AdvertisingBlock></AdvertisingBlock>
        <Title text="Смотрят сейчас"></Title>
        {status === "loading" && <h3>Идет загрузка...</h3>}
        {status === "rejected" && <h3>Загрузка не выполнена!</h3>}
        {error && <h3>Ошибка: {error}</h3>}
        <FilmsList>
          {allFilms &&
            allFilms.map((film) => (
              <FilmItem key={film.kinopoiskId} film={film}></FilmItem>
            ))}
        </FilmsList>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
