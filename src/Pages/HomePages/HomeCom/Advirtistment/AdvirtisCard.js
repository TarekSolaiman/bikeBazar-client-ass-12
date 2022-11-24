import React from "react";
import bikeImg from "../../../../assets/bikeImg.jpg";
import avatar from "../../../../assets/avatarImg.png";

const AdvirtisCard = () => {
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
            <h2 className="text-sm font-semibold leading-none">
              Ertugrul Gazi
            </h2>
            <span className="inline-block text-xs leading-none dark:text-gray-400">
              ertugrul@gmail.com
            </span>
          </div>
        </div>
      </div>
      <img
        src={bikeImg}
        alt=""
        className="object-cover object-center w-full dark:bg-gray-500"
      />
      <div className="p-3">
        <div className="flex flex-wrap items-center pb-3">
          <div className="">
            <p className="text-base font-semibold">Post Time : Nov 27 2022</p>
            <p className="text-base font-semibold">Condition : Excellent</p>
            <p className="text-base font-semibold text-red-600">
              Original Price : 500000 tk
            </p>
            <p className="text-base font-semibold text-green-600">
              Recale Price : 250000 tk
            </p>
            <p className="text-base font-semibold">Mobile : 0173******</p>
            <p className="text-base font-semibold">
              Location :{" "}
              <span className="text-sm">patenga,chtittagong,banglabesh</span>
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
