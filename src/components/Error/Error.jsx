import styles from "./Error.module.css";

const Error = ({ error, status }) => {
  return (
    <div className={styles.error}>
      {status === "loading" ? (
        <h3 className={styles["error__title"]}>Идет загрузка...</h3>
      ) : (
        ""
      )}
      {status === "rejected" ? (
        <h3 className={styles["error__title"]}>Загрузка не выполнена</h3>
      ) : (
        ""
      )}
      {error && <h3 className={styles["error__title"]}>Ошибка: {error}</h3>}
    </div>
  );
};

export default Error;
