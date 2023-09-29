import styles from "./Input.module.css";

const Input = ({ type, placeholder, onChange, inputRef }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      title="Заполните это поле"
      ref={inputRef}
      onChange={onChange}></input>
  );
};

export default Input;
