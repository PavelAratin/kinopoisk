import { useRef, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./Form.module.css";
import { useDispatch } from "react-redux";
import { serachFilmActions } from "../../store/slices/allFilmsSlice/allFilmsSlice";
import { serachTopFilmActions } from "../../store/slices/topFilmsSlice/topFilmsSlice";
import { useLocation } from "react-router-dom";
import { serachPremierFilmActions } from "../../store/slices/premierFilmsSlice/premierFilmsSlice";
import { serachReleasasFilmActions } from "../../store/slices/releasesFilmsSlice/releasesFilmsSlice";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const location = useLocation();
  const dispatсh = useDispatch();
  const inputRef = useRef(null);
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      dispatсh(serachFilmActions(inputValue));
    }
    if (location.pathname === "/top") {
      dispatсh(serachTopFilmActions(inputValue));
    }
    if (location.pathname === "/premiers") {
      dispatсh(serachPremierFilmActions(inputValue));
    }
    if (location.pathname === "/digitalRelease") {
      dispatсh(serachReleasasFilmActions(inputValue));
    }
    inputRef.current.value = "";
  };
  return (
    <form className={`${styles.form}`} onSubmit={submitFormHandler}>
      <Input
        type="search"
        placeholder="Начните искать"
        onChange={(e) => setInputValue(e.target.value)}
        inputRef={inputRef}></Input>
      <Button type="submit" text="Найти"></Button>
    </form>
  );
};

export default Form;
