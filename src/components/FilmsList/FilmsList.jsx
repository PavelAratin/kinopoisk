import styles from "./FilmsList.module.css";

const FilmsList = ({ children }) => {
  return <ul className={styles["film-list"]}>{children}</ul>;
};

export default FilmsList;
