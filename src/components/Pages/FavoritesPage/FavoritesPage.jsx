import { useSelector } from "react-redux";
import Container from "../../Layouts/Container/Container";
import Title from "../../Title/Title";
import FilmsList from "../../FilmsList/FilmsList";
import FilmItem from "../../FilmItem/FilmItem";
import Slider from "../../Slider/Slider";

import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favoritesList = useSelector((state) => state.favoriteFilms);
  return (
    <section className="favorites">
      <Container>
        <Slider></Slider>
        <Title text="Список понравившихся фильмов"></Title>
        {favoritesList.length ? (
          <FilmsList>
            {favoritesList.map((film) => (
              <FilmItem
                key={film.kinopoiskId ?? film.imdbId ?? film.filmId}
                film={film}
                isFavorites={true}></FilmItem>
            ))}
          </FilmsList>
        ) : (
          <h3 className={styles.favorite__title}>
            Добавьте фильмы в избранное!
          </h3>
        )}
      </Container>
    </section>
  );
};

export default FavoritesPage;
