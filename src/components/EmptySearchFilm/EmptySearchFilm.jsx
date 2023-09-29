import styles from "./EmptySearchFilm.module.css";

const EmptySearchFilm = () => {
  return (
    <h2 className={styles["empty-serach-title"]}>
      По вашему запросу ничего не найдено!
    </h2>
  );
};

export default EmptySearchFilm;
