import React from "react";
import MainButton from "../../../SharedPage/MainButton";


const Bennar = ({bikeImg}) => {
  return (
    <div
      className="hero min-w-screen min-h-[500px] bg-cover bg-center rounded-xl"
      style={{
        backgroundImage: `url(${bikeImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Sell And Buye</h1>
          <p className="mb-5">
            This is Best trusted bazar for bike sell and buy. you can see our
            reviows . and buyer reaction
          </p>
          <MainButton btnName={'Get Started'}/>
        </div>
      </div>
    </div>
  );
};

export default Bennar;
