import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Logo from "../../Logo/Logo";

const Layout = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Outlet></Outlet>
      <Footer>
        <Logo></Logo>
      </Footer>
    </React.Fragment>
  );
};

export default Layout;
