import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../SharedPage/Footer";
import Navbar from "../SharedPage/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Main;
