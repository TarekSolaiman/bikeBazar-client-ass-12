import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Loading from "../../SharedPage/Loading";
import OrdersTable from "./OrdersTable";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: myOrders = [], isLoading } = useQuery({
    queryKey: "myOrders",
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/myOrders/${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold">My all Orders</h1>
      <div className="overflow-x-auto w-full my-20">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((order) => (
              <OrdersTable key={order._id} order={order}></OrdersTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
