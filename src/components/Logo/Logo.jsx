/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <img src="./assets/logo.svg" alt="Логотип сайта" />
    </Link>
  );
};

export default Logo;
