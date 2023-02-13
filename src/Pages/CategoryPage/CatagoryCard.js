import React, { useState } from "react";
import { toast } from "react-toastify";
import avatar from "../../assets/avatarImg.png";
import BookedModal from "../../SharedPage/BookedModal";

const CatagoryCard = ({ product }) => {
  const [produtcData, setProdutcData] = useState(null);
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
    sellerVerify,
    selleRison,
    _id,
  } = product;

  // repor button function
  const handleReport = (id) => {
    fetch(`https://bike-bazar-server.vercel.app/report/${id}`, {
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

  return (
    <div>
      <div className="rounded-md shadow-md hover:shadow-xl w-full bg-[#25acfa21] text-gray-700">
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
          {sellerVerify && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-success"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
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
              <p className="text-base font-semibold">Duration of Use  : {useTime}</p>
              <p className="text-base font-semibold text-red-600">
                Original Price : {originalPrice} tk
              </p>
              <p className="text-base font-semibold text-green-600">
              Resale Price : {resalePrice} tk
              </p>
              <p className="text-base font-semibold">Mobile : {sellerMobile}</p>
              <p className="text-base font-semibold">
                Location : <span className="text-sm">{location}</span>
              </p>
              {selleRison ? (
                <p className="text-base font-semibold">
                  Sell Reason : <span className="text-sm">{selleRison}</span>
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="space-y-3 text-center my-3">
            <label
              htmlFor="bookedModal"
              onClick={() => setProdutcData(product)}
              className="w-[9rem] h-[2.8rem] rounded-full btn bg-secondary border-none text-gray-800 font-semibold text-lg hover:bg-[#fcb213] hover:text-gray-100 ease-in-out duration-500 mr-2"
            >
              Booked
            </label>
            <button
              onClick={() => handleReport(_id)}
              className="w-[9rem] h-[2.8rem] rounded-full btn bg-red-400 font-semibold text-lg hover:bg-[#fc4513] border-none text-gray-800 hover:text-gray-100 ease-in-out duration-500"
            >
              Report
              </button>
          </div>
          {produtcData && (
            <BookedModal
              produtcData={produtcData}
              setProdutcData={setProdutcData}
            ></BookedModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatagoryCard;
