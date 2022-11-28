import React from "react";
import { toast } from "react-toastify";

const SellerCard = ({ seller, refetch }) => {
  const { name, email, sellerVerify, _id } = seller;
  const sellerDelete = (id) => {
    fetch(`https://bike-bazar-server.vercel.app/admin/sellers/${id}`, {
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
  const verifyedBtn = (em) => {
    fetch(`https://bike-bazar-server.vercel.app/admin/sellers/${em}`, {
      method: "PATCH",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Success full Verify", {
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
        {sellerVerify ? (
          <button className="btn btn-info btn-xs mr-3 w-24">Verifyed</button>
        ) : (
          <button
            onClick={() => verifyedBtn(email)}
            className="btn btn-success btn-xs mr-3 w-24"
          >
            Verify
          </button>
        )}
        <button
          onClick={() => sellerDelete(_id)}
          className="btn btn-error btn-xs w-24"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default SellerCard;
