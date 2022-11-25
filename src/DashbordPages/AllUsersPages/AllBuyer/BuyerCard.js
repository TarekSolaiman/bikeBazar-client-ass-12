import React from "react";

const BuyerCard = ({ buyer }) => {
  const { email, name } = buyer;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <th>
        <button className="btn btn-error btn-xs">delete</button>
      </th>
    </tr>
  );
};

export default BuyerCard;
