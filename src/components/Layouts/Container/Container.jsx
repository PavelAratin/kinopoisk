import styles from "./Container.module.css";

const Container = ({ children, ContainerClass }) => {
  return (
    <div className={`${styles.container} ${ContainerClass}`}>{children}</div>
  );
};

export default Container;
