import React from "react";
import bikeImg from "../../../assets/bikeImg.jpg";

const Bennar = () => {
  return (
    <div
      className="hero min-w-screen min-h-[500px] bg-cover bg-center rounded-xl lg:my-5"
      style={{
        backgroundImage: `url(${bikeImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Bennar;
