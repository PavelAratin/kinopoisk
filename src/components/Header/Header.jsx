/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Container from "../Layout/Container";
import Navigation from "../Navigation/Navigation";

import LocalStyles from "./Header.module.css";

const Header = () => {
  return (
    <header className={LocalStyles.header}>
      <Container>
        <a className="logo" href="#">
          <img src="./assets/logo.svg" alt="Логотип сайта" />
        </a>
        <Form>
          <Input type="search" placeholder="Начните искать"></Input>
          <Button type="submit" text="Найти"></Button>
        </Form>
        <Navigation></Navigation>
      </Container>
    </header>
  );
};

export default Header;
