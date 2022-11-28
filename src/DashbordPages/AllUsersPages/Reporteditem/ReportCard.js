import React from "react";
import { toast } from "react-toastify";

const ReportCard = ({ report, refetch }) => {
  const { productName, email, resalePrice, _id } = report;
  const deleteItem = (id) => {
    fetch(`https://bike-bazar-server.vercel.app/admin/report/${id}`, {
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
      <td>{productName}</td>
      <td>{email}</td>
      <td>{resalePrice}</td>
      <th>
        <button
          onClick={() => deleteItem(_id)}
          className="btn btn-error btn-xs"
        >
          delete
        </button>
      </th>
    </tr>
  );
};

export default ReportCard;
