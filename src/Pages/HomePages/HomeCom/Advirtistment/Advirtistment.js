import React from "react";
import AdvirtisCard from "./AdvirtisCard";

const Advirtistment = () => {
  const product = [1, 2, 3, 4, 5, 6];
  return (
    <div className="my-40">
      <h1 className="text-3xl text-center font-bold mb-10">
        Ouer Best Products For Advirtistment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {product.map((prod) => (
          <AdvirtisCard />
        ))}
      </div>
      <div className=" text-center my-10">
        <button className="btn btn-primary">See More Advirtis</button>
      </div>
    </div>
  );
};

export default Advirtistment;
