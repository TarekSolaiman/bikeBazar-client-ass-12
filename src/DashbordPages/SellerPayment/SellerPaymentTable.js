import React from "react";

const SellerPaymentTable = ({ payment, i }) => {
  const { transictionId, buyerEmail, productName, price } = payment;
  return (
    <>
      <tr className="hover">
        <td>{i + 1}</td>
        <td>{productName}</td>
        <td>{price}</td>
        <td>{buyerEmail}</td>
        <td>{transictionId}</td>
      </tr>
    </>
  );
};

export default SellerPaymentTable;
