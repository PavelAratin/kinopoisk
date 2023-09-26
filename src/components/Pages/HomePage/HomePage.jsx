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
  const allFilms = useSelector((state) => state.allFilms.films.items);
  useEffect(() => {
    dispatch(fetchAllFilms());
  }, [dispatch]);
  return (
    <React.Fragment>
      <Container>
        <Slider></Slider>
        <AdvertisingBlock></AdvertisingBlock>
        <Title text="Смотрят сейчас"></Title>
        <FilmsList>
          {allFilms &&
            allFilms.map((film, index) => (
              <FilmItem key={index} film={film}></FilmItem>
            ))}
        </FilmsList>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
