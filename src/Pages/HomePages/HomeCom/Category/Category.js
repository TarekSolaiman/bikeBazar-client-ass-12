import React from "react";
import sports from "../../../../assets/sports.jpg";
import electric from "../../../../assets/electric.jpg";
import scooty from "../../../../assets/scooty.jpg";

const Category = () => {
  return (
    <div className="mb-40">
      <h1 className="text-3xl text-center font-bold mb-10">
        Ouer Product Category
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <button
          className="hero hover:shadow-2xl w-full bg-cover h-40 bg-blue-500 hover:bg-blue-600 rounded-lg text-5xl font-bold text-white"
          style={{
            backgroundImage: `url(${sports})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          <p>Sports</p>
        </button>
        <button
          className="hero hover:shadow-2xl w-full bg-cover h-40 bg-blue-500 hover:bg-blue-600 rounded-lg text-5xl font-bold text-white"
          style={{
            backgroundImage: `url(${electric})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          <p>Electric</p>
        </button>
        <button
          className="hero hover:shadow-2xl w-full bg-cover h-40 bg-blue-500 hover:bg-blue-600 rounded-lg text-5xl font-bold text-white"
          style={{
            backgroundImage: `url(${scooty})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
          <p>Scooty</p>
        </button>
      </div>
    </div>
  );
};

export default Category;
