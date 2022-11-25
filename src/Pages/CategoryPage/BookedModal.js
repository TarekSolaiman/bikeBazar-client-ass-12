import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const BookedModal = ({ setBookedMod, product }) => {
  const { user } = useContext(AuthContext);
  const { email, productName, resalePrice, _id } = product;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleBooked = (data) => {
    const bookingData = { ...data, productId: _id, sellerEmail: email };
    fetch("http://localhost:5000/booked", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(bookingData);
        setBookedMod(false);
        toast.success("Success full Booked", {
          autoClose: 500,
        });
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <>
      <input type="checkbox" id="bookedModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <form
            onSubmit={handleSubmit(handleBooked)}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="productName" className="block text-gray-400">
                product name
              </label>
              <input
                {...register("productName")}
                type="text"
                id="productName"
                value={productName}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-400">
                price
              </label>
              <input
                {...register("price")}
                type="text"
                id="price"
                value={resalePrice}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="buyerName" className="block text-gray-400">
                your name
              </label>
              <input
                {...register("buyerName")}
                type="text"
                id="buyerName"
                value={user?.displayName}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="buyerEmail" className="block text-gray-400">
                your email
              </label>
              <input
                {...register("buyerEmail")}
                type="text"
                id="buyerEmail"
                value={user?.email}
                className="input input-bordered w-full"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="buyerMobile" className="block text-gray-400">
                your mobile number
              </label>
              <input
                {...register("buyerMobile", {
                  required: "Mobile Number is required",
                })}
                type="phone"
                id="buyerMobile"
                placeholder="your mobile number"
                className="input input-bordered w-full"
              />
              {errors.buyerMobile && (
                <p className="text-sm text-red-500">
                  {errors.buyerMobile?.message}
                </p>
              )}
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="meeting" className="block text-gray-400">
                meeting location
              </label>
              <input
                {...register("meeting", {
                  required: "Meeting location is required",
                })}
                type="location"
                id="meeting"
                placeholder="meeting location"
                className="input input-bordered w-full"
              />
              {errors.meeting && (
                <p className="text-sm text-red-500">
                  {errors.meeting?.message}
                </p>
              )}
            </div>

            <div className="modal-action flex justify-center">
              <button className="btn btn-success w-24 mr-3">Booked</button>
              <label
                htmlFor="bookedModal"
                onClick={() => setBookedMod(false)}
                className="btn btn-error w-24"
              >
                cansel
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookedModal;
