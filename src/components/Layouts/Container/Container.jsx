import styles from "./Container.module.css";

const Container = ({ children }) => {
  return (
    <div className={`${styles.container} ${styles.container__header}`}>
      {children}
    </div>
  );
};

export default Container;
