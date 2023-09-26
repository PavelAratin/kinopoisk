import styles from "./Container.module.css";

const Container = ({ children, headerContainerClass }) => {
  return (
    <div className={`${styles.container} ${headerContainerClass}`}>
      {children}
    </div>
  );
};

export default Container;
