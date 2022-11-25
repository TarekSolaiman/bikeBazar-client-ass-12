import React from "react";

const SellerCard = ({ seller }) => {
  const { name, email, sellerVerify } = seller;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <th>
        <button className="btn btn-success btn-xs mr-3">Verify</button>
        <button className="btn btn-error btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default SellerCard;
