import React from "react";
import { toast } from "react-toastify";

const ProductTable = ({ product, refetch }) => {
  const {
    location,
    originalPrice,
    productName,
    resalePrice,
    productPhoto,
    available,
    advirtict,
    _id,
  } = product;

  const deleteProduct = (id) => {
    fetch(`https://bike-bazar-server.vercel.app/myProducts/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch(true);
          toast.success("success fully delete", {
            autoClose: 500,
          });
        }
      })
      .catch((e) => console.log(e.message));
  };

  // advirtict section true
  const advirtictBtn = (id) => {
    fetch(`https://bike-bazar-server.vercel.app/advirtict/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch(true);
          toast.success("success fully delete", {
            autoClose: 500,
          });
        }
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={productPhoto} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{productName}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>
        Resale : {resalePrice}
        <br />
        <span className="badge badge-ghost badge-sm">
          Original : {originalPrice}
        </span>
      </td>
      <td>{available}</td>
      <th>
        {advirtict ? (
          <button
            onClick={() => advirtictBtn(_id)}
            className="btn btn-success btn-xs mr-3"
            disabled
          >
            advirtict
          </button>
        ) : (
          <button
            onClick={() => advirtictBtn(_id)}
            className="btn btn-success btn-xs mr-3"
          >
            advirtict
          </button>
        )}
        <button
          onClick={() => deleteProduct(_id)}
          className="btn btn-error btn-xs"
        >
          delete
        </button>
      </th>
    </tr>
  );
};

export default ProductTable;
