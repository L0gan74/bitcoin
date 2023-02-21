import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const Lauout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Lauout;
