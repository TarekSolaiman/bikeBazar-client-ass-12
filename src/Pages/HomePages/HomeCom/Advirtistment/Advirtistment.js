import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvirtisCard from "./AdvirtisCard";

const Advirtistment = () => {
  const { data: advirticts = [], isLoading } = useQuery({
    queryKey: "advirtict",
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/advirtict`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <></>;
  }
  return (
    <div className="my-40">
      <h1 className="text-3xl text-center font-bold mb-10">
        Ouer Best Products For Advirtistment
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {advirticts.map((advirtict) => (
          <AdvirtisCard key={advirtict._id} advirtict={advirtict} />
        ))}
      </div>
      <div className=" text-center my-10">
        <button className="btn btn-primary">See More Advirtis</button>
      </div>
    </div>
  );
};

export default Advirtistment;
