import React from "react";
import About from "./HomeCom/About";
import Advirtistment from "./HomeCom/Advirtistment/Advirtistment";
import Bennar from "./HomeCom/Bennar";
import Category from "./HomeCom/Category/Category";
import CarouselComponent from "./HomeCom/Reviow/Carousel";
// import DemoCarousel from "./HomeCom/Reviow/Carousel";
import Reviow from "./HomeCom/Reviow/Reviow";

const Home = () => {
  return (
    <div className="container mx-auto">
      <CarouselComponent/>
      <Advirtistment />
      <Category />
      <Reviow />
      <About />
    </div>
  );
};

export default Home;
