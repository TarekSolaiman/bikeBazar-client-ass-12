import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const BookedTable = ({ booked, i, refetch }) => {
  const { productName, price, _id, paid, productPhoto } = booked;

  // handleDelet for booking delete
  const bookedDelete = (id) => {
    fetch(`https://bike-bazar-server.vercel.app/booked/${id}`, {
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
        <th>
          {productPhoto ? (
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={productPhoto} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          ) : (
            "no"
          )}
        </th>
        <td>{productName}</td>
        <td>{price}</td>
        <td>
          {paid ? (
            <button className="btn btn-sm btn-info w-24">Baid</button>
          ) : (
            <Link
              to={`/dashbord/payment/${_id}`}
              className="btn btn-sm btn-success w-24"
            >
              pay
            </Link>
          )}
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
