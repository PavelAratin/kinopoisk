import React from 'react';

import Header from './components/Header/Header';
import Container from './components/Layout/Container';
import Slider from './components/Slider/Slider';

import './App.css';
import AdvertisingBlock from './components/AdvertisingBlock/AdvertisingBlock';
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Container>
        <Slider></Slider>
        <AdvertisingBlock></AdvertisingBlock>
      </Container>
    </React.Fragment>
  );
}

export default App;
