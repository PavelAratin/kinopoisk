import LocalStyles from "./Input.module.css";

const Input = ({ type, placeholder }) => {
  return (
    <input
      className={LocalStyles.input}
      type={type}
      placeholder={placeholder}
      title="Заполните это поле"></input>
  );
};

export default Input;
