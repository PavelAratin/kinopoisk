// import styles from "./FilmItem.module.css";

const FilmItem = ({ film }) => {
  console.log(film);
  return <li>{film.nameRu}</li>;
};

export default FilmItem;
