import React from "react";
import MainButton from "../../../../SharedPage/MainButton";
import ReviowCard from "./ReviowCard";

const Reviow = () => {
  const reviow = [1, 2, 3];
  return (
    <div className="mb-40">
      <h1 className="text-3xl text-center font-bold mb-10">USERS REVIEW</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviow.map((rev, i) => (
          <ReviowCard key={i}></ReviowCard>
        ))}
      </div>
      <div className=" text-center my-10">
        <MainButton btnName={'See More Reviow'}/>
      </div>
    </div>
  );
};

export default Reviow;
