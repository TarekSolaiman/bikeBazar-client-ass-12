import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../SharedPage/Loading";
import SellerCard from "./SellerCard";

const AllSeller = () => {
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "sellers",
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/admin/sellers", {
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
      <h1 className="text-3xl font-semibold">All Sellers page </h1>

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
            {sellers?.map((seller) => (
              <SellerCard
                key={seller._id}
                seller={seller}
                refetch={refetch}
              ></SellerCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
