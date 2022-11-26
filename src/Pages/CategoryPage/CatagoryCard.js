import React, { useState } from "react";
import { toast } from "react-toastify";
import avatar from "../../assets/avatarImg.png";
import BookedModal from "../../SharedPage/BookedModal";

const CatagoryCard = ({ product }) => {
  const [bookedMod, setBookedMod] = useState(true);
  const [produtcData, setProdutcData] = useState({});
  const {
    email,
    location,
    originalPrice,
    productName,
    resalePrice,
    sellerMobile,
    sellerName,
    productPhoto,
    postDate,
    condition,
    useTime,
    _id,
  } = product;

  // repor button function
  const handleReport = (id) => {
    fetch(`http://localhost:5000/report/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Report Success full", { autoClose: 500 });
        }
      })
      .catch((e) => console.log(e.message));
  };

  // Booked send in the booked modal
  const handleBookedBtn = (prod) => {
    setProdutcData(prod);
    setBookedMod(true);
  };
  return (
    <div>
      <div className="rounded-md shadow-md hover:shadow-xl w-full text-gray-500">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            <img
              src={avatar}
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leading-none">
                {sellerName}
              </h2>
              <span className="inline-block text-xs leading-none dark:text-gray-400">
                {email}
              </span>
            </div>
          </div>
        </div>
        <img
          src={productPhoto}
          alt=""
          className="object-cover object-center w-full h-52 dark:bg-gray-500"
        />
        <div className="p-3">
          <div className="flex flex-wrap items-center pb-3">
            <div className="">
              <p className="text-base font-semibold">Model : {productName}</p>
              <p className="text-base font-semibold">Post Time : {postDate}</p>
              <p className="text-base font-semibold">Condition : {condition}</p>
              <p className="text-base font-semibold">UseTime : {useTime}</p>
              <p className="text-base font-semibold text-red-600">
                Original Price : {originalPrice} tk
              </p>
              <p className="text-base font-semibold text-green-600">
                Recale Price : {resalePrice} tk
              </p>
              <p className="text-base font-semibold">Mobile : {sellerMobile}</p>
              <p className="text-base font-semibold">
                Location : <span className="text-sm">{location}</span>
              </p>
            </div>
          </div>
          <div className="space-y-3 text-center">
            <label
              htmlFor="bookedModal"
              onClick={() => handleBookedBtn(product)}
              className="btn btn-success w-24 mr-3"
            >
              Booked
            </label>
            <button
              onClick={() => handleReport(_id)}
              className="btn btn-error w-24"
            >
              Report
            </button>
          </div>
          {bookedMod && produtcData && (
            <BookedModal
              setBookedMod={setBookedMod}
              product={product}
              setProdutcData={setProdutcData}
            ></BookedModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatagoryCard;
