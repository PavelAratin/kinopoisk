// import styles from "./HomePage.module.css";
import React from "react";
import Container from "../../Layouts/Container/Container";
import Slider from "../../Slider/Slider";
import AdvertisingBlock from "../../AdvertisingBlock/AdvertisingBlock";

const HomePage = () => {
  return (
    <React.Fragment>
      <Container>
        <Slider></Slider>
        <AdvertisingBlock></AdvertisingBlock>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
