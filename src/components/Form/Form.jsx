import styles from "./Form.module.css";

const Form = ({ children }) => {
  return <form className={`${styles.form}`}>{children}</form>;
};

export default Form;
