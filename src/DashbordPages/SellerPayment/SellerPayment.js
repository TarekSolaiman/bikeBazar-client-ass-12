import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Loading from "../../SharedPage/Loading";
import SellerPaymentTable from "./SellerPaymentTable";

const SellerPayment = () => {
  useTitle("Dashbord-SellerPayment");
  const { user } = useContext(AuthContext);

  const { data: myPayments = [], isLoading } = useQuery({
    queryKey: "myPayments",
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/payment/seller/${user.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold">My All Payment</h1>
      <div className="overflow-x-auto my-20">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No :</th>
              <th>product Name</th>
              <th>Amount</th>
              <th>Buyer email</th>
              <th>transictionId</th>
            </tr>
          </thead>
          <tbody>
            {myPayments?.map((payment, i) => (
              <SellerPaymentTable key={payment._id} payment={payment} i={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SellerPayment;
