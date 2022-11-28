import React from "react";

const AdminPaymentTable = ({ payment, i }) => {
  const { transictionId, buyerEmail, sellerEmail, productName, price } =
    payment;
  return (
    <>
      <tr className="hover">
        <td>{i + 1}</td>
        <td>{productName}</td>
        <td>{price}</td>
        <td>{buyerEmail}</td>
        <td>{sellerEmail}</td>
        <td>
          {transictionId.slice(0, 5)}**********{transictionId.slice(22)}
        </td>
      </tr>
    </>
  );
};

export default AdminPaymentTable;
