import React from "react";

const MyPaymentTable = ({ payment, i }) => {
  const { transictionId, sellerEmail, productName, price } = payment;
  return (
    <>
      <tr className="hover">
        <td>{i + 1}</td>
        <td>{productName}</td>
        <td>{price}</td>
        <td>{sellerEmail}</td>
        <td>{transictionId}</td>
      </tr>
    </>
  );
};

export default MyPaymentTable;
