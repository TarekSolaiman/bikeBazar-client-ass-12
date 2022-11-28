import React from "react";
import { toast } from "react-toastify";

const BuyerCard = ({ buyer, refetch }) => {
  const { email, name, _id } = buyer;
  // delet buyer
  const deleteBuyer = (id) => {
    fetch(`https://bike-bazar-server.vercel.app/admin/buyers/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Success full delete", {
            autoClose: 500,
          });
          refetch();
        } else {
          toast.error(data.message, {
            autoClose: 500,
          });
        }
      });
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <th>
        <button
          onClick={() => deleteBuyer(_id)}
          className="btn btn-error btn-xs"
        >
          delete
        </button>
      </th>
    </tr>
  );
};

export default BuyerCard;
