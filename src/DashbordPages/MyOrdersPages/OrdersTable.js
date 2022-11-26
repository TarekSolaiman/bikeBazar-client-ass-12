import React from "react";

const OrdersTable = ({ order }) => {
  return (
    <tr>
      <td>
        <div>
          <div className="font-bold">Model : {order.productName}</div>
          <div className="text-sm opacity-50">Price : {order.price}</div>
        </div>
      </td>
      <td>{order.buyerName}</td>
      <td>{order.buyerEmail}</td>
      <td>{order.buyerMobile}</td>
    </tr>
  );
};

export default OrdersTable;
