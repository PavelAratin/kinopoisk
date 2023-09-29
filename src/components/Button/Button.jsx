import styles from "./Button.module.css";

const Button = ({ type, text, goBack, title }) => {
  return (
    <button
      onClick={goBack}
      className={`${styles.button} ${goBack ? styles.button__goback : ""}`}
      type={type}
      title={title}>
      {text}
    </button>
  );
};

export default Button;
