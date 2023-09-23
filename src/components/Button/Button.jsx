import LocalStyles from "./Button.module.css";

const Button = ({ type, text }) => {
  return (
    <button className={LocalStyles.button} type={type}>
      {text}
    </button>
  );
};

export default Button;
