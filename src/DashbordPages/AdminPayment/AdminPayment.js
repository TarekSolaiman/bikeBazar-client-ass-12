import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../hooks/useTitle";
import Loading from "../../SharedPage/Loading";
import AdminPaymentTable from "./AdminPaymentTable";

const AdminPayment = () => {
  useTitle("AllPaymnet");
  const { data: payments = [], isLoading } = useQuery({
    queryKey: "payments",
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/payment/admin`, {
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
      <h1 className="text-3xl font-semibold">All Payment</h1>
      <div className="overflow-x-auto my-20">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No :</th>
              <th>product Name</th>
              <th>Amount</th>
              <th>Buyer email</th>
              <th>Seller email</th>
              <th>transictionId</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, i) => (
              <AdminPaymentTable key={payment._id} payment={payment} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPayment;
