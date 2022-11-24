import React from "react";
import About from "./HomeCom/About";
import Advirtistment from "./HomeCom/Advirtistment/Advirtistment";
import Bennar from "./HomeCom/Bennar";
import Category from "./HomeCom/Category/Category";
import Reviow from "./HomeCom/Reviow/Reviow";

const Home = () => {
  return (
    <div className=" container mx-auto">
      <Bennar />
      <Advirtistment />
      <Category />
      <Reviow />
      <About />
    </div>
  );
};

export default Home;
