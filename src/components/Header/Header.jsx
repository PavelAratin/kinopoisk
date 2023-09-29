/* eslint-disable jsx-a11y/anchor-is-valid */
import Form from "../Form/Form";
import Container from "../Layouts/Container/Container";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container ContainerClass={styles.header__container}>
        <Logo></Logo>
        <Form></Form>
        <Navigation></Navigation>
      </Container>
    </header>
  );
};

export default Header;
