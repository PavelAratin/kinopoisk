/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../Button/Button";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Container from "../Layouts/Container/Container";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container ContainerClass={styles.header__container}>
        <Logo></Logo>
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
