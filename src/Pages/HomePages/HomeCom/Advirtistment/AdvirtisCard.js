import React from "react";
import avatar from "../../../../assets/avatarImg.png";

const AdvirtisCard = ({ advirtict }) => {
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
    category,
    useTime,
  } = advirtict;
  return (
    <div className="rounded-md shadow-md hover:shadow-xl w-full text-gray-500">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src={avatar}
            alt=""
            className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
          />
          <div className="-space-y-1">
            <h2 className="text-sm font-semibold leading-none">{sellerName}</h2>
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
            <p className="text-base font-semibold">Condition : {condition}</p>
            <p className="text-base font-semibold">Post Time : {postDate}</p>
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
        <div className="space-y-3">
          <button className="btn btn-primary w-full">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdvirtisCard;
