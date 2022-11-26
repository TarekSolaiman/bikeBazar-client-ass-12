import React from "react";
import { toast } from "react-toastify";

const BookedTable = ({ booked, i, refetch }) => {
  const { productName, price, _id } = booked;

  // handleDelet for booking delete
  const bookedDelete = (id) => {
    fetch(`http://localhost:5000/booked/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Success full Booked", {
            autoClose: 500,
          });
          refetch();
        } else {
          toast.error(data.message, {
            autoClose: 500,
          });
        }
      })
      .catch((e) => console.log(e.message));
  };
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
          <button
            onClick={() => bookedDelete(_id)}
            className="btn btn-sm btn-error w-24"
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default BookedTable;
