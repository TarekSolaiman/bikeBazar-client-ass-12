import React from "react";

const BookedTable = ({ booked, i }) => {
  const { productName, price } = booked;
  return (
    <>
      <tr className="hover">
        <th>{i + 1}</th>
        <td>{productName}</td>
        <td>{price}</td>
        <td>
          <button className="btn btn-sm btn-success w-24">pay</button>
        </td>
        <td>
          <button className="btn btn-sm btn-error w-24">delete</button>
        </td>
      </tr>
    </>
  );
};

export default BookedTable;
