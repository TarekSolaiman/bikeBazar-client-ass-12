import React, { useContext } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const AddProductModal = ({ setModal, refetch }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const imghostKey = process.env.REACT_APP_imgbb_key;
  const handleAddProduct = (data) => {
    const {
      email,
      location,
      originalPrice,
      productName,
      resalePrice,
      sellerMobile,
      sellerName,
      condition,
      category,
      useTime,
    } = data;
    const date = new Date();
    const postDate = format(date, "PP");
    // uploade image in imgbb

    const formData = new FormData();
    formData.append("image", data.productPhoto[0]);
    const url = `https://api.imgbb.com/1/upload?key=${imghostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        if (imgdata.success) {
          const productData = {
            email,
            location,
            originalPrice,
            productName,
            resalePrice,
            sellerMobile,
            sellerName,
            productPhoto: imgdata.data.url,
            postDate,
            condition,
            category,
            useTime,
            available: "available",
            advirtict: false,
            sellerVerify: false,
          };
          console.log(productData);
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(productData),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("success fully post", { autoClose: 500 });
              console.log(data);
              refetch(true);
            });
          reset();
          setModal(false);
        }
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <div className="modal" id="my-modal-2">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Fillup all details and submit your product
        </h3>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="productPhoto" className="block text-gray-400">
              productPhoto
            </label>
            <input
              {...register("productPhoto", {
                required: "productPhoto Address is required",
              })}
              type="file"
              id="productPhoto"
              placeholder="productPhoto"
              className="input input-bordered w-full"
            />
            {errors.productPhoto && (
              <p className="text-sm text-red-500">
                {errors.productPhoto?.message}
              </p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-400">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              readOnly
              value={user?.email}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="condition" className="block text-gray-400">
              Select user condition
            </label>
            <select
              id="condition"
              {...register("condition", {
                required: "Selact user condition must",
              })}
              className="select select-bordered w-full"
              defaultValue="Select user condition"
            >
              <option>Good</option>
              <option>Excellent</option>
              <option>Fire</option>
            </select>
            {errors.condition && (
              <p className="text-sm text-red-500">
                {errors.condition?.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="category" className="block text-gray-400">
              Select user category
            </label>
            <select
              id="category"
              {...register("category", {
                required: "Selact user category must",
              })}
              className="select select-bordered w-full"
              defaultValue="Select user category"
            >
              <option>Sports</option>
              <option>Scooty</option>
              <option>Electric</option>
            </select>
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category?.message}</p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="useTime" className="block text-gray-400">
              How much year use this product
            </label>
            <input
              {...register("useTime", {
                required: "useTime Address is required",
              })}
              type="useTime"
              id="useTime"
              placeholder="useTime"
              className="input input-bordered w-full"
            />
            {errors.useTime && (
              <p className="text-sm text-red-500">{errors.useTime?.message}</p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block text-gray-400">
              Location
            </label>
            <input
              {...register("location", {
                required: "Location Address is required",
              })}
              type="location"
              id="location"
              placeholder="Location"
              className="input input-bordered w-full"
            />
            {errors.location && (
              <p className="text-sm text-red-500">{errors.location?.message}</p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="productName" className="block text-gray-400">
              ProductName
            </label>
            <input
              {...register("productName", {
                required: "productName Address is required",
              })}
              type="productName"
              id="productName"
              placeholder="productName"
              className="input input-bordered w-full"
            />
            {errors.productName && (
              <p className="text-sm text-red-500">
                {errors.productName?.message}
              </p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="originalPrice" className="block text-gray-400">
              OriginalPrice
            </label>
            <input
              {...register("originalPrice", {
                required: "originalPrice Address is required",
              })}
              type="originalPrice"
              id="originalPrice"
              placeholder="originalPrice"
              className="input input-bordered w-full"
            />
            {errors.originalPrice && (
              <p className="text-sm text-red-500">
                {errors.originalPrice?.message}
              </p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="resalePrice" className="block text-gray-400">
              ResalePrice
            </label>
            <input
              {...register("resalePrice", {
                required: "resalePrice Address is required",
              })}
              type="resalePrice"
              id="resalePrice"
              placeholder="resalePrice"
              className="input input-bordered w-full"
            />
            {errors.resalePrice && (
              <p className="text-sm text-red-500">
                {errors.resalePrice?.message}
              </p>
            )}
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="sellerName" className="block text-gray-400">
              SellerName
            </label>
            <input
              {...register("sellerName")}
              type="sellerName"
              id="sellerName"
              readOnly
              value={user?.displayName}
              className="input input-bordered w-full"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="sellerMobile" className="block text-gray-400">
              SellerMobile
            </label>
            <input
              {...register("sellerMobile", {
                required: "sellerMobile Address is required",
              })}
              type="phoneNumber"
              id="sellerMobile"
              placeholder="sellerMobile"
              className="input input-bordered w-full"
            />
            {errors.sellerMobile && (
              <p className="text-sm text-red-500">
                {errors.sellerMobile?.message}
              </p>
            )}
          </div>

          <div className="modal-action justify-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              onClick={() => {
                setModal(false);
              }}
              className="btn btn-error"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
