import React from "react";

const ProductTable = ({ product }) => {
  const {
    location,
    originalPrice,
    productName,
    resalePrice,
    productPhoto,
    available,
  } = product;
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
        <button className="btn btn-success btn-xs mr-3">advirtict</button>
        <button className="btn btn-error btn-xs">delete</button>
      </th>
    </tr>
  );
};

export default ProductTable;
