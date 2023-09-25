import Container from "../Layouts/Container/Container";
import Logo from "../Logo/Logo";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__wrapper}>
          <Logo></Logo>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
