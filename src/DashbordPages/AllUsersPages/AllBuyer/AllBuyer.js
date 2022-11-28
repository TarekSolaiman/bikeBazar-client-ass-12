import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../../SharedPage/Loading";
import BuyerCard from "./BuyerCard";

const AllBuyer = () => {
  useTitle("AllBuyer");
  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "buyers",
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/admin/buyers", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold">All Buyers page </h1>

      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>EmailID</th>
              <th>User Delete</th>
            </tr>
          </thead>
          <tbody>
            {buyers?.map((buyer) => (
              <BuyerCard
                key={buyer._id}
                buyer={buyer}
                refetch={refetch}
              ></BuyerCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
